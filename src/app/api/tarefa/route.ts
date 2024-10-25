import { Tarefa } from "@/utils/tarefas";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
        const produtos = JSON.parse(file);
        return NextResponse.json(produtos);
    } catch (error) {
        return NextResponse.json({ error: "Erro ao recupera os produto!: " + error });
    }
}

export async function POST(request: Request) {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
        const tarefas: Tarefa[] = JSON.parse(file);
        const tarefa: Tarefa = await request.json();
        tarefa.id = (tarefas[tarefas.length - 1].id + 1);
        tarefas.push(tarefa);       
        const fileUpdate = JSON.stringify(tarefas);
        await fs.writeFile(process.cwd() + '/src/data/base.json', fileUpdate);
        return NextResponse.json(tarefa);
    } catch (error) {
        return NextResponse.json({ error: "Erro ao cadastrar produto!: " + error });
    }
}
