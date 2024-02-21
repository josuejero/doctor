import Link from "next/link"
import Image from "next/image"

const Navbar = () =>{
    return(
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src="/logo.png" alt="Doctor Logo" width={300} height={100}/>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/" legacyBehavior>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Home
                        </a>
                    </Link>
                    <Link href="/who-we-are" legacyBehavior>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Who We Are
                        </a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Our Services
                        </a>
                    </Link>
                    <Link href="/schedule-appointment" legacyBehavior>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Schedule Appointment
                        </a>
                    </Link>
                    <Link href="/volunteer" legacyBehavior>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Volunteer
                        </a>
                    </Link>
                    <Link href="/" legacyBehavior>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Our Team
                        </a>
                    </Link>
                    <Link href="/contact" legacyBehavior>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Contact Us
                        </a>
                    </Link>
                </div>
                <div>
                    <button className="inline-block text-sm px-4 py-2 leading none border rounded text-white border-white hover:text-blue-500 hover:bg-white mt-4 lg:mt-0">
                        Donate
                    </button>
                    <a href="mailto:josuejero@hotmail.com" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-4">
                        Email Us
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar