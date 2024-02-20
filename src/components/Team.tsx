import TeamMember from "./TeamMember";
import {motion} from 'framer-motion'

const teamMembers = [
    {
        name: 'Dr. Jane Doe',
        about: 'A passionate practitioner with 10 years in pediatric medicine.',
        photo: '/actual-logo.png', // Replace with actual photo path
    },
    {
        name: 'Dr. John Smith',
        about: 'Specializing in sports medicine and orthopedic rehabilitation for over 15 years.',
        photo: '', // Replace with actual photo path
    },
    {
        name: 'Dr. Emily Taylor',
        about: 'Dedicated family doctor and an advocate for preventive care and wellness.',
        photo: '', // Replace with actual photo path
    },
    {
        name: 'Dr. Mike Brown',
        about: 'Expert in internal medicine and nutrition with a holistic approach to health.',
        photo: '', // Replace with actual photo path
    },
    {
        name: 'Dr. Lisa Ray',
        about: 'Renowned cardiologist with groundbreaking work in cardiovascular health.',
        photo: '', // Replace with actual photo path
    },
    {
        name: 'Dr. Dave Wilson',
        about: 'Esteemed neurologist with a focus on innovative neurological therapies.',
        photo: '/team-member-6.png', // Replace with actual photo path
    },
];


const containerVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    }
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 200,
        }
    }
}

const Team: React.FC = () => {
    return(
        <motion.div
            className="container mx-auto p-6"
            variants={containerVariants}
            initial='hidden'
            animate="visible"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <TeamMember
                            key={member.name}
                            name={member.name}
                            about={member.about}
                            photo={member.photo}
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Team