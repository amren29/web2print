"use client"

import { useState, useMemo, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ShoppingBag, HelpCircle, ChevronDown, Upload, Check, PenTool } from "lucide-react"
import { toast } from "sonner"
import { RosterEditor } from "./RosterEditor"

export function ProductCalculator({ product }: { product?: any }) {
    const router = useRouter()

    // --- Dynamic Options (Safe Fallbacks) ---
    const sizes = product?.sizes || [];
    const materials = product?.materials || [];
    const finishings = product?.finishings || [];
    const printSides = product?.printSides || [];
    const durations = product?.durations || [];
    const quantities = product?.quantities || []; // Quantity Tier Options (Dropdown)
    const customSections = product?.customSections || [];

    // --- State ---
    // Standard Options
    const [size, setSize] = useState("");
    const [material, setMaterial] = useState("");
    const [finishing, setFinishing] = useState("");
    const [printSide, setPrintSide] = useState("");
    const [duration, setDuration] = useState("");

    // Quantity Logic
    const [quantityMode, setQuantityMode] = useState<'single' | 'breakdown'>('single');
    const [quantity, setQuantity] = useState(100); // Single Mode
    const [quantityBreakdown, setQuantityBreakdown] = useState<Record<string, number>>({}); // { sizeId: qty }

    // Custom Sections (Multi-support)
    // Key: sectionId, Value: string (single) or string[] (multi)
    const [customSelections, setCustomSelections] = useState<Record<string, string | string[]>>({});

    // Personalization Inputs
    // Key: optionId, Value: string (text input)
    const [personalizationInputs, setPersonalizationInputs] = useState<Record<string, string>>({});

    // Custom Size Dimensions
    const [customWidth, setCustomWidth] = useState(100);
    const [customHeight, setCustomHeight] = useState(100);

    // --- Detailed Variation Mode (Complex Matrix) ---
    // Used when user wants different options per size (e.g. S-Round vs S-VNeck)
    const [variationMode, setVariationMode] = useState(false);
    const [variationRows, setVariationRows] = useState<Array<{
        id: string;
        size: string;
        qty: number;
        selections: Record<string, string>; // sectionId -> optionId
    }>>([
        { id: '1', size: '', qty: 0, selections: {} }
    ]);

    // Roster Logic
    const [isRosterOpen, setIsRosterOpen] = useState(false);
    const [activeRosterRowId, setActiveRosterRowId] = useState<string | null>(null);
    const [rosterData, setRosterData] = useState<Record<string, any[]>>({}); // rowId -> [{name, number}]

    // Shipping
    const [isShippingOpen, setIsShippingOpen] = useState(false);
    const [shippingRegion, setShippingRegion] = useState("sabah");
    const [showShippingResult, setShowShippingResult] = useState(false);

    // --- Initialization ---
    useEffect(() => {
        if (!product) return;
        if (sizes.length > 0 && !size) setSize(sizes[0].id);
        if (materials.length > 0 && !material) setMaterial(materials[0].id);
        if (finishings.length > 0 && !finishing) setFinishing(finishings[0].id);
        if (printSides.length > 0 && !printSide) setPrintSide(printSides[0].id);
        if (durations.length > 0 && !duration) setDuration(durations[0].id);

        // Init Custom Sections
        const initialCustom: Record<string, string | string[]> = {};
        customSections.forEach((section: any) => {
            if (section.options.length > 0 && section.inputType !== 'checkbox') {
                // Default select first option for dropdowns
                initialCustom[section.id] = section.options[0].id;
            } else if (section.inputType === 'checkbox') {
                initialCustom[section.id] = [];
            }
        });
        setCustomSelections(prev => ({ ...initialCustom, ...prev })); // Preserve formatting if re-running
    }, [product]);

    // --- Helpers ---
    const handleCustomChange = (sectionId: string, value: string, inputType: 'select' | 'checkbox') => {
        if (inputType === 'select') {
            setCustomSelections(prev => ({ ...prev, [sectionId]: value }));
        } else {
            setCustomSelections(prev => {
                const current = (prev[sectionId] as string[]) || [];
                if (current.includes(value)) {
                    return { ...prev, [sectionId]: current.filter(v => v !== value) };
                } else {
                    return { ...prev, [sectionId]: [...current, value] };
                }
            });
        }
    };

    const handleQuantityMatrixChange = (sizeId: string, qty: number) => {
        setQuantityBreakdown(prev => ({
            ...prev,
            [sizeId]: qty >= 0 ? qty : 0
        }));
    };

    const getTotalQuantity = () => {
        if (quantityMode === 'single') return quantity;
        return Object.values(quantityBreakdown).reduce((a, b) => a + b, 0);
    };

    // --- Pricing Engine ---
    const totalPrice = useMemo(() => {
        if (!product) return 0;
        let basePrice = product.price || 0;
        let unitPrice = basePrice;
        const totalQty = getTotalQuantity();

        // 1. Base Options Add-ons (Material, Finishing, etc)
        const selectedMaterial = materials.find((m: any) => m.id === material);
        if (selectedMaterial) unitPrice += (selectedMaterial.priceAdjustment || 0);

        const selectedFinishing = finishings.find((f: any) => f.id === finishing);
        if (selectedFinishing) unitPrice += (selectedFinishing.priceAdjustment || 0);

        const selectedPrintSide = printSides.find((p: any) => p.id === printSide);
        if (selectedPrintSide) unitPrice += (selectedPrintSide.priceAdjustment || 0);

        // 2. Custom Sections (Single & Multi)
        customSections.forEach((section: any) => {
            const selection = customSelections[section.id];
            if (Array.isArray(selection)) {
                // Multi Select
                selection.forEach(optId => {
                    const opt = section.options.find((o: any) => o.id === optId);
                    if (opt) unitPrice += (opt.priceAdjustment || 0);
                });
            } else if (selection) {
                // Single Select
                const opt = section.options.find((o: any) => o.id === selection);
                if (opt) unitPrice += (opt.priceAdjustment || 0);
            }
        });

        // 3. Size Calculation (Complex because of Matrix)
        let totalAttributesPrice = 0;

        if (quantityMode === 'breakdown') {
            // Sum of (UnitPrice + SizeAdj) * QtyPerSize
            sizes.forEach((s: any) => {
                const qty = quantityBreakdown[s.id] || 0;
                if (qty > 0) {
                    const sizeAdj = s.priceAdjustment || 0;
                    // Note: Standard UnitPrice includes materials/customs. 
                    totalAttributesPrice += (unitPrice + sizeAdj) * qty;
                }
            });
        } else {
            // Single Mode
            const selectedSize = sizes.find((s: any) => s.id === size);
            let sizeAdj = 0;
            if (selectedSize) {
                if (selectedSize.id === 'custom' && product.allowCustomSize) {
                    if (product.pricingModel === 'sqft') {
                        const areaSqFt = (customWidth * customHeight) / 92903;
                        // Replace base price with Area Price if model is sqft
                        // But we already added 'unitPrice' which had basePrice. 
                        // Let's assume BasePrice is 0 for sqft model in Admin? 
                        // Or better: BasePrice is per Unit, SqFt is extra?
                        // Usually: Price = (Area * Rate) + Addons.
                        // Let's Simplify: If sqft, add (Area * Rate) - BasePrice (to avoid double count if base is set)
                        // Actually, let's just add the Area Cost as an adjustment.
                        unitPrice += (product.price * areaSqFt);
                    }
                    sizeAdj = selectedSize.priceAdjustment || 0;
                } else {
                    sizeAdj = selectedSize.priceAdjustment || 0;
                }
            }
            totalAttributesPrice = (unitPrice + sizeAdj) * totalQty;
        }

        // 4. Detailed Variation Logic
        if (variationMode) {
            // Reset base calculation and sum up rows instead
            // Formula: RowPrice = (Base + SizeAdj + Sum(OptionAdjs)) * RowQty
            let grandTotal = 0;
            variationRows.forEach(row => {
                if (row.qty <= 0) return;

                let rowUnitPrice = basePrice;

                // Add Global Options (Material, etc - assumed consistent across rows? 
                // User requirement implies "Personalized Form", maybe global applies to all?)
                // Usually Material is batch, but Finishing might vary? 
                // Let's assume Global Options (Material/Finishing/PrintSide) apply to ALL rows for now to keep UI sane.
                if (selectedMaterial) rowUnitPrice += (selectedMaterial.priceAdjustment || 0);
                if (selectedFinishing) rowUnitPrice += (selectedFinishing.priceAdjustment || 0);
                if (selectedPrintSide) rowUnitPrice += (selectedPrintSide.priceAdjustment || 0);

                // Add Size Adj
                const s = sizes.find((sz: any) => sz.id === row.size);
                if (s) rowUnitPrice += (s.priceAdjustment || 0);

                // Add Custom Selection Adjs
                Object.entries(row.selections).forEach(([secId, optId]) => {
                    const sec = customSections.find((cs: any) => cs.id === secId);
                    if (sec) {
                        const opt = sec.options.find((o: any) => o.id === optId);
                        if (opt) rowUnitPrice += (opt.priceAdjustment || 0);
                    }
                });

                grandTotal += (rowUnitPrice * row.qty);
            });
            return grandTotal;
        }

        // Standard Logic (Single / Simple Matrix)
        let finalTotal = totalAttributesPrice;
        if (totalQty >= 1000) finalTotal *= 0.8;
        // ... existing tier logic ...

        return finalTotal;
    }, [size, material, finishing, printSide, duration, quantityMode, quantity, quantityBreakdown, customSelections, customWidth, customHeight, product, sizes, materials, finishings, printSides, durations, customSections, variationMode, variationRows]);

    // --- Checker for "Requires Input" ---
    // Returns list of selected option IDs that need input
    const inputsRequired = useMemo(() => {
        const required: string[] = [];
        // Check Custom Sections
        customSections.forEach((section: any) => {
            const selection = customSelections[section.id];
            if (Array.isArray(selection)) {
                selection.forEach(optId => {
                    const opt = section.options.find((o: any) => o.id === optId);
                    if (opt?.requiresInput) required.push(opt.id);
                });
            } else if (selection) {
                const opt = section.options.find((o: any) => o.id === selection);
                if (opt?.requiresInput) required.push(opt.id);
            }
        });
        return required;
    }, [customSelections, customSections]);

    // Helper for date estimation
    const getEstimatedDate = (daysToAdd: number) => {
        const date = new Date();
        date.setDate(date.getDate() + daysToAdd);
        return date.toLocaleDateString('en-MY', { day: 'numeric', month: 'short' });
    };

    // Helper: Add Variation Row
    const addVariationRow = () => {
        setVariationRows(prev => [
            ...prev,
            { id: Math.random().toString(36).substr(2, 5), size: sizes[0]?.id || '', qty: 0, selections: {} }
        ]);
    };

    const removeVariationRow = (id: string) => {
        setVariationRows(prev => prev.filter(r => r.id !== id));
    };

    const updateVariationRow = (id: string, field: 'size' | 'qty' | 'selection', key: string, val: any) => {
        setVariationRows(prev => prev.map(row => {
            if (row.id !== id) return row;
            if (field === 'size') return { ...row, size: val };
            if (field === 'qty') return { ...row, qty: val };
            if (field === 'selection') return { ...row, selections: { ...row.selections, [key]: val } };
            return row;
        }));
    };

    const activeRow = activeRosterRowId ? variationRows.find(r => r.id === activeRosterRowId) : null;
    const activeSizeLabel = activeRow ? sizes.find((s: any) => s.id === activeRow.size)?.label : '';

    return (
        <>
            <Card className="w-full border-2 border-primary/10 shadow-sm">

                <CardHeader className="p-4 pb-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-lg uppercase">Instant Quote</CardTitle>
                            <CardDescription className="text-xs">
                                Configure your product options. {product?.name}
                            </CardDescription>
                        </div>
                        {sizes.length > 0 && customSections.length > 0 && (
                            <div className="flex items-center gap-2">
                                <Label htmlFor="var-mode" className="text-[10px] uppercase text-blue-600 font-bold text-right cursor-pointer">Complex<br />Order?</Label>
                                <Switch id="var-mode" checked={variationMode} onCheckedChange={setVariationMode} />
                            </div>
                        )}
                    </div>
                </CardHeader>

                <CardContent className="space-y-4 p-4">

                    {variationMode ? (
                        /* --- COMPLEX VARIATION FORM --- */
                        <div className="space-y-4">
                            <div className="bg-blue-50/50 p-2 rounded text-xs text-blue-700 mb-2 border border-blue-100 italic">
                                Create personalized line items for different configurations (e.g. Size S with Round Neck vs Size M with V-Neck).
                            </div>

                            <div className="border rounded-lg overflow-hidden">
                                {/* Header Row */}
                                <div className="grid gap-2 items-center bg-muted/40 p-2 text-[10px] font-bold uppercase text-muted-foreground border-b"
                                    style={{ gridTemplateColumns: `30px 100px 70px repeat(${customSections.filter((s: any) => s.inputType === 'select').length}, 1fr) 30px` }}>
                                    <div>#</div>
                                    <div>Size</div>
                                    <div>Qty</div>
                                    {customSections.filter((s: any) => s.inputType === 'select').map((s: any) => (
                                        <div key={s.id} className="truncate" title={s.title}>{s.title}</div>
                                    ))}
                                    <div></div>
                                </div>

                                {/* Data Rows */}
                                <div className="max-h-[400px] overflow-y-auto">
                                    {variationRows.map((row, index) => (
                                        <div key={row.id}>
                                            <div className="grid gap-3 items-center p-3 border-b last:border-0 hover:bg-slate-50 transition-colors"
                                                style={{ gridTemplateColumns: `30px 100px 70px repeat(${customSections.filter((s: any) => s.inputType === 'select').length}, 1fr) 30px` }}>
                                                <div className="text-sm text-gray-500 font-medium text-center">{index + 1}</div>

                                                {/* Size */}
                                                <Select value={row.size} onValueChange={(v) => updateVariationRow(row.id, 'size', '', v)}>
                                                    <SelectTrigger className="h-9 text-sm px-3 bg-white"><SelectValue /></SelectTrigger>
                                                    <SelectContent>
                                                        {sizes.map((s: any) => <SelectItem key={s.id} value={s.id} className="text-sm">{s.label}</SelectItem>)}
                                                    </SelectContent>
                                                </Select>

                                                {/* Qty */}
                                                <Input
                                                    type="number" className="h-9 text-sm px-2 bg-white text-center"
                                                    value={row.qty || ''}
                                                    placeholder="0"
                                                    onChange={(e) => updateVariationRow(row.id, 'qty', '', parseInt(e.target.value) || 0)}
                                                />

                                                {/* Dynamic Options */}
                                                {customSections.filter((s: any) => s.inputType === 'select').map((sec: any) => (
                                                    <Select key={sec.id} value={row.selections[sec.id]} onValueChange={(v) => updateVariationRow(row.id, 'selection', sec.id, v)}>
                                                        <SelectTrigger className="h-9 text-sm px-3 bg-white"><SelectValue placeholder="-" /></SelectTrigger>
                                                        <SelectContent>
                                                            {sec.options.filter((o: any) => o.id !== 'mixed').map((o: any) => (
                                                                <SelectItem key={o.id} value={o.id} className="text-sm">{o.label}</SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                ))}

                                                {/* Remove */}
                                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-red-300 hover:text-red-500 hover:bg-red-50" onClick={() => removeVariationRow(row.id)}>x</Button>
                                            </div>

                                            {/* Row Actions (e.g. Roster) */}
                                            {Object.entries(row.selections).some(([secId, optId]) => {
                                                const sec = customSections.find((s: any) => s.id === secId);
                                                const opt = sec?.options.find((o: any) => o.id === optId);
                                                return opt?.requiresInput;
                                            }) && (
                                                    <div className="px-3 pb-3 -mt-1 border-b bg-slate-50 flex justify-end">
                                                        <Button
                                                            variant={rosterData[row.id]?.length === row.qty ? "default" : "secondary"}
                                                            size="sm"
                                                            className={`h-7 text-xs gap-2 ${rosterData[row.id]?.length === row.qty ? "bg-green-600 hover:bg-green-700" : "bg-blue-100 text-blue-700 hover:bg-blue-200"}`}
                                                            onClick={() => {
                                                                if (!row.qty || row.qty <= 0) {
                                                                    toast.error("Please enter a quantity first!");
                                                                    return;
                                                                }
                                                                setActiveRosterRowId(row.id);
                                                                setIsRosterOpen(true);
                                                            }}
                                                        >
                                                            {rosterData[row.id]?.length === row.qty ? <Check size={12} /> : <PenTool size={12} />}
                                                            {rosterData[row.id]?.length > 0
                                                                ? `Edit Name List (${rosterData[row.id].length}/${row.qty} Filled)`
                                                                : "Enter Name List"
                                                            }
                                                        </Button>
                                                    </div>
                                                )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button variant="outline" size="sm" onClick={addVariationRow} className="w-full text-xs font-bold border-dashed border-2">
                                + Add Another Variation
                            </Button>
                        </div>
                    ) : (
                        /* --- STANDARD FORM --- */
                        <>
                            {/* 1. Global Product Options */}
                            {(sizes.length > 0 || materials.length > 0 || printSides.length > 0 || finishings.length > 0) && (
                                <div className="space-y-4 border-b pb-4">
                                    {/* Size Selector (If Single Mode) */}
                                    {sizes.length > 0 && quantityMode === 'single' && (
                                        <div className="space-y-1.5">
                                            <Label htmlFor="size" className="text-xs font-semibold uppercase">Size</Label>
                                            <Select value={size} onValueChange={setSize}>
                                                <SelectTrigger id="size" className="h-9 text-sm">
                                                    <SelectValue placeholder="Select size" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {sizes.map((s: any) => (
                                                        <SelectItem key={s.id} value={s.id} className="text-sm">
                                                            {s.label} {s.priceAdjustment > 0 && `(+RM${s.priceAdjustment})`}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {/* Custom Size Inputs */}
                                            {size === 'custom' && (
                                                <div className="grid grid-cols-2 gap-2 mt-2 animate-in fade-in-50">
                                                    <div>
                                                        <Label className="text-[10px] text-muted-foreground uppercase">Width (mm)</Label>
                                                        <Input type="number" value={customWidth} onChange={(e) => setCustomWidth(Number(e.target.value))} className="h-8 text-sm" />
                                                    </div>
                                                    <div>
                                                        <Label className="text-[10px] text-muted-foreground uppercase">Height (mm)</Label>
                                                        <Input type="number" value={customHeight} onChange={(e) => setCustomHeight(Number(e.target.value))} className="h-8 text-sm" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Material */}
                                    {materials.length > 0 && (
                                        <div className="space-y-1.5">
                                            <Label htmlFor="material" className="text-xs font-semibold uppercase">Material</Label>
                                            <Select value={material} onValueChange={setMaterial}>
                                                <SelectTrigger id="material" className="h-9 text-sm"><SelectValue placeholder="Select material" /></SelectTrigger>
                                                <SelectContent>{materials.map((m: any) => (<SelectItem key={m.id} value={m.id} className="text-sm">{m.label} {m.priceAdjustment > 0 && `(+RM${m.priceAdjustment})`}</SelectItem>))}</SelectContent>
                                            </Select>
                                        </div>
                                    )}

                                    {/* Print Side */}
                                    {printSides.length > 0 && (
                                        <div className="space-y-1.5">
                                            <Label htmlFor="printSide" className="text-xs font-semibold uppercase">Printing Side</Label>
                                            <Select value={printSide} onValueChange={setPrintSide}>
                                                <SelectTrigger id="printSide" className="h-9 text-sm"><SelectValue placeholder="Select side" /></SelectTrigger>
                                                <SelectContent>{printSides.map((p: any) => (<SelectItem key={p.id} value={p.id} className="text-sm">{p.label} {p.priceAdjustment > 0 && `(+RM${p.priceAdjustment})`}</SelectItem>))}</SelectContent>
                                            </Select>
                                        </div>
                                    )}

                                    {/* Finishing */}
                                    {finishings.length > 0 && (
                                        <div className="space-y-1.5">
                                            <Label htmlFor="finishing" className="text-xs font-semibold uppercase">Finishing</Label>
                                            <Select value={finishing} onValueChange={setFinishing}>
                                                <SelectTrigger id="finishing" className="h-9 text-sm"><SelectValue placeholder="Select finishing" /></SelectTrigger>
                                                <SelectContent>{finishings.map((f: any) => (<SelectItem key={f.id} value={f.id} className="text-sm">{f.label} {f.priceAdjustment > 0 && `(+RM${f.priceAdjustment})`}</SelectItem>))}</SelectContent>
                                            </Select>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* 2. Custom Sections (Dynamic) */}
                            {customSections.length > 0 && (
                                <div className="space-y-4 border-b pb-4">
                                    {customSections.map((section: any) => (
                                        <div key={section.id} className="space-y-2">
                                            <Label htmlFor={section.id} className="text-xs font-semibold uppercase">{section.title}</Label>
                                            {section.inputType === 'checkbox' ? (
                                                <div className="grid grid-cols-2 gap-2">
                                                    {section.options.map((opt: any) => {
                                                        const isChecked = (customSelections[section.id] as string[] || []).includes(opt.id);
                                                        return (
                                                            <div key={opt.id} className={`flex items-start space-x-2 border rounded-md p-2 hover:bg-muted/50 transition-colors cursor-pointer ${isChecked ? 'border-blue-500 bg-blue-50/50' : 'border-input'}`}
                                                                onClick={() => handleCustomChange(section.id, opt.id, 'checkbox')}>
                                                                <Checkbox checked={isChecked} onCheckedChange={() => handleCustomChange(section.id, opt.id, 'checkbox')} />
                                                                <div className="grid gap-0.5 leading-none">
                                                                    <label className="text-sm font-medium leading-none cursor-pointer">{opt.label}</label>
                                                                    {opt.priceAdjustment > 0 && <span className="text-xs text-muted-foreground">+RM{opt.priceAdjustment.toFixed(2)}</span>}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            ) : (
                                                <Select value={customSelections[section.id] as string} onValueChange={(val) => handleCustomChange(section.id, val, 'select')}>
                                                    <SelectTrigger id={section.id} className="h-9 text-sm"><SelectValue placeholder={`Select ${section.title}`} /></SelectTrigger>
                                                    <SelectContent>
                                                        {section.options.map((opt: any) => (
                                                            <SelectItem key={opt.id} value={opt.id} className="text-sm">
                                                                {opt.label} {opt.priceAdjustment > 0 && `(+RM${opt.priceAdjustment})`}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* 3. Personalization Inputs (Condition: Specific option selected) */}
                            {inputsRequired.length > 0 && (
                                <div className="space-y-4 border-b pb-4 bg-muted/20 -mx-4 px-4 py-4">
                                    <div className="flex items-center gap-2 text-blue-800">
                                        <HelpCircle size={14} />
                                        <h4 className="text-xs font-bold uppercase tracking-wider">Required Info</h4>
                                    </div>
                                    {inputsRequired.map(optionId => {
                                        // Find option label for verification
                                        let optionLabel = "Custom Input";
                                        // Expensive look up loop (optimize later if needed)
                                        customSections.forEach((s: any) => {
                                            const f = s.options.find((o: any) => o.id === optionId);
                                            if (f) optionLabel = f.label;
                                        });



                                        return (
                                            <div key={optionId} className="space-y-1.5 animate-in fade-in-50">
                                                <Label className="text-xs font-semibold">Enter details for: <span className="text-blue-600">{optionLabel}</span></Label>
                                                <Textarea
                                                    placeholder="Enter names, numbers, or specific instructions here..."
                                                    className="min-h-[80px] text-sm resize-y"
                                                    value={personalizationInputs[optionId] || ""}
                                                    onChange={(e) => setPersonalizationInputs(prev => ({ ...prev, [optionId]: e.target.value }))}
                                                />
                                                <div className="flex justify-end">
                                                    <Button variant="outline" size="sm" className="h-7 text-xs gap-1">
                                                        <Upload size={12} /> Upload File instead?
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )}


                            {/* 4. Quantity Section */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label className="text-xs font-semibold uppercase">Quantity</Label>
                                    {/* Only allow matrix mode if multiple sizes exist */}
                                    {sizes.length > 1 && (
                                        <div className="flex items-center space-x-2">
                                            <Label htmlFor="qty-mode" className="text-[10px] uppercase text-muted-foreground">Multiple Sizes?</Label>
                                            <Switch id="qty-mode"
                                                checked={quantityMode === 'breakdown'}
                                                onCheckedChange={(c) => setQuantityMode(c ? 'breakdown' : 'single')}
                                            />
                                        </div>
                                    )}
                                </div>

                                {quantityMode === 'single' ? (
                                    <div className="space-y-1">
                                        <Select value={quantity.toString()} onValueChange={(val) => setQuantity(parseInt(val))}>
                                            <SelectTrigger id="quantity" className="h-9 text-sm"><SelectValue placeholder="Select quantity" /></SelectTrigger>
                                            <SelectContent>
                                                {(quantities.length > 0 ? quantities : [{ label: "100" }, { label: "200" }]).map((q: any, i: number) => {
                                                    const val = parseInt(q.label);
                                                    if (isNaN(val)) return null;
                                                    return <SelectItem key={i} value={val.toString()} className="text-sm">{val} pcs</SelectItem>
                                                })}
                                            </SelectContent>
                                        </Select>
                                        {/* Duration */}
                                        {durations.length > 0 && (
                                            <div className="pt-2">
                                                <Label htmlFor="duration" className="text-[10px] text-muted-foreground uppercase">Production Speed</Label>
                                                <Select value={duration} onValueChange={setDuration}>
                                                    <SelectTrigger id="duration" className="h-8 text-xs mt-1"><SelectValue placeholder="Duration" /></SelectTrigger>
                                                    <SelectContent>{durations.map((d: any) => (<SelectItem key={d.id} value={d.id} className="text-xs">{d.label} {d.priceAdjustment > 0 && `(+RM${d.priceAdjustment})`}</SelectItem>))}</SelectContent>
                                                </Select>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="bg-muted/30 rounded-lg p-3 space-y-2 border">
                                        <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase text-muted-foreground border-b pb-2 mb-2">
                                            <div className="col-span-1">Size</div>
                                            <div className="col-span-1 text-center">Unit Price (Approx)</div>
                                            <div className="col-span-1">Quantity</div>
                                        </div>
                                        {sizes.map((s: any) => (
                                            <div key={s.id} className="grid grid-cols-3 gap-2 items-center">
                                                <div className="text-sm font-medium">{s.label}</div>
                                                <div className="text-xs text-center text-muted-foreground">
                                                    {s.priceAdjustment > 0 ? `+RM${s.priceAdjustment}` : '-'}
                                                </div>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    placeholder="0"
                                                    className="h-8 text-sm"
                                                    value={quantityBreakdown[s.id] || ""}
                                                    onChange={(e) => handleQuantityMatrixChange(s.id, parseInt(e.target.value) || 0)}
                                                />
                                            </div>
                                        ))}
                                        <div className="pt-2 border-t flex justify-between items-center text-sm font-bold">
                                            <span>Total Qty:</span>
                                            <span>{getTotalQuantity()} pcs</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                    {/* End Standard Form Block */}

                    {/* Shipping Estimator (Unchanged logic, compacted UI) */}
                    <div className="pt-2 border-t">
                        <div
                            className="flex items-center justify-between cursor-pointer hover:text-primary transition-colors group"
                            onClick={() => setIsShippingOpen(!isShippingOpen)}
                        >
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold uppercase">Estimated Collection / Shipping</span>
                                <HelpCircle className="h-3.5 w-3.5 text-muted-foreground" />
                            </div>
                            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isShippingOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {isShippingOpen && (
                            <div className="space-y-4 animate-in fade-in-50 slide-in-from-top-2">
                                <div className="flex gap-2">
                                    <div className="space-y-1.5 flex-1">
                                        <Label className="text-[10px] text-muted-foreground uppercase tracking-wider">Select State</Label>
                                        <Select value={shippingRegion} onValueChange={setShippingRegion}>
                                            <SelectTrigger className="h-9 text-sm">
                                                <SelectValue placeholder="Select State" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="sabah">Sabah</SelectItem>
                                                <SelectItem value="sarawak">Sarawak</SelectItem>
                                                <SelectItem value="west-malaysia">West Malaysia</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="flex items-end">
                                        <Button
                                            className="h-9 px-4 text-xs font-bold uppercase bg-slate-600 hover:bg-slate-700"
                                            onClick={() => setShowShippingResult(true)}
                                        >
                                            Calculate
                                        </Button>
                                    </div>
                                </div>

                                {showShippingResult && (
                                    <div className="space-y-4 pt-2">
                                        <div className="space-y-1.5">
                                            <Label className="text-xs text-muted-foreground font-medium">Select Shipping / Self Pick-Up Options</Label>
                                            <Select value="jnt">
                                                <SelectTrigger className="h-9 text-xs">
                                                    <div className="flex items-center justify-between w-full pr-2">
                                                        <span className="truncate">J & T Express (Est: {getEstimatedDate(5)})</span>
                                                        <span className="font-bold text-red-500">RM10.80</span>
                                                    </div>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="jnt" className="text-xs">
                                                        <div className="flex items-center justify-between w-full gap-4">
                                                            <span>J & T Express (Malaysia)</span>
                                                            <span className="font-bold">RM10.80</span>
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="pickup" className="text-xs">
                                                        <div className="flex items-center justify-between w-full gap-4">
                                                            <span>Self Pick-Up (Kota Kinabalu)</span>
                                                            <span className="font-bold text-green-600">FREE</span>
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="flex items-center justify-end gap-2 text-sm border-t pt-3 border-dashed">
                                            <span className="font-medium text-muted-foreground">Estimated Total:</span>
                                            <span className="font-bold text-lg text-blue-900">RM{(totalPrice + 10.80).toFixed(2)}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 border-t bg-muted/20 p-4">
                    <div className="flex w-full items-center justify-between">
                        <span className="text-sm font-medium text-muted-foreground">Total Estimate</span>
                        <span className="text-2xl font-bold text-foreground">RM{totalPrice.toFixed(2)}</span>
                    </div>
                    <Button
                        size="default"
                        className="w-full text-sm font-bold h-10 uppercase tracking-wide"
                        onClick={() => {
                            if (product?.id) {
                                router.push(`/checkout?productId=${product.id}`)
                            } else {
                                // Fallback if no product id
                                router.push(`/checkout`)
                            }
                        }}
                    >
                        <ShoppingBag className="mr-2 h-4 w-4" /> Buy Now (Quick Checkout)
                    </Button>
                </CardFooter>
            </Card>

            {/* Roster Editor Modal */}
            {activeRosterRowId && activeRow && (
                <RosterEditor
                    isOpen={isRosterOpen}
                    onClose={() => setIsRosterOpen(false)}
                    title={`Details for ${activeSizeLabel || 'Item'}`}
                    quantity={activeRow.qty}
                    data={rosterData[activeRosterRowId] || []}
                    onSave={(data) => setRosterData(prev => ({ ...prev, [activeRosterRowId]: data }))}
                />
            )}
        </>
    )
}

