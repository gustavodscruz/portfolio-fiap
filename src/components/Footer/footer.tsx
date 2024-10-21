import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="p-4 flex">
            <div className="gap-5 flex flex-col w-1/2 m-auto">
                <h2 className="text-primary-text">Let's work together</h2>
                <p className="text-primary-text">This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com 
                    This is a template Figma file, turned into code using Anima. 
                    Learn more at AnimaApp.com
                </p>
                <div className="flex gap-4">
                    <FaLinkedin  color="#fff" size={40}   />
                    <FaGithub color="#fff" size={40}  />
                </div>
            </div>
            <form className="flex flex-col items-start w-1/3 m-auto gap-5 pt-5">
                <input type="text" className="w-full p-4" placeholder="Name" />
                <input type="email" className="w-full p-4" placeholder="Email" />
                <button className="py-3 px-5 bg-red-custom w-1/2">Submit</button>
            </form>
        </footer>
    )
}