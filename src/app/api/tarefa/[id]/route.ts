import { promises as fs } from "fs"


export async function GET({params}:{params : {id: number}}) {
    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');
}

export async function PUT(request: Request, {params}:{params : {id: number}}) {
    const file = await fs.readFile(process.cwd() + '/src/data/base.json', 'utf-8');

}



export async function DELETE({params}:{params : {id: number}) {
    
}