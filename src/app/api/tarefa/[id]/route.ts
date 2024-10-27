import { client} from "@/lib/appwrite_client";
import { Tarefa } from "@/utils/tarefas";
import { Databases } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);


export async function GET(request: Request, { params }: { params: { id: number } }) {
    try {
        const response = await database.getDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, params.id.toString());
        return NextResponse.json(response);
    } catch (error) {
        console.error("Falha na leitura da tarefa: ", error)
        return NextResponse.json({ error: "Erro ao selecionar tarefa!: " + error });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: number } }) {
    try {
        await database.deleteDocument(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string, process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string, params.id.toString());
        return NextResponse.json({ msg: "Tarefa removido com sucesso!" }, {status:204});
    } catch (error) {
        console.error("Falha na exclusão do produto: ", error)
        return NextResponse.json({ error: "Erro ao excluir tarefa!: " + error });
    }
}

export async function PUT(request: Request, { params }: { params: { id: number } }) {
    try {
        const { autor, titulo, materia, tipo, descricao, foto, semestre, nota, feedback } = await request.json();

        if (!autor || !titulo || !materia || !tipo || !descricao || nota === undefined) {
            return NextResponse.json({ error: "Campos obrigatórios faltando!" }, { status: 400 });
        }

        const updatedTarefa: Partial<Tarefa> = {
            autor,
            titulo,
            materia,
            tipo,
            descricao,
            foto: foto || "", // Valor padrão para foto
            semestre: semestre || 1, // Valor padrão para semestre
            nota,
            feedback: feedback || "" // Valor padrão para feedback
        };

        const response = await database.updateDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string,
            params.id.toString(),
            updatedTarefa
        );

        return NextResponse.json(response);

    } catch (error) {
        console.error("Falha na atualização da tarefa: ", error);
        return NextResponse.json({ error: "Erro ao atualizar Tarefa!: " + error });
    }
}
