"use client"

import { useState, useEffect, DragEvent } from "react";
import { Search, Filter, MoreVertical, Plus, Truck, CheckCircle, Clock, AlertCircle, X, ChevronRight, Calculator, FileText, Printer, MoreHorizontal, ArrowRight, Settings, LayoutGrid, List as ListIcon, ChevronDown, ChevronUp, Calendar, AlertTriangle, Smartphone, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// --- Types ---
interface WorkflowColumn {
    id: string;
    title: string;
    color: string;
    subtitle?: string;
}

interface Order {
    id: string;
    customer: string;
    phone: string;
    email?: string;
    total: number;
    status: string; // Dynamic status
    deadline: string;
    source: string;
    invoiceNo?: string;
    priority: string;
    fileStatus: string;
    specs: {
        productName: string;
        size: string;
        material: string;
        quantity: number;
        department: string;
        printSide?: string;
        finishing?: string;
    };
    date?: string;
    history?: {
        date: string;
        action: string;
        details?: string;
        user?: string; // Optional: "Admin" or "Designer"
    }[];
}

const DEFAULT_COLUMNS: WorkflowColumn[] = [
    { id: "col-1", title: "New Order", color: "bg-gray-500", subtitle: "Web & Manual Orders" },
    { id: "col-2", title: "Artwork Checking", color: "bg-red-400", subtitle: "DPI / Bleed Check" },
    { id: "col-3", title: "Designing", color: "bg-pink-400", subtitle: "Design Proofing" },
    { id: "col-4", title: "Ready to Print", color: "bg-blue-500", subtitle: "Handover Zone" },
    { id: "col-5", title: "Production", color: "bg-indigo-500", subtitle: "Printing & RIP" },
    { id: "col-6", title: "Finishing", color: "bg-purple-500", subtitle: "Cutting, Lamination" },
    { id: "col-7", title: "Completed / Ready", color: "bg-green-500", subtitle: "QC Passed, Cleanup" },
];

export default function AdminOrdersPage() {
    const router = useRouter();
    const [orders, setOrders] = useState<Order[]>([]);
    const [columns, setColumns] = useState<WorkflowColumn[]>(DEFAULT_COLUMNS);
    const [isLoaded, setIsLoaded] = useState(false);
    const [highlightedId, setHighlightedId] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null); // For Modal
    const [viewMode, setViewMode] = useState<'board' | 'list'>('board');
    const [dateRange, setDateRange] = useState({ from: '', to: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [collapsedIds, setCollapsedIds] = useState<Set<string>>(new Set());

    const toggleCollapse = (id: string) => {
        setCollapsedIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    // Load Data & Migrate to V2
    useEffect(() => {
        // Load Orders
        // Load Orders from API
        const fetchOrders = async () => {
            try {
                const res = await fetch('/api/orders');
                if (res.ok) {
                    const data = await res.json();
                    setOrders(data);
                }
            } catch (e) { console.error("Failed to fetch orders", e); }
        };
        fetchOrders();

        // Load Workflow (Force V2 by using new key, fall back to DEFAULT V2)
        const savedWorkflow = localStorage.getItem("web2print_workflow_v2");
        if (savedWorkflow) {
            try { setColumns(JSON.parse(savedWorkflow)); } catch (e) { console.error(e); }
        } else {
            // If no V2 workflow, use the new defaults implicitly (state initial value)
            localStorage.setItem("web2print_workflow_v2", JSON.stringify(DEFAULT_COLUMNS));
        }

        const savedCollapsed = localStorage.getItem("web2print_collapsed_cards");
        if (savedCollapsed) try { setCollapsedIds(new Set(JSON.parse(savedCollapsed))); } catch (e) { console.error(e); }

        setIsLoaded(true);
    }, []);

    // Persist Data (V2)
    useEffect(() => {
        if (isLoaded) {
            // localStorage.setItem("web2print_orders", JSON.stringify(orders)); // Disabled for API
            localStorage.setItem("web2print_workflow_v2", JSON.stringify(columns)); // Use V2 Key
            localStorage.setItem("web2print_collapsed_cards", JSON.stringify(Array.from(collapsedIds)));
        }
    }, [columns, collapsedIds, isLoaded]);

    const updateStatus = (id: string, newStatus: string) => {
        // Optimistic Update
        setOrders(prev => prev.map(o => {
            if (o.id === id) return { ...o, status: newStatus };
            return o;
        }));

        // API Update
        fetch('/api/orders', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status: newStatus })
        }).catch(err => console.error("Failed to update status", err));
    };

    const addColumn = () => {
        const name = prompt("Enter new stage name:");
        if (name) setColumns([...columns, { id: `col-${Date.now()}`, title: name, color: "bg-gray-400", subtitle: "Custom Stage" }]);
    };

    // --- Drag and Drop ---
    const onDragStart = (e: DragEvent, id: string) => e.dataTransfer.setData("orderId", id);
    const onDragOver = (e: DragEvent) => e.preventDefault();
    const onDrop = (e: DragEvent, newStatus: string) => {
        const id = e.dataTransfer.getData("orderId");
        if (id) {
            // Bulk Move Logic
            if (selectedIds.has(id)) {
                selectedIds.forEach(selectedId => updateStatus(selectedId, newStatus));
                setSelectedIds(new Set()); // Clear selection after move
            } else {
                // Single Item Move
                updateStatus(id, newStatus);
            }
        }
    };

    const handleHighlight = (id: string) => {
        setHighlightedId(id);
        // Only scroll in board view, or implement table scrolling later
        if (viewMode === 'board') {
            document.getElementById(`card-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        setTimeout(() => setHighlightedId(null), 3000);
    };

    if (!isLoaded) return <div className="p-8">Loading...</div>;

    // Filter Orders by Date Range & Search
    const filteredOrders = orders.filter(o => {
        // Date Filter
        if (dateRange.from && new Date(o.deadline) < new Date(dateRange.from)) return false;
        if (dateRange.to && new Date(o.deadline) > new Date(dateRange.to)) return false;

        // Search Query
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            const searchString = `
                ${o.id} 
                ${o.customer} 
                ${o.phone} 
                ${o.specs?.productName || ''} 
                ${o.invoiceNo || ''}
            `.toLowerCase();
            if (!searchString.includes(q)) return false;
        }

        return true;
    });

    const overdueOrders = filteredOrders.filter(o => new Date(o.deadline) < new Date() && o.status !== 'Completed');
    const issueOrders = filteredOrders.filter(o => o.fileStatus === 'issue');
    const urgentOrders = filteredOrders.filter(o => o.priority === 'Urgent' && o.status !== 'Completed');

    // Bulk Actions
    const handleSelectAll = (checked: boolean) => {
        if (checked) setSelectedIds(new Set(filteredOrders.map(o => o.id)));
        else setSelectedIds(new Set());
    };

    const handleSelect = (id: string, e?: React.MouseEvent) => {
        setSelectedIds(prev => {
            const next = new Set(e?.ctrlKey || e?.metaKey ? prev : []); // If no modifier, clear previous

            // Toggle Logic
            if (e?.ctrlKey || e?.metaKey) {
                if (next.has(id)) next.delete(id);
                else next.add(id);
            } else {
                next.add(id); // Single Select
            }
            return next;
        });
    };

    const handleBulkAction = (action: string) => {
        if (confirm(`Are you sure you want to ${action} ${selectedIds.size} orders?`)) {
            if (action === 'delete') {
                setOrders(prev => prev.filter(o => !selectedIds.has(o.id)));
            } else {
                // Update Status
                selectedIds.forEach(id => updateStatus(id, action));
            }
            setSelectedIds(new Set());
        }
    };

    return (
        <div className="h-full flex flex-col bg-white">
            {/* Top Bar */}
            <div className="flex justify-between items-center px-6 py-4 border-b">
                <div className="flex items-center gap-4">
                    <h2 className="text-xl font-bold text-gray-900">Production Board</h2>
                    <div className="h-6 w-px bg-gray-200"></div>

                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search orders..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-8 pr-3 py-1.5 border rounded-md text-sm bg-gray-50 focus:bg-white transition-colors w-48"
                        />
                    </div>

                    <div className="h-6 w-px bg-gray-200"></div>

                    {/* Date Filters */}
                    <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-md border">
                        <span className="text-xs font-semibold text-gray-500 pl-2">Due:</span>
                        <input
                            type="date"
                            value={dateRange.from}
                            onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
                            className="text-xs border-none bg-transparent p-1 focus:ring-0 text-gray-700 w-24"
                        />
                        <span className="text-gray-400">-</span>
                        <input
                            type="date"
                            value={dateRange.to}
                            onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
                            className="text-xs border-none bg-transparent p-1 focus:ring-0 text-gray-700 w-24"
                        />
                        {(dateRange.from || dateRange.to) && (
                            <button onClick={() => setDateRange({ from: '', to: '' })} className="hover:text-red-500 pr-2">
                                <X className="h-3 w-3" />
                            </button>
                        )}
                    </div>

                    <div className="h-6 w-px bg-gray-200"></div>
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className={`p-1.5 rounded-md transition-colors text-xs font-medium flex items-center gap-2 ${isSidebarOpen ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50'}`}
                    >
                        <AlertCircle className="h-4 w-4" /> Reminders
                    </button>

                    {/* View Switcher */}
                    <div className="flex items-center bg-gray-100 rounded-lg p-1 gap-1">
                        <button
                            onClick={() => setViewMode('board')}
                            className={`p-1.5 rounded-md transition-all ${viewMode === 'board' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            title="Board View"
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-1.5 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
                            title="List View"
                        >
                            <ListIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                <Link href="/orders/new">
                    <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm">
                        <Plus className="h-4 w-4" /> New Order
                    </button>
                </Link>
            </div>

            <div className="flex-1 flex overflow-hidden">

                {/* Main Content Area */}
                <div className="flex-1 overflow-hidden bg-gray-50/50 flex flex-col">

                    {viewMode === 'board' ? (
                        // --- BOARD VIEW ---
                        <div className="flex-1 overflow-x-auto overflow-y-hidden">
                            <div className="flex h-full p-6 gap-6 min-w-max">
                                {columns.map(col => (
                                    <div
                                        key={col.id}
                                        onDragOver={onDragOver}
                                        onDrop={(e) => onDrop(e, col.title)}
                                        className="flex flex-col w-[280px] min-w-[280px]"
                                    >
                                        <div className="flex flex-col mb-3 px-1 group">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 bg-white border px-2 py-1 rounded-md text-xs font-semibold text-gray-700 shadow-sm">
                                                    <div className={`w-2 h-2 rounded-full ${col.color}`} />
                                                    {col.title}
                                                    <span className="text-gray-400 ml-1">{filteredOrders.filter(o => o.status === col.title).length}</span>
                                                </div>
                                            </div>
                                            {col.subtitle && <div className="text-[10px] text-gray-400 mt-1 pl-1 truncate" title={col.subtitle}>{col.subtitle}</div>}
                                        </div>

                                        <div className="flex-1 overflow-y-auto pr-2 pb-10 space-y-3">
                                            {filteredOrders.filter(o => o.status === col.title).map(order => (
                                                <OrderCard
                                                    key={order.id}
                                                    order={order}
                                                    onDragStart={onDragStart}
                                                    onClick={(e: React.MouseEvent) => handleSelect(order.id, e)}
                                                    onDoubleClick={() => setSelectedOrder(order)}
                                                    isHighlighted={highlightedId === order.id}
                                                    isCollapsed={collapsedIds.has(order.id)}
                                                    onToggleCollapse={() => toggleCollapse(order.id)}
                                                    isSelected={selectedIds.has(order.id)}
                                                    onSelect={(e: React.MouseEvent) => handleSelect(order.id, e)}
                                                />
                                            ))}
                                            <Link href="/orders/new" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 px-2 py-1.5 text-sm transition-colors w-full text-left rounded hover:bg-gray-100/50">
                                                <Plus className="h-4 w-4" /> New
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                <div className="w-[50px] pt-2">
                                    <button onClick={addColumn} className="p-2 hover:bg-gray-200 rounded-lg text-gray-400 hover:text-gray-700 transition"><Plus className="h-6 w-6" /></button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        // --- LIST VIEW ---
                        <div className="flex-1 overflow-auto p-6">
                            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-gray-50 border-b text-xs uppercase text-gray-500 font-medium">
                                        <tr>
                                            <th className="px-6 py-3 w-4">
                                                <input
                                                    type="checkbox"
                                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                                    className="rounded border-gray-300 text-black focus:ring-black"
                                                />
                                            </th>
                                            <th className="px-6 py-3">Order ID</th>
                                            <th className="px-6 py-3">Customer</th>
                                            <th className="px-6 py-3">Job Specs</th>
                                            <th className="px-6 py-3">Status</th>
                                            <th className="px-6 py-3">Deadline</th>
                                            <th className="px-6 py-3">File</th>
                                            <th className="px-6 py-3 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {filteredOrders.map(order => {
                                            const isOverdue = new Date(order.deadline) < new Date() && order.status !== 'Completed';
                                            return (
                                                <tr key={order.id} className={`hover:bg-gray-50 cursor-pointer ${highlightedId === order.id ? 'bg-blue-50' : ''}`} onClick={() => setSelectedOrder(order)}>
                                                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedIds.has(order.id)}
                                                            onChange={() => handleSelect(order.id)}
                                                            className="rounded border-gray-300 text-black focus:ring-black"
                                                        />
                                                    </td>
                                                    <td className="px-6 py-4 font-mono font-medium text-gray-900">
                                                        #{order.id}
                                                        {order.priority === 'Urgent' && <span className="ml-2 bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-[10px] font-bold">URGENT</span>}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="font-medium text-gray-900">{order.customer}</div>
                                                        <div className="text-xs text-gray-500">{order.phone}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="font-medium">{order.specs?.quantity || 1}x {order.specs?.productName || 'Custom Order'}</div>
                                                        <div className="text-xs text-gray-500">{order.specs?.size || '-'} • {order.specs?.material || '-'}</div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <select
                                                            value={order.status}
                                                            onClick={(e) => e.stopPropagation()} // Prevent modal open
                                                            onChange={(e) => updateStatus(order.id, e.target.value)}
                                                            className="text-xs border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-1 pl-2 pr-6"
                                                        >
                                                            {columns.map(col => (
                                                                <option key={col.id} value={col.title}>{col.title}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className={`flex items-center gap-1.5 ${isOverdue ? 'text-red-600 font-bold' : 'text-gray-600'}`}>
                                                            <Calendar className="h-3.5 w-3.5" />
                                                            {order.deadline}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium ${order.fileStatus === 'ok' ? 'bg-green-100 text-green-700' :
                                                            order.fileStatus === 'issue' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                                                            }`}>
                                                            {order.fileStatus === 'ok' ? <CheckCircle className="h-3 w-3" /> :
                                                                order.fileStatus === 'issue' ? <AlertTriangle className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                                                            <span className="capitalize">{order.fileStatus}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-right">
                                                        <button className="text-gray-400 hover:text-gray-900">
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {/* Bulk Action Toolbar */}
                    {selectedIds.size > 0 && (
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-6 z-40">
                            <span className="font-medium text-sm">{selectedIds.size} Selected</span>
                            <div className="h-4 w-px bg-gray-700"></div>
                            <select
                                onChange={(e) => {
                                    if (e.target.value) handleBulkAction(e.target.value);
                                    e.target.value = "";
                                }}
                                className="bg-gray-800 border-none text-xs rounded text-white focus:ring-0 cursor-pointer"
                            >
                                <option value="">Move to...</option>
                                {columns.map(col => <option key={col.id} value={col.title}>{col.title}</option>)}
                            </select>
                            <button onClick={() => handleBulkAction('delete')} className="text-red-400 hover:text-red-300 text-sm font-medium">Delete</button>
                            <button onClick={() => setSelectedIds(new Set())} className="text-gray-400 hover:text-white">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Sidebar - Works for both views */}
                <div
                    className={`
                        bg-white border-l z-30 flex flex-col
                        fixed inset-y-0 right-0 h-full shadow-2xl transition-all duration-300 ease-in-out
                        md:relative md:shadow-none md:h-auto md:translate-x-0
                        ${isSidebarOpen ? 'w-[320px] translate-x-0' : 'w-0 translate-x-full md:w-0 md:translate-x-0 overflow-hidden opacity-0 md:opacity-100'}
                    `}
                    style={{ visibility: isSidebarOpen ? 'visible' : 'hidden' }}
                >
                    <div className="p-4 border-b flex items-center justify-between min-w-[320px]">
                        <h3 className="font-bold text-sm text-gray-900">Action Required</h3>
                        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-1 hover:bg-gray-100 rounded">
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 min-w-[320px]">
                        {issueOrders.length > 0 && (
                            <div className="space-y-2">
                                <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-wider">File Issues</h4>
                                {issueOrders.map(o => <SidebarItem key={o.id} order={o} onClick={() => handleHighlight(o.id)} type="issue" />)}
                            </div>
                        )}
                        {/* ... overdue/urgent ... */}
                        {overdueOrders.length > 0 && (
                            <div className="space-y-2">
                                <h4 className="text-[11px] font-bold text-orange-500 uppercase tracking-wider">Overdue</h4>
                                {overdueOrders.map(o => <SidebarItem key={o.id} order={o} onClick={() => handleHighlight(o.id)} type="overdue" />)}
                            </div>
                        )}
                        {urgentOrders.length > 0 && (
                            <div className="space-y-2">
                                <h4 className="text-[11px] font-bold text-purple-500 uppercase tracking-wider">Urgent</h4>
                                {urgentOrders.map(o => <SidebarItem key={o.id} order={o} onClick={() => handleHighlight(o.id)} type="urgent" />)}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal - Works for both views */}
            {selectedOrder && (
                <OrderModal
                    order={selectedOrder}
                    onClose={() => setSelectedOrder(null)}
                    onDelete={() => {
                        setOrders(prev => prev.filter(o => o.id !== selectedOrder.id));
                        setSelectedOrder(null);
                    }}
                    onUpdate={(updated) => {
                        setOrders(prev => prev.map(o => o.id === updated.id ? updated : o));
                        setSelectedOrder(null);
                    }}
                    columns={columns}
                />
            )}
        </div>
    );
}

// --- Components ---
// Reuse previous components (OrderModal, OrderCard, SidebarItem) as they are correct.
// Including full declarations for completeness if rewriting file.

function SidebarItem({ order, onClick, type }: { order: Order, onClick: () => void, type: 'issue' | 'overdue' | 'urgent' }) {
    const borderClass = type === 'issue' ? 'border-red-200 bg-red-50' : type === 'overdue' ? 'border-orange-200 bg-orange-50' : 'border-purple-200 bg-purple-50';
    return (
        <div onClick={onClick} className={`p-3 border rounded-lg cursor-pointer hover:shadow-sm transition-all text-sm ${borderClass}`}>
            <div className="flex justify-between items-start mb-1">
                <span className="font-mono font-bold text-gray-600 text-xs">#{order.id}</span>
            </div>
            <p className="font-medium text-gray-900 truncate">{order.customer}</p>
        </div>
    )
}

function OrderCard({ order, onDragStart, isHighlighted, onClick, onDoubleClick, isCollapsed, onToggleCollapse, isSelected, onSelect }: any) {
    const isOverdue = new Date(order.deadline) < new Date();

    return (
        <div
            id={`card-${order.id}`}
            draggable
            onDragStart={(e) => onDragStart(e, order.id)}
            onClick={(e) => {
                // If standard click, just select (or toggle if modifier)
                // We'll let the parent handle the logic, but for now we need to split single vs double
                onSelect(e);
            }}
            onDoubleClick={onDoubleClick}
            className={`
                bg-white p-3 rounded-lg border shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-all group relative select-none
                ${isHighlighted ? 'ring-2 ring-blue-500 shadow-lg scale-[1.02] z-10' : 'border-gray-200'}
                ${isSelected ? 'ring-2 ring-blue-600 bg-blue-50' : ''}
            `}
        >
            {/* Header: Toggle + ID + Priority */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); onToggleCollapse(); }}
                        className="text-gray-400 hover:text-gray-700 p-0.5 rounded hover:bg-gray-100 transition-colors pointer-events-auto"
                        title={isCollapsed ? "Expand" : "Collapse"}
                    >
                        {isCollapsed ? <ChevronDown className="h-3 w-3" /> : <ChevronUp className="h-3 w-3" />}
                    </button>
                    <span className="font-mono font-bold text-xs text-gray-500">#{order.id}</span>
                </div>

                <div className="flex gap-1">
                    {order.priority === 'Urgent' && (
                        <span className={`text-[10px] font-medium rounded-full bg-red-100 text-red-700 flex items-center gap-1 ${isCollapsed ? 'px-1 py-1' : 'px-2 py-0.5'}`}>
                            <AlertCircle className="h-3 w-3" />
                            {!isCollapsed && "Urgent"}
                        </span>
                    )}
                </div>
            </div>

            {/* Expanded Content */}
            {!isCollapsed && (
                <div className="space-y-3 pointer-events-none mt-2">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {order.specs?.department && (
                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                                {order.specs.department}
                            </span>
                        )}
                    </div>

                    {/* Content */}
                    <div>
                        <h4 className="font-medium text-sm text-gray-900 leading-snug">
                            {order.specs?.quantity || 1}x {order.specs?.productName || 'Custom'}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {order.specs?.size || '-'}, {order.specs?.material || '-'}
                        </p>
                    </div>

                    {/* Footer Info */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                        <div className="flex items-center gap-2">
                            {/* File Status (Mini) */}
                            {order.fileStatus === 'issue' && <AlertTriangle className="h-3.5 w-3.5 text-red-500" />}
                            {order.fileStatus === 'ok' && <CheckCircle className="h-3.5 w-3.5 text-green-500" />}
                        </div>
                        <div className="flex items-center gap-2">
                            {isOverdue && <Clock className="h-3.5 w-3.5 text-red-500" />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function OrderModal({ order, onClose, onDelete, onUpdate, columns }: { order: Order, onClose: () => void, onDelete: () => void, onUpdate: (o: Order) => void, columns: WorkflowColumn[] }) {
    const [status, setStatus] = useState(order.status);

    const handleSave = () => {
        onUpdate({ ...order, status });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm print-modal">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b flex items-center justify-between sticky top-0 bg-white z-10">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            Order #{order.id}
                            {order.priority === 'Urgent' && <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">Urgent</span>}
                        </h2>
                        <p className="text-sm text-gray-500">{new Date(order.date || Date.now()).toLocaleDateString()}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                        <X className="h-5 w-5 text-gray-500" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-8 flex-1">

                    {/* Status Changer */}
                    <div className="bg-gray-50 p-4 rounded-lg border">
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Current Status</label>
                        <div className="flex gap-2">
                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                                className="flex-1 border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                {columns.map(col => (
                                    <option key={col.id} value={col.title}>{col.title}</option>
                                ))}
                            </select>
                            <button onClick={handleSave} className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">Update</button>
                        </div>
                    </div>

                    {/* Customer Info */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 border-b pb-2 mb-4">Customer Information</h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="block text-gray-500 text-xs">Name</span>
                                <span className="font-medium">{order.customer}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500 text-xs">Phone</span>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{order.phone}</span>
                                    {order.phone && (
                                        <a href={`https://wa.me/${order.phone.replace(/[^0-9]/g, '')}`} target="_blank" className="text-green-600 hover:underline text-xs flex items-center gap-1">
                                            <Smartphone className="h-3 w-3" /> Chat
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="col-span-2">
                                <span className="block text-gray-500 text-xs">Email</span>
                                <span className="font-medium">{order.email || "-"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Order Specs */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 border-b pb-2 mb-4">Job Specifications</h3>
                        <div className="bg-white border rounded-lg overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <tbody className="divide-y">
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 text-gray-500 font-medium w-1/3">Product</td>
                                        <td className="px-4 py-2 font-bold">{order.specs?.productName || 'N/A'}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-gray-500">Department</td>
                                        <td className="px-4 py-2"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">{order.specs?.department || 'General'}</span></td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-gray-500">Size</td>
                                        <td className="px-4 py-2">{order.specs?.size || '-'}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-gray-500">Material</td>
                                        <td className="px-4 py-2">{order.specs?.material || '-'}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-gray-500">Print Side</td>
                                        <td className="px-4 py-2">{order.specs?.printSide || "-"}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-gray-500">Finishing</td>
                                        <td className="px-4 py-2">{order.specs?.finishing || "-"}</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-2 text-gray-500 font-medium">Quantity</td>
                                        <td className="px-4 py-2 font-bold">{order.specs?.quantity || 1}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 text-gray-500">Total</td>
                                        <td className="px-4 py-2 font-mono">RM {order.total?.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Logistics */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 border-b pb-2 mb-4">Logistics</h3>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className={`p-3 rounded-lg border ${new Date(order.deadline) < new Date() ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}`}>
                                <span className="block text-xs text-gray-500 mb-1">Deadline</span>
                                <div className="flex items-center gap-2 font-bold">
                                    <Calendar className="h-4 w-4" />
                                    {order.deadline}
                                    {new Date(order.deadline) < new Date() && <span className="text-red-600 text-xs">(Overdue)</span>}
                                </div>
                            </div>
                            <div className="p-3 rounded-lg border bg-gray-50 border-gray-200">
                                <span className="block text-xs text-gray-500 mb-1">Invoice / Source</span>
                                <div className="font-bold font-mono text-sm">{order.invoiceNo || 'N/A'}</div>
                                <div className="text-xs text-gray-500">{order.source}</div>
                            </div>
                            <div className={`p-3 rounded-lg border ${order.fileStatus === 'issue' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
                                <span className="block text-xs text-gray-500 mb-1">File Status</span>
                                <div className="flex items-center gap-2 font-bold">
                                    {order.fileStatus === 'issue' ? <AlertTriangle className="h-4 w-4 text-red-600" /> : <CheckCircle className="h-4 w-4 text-green-600" />}
                                    <span className="capitalize">{order.fileStatus}</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Print File Preview (Mock) */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 border-b pb-2 mb-4">Print Files</h3>
                        <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                            {/* In a real app, this would be the actual uploaded file preview */}
                            <div className="text-center">
                                <div className="mx-auto h-24 w-32 bg-gray-200 rounded flex items-center justify-center mb-2">
                                    <FileText className="h-8 w-8 text-gray-400" />
                                </div>
                                <p className="text-xs text-gray-500">Preview not available for this legacy order</p>
                                <button className="mt-2 text-blue-600 text-xs font-medium hover:underline">Download Original (PDF)</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* History Log */}
                {order.history && order.history.length > 0 && (
                    <div className="mt-8 px-6 pb-6">
                        <h3 className="text-sm font-bold text-gray-900 border-b pb-2 mb-4">Activity Log</h3>
                        <div className="bg-gray-50 rounded-lg p-4 space-y-4 max-h-48 overflow-y-auto">
                            {order.history.slice().reverse().map((log, i) => (
                                <div key={i} className="flex gap-3 text-sm">
                                    <div className="min-w-[4rem] text-xs text-gray-400 pt-0.5">
                                        {new Date(log.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">{log.action} <span className="text-gray-500 font-normal">by {log.user || 'System'}</span></p>
                                        <p className="text-gray-600 text-xs">{log.details}</p>
                                        <p className="text-gray-400 text-[10px]">{new Date(log.date).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t flex justify-between items-center sticky bottom-0 z-10 no-print">
                    <button onClick={onDelete} className="text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
                        <Trash2 className="h-4 w-4" /> Delete Order
                    </button>
                    <div className="flex gap-2">
                        <button onClick={() => window.print()} className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-gray-700">
                            <Printer className="h-4 w-4" /> Print Job Sheet
                        </button>
                        <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-200 rounded-lg text-sm font-medium">Close</button>
                        <button onClick={handleSave} className="bg-black text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg hover:bg-gray-800 transform hover:-translate-y-0.5 transition-all">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

