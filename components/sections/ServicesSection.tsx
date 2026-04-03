"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/Card";

import { CgScreen } from "react-icons/cg";
import { CiMobile3 } from "react-icons/ci";

function ServicesSection() {
  const services = [
    {
      title: "Website Design",
      projects: 6,
      icon: <CgScreen />,
      bgColor: "bg-teal-700",
    },
  ];

  const renderServiceCard = services.map((service, idx) => (
    <Card key={idx}>
      <div
        className={`rounded-full ${service.bgColor} text-white w-8 h-7 md:w-10 md:h-10 flex items-center justify-center mr-4`}
      >
        {service.icon}
      </div>

      <div className="flex flex-col">
        <h4 className="font-semibold text-[9px] md:text-[15px]">
          {service.title}
        </h4>
        <span className="text-gray-500 text-[9px] md:text-[15px] ">
          {service.projects} Projects
        </span>
      </div>
    </Card>
  ));

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-16 flex"
      id="ServicesSection"
    >
      <div className="space-y-4 mt-8">{renderServiceCard}</div>

      <div className="flex flex-col ml-12 md:ml-20 lg:ml-50 xl:ml-116 mt-8 transition-all duration-400">
        {" "}
        <h3 className="text-xl md:text-4xl text-gray-600 font-bold">
          What do I help?
        </h3>
        <p className="text-gray-600 mt-4 max-w-lg tracking-wide leading-8 text-[12px] md:text-sm">
          I will help you with finding a solution and solve <br /> your
          problems. We use process design to create digital <br />{" "}
          products.Beside that also help their business.
        </p>
      </div>
    </motion.section>
  );
}

export default ServicesSection;
