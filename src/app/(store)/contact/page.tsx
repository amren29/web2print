import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

import settings from "@/config/site-settings.json";

export default function ContactPage() {
    return (
        <div className="container py-12 lg:py-16 space-y-12">

            <div className="flex flex-col gap-4 max-w-3xl mx-auto text-left">
                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl uppercase">
                    Get in Touch
                </h1>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                    Have a custom project in mind or need help with an order?
                    Our printing experts are ready to assist you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Contact Form */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="space-y-1.5">
                                <Label htmlFor="first-name" className="text-xs">First name</Label>
                                <Input id="first-name" placeholder="John" className="h-9 text-sm" />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="last-name" className="text-xs">Last name</Label>
                                <Input id="last-name" placeholder="Doe" className="h-9 text-sm" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-xs">Email</Label>
                            <Input id="email" placeholder="john@example.com" type="email" className="h-9 text-sm" />
                        </div>
                        <div className="space-y-1.5">
                            <Label htmlFor="message" className="text-xs">Message</Label>
                            <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px] text-sm" />
                        </div>
                        <Button className="w-full h-10 text-sm">Send Message</Button>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-8 lg:pl-8 lg:border-l">
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg uppercase border-b pb-2 text-black">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <MapPin className="h-5 w-5 text-black flex-shrink-0" />
                                <div className="space-y-0.5">
                                    <p className="font-semibold text-sm text-black">
                                        {settings.general.storeName}
                                        {settings.business?.registrationNumber && <span className="font-normal text-muted-foreground ml-1">({settings.business.registrationNumber})</span>}
                                    </p>
                                    <p className="text-xs text-black leading-relaxed whitespace-pre-line">
                                        {settings.general.address}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Phone className="h-4 w-4 text-black flex-shrink-0" />
                                <p className="text-sm text-black">{settings.general.contactPhone}</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Mail className="h-4 w-4 text-black flex-shrink-0" />
                                <p className="text-sm text-black">{settings.general.contactEmail}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-bold text-lg uppercase border-b pb-2 text-black">Business Hours</h3>
                        <div className="text-sm text-black whitespace-pre-line leading-relaxed">
                            {settings.business?.operatingHours || "Contact us for operating hours."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
