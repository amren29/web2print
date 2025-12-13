"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Printer, User, Calendar, FileText, Smartphone, Mail, AlertTriangle } from "lucide-react";

export default function NewOrderPage() {
    const router = useRouter();

    // --- State ---
    const [customer, setCustomer] = useState({ name: "", phone: "", email: "" });
    const [specs, setSpecs] = useState({
        productName: "Business Cards",
        size: "A4",
        customWidth: 0,
        customHeight: 0,
        material: "Art Card 260gsm",
        printSide: "Single Sided (4+0)",
        finishing: "None",
        quantity: 100,
        price: 50.00
    });
    const [logistics, setLogistics] = useState({
        deadline: "",
        source: "Walk-in",
        invoiceNo: "",
        status: "New Order",
        fileStatus: "pending",
        isUrgent: false
    });

    // --- Auto-Department Logic ---
    const getDepartment = (productName: string) => {
        const lower = productName.toLowerCase();
        if (lower.includes("banner") || lower.includes("buntings") || lower.includes("sign")) return "Large Format";
        if (lower.includes("card") || lower.includes("flyer") || lower.includes("booklet")) return "Digital Print";
        if (lower.includes("t-shirt") || lower.includes("apparel")) return "Heat Press / Apparel";
        return "General Production";
    };

    const department = getDepartment(specs.productName);

    // --- Handlers ---
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newOrder = {
            id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`, // 4 digit ID
            customer: customer.name,
            phone: customer.phone,
            email: customer.email,
            total: specs.price,
            status: "New Order", // Force default
            source: logistics.source,
            invoiceNo: logistics.invoiceNo, // Add Invoice No
            deadline: logistics.deadline || new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0], // Default 3 days
            fileStatus: logistics.fileStatus,

            priority: logistics.isUrgent ? 'Urgent' : 'Normal',
            date: new Date().toISOString(),
            history: [{
                date: new Date().toISOString(),
                action: "Created",
                details: "Order created manually",
                user: "Admin"
            }],
            // Order Items with Department
            specs: {
                ...specs,
                department: department // Auto-assigned
            }
        };

        // Save to LocalStorage
        const existing = JSON.parse(localStorage.getItem("web2print_orders") || "[]");
        localStorage.setItem("web2print_orders", JSON.stringify([...existing, newOrder]));

        router.push("/orders");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <div className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-4">
                    <button onClick={() => router.back()} className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900">Create Manual Order</h1>
                        <p className="text-xs text-gray-500">Walk-in / Phone / Email Orders</p>
                    </div>
                </div>
                <button onClick={handleSubmit} className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-colors font-bold shadow-sm">
                    <Save className="h-4 w-4" /> Save Order
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Customer & Logistics */}
                <div className="space-y-6">
                    {/* Customer Card */}
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <User className="h-4 w-4 text-blue-600" /> Customer Details
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Full Name</label>
                                <input required className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={customer.name} onChange={e => setCustomer({ ...customer, name: e.target.value })} placeholder="e.g. Ali Baba" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Phone (WhatsApp)</label>
                                <div className="relative">
                                    <Smartphone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <input required className="w-full border rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={customer.phone} onChange={e => setCustomer({ ...customer, phone: e.target.value })} placeholder="60123456789" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <input type="email" className="w-full border rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                        value={customer.email} onChange={e => setCustomer({ ...customer, email: e.target.value })} placeholder="email@example.com" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logistics Card */}
                    <div className="bg-white rounded-xl shadow-sm border p-6">
                        <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-orange-600" /> Logistics & Source
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Invoice / Bill No.</label>
                                <input className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none font-mono"
                                    value={logistics.invoiceNo} onChange={e => setLogistics({ ...logistics, invoiceNo: e.target.value })} placeholder="#INV-0000" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Source</label>
                                <div className="flex gap-2">
                                    {['Walk-in', 'WhatsApp', 'Email', 'Phone'].map(s => (
                                        <button key={s} type="button"
                                            onClick={() => setLogistics({ ...logistics, source: s })}
                                            className={`flex-1 py-2 text-xs font-medium rounded border ${logistics.source === s ? 'bg-black text-white border-black' : 'bg-white text-gray-600 hover:bg-gray-50'}`}>
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Deadline Date</label>
                                <input type="date" required className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={logistics.deadline} onChange={e => setLogistics({ ...logistics, deadline: e.target.value })} />
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <input type="checkbox" id="urgent" className="w-4 h-4 text-red-600 rounded focus:ring-red-500"
                                    checked={logistics.isUrgent} onChange={e => setLogistics({ ...logistics, isUrgent: e.target.checked })} />
                                <label htmlFor="urgent" className="text-sm font-bold text-red-600 flex items-center gap-1">
                                    <AlertTriangle className="h-4 w-4" /> URGENT ORDER
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Job Specs */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-sm border p-6 h-full flex flex-col">
                        <h2 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <Printer className="h-4 w-4 text-purple-600" /> Job Specifications
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Product</label>
                                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none font-medium"
                                    value={specs.productName} onChange={e => setSpecs({ ...specs, productName: e.target.value })}>
                                    <option>Business Cards</option>
                                    <option>Flyers (A4/A5)</option>
                                    <option>Banners (Outdoor)</option>
                                    <option>Buntings</option>
                                    <option>Stickers / Labels</option>
                                    <option>Booklets</option>
                                </select>
                            </div>

                            {/* Auto Department Display */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Assigned Department</label>
                                <div className="w-full bg-gray-100 border rounded-lg px-3 py-2 text-sm text-gray-700 font-bold flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    {department}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Size</label>
                                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={specs.size} onChange={e => setSpecs({ ...specs, size: e.target.value })}>
                                    <option>A4</option>
                                    <option>A5</option>
                                    <option>A3</option>
                                    <option>90mm x 54mm (Standard Card)</option>
                                    <option value="Custom">Custom Size</option>
                                </select>
                                {specs.size === 'Custom' && (
                                    <div className="flex gap-2 mt-2">
                                        <input type="number" placeholder="W (mm)" className="w-1/2 border rounded px-2 py-1 text-sm"
                                            value={specs.customWidth} onChange={e => setSpecs({ ...specs, customWidth: parseFloat(e.target.value) })} />
                                        <input type="number" placeholder="H (mm)" className="w-1/2 border rounded px-2 py-1 text-sm"
                                            value={specs.customHeight} onChange={e => setSpecs({ ...specs, customHeight: parseFloat(e.target.value) })} />
                                    </div>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Material</label>
                                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={specs.material} onChange={e => setSpecs({ ...specs, material: e.target.value })}>
                                    <option>Art Card 260gsm</option>
                                    <option>Art Paper 128gsm</option>
                                    <option>Simili 80gsm</option>
                                    <option>Tarpaulin 380gsm</option>
                                    <option>MirrorKote Sticker</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Printing Side</label>
                                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={specs.printSide} onChange={e => setSpecs({ ...specs, printSide: e.target.value })}>
                                    <option>Single Sided (4+0)</option>
                                    <option>Double Sided (4+4)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Finishing</label>
                                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                    value={specs.finishing} onChange={e => setSpecs({ ...specs, finishing: e.target.value })}>
                                    <option>None</option>
                                    <option>Matte Lamination</option>
                                    <option>Gloss Lamination</option>
                                    <option>Eyelets + Strings</option>
                                    <option>Round Corners</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">File Status</label>
                                <select className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none font-medium"
                                    value={logistics.fileStatus} onChange={e => setLogistics({ ...logistics, fileStatus: e.target.value })}>
                                    <option value="pending">⏳ Pending Check</option>
                                    <option value="ok">✅ File OK (Print Ready)</option>
                                    <option value="issue">🚩 File Issue (Low DPI)</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-auto border-t pt-6 flex items-end justify-between bg-gray-50 -mx-6 -mb-6 p-6 rounded-b-xl">
                            <div className="w-1/3">
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Quantity</label>
                                <input type="number" className="w-full border rounded-lg px-3 py-2 font-bold text-center"
                                    value={specs.quantity} onChange={e => setSpecs({ ...specs, quantity: parseInt(e.target.value) })} />
                            </div>
                            <div className="text-right">
                                <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">Total Price (RM)</label>
                                <input type="number" step="0.01" className="bg-transparent text-3xl font-bold text-right outline-none w-48 text-gray-900 placeholder-gray-300"
                                    value={specs.price} onChange={e => setSpecs({ ...specs, price: parseFloat(e.target.value) })} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
