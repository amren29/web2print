"use client";

import { Edit2, Plus, Trash2, Search, X, ChevronDown, Mail, Phone, Building } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// --- Types ---
interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    company?: string;
    status: "Active" | "Inactive" | "Blocked";
    totalOrders: number;
    lastOrderDate?: string;
    joinDate: string;
}

const DEFAULT_CUSTOMERS: Customer[] = [
    { id: "CUST-001", name: "Alice Johnson", email: "alice@techcorp.com", phone: "+60 12-345 6789", company: "TechCorp Solutions", status: "Active", totalOrders: 12, lastOrderDate: "2024-03-10", joinDate: "2023-01-15" },
    { id: "CUST-002", name: "Bob Smith", email: "bob@designstudio.my", phone: "+60 13-987 6543", company: "Creative Design Studio", status: "Active", totalOrders: 5, lastOrderDate: "2024-02-28", joinDate: "2023-06-20" },
    { id: "CUST-003", name: "Charlie Brown", email: "charlie@freelance.net", phone: "+60 17-555 1234", status: "Inactive", totalOrders: 1, lastOrderDate: "2023-11-05", joinDate: "2023-10-01" },
    { id: "CUST-004", name: "David Lee", email: "david@marketingpro.com", phone: "+60 19-888 7777", company: "Marketing Pro", status: "Active", totalOrders: 25, lastOrderDate: "2024-03-12", joinDate: "2022-08-15" },
    { id: "CUST-005", name: "Eve Tan", email: "eve@retail.com.my", phone: "+60 16-222 3333", company: "Eve Retail", status: "Blocked", totalOrders: 0, joinDate: "2024-01-05" }
];

export default function AdminCustomersPage() {
    // --- State ---
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Filters
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    // Selection
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

    // --- Effects ---
    useEffect(() => {
        const saved = localStorage.getItem("web2print_customers");
        if (saved) {
            try { setCustomers(JSON.parse(saved)); }
            catch (e) { console.error(e); setCustomers(DEFAULT_CUSTOMERS); }
        } else {
            setCustomers(DEFAULT_CUSTOMERS);
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("web2print_customers", JSON.stringify(customers));
        }
    }, [customers, isLoaded]);

    // --- Handlers ---
    const handleDelete = (id: string, e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (confirm("Delete this customer?")) {
            setCustomers(prev => prev.filter(c => c.id !== id));
            setSelectedIds(prev => { const next = new Set(prev); next.delete(id); return next; });
        }
    };

    const handleBulkDelete = () => {
        if (confirm(`Delete ${selectedIds.size} customers?`)) {
            setCustomers(prev => prev.filter(c => !selectedIds.has(c.id)));
            setSelectedIds(new Set());
        }
    };

    const handleSelect = (id: string, e?: React.MouseEvent) => {
        e?.stopPropagation();
        setSelectedIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) setSelectedIds(new Set(filteredCustomers.map(c => c.id)));
        else setSelectedIds(new Set());
    };

    // --- Filtering ---
    const filteredCustomers = customers.filter(c => {
        const matchesSearch =
            c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.phone.includes(searchQuery);

        const matchesStatus = statusFilter === "All" || c.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    if (!isLoaded) return <div className="p-8">Loading...</div>;

    return (
        <div className="h-full flex flex-col bg-white">
            {/* --- Header --- */}
            <div className="px-6 py-5 border-b flex flex-col gap-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Customers</h2>
                        <p className="text-sm text-gray-500">Manage your client base.</p>
                    </div>
                    <Link href="/customers/new">
                        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium shadow-sm">
                            <Plus className="h-4 w-4" /> Add Customer
                        </button>
                    </Link>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative flex-1 min-w-[200px] max-w-md">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name, email, company..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent outline-none"
                        />
                    </div>
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="pl-3 pr-8 py-2 border rounded-lg text-sm bg-white appearance-none cursor-pointer hover:bg-gray-50 focus:ring-2 focus:ring-black outline-none min-w-[120px]"
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Blocked">Blocked</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-3 h-3 w-3 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* --- Table --- */}
            <div className="flex-1 overflow-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b text-xs uppercase text-gray-500 font-bold sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 w-10">
                                <input
                                    type="checkbox"
                                    onChange={(e) => handleSelectAll(e.target.checked)}
                                    checked={selectedIds.size === filteredCustomers.length && filteredCustomers.length > 0}
                                    className="rounded border-gray-300 text-black focus:ring-black"
                                />
                            </th>
                            <th className="px-6 py-3">Customer</th>
                            <th className="px-6 py-3">Contact</th>
                            <th className="px-6 py-3">Company</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Stats</th>
                            <th className="px-6 py-3 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {filteredCustomers.map((customer) => (
                            <tr
                                key={customer.id}
                                className={`hover:bg-gray-50 transition-colors cursor-pointer group ${selectedIds.has(customer.id) ? 'bg-blue-50/50' : ''}`}
                                onClick={() => handleSelect(customer.id)}
                            >
                                <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.has(customer.id)}
                                        onChange={(e) => { e.stopPropagation(); handleSelect(customer.id); }}
                                        className="rounded border-gray-300 text-black focus:ring-black"
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-900">{customer.name}</div>
                                    <div className="text-xs text-gray-400 font-mono mt-0.5">{customer.id}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-0.5">
                                        <div className="flex items-center gap-1.5 text-gray-600">
                                            <Mail className="h-3 w-3" /> {customer.email}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                                            <Phone className="h-3 w-3" /> {customer.phone}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    {customer.company ? (
                                        <div className="flex items-center gap-1.5 text-gray-700">
                                            <Building className="h-3.5 w-3.5 text-gray-400" />
                                            {customer.company}
                                        </div>
                                    ) : <span className="text-gray-400 text-xs">-</span>}
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border
                                        ${customer.status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' :
                                            customer.status === 'Blocked' ? 'bg-red-100 text-red-700 border-red-200' :
                                                'bg-gray-100 text-gray-600 border-gray-200'
                                        }`}>
                                        {customer.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-xs text-gray-500">
                                    <div>{customer.totalOrders} orders</div>
                                    <div>Last: {customer.lastOrderDate || 'Never'}</div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link
                                            href={`/customers/${customer.id}`}
                                            className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Edit2 size={16} />
                                        </Link>
                                        <button onClick={(e) => handleDelete(customer.id, e)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bulk Actions */}
            {selectedIds.size > 0 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-6 z-50 animate-in slide-in-from-bottom-4">
                    <span className="font-medium text-sm">{selectedIds.size} Selected</span>
                    <div className="h-4 w-px bg-gray-700"></div>
                    <button onClick={handleBulkDelete} className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm font-medium"><Trash2 className="h-4 w-4" /> Delete</button>
                    <button onClick={() => setSelectedIds(new Set())} className="ml-2 text-gray-400 hover:text-white"><X className="h-5 w-5" /></button>
                </div>
            )}
        </div>
    );
}
