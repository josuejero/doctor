'use client'

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


export default function WhoWeAre() {
    return(
        <main>
            <Navbar/>
            
            <div className="flex-grow flex justify-center items-center">
                <div>
                    <h1 className="text-6xl md:text-9xl font-bold text-center px-4">
                        Who We Are
                    </h1>
                    <p className="text-xl text-center px-4 mt-6">
                        The Delaware Health Equity Coalition is the vision and mission of three physicians who fought together on the frontlines of the Covid pandemic and heard the cry of many patients who felt dismissed by many in the healthcare sector, and quite often disrespected. These courageous conversations coupled with more than 80 years of medical service prompted our mission to change the way health care is delivered to struggling communities in Delaware.
                    </p>
                </div>
            </div>

            <Footer/>
        </main>
    )
}