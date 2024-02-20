"use client"

import DonateButton from "@/components/DonateButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import OurServices from "@/components/Our-Services";
import Team from "@/components/Team";
import HomePageImage from "/public/home-page-image.png"
import Logo from "/public/logo.png"

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4">
        <div className="w-full md:w-1/2">
          <Image
            src={HomePageImage}
            alt="Delaware Health Equity Coalition"
            layout='responsive'
            width={700}
            height={475}
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4 p-4">
          <h1 className="text-3xl font-bold text-gray-800">
            DELAWARE HEALTH EQUITY COALITION
          </h1>
          <p className="text-xl text-gray-600">
            Restoring Trust in Healthcare
          </p>
          <p className="text-gray-600">
            Our Vision: The eradication of health and social disparities in underserved and vulnerable communities in Delaware.
          </p>
          <p className="text-gray-600">
            Our Mission: To provide high quality, comprehensive healthcare that will educate, empower and engage our patients, in a manner that fosters empathy, compassion and trustworthiness.
          </p>
          <div className="flex flex-col items-center">
            <Image
              src={Logo}
              alt="Practice Logo"
              width={200}
              height={200}
              className="transition duration-500 ease-in-out transform hover:rotate-180"
            />
            <DonateButton/>
            <p className="text-sm text-gray-500 mt-2">
            Delaware Health Equity Coalition is a not-for-profit, section 501 (c)(3) corporation.
            </p>
          </div>
        </div>
      </section>
      <OurServices/>
      <Team/>
      <Footer/>
    </main>
  );
}
