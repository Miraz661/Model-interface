export default function About() {
    return (
        <div className="bg-[#0066FF] w-full max-w-[1150px]">
            <div className="relative">
                <div className="w-full h-full absolute bottom-0 left-0 z-[1] flex items-end">
                    <img src="/src/assets/wave-haikei.svg" alt="" className="w-full" />
                </div>
                <div className="text-7xl pt-[80px] sm:text-[250px] pb-[80px] sm:pb-[150px] z-[99] text-center text-white" style={{ textShadow: "10px 0px 5px #003AA9" }}>About</div>
            </div>
            <div className="bg-white px-5 sm:px-10">
                <div className="flex flex-col gap-5 relative w-full items-end justify-center h-fit shadow rounded-md">
                    <div className="flex flex-col gap-5 p-2 absolute top-0 left-0 w-full">
                        <h4 className="text-2xl sm:text-5xl font-medium">What Is This App</h4>
                        <p className="text-xs sm:text-[16px] max-w-[500px]">This web application leverages a deep learning model based on the DEiT (Data-efficient Image Transformer) architecture to detect pneumonia from chest X-ray images. It is designed for rapid, AI-assisted screening and educational use in medical imaging, helping healthcare professionals and learners analyze radiographic data more efficiently.</p>
                    </div>
                    <div className="w-fit h-fit">
                        <img src="/src/assets/Home.svg" alt="" className="w-[200px] sm:w-[300px] opacity-[0.1] sm:opacity-[0.3]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}