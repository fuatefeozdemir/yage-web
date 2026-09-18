import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
    try {
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
            range: "İletişim!A:E", // Tablodaki sekme adının birebir eşleştiğinden emin ol
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