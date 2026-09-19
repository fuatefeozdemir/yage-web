import { NextResponse } from "next/server";
import { google } from "googleapis";

// Basit Memory-based Rate Limiter (Spam Koruması)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_MAX_REQUESTS = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 dakika

export async function POST(req: Request) {
    try {
        // İstemcinin IP adresini al
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown_ip";

        // Rate Limiting Kontrolü
        const now = Date.now();
        const ipData = rateLimitMap.get(ip);

        if (ipData) {
            if (now - ipData.timestamp < RATE_LIMIT_WINDOW_MS) {
                if (ipData.count >= RATE_LIMIT_MAX_REQUESTS) {
                    return NextResponse.json({ error: "Çok fazla istek gönderdiniz. Lütfen daha sonra tekrar deneyin." }, { status: 429 });
                }
                ipData.count++;
            } else {
                rateLimitMap.set(ip, { count: 1, timestamp: now });
            }
        } else {
            rateLimitMap.set(ip, { count: 1, timestamp: now });
        }

        const body = await req.json();
        const { name, email, subject, message } = body;

        // Form doğrulama
        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "Tüm alanları doldurunuz." }, { status: 400 });
        }

        // Google Yetkilendirmesi
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                "https://www.googleapis.com/auth/spreadsheets",
            ],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Tabloya eklenecek veri dizisi
        const trTime = new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });
        const appendData = [
            [trTime, name, email, subject, message]
        ];

        // Veriyi Sheets'e yazma
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
            range: "İletişim!A:E", // Sekme adının birebir eşleştiğinden emin ol (İletişim)
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: appendData,
            },
        });

        return NextResponse.json({ success: true, message: "Mesaj başarıyla eklendi." }, { status: 200 });

    } catch (error) {
        console.error("Sheets Hatası:", error);
        return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
    }
}