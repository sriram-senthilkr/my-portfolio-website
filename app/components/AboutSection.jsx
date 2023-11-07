import React from "react";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"></div>
            <Image src="/images/computer-image.png" width={500} height={500} />
            <div>
                <h2>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Proin gravida hendrerit lectus a.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
