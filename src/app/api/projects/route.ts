import { NextResponse } from "next/server"
import { getHomePage } from "@/lib/services/getHomePage"

export async function GET() {
  try {
    const data = await getHomePage()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar projetos" },
      { status: 500 }
    )
  }
}
