import { Tarefa } from "@/utils/tarefas";
import { promises as fs } from "fs"
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
        const tarefas: Tarefa[] = JSON.parse(file);
        const tarefa = tarefas.find(t => t.id == params.id);
        return NextResponse.json(tarefa);
    } catch (error) {
        return NextResponse.json({ error: "Erro ao selecionar tarefa!: " + error });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
        const tarefas: Tarefa[] = await JSON.parse(file);
        const idTarefa = tarefas.findIndex(t => t.id == params.id);
        tarefas.splice(idTarefa, 1);
        const fileUpdate = JSON.stringify(tarefas);
        await fs.writeFile(process.cwd() + '/src/data/base.json', fileUpdate);
        return NextResponse.json({ msg: "Tarefa removido com sucesso!" });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao excluir tarefa!: " + error });
    }
}

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    try {
        const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');

        const tarefas: Tarefa[] = JSON.parse(file);

        const indice = tarefas.findIndex(p => p.id == params.id)

        if (indice != -1) {
        
            const Tarefa: Tarefa = await request.json();
            tarefas.splice(indice, 1, Tarefa);
            const fileUpdate = JSON.stringify(tarefas);
            await fs.writeFile(process.cwd() + '/src/data/base.json', fileUpdate);

            return NextResponse.json({ msg: "Tarefa atualizado com sucesso!" });
        }
    } catch (error) {
        return NextResponse.json({ error: "Erro ao atualizar Tarefa!: " + error });
    }
}
