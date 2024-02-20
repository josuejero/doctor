import Image from "next/image"

type Service = {
    logo: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        logo: '/actual-logo.png',
        title: 'Primary Adult and Pediatric Care',
        description: 'Offering comprehensive and preventative primary health care services to the medically underserved communities of Wilmington, Delaware, meeting the needs of each individual patient. We will provide care for all, insured and uninsured.'
    },
    {
        logo: '/actual-logo.png',
        title: 'Behavioral/Mental Health',
        description: 'With a team of mental health practitioners and clinical social workers, we will strive to work with you to establish and meet your behavioral health goals, as well as treatment recommendations promoting better mental and behavioral health.'
    },
]


const OurServices = () => {
    return(
        <section>
            <h2 className="text-2xl font-bold mb-6">
                Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                    <div key={service.title} className="service-card hover:shadow-lg transition-shadow duration-300">
                        <div className="logo-container">
                            <Image src={service.logo} alt={`${service.title} Logo`} width={100} height={100} className="service-logo transition-transform duration-300 hover:scale-110"/>
                        </div>
                        <h3 className="text-xl font-semibold">
                            {service.title}
                        </h3>
                        <p>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .service-card{
                    padding:20px;
                    border: 1px solid #ccc;
                    border-radius: 8px;
                }
                .logo-container{
                    margin-bottom: 16px;
                    transition: transform 0.3s ease;
                }
                .service.logo:hover{
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    )
}

export default OurServices