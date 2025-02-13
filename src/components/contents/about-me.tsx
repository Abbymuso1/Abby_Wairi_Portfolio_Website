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
                    Junior Software Developer passionate about designing and implementing intuitive digital solutions. 
                    With hands-on experience in software development and UI/UX design, I focus on creating user-friendly 
                    interfaces and seamless user experiences. Recently, my interest in AI-driven platforms has grown as 
                    I’ve explored how AI can enhance decision-making, accessibility, and creativity. 
                    I thrive in collaborative, diverse teams and am eager to align my technical skills, global perspective, 
                    and problem-solving mindset with innovative projects that leverage AI to drive meaningful impact. ✨
                    </p>
                </div>
            </AnimationContainer>
        </div>
    )
};

export default AboutMe
