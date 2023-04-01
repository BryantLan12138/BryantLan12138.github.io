import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Honors & Awards</h1>
            <p className="font-light text-gray-400">Here are some of my honors and awards</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Academic Tutor of six Computer Science courses from The University of Adelaide in 2022" issued="The Univesity of Adelaide" desc="Algorithm Design & Data Structures | Computer Systems | Introdution to Software Engineering | Object Oriented Programming | Database and Ethical Data"/>
                <HonorCard name="Global Citizens Scholarship" issued="The University of Adelaide" desc="This scholarship rewards international students commencing an undergraduate or postgraduate qualification who have received academic merit in their studies" />
                <HonorCard name="ECMS Nominated Volunteer & Ambassdor" issued="Faculty of Science, Engineering and Technology of UoA" desc="Recognising the contribution students
make to the faculty and University as a whole, and offering valuable opportunities for professional skills development." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
