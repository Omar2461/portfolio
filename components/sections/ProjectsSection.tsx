"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import projects from "@/data/projects.json";

import { FaGithub } from "react-icons/fa";

function ProjectsSection() {
  const renderProjects = projects.map(
    ({ title, description, tech, img, github, link }, idx) => {
      return (
        <div
          key={idx}
          className="bg-white rounded-2xl p-5 border border-gray-800 hover:shadow-xl transition duration-300"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-xl mb-5">
            <Image
              src={img}
              width={500}
              height={500}
              alt="project"
              priority
              className="w-full h-52 object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Title + Tag */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold">{title}</h3>

            <span className="text-xs text-center px-2 py-2 bg-green-500/15 text-gray-600 rounded-full">
              {tech.join(", ")}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link
              href={link}
              target="_blank"
              className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-green-500/15 hover:text-black transition duration-400 text-sm"
            >
              Live
            </Link>

            <Link
              href={github}
              target="_blank"
              className="px-4 py-2 rounded-lg border border-gray-600 hover:bg-green-500/15 hover:text-black transition duration-400 text-sm"
            >
              <FaGithub className="text-lg" />
            </Link>
          </div>
        </div>
      );
    },
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="projects"
      className="w-full py-20 text-gray-600 px-6 rounded-xl shadow-xl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-gray-400 max-w-xl">
            A selection of projects showcasing both frontend design and backend
            integration.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">{renderProjects}</div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
