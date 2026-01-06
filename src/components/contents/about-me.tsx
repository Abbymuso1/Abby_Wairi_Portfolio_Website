import AnimationContainer from "../utils/animation-container";

const AboutMe = () => {
    return (
        <div className="w-full relative pt-10 pb-20 z-40">
            <AnimationContainer
                animation="slide-up"
                className="flex items-center justify-center overflow-hidden w-full mx-auto"
            >
                <div className="w-full">
                    <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
                        About Me
                    </h2>
                </div>
            </AnimationContainer>
            <AnimationContainer
                animation="slide-up"
                className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
            >
                <div className="w-full flex items-center justify-center">
                    <p className="text-base md:text-lg text-justify w-full">
                        Computer Science graduate with First Class Honors and hands-on
                        experience in software engineering, enterprise systems, and data-driven
                        decision-support platforms. Strong foundation in programming and
                        software design, with exposure to intelligent systems, fraud monitoring
                        workflows, and AI-assisted applications. Experienced in collaborative,
                        international environments and motivated to build scalable, impactful
                        technology.
                    </p>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default AboutMe
