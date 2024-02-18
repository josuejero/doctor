import Link from "next/link"
import Image from "next/image"

const Navbar = () =>{
    return(
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src="/logo.png" alt="Doctor Logo" width={300} height={100}/>
                <span className="font-semibold text-x1 tracking-tight">
                    Doctor&apos;s Practice
                </span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Home
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar