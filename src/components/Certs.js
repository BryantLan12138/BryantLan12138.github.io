import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import azure900 from "../assets/certs/azure-900.png"
import azure104 from "../assets/certs/azure-104.png"
import azure305 from "../assets/certs/azure-305.png"
import terraform003 from "../assets/certs/terraform003.png"


export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Microsoft Certified: Azure Fundamentals" img={azure900} issued="Miscrosoft" date="Dec 2021" />
                <CertCard name="Microsoft Certified: Azure Administrator Associate" img={azure104} issued="Miscrosoft" date="Oct 2023" />
                <CertCard name="Microsoft Certified: Azure Solutions Architect Expert" img={azure305} issued="Miscrosoft" date="Mar 2024" />
                <CertCard name="Terraform Associate" img={terraform003} issued="HashiCorp" date="Dec 2023" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
