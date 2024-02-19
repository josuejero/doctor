import Image from "next/image";

type TeamMemberProps = {
    photo: string;
    name: string;
    about: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({name, about, photo}) => {
    return(
        <div className="border rounded-lg shadow-lg p-6 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                    src={photo}
                    alt={`Photo of ${name}`}
                    width={96}
                    height={96}
                    className="object-cover object-center"
                />
            </div>
            <h3 className="text-lg font-semibold">
                {name}
            </h3>
            <p className="text-gray-600 mt-2">
                {about}
            </p>
        </div>
    )
}

export default TeamMember