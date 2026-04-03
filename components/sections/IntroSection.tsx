"use client";

import Image from "next/image";

import { motion } from "framer-motion";
// import Link from "next/link";

function IntroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-6 shadow-xl rounded-2xl"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center ">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hey There, <br /> I&apos;m Omar 👋
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            I build scalable and modern web applications using technologies like
            Next.js, Node.js, and MongoDB.
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:omarhassan.mansour@gmail.com"
              target="_blank"
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-black/40 transition"
            >
              Contact Me
            </a>

            <a
              href="#projects"
              className="px-6 py-3 border text-gray-600 border-gray-300 rounded-xl hover:bg-gray-300 transition duration-300"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/my-image.png"
            alt="Omar"
            width={500}
            height={500}
            priority
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </motion.section>
    // <section className="relative mt-12 flex items-center space-x-10 rounded-xl shadow-lg px-3 py-2" id="IntroSection">
    //   <div className="flex flex-col ">

    //     <h2 className="relative text-4xl w-fit md:text-4xl lg:text-5xl xl:text-7xl z-20
    //     font-bold leading-tight text-gray-600 transition-all duration-400 ">
    //       Hey There,
    //       <br />
    //       {`I'm Omar`}
    //     </h2>

    //     <a
    //       href="mailto:Omarhassan.mansour@gmail.com"
    //       className="text-[6px] md:text-[10px] xl:text-[15px] mt-30 mb-50 text-orange-500 w-fit "
    //     >
    //       omarhassan.mansour@gmail.com
    //     </a>

    //     <div className=" md:absolute md:bottom-10 w-fit flex gap-2">
    //       <p className="text-4xl font-bold text-gray-600">2</p>
    //       <p className="text-gray-600">
    //         YEARS
    //         <br /> EXPERIENCE
    //       </p>
    //     </div>
    //   </div>

    //   <Image
    //     className="absolute rounded-full object-cover w-100 md:w-90 lg:w-120 lg:ml-2  2xl:w-130
    //     xl:left-90 lg:left-55 md:left-38 left-0 h-auto z-10 transition-all duration-400"
    //     src="/my-image.png"
    //     width={500}
    //     height={500}
    //     alt={"my-image"}
    //     loading="eager"
    //   />
    //   <div className="top-10 left-59 absolute md:mb-80 md:ml-50 lg:ml-112 xl:ml-162 xl:mb-90 2xl:ml-120 md:w-fit transition-all duration-400">
    //     <p className="text-gray-600 text-[10px] md:text-sm lg:text-md xl:text-lg text-sm ">
    //       I design beautifully simple
    //       <br /> things, and I love what I do.
    //     </p>
    //   </div>
    // </section>
  );
}

export default IntroSection;
