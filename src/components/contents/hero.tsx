"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Icons from '../ui/icons';
import { NumberTicker } from "../ui/number-ticker";
import { AnimationContainer } from "../utils/animation-container";

const Hero = () => {
    return (
        <div className="w-full relative pt-20 lg:pt-28 z-40">
            <AnimationContainer
                animation="scale"
                className="flex items-center justify-center overflow-hidden w-full mx-auto"
            >
                <div className="size-32 rounded-full bg-[#050505] mx-auto overflow-hidden group border-2 border-transparent hover:border-border transition-all duration-300">
                    <Image
                        src="/images/me.jpeg"
                        alt="hero"
                        width={1024}
                        height={1024}
                        className="size-full object-cover rounded-full group-hover:translate-y-4 group-hover:scale-110 group-hover:border-primary/80 transition-all duration-300"
                    />
                </div>
            </AnimationContainer>

            <AnimationContainer
                delay={0.3}
                animation="slide-up"
                className="flex items-center justify-center gap-2 pl-2 pr-5 py-2 rounded-full bg-background border border-border/80 w-max mx-auto group mt-6"
            >
                <div className="rounded-full bg-[#131316] flex items-center justify-center size-10 overflow-visible">
                    <span className="text-xl wave">
                        <Icons.wave className="size-6 -rotate-[30deg] group-hover:scale-110 transition-all duration-300" />
                    </span>
                </div>
                <div className="flex flex-col gap-2 flex-shrink-0">
                    <p className="text-sm font-medium text-foreground/70">
                        Abigail Welcome&apos;s you!
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer
                delay={0.5}
                animation="slide-up"
                className="max-w-3xl mx-auto mt-6 relative overflow-visible"
            >
                <div className="hidden xl:block absolute top-0 -left-1/3 overflow-visible flex-none z-[1] w-20">
                    <Image
                        src="/images/hand.svg"
                        alt="hand"
                        width={1024}
                        height={1024}
                        className="size-full object-cover float-animation"
                    />
                </div>
                <div className="hidden xl:block absolute -top-14 -right-1/3 overflow-visible flex-none z-[1] w-36">
                    <Image
                        src="/images/art.svg"
                        alt="art"
                        width={1024}
                        height={1024}
                        className="size-full object-cover float2-animation"
                    />
                </div>
            </AnimationContainer>

            <div className="text-balance relative z-20 mx-auto my-4 max-w-5xl text-center text-4xl lg:text-5xl font-bold">
                <AnimationContainer
                    delay={0.8}
                    animation="scale"
                    className="hidden lg:block absolute -top-4 left-[17%] flex-none z-[1] w-8 h-9 aspect-square"
                >
                    <div className="absolute inset-0">
                        <Icons.lines className="size-full" />
                    </div>
                </AnimationContainer>
                <motion.h2 className="text-balance !leading-snug">
                    {"Building Digital Solutions that Make a Difference"
                        .split(" ")
                        .map((word, index) => (
                            <motion.span
                                initial={{
                                    filter: "blur(10px)",
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    filter: "blur(0px)",
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                }}
                                className="inline-block whitespace-nowrap"
                                key={index}
                            >
                                {word === "Digital" ? (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-blue-500">Digital</span>
                                ) : word}
                                &nbsp;
                                {word === "that" && <br />}
                            </motion.span>
                        ))}
                </motion.h2>
            </div>

            <AnimationContainer
                delay={0.6}
                animation="slide-up"
                className="relative mt-6 flex flex-col items-center justify-center gap-y-6 max-w-3xl mx-auto text-center"
            >
                <p className="text-base text-muted-foreground !leading-relaxed">
                Junior Software Developer passionate about designing and implementing intuitive digital solutions.
                    {/* I&apos;m a software developer and designer who specializes in creating innovative and user-friendly websites. <span className="hidden lg:inline-block">With a keen eye for design and a focus on performance,</span> I&apos;m dedicated to delivering high-quality digital experiences that drive business growth. */}
                </p>
            </AnimationContainer>
            <AnimationContainer
                delay={0.8}
                animation="scale"
                className="relative mt-10 flex flex-col items-center justify-center"
            >
                <div className="hidden xl:block absolute -bottom-6 left-[32%] -translate-x-1/2 overflow-visible flex-none z-[1] w-28">
                    <Image
                        src="/images/arrow.svg"
                        alt="arrow"
                        width={1024}
                        height={1024}
                        className="size-full object-cover"
                    />
                </div>
                <Link href="#contact">
                    <button className="relative py-3 text-[15px] tracking-wider font-medium overflow-hidden rounded-lg bg-[#3b82f6] text-white transition-all duration-300 group btn-primary flex items-center justify-center w-52 h-auto">
                        <span className="relative z-10 font-medium font-heading">
                            Let's Work Together
                        </span>
                        <span className="flex items-center justify-center scale-x-0 group-hover:scale-x-100 transition-all duration-300 size-0 group-hover:size-5 ml-1">
                            <ChevronRightIcon className="size-5" />
                        </span>
                        <div className="absolute inset-y-0 -left-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 ease-in-out group-hover:translate-x-[200%] group-hover:duration-1000"></div>
                    </button>
                </Link>
            </AnimationContainer>

            <AnimationContainer
                delay={0.2}
                animation="slide-up"
                className="flex flex-col items-center justify-center my-32"
            >
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 w-full lg:max-w-screen-md">
                    {[10, 1, 2].map((value, index) => (
                        <AnimationContainer
                            key={index}
                            animation="scale"
                            delay={0.5 + (index * 0.1)}
                            className="flex flex-col items-center justify-center p-6 rounded-lg lg:rounded-3xl bg-[#131316] hover:bg-[#131316]/80 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center">
                                    <NumberTicker
                                        value={value}
                                        className="text-4xl lg:text-5xl font-medium text-foreground/80"
                                    />
                                    <span className="">
                                        <PlusIcon className="size-6 text-blue-500" />
                                    </span>
                                </div>
                            </div>
                            <p className="text-base text-muted-foreground text-center mt-4">
                                {index === 0 && "Projects Completed"}
                                {index === 1 && "Year of Experience"}
                                {index === 2 && "Clients Served"}
                            </p>
                        </AnimationContainer>
                    ))}
                </div>
            </AnimationContainer>
        </div>
    )
};

export default Hero
