"use client";

import { motion } from "framer-motion";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import Panel from "../ui/Panel";

function ContactUsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="pb-5"
    >
      <div>
        <h1 className="text-3xl text-gray-600 font-bold mb-4">Contact</h1>
        <p className="text-gray-700 mb-4">
          Feel free to reach out through email or professional platforms.
        </p>
      </div>
      <div className="flex gap-2">
        <Panel>
          <a href="mailto:omarhassan.mansour@gmail.com" target="_blank">
            <BiLogoGmail className="text-2xl" />
          </a>
        </Panel>

        <Panel>
          <a
            href={"https://www.linkedin.com/in/omar-hassan-0ab405265"}
            target="_blank"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </Panel>

        <Panel>
          <a href="https://github.com/Omar2461" target="_blank">
            <FaGithub className="text-2xl" />
          </a>
        </Panel>
      </div>
    </motion.section>
  );
}

export default ContactUsSection;
