import Image from 'next/image'
import React, { useState } from 'react'

export default function Footer(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    //TODO: FINISH THIS FUNCTION
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(name, email);
    // }
    
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
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}