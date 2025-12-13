"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, CloudUpload, Info, AlertTriangle, Download, X, FileIcon, Check } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, useRef, ChangeEvent, DragEvent } from "react"

export default function UploadArtworkPage() {
    const router = useRouter()

    // File State
    const [files, setFiles] = useState<{ front: File | null, back: File | null }>({
        front: null,
        back: null
    })

    // Preview URLs
    const [previews, setPreviews] = useState<{ front: string | null, back: string | null }>({
        front: null,
        back: null
    })

    // Hidden Input Refs
    const frontInputRef = useRef<HTMLInputElement>(null)
    const backInputRef = useRef<HTMLInputElement>(null)

    const handleFileSelect = (side: 'front' | 'back', file: File) => {
        // Basic validation (e.g., check type or size if needed)
        // For now, accept image/pdf

        // Generate Preview if image
        let previewUrl = null
        if (file.type.startsWith('image/')) {
            previewUrl = URL.createObjectURL(file)
        }

        setFiles(prev => ({ ...prev, [side]: file }))
        setPreviews(prev => ({ ...prev, [side]: previewUrl }))
    }

    const onInputChange = (side: 'front' | 'back', e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(side, e.target.files[0])
        }
    }

    const onDrop = (side: 'front' | 'back', e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelect(side, e.dataTransfer.files[0])
        }
    }

    const onDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const removeFile = (side: 'front' | 'back') => {
        setFiles(prev => ({ ...prev, [side]: null }))

        // Revoke URL to avoid memory leaks
        if (previews[side]) {
            URL.revokeObjectURL(previews[side]!)
        }
        setPreviews(prev => ({ ...prev, [side]: null }))

        // Reset input value so same file can be selected again
        if (side === 'front' && frontInputRef.current) frontInputRef.current.value = ''
        if (side === 'back' && backInputRef.current) backInputRef.current.value = ''
    }

    return (
        <div className="container py-8 max-w-6xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b pb-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold uppercase text-black">Upload Your Design</h1>
                    <span className="text-black text-lg">(Business Cards (Standard))</span>
                </div>
                <Link href="/products/business-cards" className="text-destructive hover:underline text-sm flex items-center gap-1">
                    <ChevronLeft className="h-4 w-4" /> Back
                </Link>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Left Column: Upload Form */}
                <div className="flex-1 space-y-6">
                    {/* Top Action Bar */}
                    <div className="flex justify-end">
                        <Button
                            className="bg-black hover:bg-black/90 text-white rounded-full px-6 transition-transform active:scale-95"
                            onClick={() => router.push('/upload-artwork/editor')}
                            disabled={!files.front} // Require at least front page?
                        >
                            Add to Cart →
                        </Button>
                    </div>

                    {/* Format Selection */}
                    <div className="border p-4 rounded-sm space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                                <Label className="text-black font-normal w-12">Size</Label>
                                <Select defaultValue="89x54">
                                    <SelectTrigger className="w-[200px] h-9">
                                        <SelectValue placeholder="Select size" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="89x54">89 mm (W) x 54 mm</SelectItem>
                                        <SelectItem value="90x55">90 mm (W) x 55 mm</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-black cursor-pointer hover:underline">
                                Supported Format <Info className="h-3 w-3" />
                            </div>
                        </div>
                    </div>

                    {/* Artwork Name */}
                    <div className="border p-4 rounded-sm bg-muted/10">
                        <div className="flex items-center gap-4">
                            <Label className="text-black font-normal w-24">Artwork Name</Label>
                            <Input defaultValue="638592" className="flex-1 h-9 bg-background text-black" />
                            <span className="text-black">*</span>
                        </div>
                    </div>

                    {/* Upload Zones */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Front Page */}
                        <div
                            className={`border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center text-center gap-3 transition-colors min-h-[250px] relative ${files.front ? 'border-primary bg-primary/5' : 'hover:bg-muted/30 cursor-pointer'}`}
                            onDrop={(e) => onDrop('front', e)}
                            onDragOver={onDragOver}
                            onClick={() => !files.front && frontInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                className="hidden"
                                ref={frontInputRef}
                                onChange={(e) => onInputChange('front', e)}
                                accept="image/*,.pdf"
                            />

                            {files.front ? (
                                <div className="w-full h-full flex flex-col items-center justify-center relative animate-in fade-in zoom-in-95 duration-300">
                                    <Button
                                        size="icon"
                                        variant="destructive"
                                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                                        onClick={(e) => { e.stopPropagation(); removeFile('front'); }}
                                    >
                                        <X className="h-3 w-3" />
                                    </Button>

                                    {previews.front ? (
                                        <div className="relative w-full h-32 mb-3 bg-white shadow-sm border rounded overflow-hidden">
                                            <img src={previews.front} className="w-full h-full object-contain" alt="Front Preview" />
                                        </div>
                                    ) : (
                                        <FileIcon className="h-12 w-12 text-primary mb-3" />
                                    )}

                                    <p className="font-bold text-sm text-black truncate max-w-[200px]">{files.front.name}</p>
                                    <p className="text-[10px] text-muted-foreground">{(files.front.size / 1024 / 1024).toFixed(2)} MB</p>
                                    <div className="flex items-center gap-1 text-xs text-green-600 font-bold mt-2">
                                        <Check className="h-3 w-3" /> Uploaded
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <CloudUpload className="h-8 w-8 text-black" />
                                    <div>
                                        <p className="font-bold text-sm text-black uppercase">Front Page</p>
                                        <p className="text-xs text-black mt-1">
                                            Drag a file OR <span className="text-black font-bold">Select File</span>
                                        </p>
                                    </div>
                                    <p className="text-[10px] text-black mt-4">150MB max file size</p>
                                </>
                            )}
                        </div>

                        {/* Back Page */}
                        <div
                            className={`border-2 border-dashed rounded-md p-4 flex flex-col items-center justify-center text-center gap-3 transition-colors min-h-[250px] relative ${files.back ? 'border-primary bg-primary/5' : 'hover:bg-muted/30 cursor-pointer'}`}
                            onDrop={(e) => onDrop('back', e)}
                            onDragOver={onDragOver}
                            onClick={() => !files.back && backInputRef.current?.click()}
                        >
                            <input
                                type="file"
                                className="hidden"
                                ref={backInputRef}
                                onChange={(e) => onInputChange('back', e)}
                                accept="image/*,.pdf"
                            />

                            {files.back ? (
                                <div className="w-full h-full flex flex-col items-center justify-center relative animate-in fade-in zoom-in-95 duration-300">
                                    <Button
                                        size="icon"
                                        variant="destructive"
                                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full"
                                        onClick={(e) => { e.stopPropagation(); removeFile('back'); }}
                                    >
                                        <X className="h-3 w-3" />
                                    </Button>

                                    {previews.back ? (
                                        <div className="relative w-full h-32 mb-3 bg-white shadow-sm border rounded overflow-hidden">
                                            <img src={previews.back} className="w-full h-full object-contain" alt="Back Preview" />
                                        </div>
                                    ) : (
                                        <FileIcon className="h-12 w-12 text-primary mb-3" />
                                    )}

                                    <p className="font-bold text-sm text-black truncate max-w-[200px]">{files.back.name}</p>
                                    <p className="text-[10px] text-muted-foreground">{(files.back.size / 1024 / 1024).toFixed(2)} MB</p>
                                    <div className="flex items-center gap-1 text-xs text-green-600 font-bold mt-2">
                                        <Check className="h-3 w-3" /> Uploaded
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <CloudUpload className="h-8 w-8 text-black" />
                                    <div>
                                        <p className="font-bold text-sm text-black uppercase">Back Page</p>
                                        <p className="text-xs text-black mt-1">
                                            Drag a file OR <span className="text-black font-bold">Select File</span>
                                        </p>
                                    </div>
                                    <p className="text-[10px] text-black mt-4">150MB max file size</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Guidelines */}
                <div className="lg:w-[400px] space-y-6">
                    <Tabs defaultValue="description" className="w-full">
                        <TabsList className="w-full justify-start h-auto bg-transparent p-0 border-b rounded-none mb-4">
                            <TabsTrigger
                                value="description"
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-destructive data-[state=active]:text-destructive data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 font-medium"
                            >
                                Description
                            </TabsTrigger>
                            <TabsTrigger
                                value="templates"
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-destructive data-[state=active]:text-destructive data-[state=active]:bg-transparent data-[state=active]:shadow-none px-4 py-2 font-medium"
                            >
                                Templates
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="description" className="space-y-6">
                            {/* Warning Banner */}
                            <div className="bg-yellow-300 p-4 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWwyIDE4SDF6IiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-10"></div>
                                <div className="relative flex gap-4">
                                    <div className="bg-red-600 text-white p-2 flex flex-col items-center justify-center w-16 h-16 shrink-0 rounded-sm shadow-sm border-2 border-white">
                                        <AlertTriangle className="h-8 w-8 fill-yellow-400 text-red-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-black text-lg uppercase leading-none mb-1">Download & Use Our Template</h3>
                                        <p className="font-bold text-sm uppercase leading-tight mb-2">If you wish to upload design.</p>
                                        <p className="text-xs leading-tight">Failing to do so will lead to delay in your production completion days.</p>
                                    </div>
                                </div>
                                <div className="h-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] w-full mt-4 opacity-80" style={{ height: '20px' }}></div>
                            </div>

                            <div className="text-sm text-black space-y-4 leading-relaxed">
                                <p>
                                    Please download and use our template or refer to our size for designing and uploading your artwork. Failing to do so will lead to delay in your production completion days.
                                </p>
                                <p>
                                    We will check your artwork based on <strong className="text-black">3 elements(Bleed size, actual size & safe zone size)</strong>. We reserve the rights to reject any given artwork that do not follow our printing specification, and you will need to re-upload the modified artwork again for us.
                                </p>
                                <p>
                                    Please also check and refer to our <strong className="text-black">artwork guidelines</strong> for better understanding.
                                </p>
                                <div className="pt-2">
                                    <strong className="text-black block mb-1">Full Bleed Size (Starting document size)</strong>
                                    <p>92mm x 56mm</p>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="templates" className="space-y-4">
                            <div className="grid gap-2">
                                <Button variant="outline" className="justify-start">
                                    <Download className="mr-2 h-4 w-4" /> Business Card Landscape
                                </Button>
                                <Button variant="outline" className="justify-start">
                                    <Download className="mr-2 h-4 w-4" /> Business Card Portrait
                                </Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
