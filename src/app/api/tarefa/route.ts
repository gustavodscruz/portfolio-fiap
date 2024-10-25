// export async function POST(request:Request) {
    
// }
import { tarefas } from "@/utils/tarefas";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";


export async function GET() {
    const jsonData = JSON.stringify(tarefas);
    await fs.writeFile(process.cwd() + '/src/data/base.json', jsonData)
    return NextResponse.json({msg: "JSON ESCRITO COM SUCESSO!"})
}