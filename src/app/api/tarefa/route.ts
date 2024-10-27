import { client } from "@/lib/appwrite_client";
import { Tarefa } from "@/utils/tarefas";
import { Databases, ID } from "appwrite";
import { NextResponse } from "next/server";

const database = new Databases(client);


export async function GET() {
    try {
        // console.log("Database ID:", process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID);
        // console.log("Collection ID:", process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID);

        const response = await database.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string
        );

        return NextResponse.json(response.documents);
    } catch (error) {
        console.error("Falha na leitura dos tarefas!", error);
        return NextResponse.json({ error: "Erro ao recupera os tarefa!: " + error });
    }
}

export async function POST(request: Request) {
    try {
        const { autor, titulo, materia, tipo, descricao, foto, semestre, nota, feedback } = await request.json();

        if (!autor || !titulo || !materia || !tipo || !descricao || nota === undefined) {
            return NextResponse.json({ error: "Campos obrigatórios faltando!" }, { status: 400 });
        }

        const newTarefa: Tarefa = {
            $id: 0, // O ID será gerado pelo Appwrite
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

        const response = await database.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string,
            process.env.NEXT_PUBLIC_APPWRITE_COLLECTIONS_ID as string,
            ID.unique(),
            newTarefa
        );

        return NextResponse.json(response);
    } catch (error) {
        console.error("Falha na criação de tarefa!", error)
        return NextResponse.json({ error: "Erro ao cadastrar tarefa!: " + error });
    }
}
