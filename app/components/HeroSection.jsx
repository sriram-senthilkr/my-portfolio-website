import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        Hello, I'm Sriram.
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Proin gravida hendrerit lectus a.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white">
                            Contact Me
                        </button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/profile_image.png"
                            alt="Portfolio Image"
                            className="absolute transform -translate-x-1 -translate-y-1/2 top-1/2"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;