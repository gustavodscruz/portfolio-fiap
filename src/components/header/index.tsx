import Link from "next/link";

export default function Header(){
    return(
        <header className="w-full">
            <nav className="flex justify-between w-full ">
                <div className="flex gap-3 items-center  p-4">
                    <h1 className="text-primary-text font-primary">Dev Repository feat </h1>
                    <h1 className="text-pink-500 text-3xl font-semibold font-primary">FIAP</h1>
                </div>
                <div className="gap-5 flex items-center  p-4">
                    <Link className="text-primary-text font-primary" href="/">Home</Link>
                    <Link className="text-primary-text font-primary" href="/checkpoint">Checkpoint</Link>
                    <Link className="text-primary-text font-primary" href="/challenge">Challenge Sprints</Link>
                    <Link className="text-primary-text font-primary" href="/global-solution">Global Solution</Link>
                    <Link className="text-primary-text font-primary" href="/*"></Link>
                </div>
            </nav>
        </header>
    )
}