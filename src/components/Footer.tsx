import Image from 'next/image'
import React, { useState } from 'react'

export default function Footer(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    //TODO: FINISH THIS FUNCTION
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, email);
    }
    
    return (
        <footer className ="bg-gray-100 text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src="/actual-logo.png" alt="Doctor Logo" width={40} height={40}></Image>
                    </a>
                </div>
                <div className='flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
                    <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
                        <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>Contact</h2>
                        <nav className='list-none mb-10'>
                            <li>
                                <span className='text-gray-600'>
                                    Office Number: (123) 456-7890
                                </span>
                            </li>
                            <li>
                                <span className='text-gray-600'>
                                    Fax Number: (123) 456-7891
                                </span>
                            </li>
                            <li>
                                <span className='text-gray-600'>
                                    Email: josuejero@hotmail.com
                                </span>
                            </li>
                        </nav>
                    </div>
                    <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
                        <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                            Join the Distribution List
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                className='w-full bg-gray-50 rounded border border-gray-300 focus:border-indigo-500 text-base px-4 py-2 mb-4'
                                placeholder="Your Name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                            <input
                                className='w-full bg-gray-50 rounded border border-gray-300 focus:border-indigo-500 text-base px-4 py-2 mb-4'
                                placeholder="Email Address"
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <button className='text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
                        <h2 className='title-font font-medium text-gray-900 tracking-widest text-sm mb-3'>
                            Visit Us
                        </h2>
                        <div className='mb-10'>
                            <Image src="/building.png" alt="Building" width={400} height={300} className='object-contain object-center'/>
                            <p className='text-gray-600 mt-4'>
                                123 Health Blvd, Wilmington, Delaware 19802
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-200'>
                <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
                    <p className='text-gray-500 text-sm text-center sm:text-left'>
                        © {new Date().getFullYear()} Doctor&apos;s Practice —
                        <a href="https://twitter.com" rel="noopener noreferrer" className='text-gray-600 ml-1' target="_blank">@doctorspractice</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}