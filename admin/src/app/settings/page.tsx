"use client";

import { Save, Info, Layout, Type, Phone, MapPin, Globe, Building2 } from "lucide-react";
import { useState, useEffect } from "react";

// Types matching our JSON structure
interface SiteSettings {
    general: {
        storeName: string;
        logoText: string;
        themeColor: string;
        contactEmail: string;
        contactPhone: string;
        address: string;
        facebook: string;
        instagram: string;
        twitter: string;
    };
    hero: {
        title: string;
        subtitle: string;
        buttonText: string;
        buttonLink: string;
    };
    about: {
        title: string;
        description: string;
        mission: string;
    };
    business: {
        operatingHours: string;
        registrationNumber: string;
    };
}

const DEFAULT_SETTINGS: SiteSettings = {
    general: {
        storeName: "Web2Print",
        logoText: "WEB2PRINT",
        themeColor: "blue",
        contactEmail: "",
        contactPhone: "",
        address: "",
        facebook: "",
        instagram: "",
        twitter: ""
    },
    hero: {
        title: "Print Your Vision",
        subtitle: "",
        buttonText: "Browse Products",
        buttonLink: "/products"
    },
    about: {
        title: "",
        description: "",
        mission: ""
    },
    business: {
        operatingHours: "",
        registrationNumber: ""
    }
};

export default function AdminSettingsPage() {
    const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [activeTab, setActiveTab] = useState<"general" | "hero" | "about" | "contact" | "business">("general");

    useEffect(() => {
        fetch("/api/settings")
            .then(res => res.json())
            .then(data => {
                if (data && !data.error) setSettings(data);
                setIsLoading(false);
            })
            .catch(err => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    const handleChange = (section: keyof SiteSettings, field: string, value: string) => {
        setSettings(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const res = await fetch("/api/settings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(settings)
            });
            if (res.ok) alert("Settings saved successfully!");
            else alert("Failed to save settings.");
        } catch (e) {
            alert("Error saving settings.");
        }
        setIsSaving(false);
    };

    if (isLoading) return <div className="p-8">Loading settings...</div>;

    return (
        <div className="max-w-5xl space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800">Branding & Configuration</h2>
                <p className="text-gray-500">Customize your storefront appearance and information.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Sidebar Tabs */}
                <div className="md:col-span-1 space-y-2">
                    {[
                        { id: "general", label: "General & Identity", icon: Globe },
                        { id: "hero", label: "Banner / Hero", icon: Layout },
                        { id: "about", label: "About Us", icon: Info },
                        { id: "contact", label: "Contact Info", icon: Phone },
                        { id: "business", label: "Business Info", icon: Building2 }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`flex items-center gap-3 w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors text-left
                                ${activeTab === tab.id ? "bg-black text-white shadow-md" : "bg-white text-gray-600 hover:bg-gray-50 border border-transparent"}
                            `}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Main Content */}
                <div className="md:col-span-3 bg-white rounded-xl shadow-sm border border-gray-100 p-6">

                    {/* General Settings */}
                    {activeTab === "general" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Store Identity</h3>
                                <div className="grid gap-4">
                                    <Field label="Store Name" value={settings.general.storeName} onChange={(v) => handleChange("general", "storeName", v)} />
                                    <Field label="Logo Text" value={settings.general.logoText} onChange={(v) => handleChange("general", "logoText", v)} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Theme</h3>
                                <div className="grid gap-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-gray-700">Primary Color</label>
                                        <select
                                            value={settings.general.themeColor}
                                            onChange={(e) => handleChange("general", "themeColor", e.target.value)}
                                            className="w-full px-3 py-2 border rounded-lg bg-white"
                                        >
                                            <option value="blue">Blue (Default)</option>
                                            <option value="black">Black & White (Minimal)</option>
                                            <option value="red">Red (Bold)</option>
                                            <option value="green">Green (Nature)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Hero Settings */}
                    {activeTab === "hero" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <div className="bg-gray-50 p-4 rounded-lg border mb-4">
                                <p className="text-xs text-gray-500 uppercase font-bold mb-2">Preview</p>
                                <div className="text-center space-y-2">
                                    <h1 className="text-2xl font-bold">{settings.hero.title}</h1>
                                    <p className="text-sm text-gray-600">{settings.hero.subtitle}</p>
                                    <button className="bg-black text-white text-xs px-3 py-1 rounded">{settings.hero.buttonText}</button>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Homepage Banner</h3>
                            <div className="space-y-4">
                                <Field label="Headline" value={settings.hero.title} onChange={(v) => handleChange("hero", "title", v)} textarea />
                                <Field label="Subtitle" value={settings.hero.subtitle} onChange={(v) => handleChange("hero", "subtitle", v)} textarea />
                                <div className="grid grid-cols-2 gap-4">
                                    <Field label="Button Text" value={settings.hero.buttonText} onChange={(v) => handleChange("hero", "buttonText", v)} />
                                    <Field label="Button Link" value={settings.hero.buttonLink} onChange={(v) => handleChange("hero", "buttonLink", v)} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* About Settings */}
                    {activeTab === "about" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">About Us Section</h3>
                            <div className="space-y-4">
                                <Field label="Main Title" value={settings.about.title} onChange={(v) => handleChange("about", "title", v)} />
                                <Field label="Description" value={settings.about.description} onChange={(v) => handleChange("about", "description", v)} textarea rows={4} />
                                <Field label="Our Mission" value={settings.about.mission} onChange={(v) => handleChange("about", "mission", v)} textarea rows={3} />
                            </div>
                        </div>
                    )}

                    {/* Contact Settings */}
                    {activeTab === "contact" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Field label="Email" value={settings.general.contactEmail} onChange={(v) => handleChange("general", "contactEmail", v)} />
                                <Field label="Phone" value={settings.general.contactPhone} onChange={(v) => handleChange("general", "contactPhone", v)} />
                            </div>
                            <Field label="Address" value={settings.general.address} onChange={(v) => handleChange("general", "address", v)} textarea />

                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mt-8 mb-4">Social Media</h3>
                            <div className="space-y-4">
                                <Field label="Facebook URL" value={settings.general.facebook} onChange={(v) => handleChange("general", "facebook", v)} />
                                <Field label="Instagram URL" value={settings.general.instagram} onChange={(v) => handleChange("general", "instagram", v)} />
                            </div>
                        </div>
                    )}

                    {/* Business Settings */}
                    {activeTab === "business" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <h3 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Business Information</h3>
                            <div className="space-y-4">
                                <Field label="Registration Number" value={settings.business?.registrationNumber || ''} onChange={(v) => handleChange("business", "registrationNumber", v)} />
                                <Field label="Operating Hours" value={settings.business?.operatingHours || ''} onChange={(v) => handleChange("business", "operatingHours", v)} textarea rows={4} />
                            </div>
                        </div>
                    )}

                    {/* Footer Actions */}
                    <div className="pt-6 mt-8 border-t border-gray-100 flex justify-end">
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-medium disabled:opacity-50"
                        >
                            <Save size={18} />
                            <span>{isSaving ? "Saving..." : "Publish Changes"}</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

function Field({ label, value, onChange, textarea, rows = 3 }: { label: string, value: string, onChange: (v: string) => void, textarea?: boolean, rows?: number }) {
    return (
        <div className="space-y-1.5 container-field">
            <label className="text-sm font-semibold text-gray-700">{label}</label>
            {textarea ? (
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={rows}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-sans text-sm"
                />
            ) : (
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black font-sans text-sm"
                />
            )}
        </div>
    );
}
