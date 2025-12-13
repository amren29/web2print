import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'src/data/orders.json');

export async function POST(request: Request) {
    try {
        const newOrder = await request.json();

        // Read existing
        let orders = [];
        if (fs.existsSync(DATA_FILE)) {
            const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
            orders = JSON.parse(fileContent || '[]');
        }

        // Prepend new order
        orders = [newOrder, ...orders];

        // Write back
        fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2));

        return NextResponse.json({ success: true, orderId: newOrder.id });
    } catch (error) {
        console.error("Failed to save order:", error);
        return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }
}
