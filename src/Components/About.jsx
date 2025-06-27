import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

import heroImg from '../assets/wave-haikei.svg'
import definition from '../assets/planning.png'
import defBg from '../assets/Home.svg'
import process from '../assets/process.png'
import leader from '../assets/leader.png'
import leaderProf from '../assets/supervisorimg.png'
import teamIcon from '../assets/team-leadership.png'
import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'


export default function About() {
    const teamMates = [
        {
            name: "Sanjida Sarker",
            porfile: team1,
            grad: "Bsc in CSE",
            uni: "Uttara University",
            links: {
                linkedin: "#",
                facebook: "#",
                portfolio: "#"
            }
        },
        {
            name: "Miraz Hossain",
            porfile: team2,
            grad: "Bsc in CSE",
            uni: "Uttara University",
            links: {
                linkedin: "#",
                facebook: "#",
                portfolio: "#"
            }
        },
        {
            name: "Nurujjaman Nahid",
            porfile: team3,
            grad: "Bsc in CSE",
            uni: "Uttara University",
            links: {
                linkedin: "#",
                facebook: "#",
                portfolio: "#"
            }
        },
        {
            name: "Shakawat Hasaan",
            porfile: team4,
            grad: "Bsc in CSE",
            uni: "Uttara University",
            links: {
                linkedin: "#",
                facebook: "#",
                portfolio: "#"
            }
        },
    ]
    return (
        <div className="bg-[#0066FF] w-full max-w-[1150px] border border-white">
            <div className="relative">
                <div className="w-full h-full absolute bottom-0 left-0 z-[1] flex items-end">
                    <img src={heroImg} alt="" className="w-full" />
                </div>
                <div className="text-7xl pt-[80px] sm:text-9xl md:text-[250px] pb-[80px] sm:pb-[150px] lg:pb-[200px] z-[99] text-center text-white" style={{ textShadow: "10px 0px 5px #003AA9", fontFamily: "Roboto Mono" }}>About</div>
            </div>
            <div className="bg-white px-5 sm:px-10 flex flex-col gap-5 pb-[50px]">
                <div className="flex flex-col gap-5 relative w-full items-end justify-center h-fit shadow rounded-md">
                    <div className="flex flex-col gap-5 p-2 sm:p-4 absolute top-1/2 -translate-y-1/2 left-0 w-full">
                        <div className="flex items-center gap-4">
                            <img src={definition} alt="" className="w-[40px] aspect-square" />
                            <h4 className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "Roboto Mono" }}>What Is This App</h4>
                        </div>
                        <p className="text-xs md:text-[16px] max-w-[500px] font-sans" >This web application leverages a deep learning model based on the DEiT (Data-efficient Image Transformer) architecture to detect pneumonia from chest X-ray images. It is designed for rapid, AI-assisted screening and educational use in medical imaging, helping healthcare professionals and learners analyze radiographic data more efficiently.</p>
                    </div>
                    <div className="w-fit h-fit">
                        <img src={defBg} alt="" className="w-[250px] md:w-[300px] opacity-[0.1] md:opacity-[0.3]" />
                    </div>
                </div>
                <div className="shadow rounded-md p-2 sm:p-4 space-y-4">
                    <div className="flex items-center gap-4">
                        <img src={process} alt="" className="w-[40px] aspect-square" />
                        <h3 className="text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "Roboto Mono" }}>How It Works</h3>
                    </div>
                    <ul className="text-xs md:text-[16px] max-w-[500px] font-sans list-disc pl-5 space-y-2">
                        <li>Upload a Chest X-Ray Image</li>
                        <li>Our AI Model Analyse The Image</li>
                        <li>It Predicts The Condition : Normal OR Abnormal</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 shadow rounded-md p-2 sm:p-4 ">
                        <img src={leader} alt="" className="w-[40px] aspect-square" />
                        <h3 className="text-xl sm:text-2xl font-semibold">Our Supervisor</h3>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center rounded-md shadow p-2 sm:p-4">
                        <div className="">
                            <img src={leaderProf} alt="" className="w-[180px]" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold" style={{ fontFamily: "Roboto Mono" }}>Md. Wahidur Rahman</h3>
                            <h3 className="text-lg font-semibold">Assistant Professor</h3>
                            <h3 className="text-lg font-normal">Dept. of CSE, Uttara University</h3>
                            <h3 className="text-lg font-normal"><span className="font-semibold">Founder & CEO</span>, Wahid's Research Lab</h3>
                            <div className="flex gap-4 justify-center">
                                <a href="#" className="text-xl border p-2 rounded-lg text-white bg-[#4c94ff] cursor-pointer">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" className="text-xl border p-2 rounded-lg text-white bg-[#4c94ff] cursor-pointer">
                                    <FaFacebookF />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 shadow rounded-md p-2 sm:p-4 ">
                        <img src={teamIcon} alt="" className="w-[40px] aspect-square" />
                        <h3 className="text-xl sm:text-2xl font-semibold">My Team</h3>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {
                                teamMates.map(member => (
                                    <div className="space-y-2 rounded-md shadow p-2 max-w-[350px]">
                                        <div className="w-full flex items-center justify-center">
                                            <img src={member.porfile} alt="" className="w-full aspect-square" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-semibold">{member.name}</h3>
                                            <h3 className="text-lg font-medium">{member.grad}</h3>
                                            <h3 className="text-lg font-normal">{member.uni}</h3>
                                            <div className="flex gap-4 justify-center">
                                                <a href={member.links.linkedin} className="text-xl border p-2 rounded-lg text-white bg-[#4c94ff] cursor-pointer">
                                                    <FaLinkedinIn />
                                                </a>
                                                <a href={member.links.facebook} className="text-xl border p-2 rounded-lg text-white bg-[#4c94ff] cursor-pointer">
                                                    <FaFacebookF />
                                                </a>
                                                <a href={member.links.portfolio} className="text-xl border p-2 rounded-lg text-white bg-[#4c94ff] cursor-pointer">
                                                    <ImProfile />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}