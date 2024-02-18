import Link from "next/link"
import Image from "next/image"

const Navbar = () =>{
    return(
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src="/logo.png" alt="Doctor Logo" width={300} height={100}/>
            </div>
        </nav>
    )
}

export default Navbar