import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// POINTING TO THE SHARED FILE IN PARENT DIRECTORY
const DATA_FILE = path.join(process.cwd(), '../src/data/orders.json');

export async function GET() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
            const orders = JSON.parse(fileContent || '[]');
            return NextResponse.json(orders);
        }
        return NextResponse.json([]);
    } catch (error) {
        console.error("Failed to read orders:", error);
        return NextResponse.json({ error: "Failed to read" }, { status: 500 });
    }
}

export async function PUT(request: Request) {
    try {
        const { id, status } = await request.json();

        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
            let orders = JSON.parse(fileContent || '[]');

            // Update specific order
            orders = orders.map((o: any) => {
                if (o.id === id) {
                    const updated = { ...o, status };
                    // Add history if needed (simplified for FS)
                    if (!updated.history) updated.history = [];
                    updated.history.push({
                        date: new Date().toISOString(),
                        action: "Status Change",
                        details: `Moved from ${o.status} to ${status}`,
                        user: "Admin"
                    });
                    return updated;
                }
                return o;
            });

            fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2));
            return NextResponse.json({ success: true });
        }
        return NextResponse.json({ error: "Database not found" }, { status: 404 });

    } catch (error) {
        console.error("Failed to update order:", error);
        return NextResponse.json({ error: "Failed to update" }, { status: 500 });
    }
}
