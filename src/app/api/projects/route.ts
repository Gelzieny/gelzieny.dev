import { NextResponse } from "next/server"
import { getHomePage } from "@/lib/services/getHomePage"
import { defaultLocale } from "@/lib/i18n/config"

export async function GET() {
  try {
    const data = await getHomePage(defaultLocale)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar projetos" },
      { status: 500 }
    )
  }
}
