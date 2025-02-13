import { TimeLine, TimeLineItem } from "../utils/exp-timeline";

const Experience = () => {
    return (
        <div className="w-full relative pt-10 pb-20">
            <TimeLine>
            <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Software Developer Intern and UI/UX Designer at Iansoft Technologies
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Jan 2025 - Present
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Working as a software developer and UI/UX designer intern to contribute to creative solutions within the company.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Software Developer and UI/UX Designer (Part Time) at Arrtribute
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Oct 2024 - Present
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Working as a software developer and UI/UX designer to contribute to innovative AI Art based solutions.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Junior Software Developer and UI/UX Design Intern at Tallinn University School of Digital Technologies
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Feb 2024 - Jun 2024
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Worked as a junior developer and UI/UX designer and was part of a team that came up with Decision Maker, a decision making platform.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Software Engineer Intern at United Bank for Africa
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Jan 2023 - Mar 2023
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Contributed to software development initiatives within the company by providing valuable support and assistance in various aspects of the development process.
                    </TimeLineItem.Description>
                </TimeLineItem>
                
                <TimeLineItem last>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                            Innovatibve Hub Intern at United Bank for Africa
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Nov 2022 - Dec 2022
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                        Contributed to software development initiatives within the company by providing valuable support and assistance in various aspects of the development process.
                    </TimeLineItem.Description>
                </TimeLineItem>
            </TimeLine>
        </div>
    );
};

export default Experience;
