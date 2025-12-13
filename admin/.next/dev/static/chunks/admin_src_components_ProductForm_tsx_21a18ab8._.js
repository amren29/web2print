(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/admin/src/components/ProductForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/admin/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/admin/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/admin/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/admin/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/admin/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/admin/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/admin/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProductForm({ initialData, isEditing = false }) {
    _s();
    // General Info State
    const [productName, setProductName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.name || "");
    const [subtitle, setSubtitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.subtitle || "");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.description || "");
    const [basePrice, setBasePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.price || 0);
    const [stock, setStock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.stock || 0);
    const [pricingModel, setPricingModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.pricingModel || "fixed"); // fixed | sqft
    const [allowCustomSize, setAllowCustomSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.allowCustomSize || false);
    const [measurementUnit, setMeasurementUnit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.measurementUnit || "mm");
    const [tags, setTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array.isArray(initialData?.tags) ? initialData.tags : initialData?.tags ? initialData.tags.split(',').map({
        "ProductForm.useState": (t)=>t.trim()
    }["ProductForm.useState"]) : []);
    const [currentTag, setCurrentTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.images || []);
    // Pricing Engine State
    const [sizes, setSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.sizes || [
        {
            id: "1",
            label: "",
            priceAdjustment: 0
        }
    ]);
    const [materials, setMaterials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.materials || [
        {
            id: "1",
            label: "",
            priceAdjustment: 0
        }
    ]);
    const [finishings, setFinishings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.finishings || [
        {
            id: "1",
            label: "",
            priceAdjustment: 0
        }
    ]);
    const [durations, setDurations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.durations || [
        {
            id: "1",
            label: "",
            priceAdjustment: 0
        }
    ]);
    const [quantities, setQuantities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.quantities || [
        {
            id: "1",
            label: "",
            priceAdjustment: 0
        }
    ]);
    const [department, setDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.department || "standard"); // New Department State
    // Custom Options State
    const [customSections, setCustomSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.customSections || []);
    const [newSectionName, setNewSectionName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAddingSection, setIsAddingSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [printSides, setPrintSides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData?.printSides || [
        {
            id: "1",
            label: "",
            priceAdjustment: 0
        }
    ]);
    // Helpers
    const addOption = (setter)=>{
        setter((prev)=>[
                ...prev,
                {
                    id: Math.random().toString(36).substr(2, 9),
                    label: "",
                    priceAdjustment: 0
                }
            ]);
    };
    const removeOption = (setter, id)=>{
        setter((prev)=>prev.filter((item)=>item.id !== id));
    };
    const updateOption = (setter, id, field, value)=>{
        setter((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    [field]: value
                } : item));
    };
    // Custom Section Helpers
    const addCustomSection = ()=>{
        if (!newSectionName.trim()) return;
        setCustomSections((prev)=>[
                ...prev,
                {
                    id: Math.random().toString(36).substr(2, 9),
                    title: newSectionName,
                    inputType: 'select',
                    options: [
                        {
                            id: Math.random().toString(36).substr(2, 9),
                            label: "",
                            priceAdjustment: 0,
                            requiresInput: false
                        }
                    ]
                }
            ]);
        setNewSectionName("");
        setIsAddingSection(false);
    };
    const removeCustomSection = (sectionId)=>{
        setCustomSections((prev)=>prev.filter((s)=>s.id !== sectionId));
    };
    const addCustomOption = (sectionId)=>{
        setCustomSections((prev)=>prev.map((section)=>{
                if (section.id === sectionId) {
                    return {
                        ...section,
                        options: [
                            ...section.options,
                            {
                                id: Math.random().toString(36).substr(2, 9),
                                label: "",
                                priceAdjustment: 0
                            }
                        ]
                    };
                }
                return section;
            }));
    };
    const removeCustomOption = (sectionId, optionId)=>{
        setCustomSections((prev)=>prev.map((section)=>{
                if (section.id === sectionId) {
                    return {
                        ...section,
                        options: section.options.filter((opt)=>opt.id !== optionId)
                    };
                }
                return section;
            }));
    };
    const updateCustomSectionConfig = (sectionId, field, value)=>{
        setCustomSections((prev)=>prev.map((section)=>{
                if (section.id === sectionId) return {
                    ...section,
                    [field]: value
                };
                return section;
            }));
    };
    const updateCustomOption = (sectionId, optionId, field, value)=>{
        setCustomSections((prev)=>prev.map((section)=>{
                if (section.id === sectionId) {
                    return {
                        ...section,
                        options: section.options.map((opt)=>opt.id === optionId ? {
                                ...opt,
                                [field]: value
                            } : opt)
                    };
                }
                return section;
            }));
    };
    const handleTagKeyDown = (e)=>{
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            const tag = currentTag.trim().replace(/^#/, ''); // Remove # if user typed it
            if (tag && !tags.includes(tag)) {
                setTags([
                    ...tags,
                    tag
                ]);
                setCurrentTag("");
            }
        } else if (e.key === 'Backspace' && !currentTag && tags.length > 0) {
            setTags(tags.slice(0, -1));
        }
    };
    const removeTag = (index)=>{
        setTags(tags.filter((_, i)=>i !== index));
    };
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            if (images.length >= 5) {
                __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Maximum 5 images allowed");
                return;
            }
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setImages((prev)=>[
                        ...prev,
                        reader.result
                    ]);
            };
            reader.readAsDataURL(file);
        }
    };
    const removeImage = (index)=>{
        setImages((prev)=>prev.filter((_, i)=>i !== index));
    };
    // Helper: Apply Department Presets
    const handleDepartmentChange = (dept)=>{
        setDepartment(dept);
        // IDs of sections that are managed by presets
        const presetIds = [
            'neck',
            'sleeve',
            'personalization',
            'print-location'
        ];
        // 1. Remove all existing preset sections to start clean
        // We keep any custom sections the user manualy added (random IDs)
        let newSections = customSections.filter((s)=>!presetIds.includes(s.id));
        // 2. Add new presets based on selection
        if (dept === 'sublimation') {
            newSections = [
                ...newSections,
                {
                    id: "neck",
                    title: "Neck Type",
                    inputType: 'select',
                    options: [
                        {
                            id: "round",
                            label: "Round Neck",
                            priceAdjustment: 0
                        },
                        {
                            id: "vneck",
                            label: "V-Neck",
                            priceAdjustment: 0
                        },
                        {
                            id: "collar",
                            label: "Collar (Polo)",
                            priceAdjustment: 10
                        }
                    ]
                },
                {
                    id: "sleeve",
                    title: "Sleeve Type",
                    inputType: 'select',
                    options: [
                        {
                            id: "short",
                            label: "Short Sleeve",
                            priceAdjustment: 0
                        },
                        {
                            id: "long",
                            label: "Long Sleeve",
                            priceAdjustment: 5
                        }
                    ]
                },
                {
                    id: "personalization",
                    title: "Personalization",
                    inputType: 'select',
                    options: [
                        {
                            id: "none",
                            label: "No Personalization",
                            priceAdjustment: 0
                        },
                        {
                            id: "names",
                            label: "Add Individual Names",
                            priceAdjustment: 5,
                            requiresInput: true
                        },
                        {
                            id: "names-numbers",
                            label: "Add Names & Numbers",
                            priceAdjustment: 10,
                            requiresInput: true
                        }
                    ]
                }
            ];
        } else if (dept === 'dtf') {
            newSections = [
                ...newSections,
                {
                    id: "print-location",
                    title: "Print Locations",
                    inputType: 'checkbox',
                    options: [
                        {
                            id: "front-logo",
                            label: "Front Left Logo",
                            priceAdjustment: 5
                        },
                        {
                            id: "front-big",
                            label: "Front Big (A3)",
                            priceAdjustment: 15
                        },
                        {
                            id: "back-big",
                            label: "Back Big (A3)",
                            priceAdjustment: 15
                        }
                    ]
                },
                {
                    id: "personalization",
                    title: "Add-ons",
                    inputType: 'select',
                    options: [
                        {
                            id: "none",
                            label: "None",
                            priceAdjustment: 0
                        },
                        {
                            id: "name-list",
                            label: "Individual Names (Back)",
                            priceAdjustment: 8,
                            requiresInput: true
                        }
                    ]
                }
            ];
        }
        setCustomSections(newSections);
        // 3. Auto-populate Sizes for Apparel
        if (dept === 'sublimation' || dept === 'dtf') {
            setSizes([
                {
                    id: "xs",
                    label: "XS",
                    priceAdjustment: 0
                },
                {
                    id: "s",
                    label: "S",
                    priceAdjustment: 0
                },
                {
                    id: "m",
                    label: "M",
                    priceAdjustment: 0
                },
                {
                    id: "l",
                    label: "L",
                    priceAdjustment: 0
                },
                {
                    id: "xl",
                    label: "XL",
                    priceAdjustment: 0
                },
                {
                    id: "2xl",
                    label: "2XL",
                    priceAdjustment: 2
                },
                {
                    id: "3xl",
                    label: "3XL",
                    priceAdjustment: 4
                } // Example surcharge
            ]);
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({
            productName,
            description,
            department,
            subtitle,
            basePrice,
            stock,
            pricingModel,
            allowCustomSize,
            measurementUnit,
            tags,
            sizes,
            materials,
            finishings,
            durations,
            quantities,
            printSides,
            customSections
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Product saved successfully!");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-8 max-w-5xl mx-auto pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-800",
                                children: isEditing ? "Edit Product" : "Add New Product"
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 316,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm",
                                children: "Configure product details and pricing options."
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 319,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 315,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/products",
                                className: "px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 322,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 326,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Save Product"
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 327,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 325,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 321,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/ProductForm.tsx",
                lineNumber: 314,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-semibold text-gray-800 border-b pb-2",
                        children: "General Information"
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 334,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Product Name"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 339,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: productName,
                                                onChange: (e)=>setProductName(e.target.value),
                                                placeholder: "e.g. Standard Business Card",
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 340,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 338,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Subtitle Product"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 350,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: subtitle,
                                                onChange: (e)=>setSubtitle(e.target.value),
                                                placeholder: "e.g. High quality, full color printing",
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 351,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 349,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 360,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: description,
                                                onChange: (e)=>setDescription(e.target.value),
                                                placeholder: "Detailed product description...",
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 361,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 359,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Department / Type"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 370,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: department,
                                                onChange: (e)=>handleDepartmentChange(e.target.value),
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "standard",
                                                        children: "Standard (General Printing)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "sublimation",
                                                        children: "Apparel - Full Sublimation"
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 377,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "dtf",
                                                        children: "Apparel - DTF Printing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "large-format",
                                                        children: "Large Format"
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 371,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: "Selecting an apparel department will pre-load standard options."
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 381,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 369,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700",
                                                        children: "Pricing Model"
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: pricingModel,
                                                        onChange: (e)=>setPricingModel(e.target.value),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "fixed",
                                                                children: "Fixed Price (Per Unit)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 392,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "sqft",
                                                                children: "Area Based (Per SqFt)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 385,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700",
                                                                children: pricingModel === 'sqft' ? 'Base Rate (RM / sqft)' : 'Base Price (RM)'
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 398,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "relative",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm",
                                                                        children: "RM"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                        lineNumber: 402,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "number",
                                                                        value: basePrice,
                                                                        onChange: (e)=>setBasePrice(parseFloat(e.target.value) || 0),
                                                                        placeholder: "0.00",
                                                                        className: "w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-sm font-medium text-gray-700",
                                                                children: "Stock Quantity"
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "number",
                                                                value: stock,
                                                                onChange: (e)=>setStock(parseInt(e.target.value) || 0),
                                                                placeholder: "0",
                                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 414,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 396,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 384,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Tags (SEO)"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 426,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-2 p-1",
                                                children: tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200",
                                                        children: [
                                                            "#",
                                                            tag,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>removeTag(index),
                                                                className: "text-gray-400 hover:text-red-500 transition-colors ml-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 427,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: currentTag,
                                                onChange: (e)=>setCurrentTag(e.target.value),
                                                onKeyDown: handleTagKeyDown,
                                                placeholder: "Type tag and press Enter (e.g. businesscard)",
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 441,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 425,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 337,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-gray-700",
                                            children: [
                                                "Product Images (",
                                                images.length,
                                                "/5)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 455,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 454,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-5 gap-4",
                                        children: [
                                            images.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-square border-2 border-gray-200 rounded-xl overflow-hidden group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: img,
                                                            alt: `Product ${index + 1}`,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeImage(index),
                                                            className: "absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 33
                                                }, this)),
                                            images.length < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors aspect-square",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-blue-50 p-3 rounded-full mb-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                            size: 20,
                                                            className: "text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-gray-500 font-medium",
                                                        children: "Add Image"
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 477,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        onChange: handleImageUpload,
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 473,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 458,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 453,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 336,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/ProductForm.tsx",
                lineNumber: 333,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-gray-800",
                        children: "Pricing Engine Configuration"
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 493,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {
                        title: "1. Size",
                        description: "Add available sizes for this product (e.g. A4, A5).",
                        options: sizes,
                        setOptions: setSizes,
                        addOption: ()=>addOption(setSizes),
                        removeOption: (id)=>removeOption(setSizes, id),
                        updateOption: (id, f, v)=>updateOption(setSizes, id, f, v),
                        isSizeConfig: true,
                        department: department,
                        extraHeaderContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: allowCustomSize,
                                            onChange: (e)=>setAllowCustomSize(e.target.checked),
                                            className: "w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 508,
                                            columnNumber: 33
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-700 font-medium",
                                            children: "Allow Customer to Customize Size?"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 514,
                                            columnNumber: 33
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 507,
                                    columnNumber: 29
                                }, void 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm text-gray-600",
                                            children: "Unit:"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 518,
                                            columnNumber: 33
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: measurementUnit,
                                            onChange: (e)=>setMeasurementUnit(e.target.value),
                                            className: "text-sm border border-gray-300 rounded-md px-2 py-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "mm",
                                                    children: "mm"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 37
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "cm",
                                                    children: "cm"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 37
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "inch",
                                                    children: "inch"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 37
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ft",
                                                    children: "ft"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 37
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 519,
                                            columnNumber: 33
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 517,
                                    columnNumber: 29
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                            lineNumber: 506,
                            columnNumber: 25
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 495,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {
                        title: "2. Printing Side",
                        description: "Add printing side options (e.g. Single Sided, Double Sided).",
                        options: printSides,
                        setOptions: setPrintSides,
                        addOption: ()=>addOption(setPrintSides),
                        removeOption: (id)=>removeOption(setPrintSides, id),
                        updateOption: (id, f, v)=>updateOption(setPrintSides, id, f, v)
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 534,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {
                        title: "3. Material",
                        description: "Add material options (e.g. 260gsm Art Card).",
                        options: materials,
                        setOptions: setMaterials,
                        addOption: ()=>addOption(setMaterials),
                        removeOption: (id)=>removeOption(setMaterials, id),
                        updateOption: (id, f, v)=>updateOption(setMaterials, id, f, v)
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 544,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {
                        title: "4. Finishing",
                        description: "Add finishing options (e.g. Matte Lamination, Spot UV).",
                        options: finishings,
                        setOptions: setFinishings,
                        addOption: ()=>addOption(setFinishings),
                        removeOption: (id)=>removeOption(setFinishings, id),
                        updateOption: (id, f, v)=>updateOption(setFinishings, id, f, v)
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 554,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {
                        title: "5. Process Duration",
                        description: "Add production time options (e.g. 2-3 Working Days, Urgent).",
                        options: durations,
                        setOptions: setDurations,
                        addOption: ()=>addOption(setDurations),
                        removeOption: (id)=>removeOption(setDurations, id),
                        updateOption: (id, f, v)=>updateOption(setDurations, id, f, v)
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 564,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {
                        title: "6. Quantity",
                        description: "Define quantity breaks (e.g. 100, 200, 500).",
                        options: quantities,
                        setOptions: setQuantities,
                        addOption: ()=>addOption(setQuantities),
                        removeOption: (id)=>removeOption(setQuantities, id),
                        updateOption: (id, f, v)=>updateOption(setQuantities, id, f, v)
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 574,
                        columnNumber: 17
                    }, this),
                    customSections.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {
                            title: `${7 + index}. ${section.title}`,
                            description: `Custom options for ${section.title}.`,
                            options: section.options,
                            setOptions: ()=>{},
                            addOption: ()=>addCustomOption(section.id),
                            removeOption: (optId)=>removeCustomOption(section.id, optId),
                            updateOption: (optId, f, v)=>updateCustomOption(section.id, optId, f, v),
                            onRemoveSection: [
                                'neck',
                                'sleeve',
                                'personalization',
                                'print-location'
                            ].includes(section.id) ? undefined : ()=>removeCustomSection(section.id),
                            sectionConfig: {
                                inputType: section.inputType,
                                onUpdateConfig: (field, value)=>updateCustomSectionConfig(section.id, field, value)
                            }
                        }, section.id, false, {
                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                            lineNumber: 586,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center",
                        children: !isAddingSection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsAddingSection(true),
                            className: "flex items-center gap-2 text-blue-600 font-medium hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 615,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Add Custom Option Group"
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 616,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                            lineNumber: 610,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-md space-y-3 animate-in fade-in slide-in-from-bottom-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-gray-800",
                                    children: "Add New Option Group"
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 620,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newSectionName,
                                            onChange: (e)=>setNewSectionName(e.target.value),
                                            placeholder: "Group Name (e.g. Eyelets, Folding)",
                                            className: "flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 622,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: addCustomSection,
                                            className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",
                                            children: "Add"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 630,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setIsAddingSection(false),
                                            className: "px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 637,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 621,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                            lineNumber: 619,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 608,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/ProductForm.tsx",
                lineNumber: 492,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/admin/src/components/ProductForm.tsx",
        lineNumber: 311,
        columnNumber: 9
    }, this);
}
_s(ProductForm, "CGseoAlKsxUHndG184Ci28r3vUE=");
_c = ProductForm;
// Reusable Section Component
function PricingSection({ title, description, options, setOptions, addOption, removeOption, updateOption, isSizeConfig = false, extraHeaderContent, onRemoveSection, sectionConfig, department }) {
    const handleFileChange = (e, optionId)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                updateOption(optionId, "image", reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-gray-800",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 701,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 702,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 700,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            onRemoveSection && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onRemoveSection,
                                className: "flex items-center gap-1 text-sm bg-white border border-red-200 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 711,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Remove Group"
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 712,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 706,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addOption,
                                className: "flex items-center gap-1 text-sm bg-white border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-gray-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 720,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Item"
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 721,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 715,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 704,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/ProductForm.tsx",
                lineNumber: 699,
                columnNumber: 13
            }, this),
            extraHeaderContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-blue-50/30 border-b border-gray-100",
                children: extraHeaderContent
            }, void 0, false, {
                fileName: "[project]/admin/src/components/ProductForm.tsx",
                lineNumber: 727,
                columnNumber: 17
            }, this),
            sectionConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 bg-gray-50/50 border-b border-gray-100 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm text-gray-600 font-medium",
                        children: "Selection Type:"
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 734,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-white rounded-lg border p-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>sectionConfig.onUpdateConfig('inputType', 'select'),
                                className: `px-3 py-1 text-xs font-medium rounded-md transition-all ${sectionConfig.inputType === 'select' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'}`,
                                children: "Single Select (Dropdown)"
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 736,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>sectionConfig.onUpdateConfig('inputType', 'checkbox'),
                                className: `px-3 py-1 text-xs font-medium rounded-md transition-all ${sectionConfig.inputType === 'checkbox' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:bg-gray-50'}`,
                                children: "Multi Select (Checkboxes)"
                            }, void 0, false, {
                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                lineNumber: 743,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 735,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/ProductForm.tsx",
                lineNumber: 733,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "cursor-pointer relative group/img flex-shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    className: "hidden",
                                                    onChange: (e)=>handleFileChange(e, option.id)
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 33
                                                }, this),
                                                option.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg border border-gray-200 overflow-hidden relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: option.image,
                                                            alt: "Opt",
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                            lineNumber: 768,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                                size: 14,
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                            lineNumber: 769,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 767,
                                                    columnNumber: 37
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-500 transition-colors bg-gray-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                        lineNumber: 775,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 774,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 759,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: option.label,
                                            onChange: (e)=>updateOption(option.id, "label", e.target.value),
                                            placeholder: "Option Name (e.g. A4)",
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 780,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 757,
                                    columnNumber: 25
                                }, this),
                                isSizeConfig && ![
                                    'sublimation',
                                    'dtf'
                                ].includes(department || "") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs",
                                                    children: "mm"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 792,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: option.width || "",
                                                    onChange: (e)=>updateOption(option.id, "width", parseFloat(e.target.value) || 0),
                                                    placeholder: "W",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 793,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 791,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-400",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 801,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-24 relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs",
                                                    children: "mm"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 803,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: option.height || "",
                                                    onChange: (e)=>updateOption(option.id, "height", parseFloat(e.target.value) || 0),
                                                    placeholder: "H",
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 802,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-32 relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm",
                                            children: "RM"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 816,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: option.priceAdjustment,
                                            onChange: (e)=>updateOption(option.id, "priceAdjustment", parseFloat(e.target.value) || 0),
                                            placeholder: "0.00",
                                            className: "w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                                            lineNumber: 817,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 815,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center",
                                    title: "Does this option require customer input? (e.g. Name list)",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 bg-white cursor-pointer hover:border-blue-500 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-bold ${option.requiresInput ? 'text-blue-600' : 'text-gray-300'}`,
                                                children: "T"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 829,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: option.requiresInput || false,
                                                onChange: (e)=>updateOption(option.id, "requiresInput", e.target.checked),
                                                className: "hidden"
                                            }, void 0, false, {
                                                fileName: "[project]/admin/src/components/ProductForm.tsx",
                                                lineNumber: 830,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 828,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 827,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>removeOption(option.id),
                                    className: "p-2 text-gray-400 hover:text-red-500 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                                        lineNumber: 844,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/admin/src/components/ProductForm.tsx",
                                    lineNumber: 839,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, option.id, true, {
                            fileName: "[project]/admin/src/components/ProductForm.tsx",
                            lineNumber: 756,
                            columnNumber: 21
                        }, this)),
                    options.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-4 text-sm text-gray-400 italic",
                        children: 'No options added yet. Click "Add Item" to start.'
                    }, void 0, false, {
                        fileName: "[project]/admin/src/components/ProductForm.tsx",
                        lineNumber: 850,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/admin/src/components/ProductForm.tsx",
                lineNumber: 754,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/admin/src/components/ProductForm.tsx",
        lineNumber: 698,
        columnNumber: 9
    }, this);
}
_c1 = PricingSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProductForm");
__turbopack_context__.k.register(_c1, "PricingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=admin_src_components_ProductForm_tsx_21a18ab8._.js.map