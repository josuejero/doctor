'use client'

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { useState } from 'react'

export default function ScheduleAppointment(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phoneNumber: '',
        callbackTime: '',
        service: ''
    })

    const services = [
        "Primary Adult and Pediatric Care",
        "Behavioral/Mental Health",
        "Specialty Healthcare",
        "Dental Care",
        "Social Care Services",
        "Lab Testing Services",
        "Medication Management",
        "Telehealth Services"
    ]

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData(prevState => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <main className="flex flex-col min-h-screen">
            <Navbar/>
                <div className="flex-grow grid grid-cols-2 gap-4 p-8">
                    <section className="space-y-6 animate-fadeIn">
                        <h1 className="text-4xl font-bold">
                            Make an Appointment
                        </h1>
                        <p>
                            Appointments
                            <br />
                            Please submit the form below to request a callback to schedule an appointment with Delaware Health Equity Coalition.
                            <br />
                            After completing the form, a member of the team will call you as soon as possible.
                            <br />
                            If you require multiple appointments, please submit the form only once.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300">
                                Submit
                            </button>
                        </form>
                    </section>
                    <aside className="space-y-6 animate-slideInRight">
                        <h2 className="text-2xl font-semibold">
                            GENERAL INQUIRIES
                        </h2>
                        <p>
                            302.394.6060
                            <br />
                            info@delawarehealthequitycoalition.org
                            <br />
                            2100 Baynard Boulevard
                            <br />
                            Wilmington, DE 19802
                        </p>
                        <div>
                            <h3 className="text-xl font-semibold">
                                OFFICE HOURS
                            </h3>
                            <p>
                                Monday - Friday 9:00 - 4:00
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">
                                SERVICES
                            </h3>
                            {services.map((service, index) => (
                                <p key={index}>
                                    {service}
                                </p>
                            ))}
                        </div>
                    </aside>
                </div>
            <Footer/>
        </main>
    )
}