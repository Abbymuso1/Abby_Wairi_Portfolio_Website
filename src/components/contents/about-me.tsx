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
                        Software Developer and Junior Consultant with an interest in building intuitive and
                        reliable digital systems. I have hands-on experience contributing to enterprise
                        platforms in active use, supporting UI/UX design, frontend development, and system
                        integration. I have worked in collaborative, multicultural environments, gaining
                        exposure to core and digital banking systems and fraud monitoring workflows. I bring
                        a global perspective to my work and am motivated to continue developing my
                        technical and analytical skills while contributing thoughtfully to real-world and
                        research-driven technology solutions
                    </p>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default AboutMe
