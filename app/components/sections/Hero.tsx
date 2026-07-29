"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "../../lib/data";
import { ArrowRight, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-[15%] w-[500px] h-[500px] bg-sage-100 dark:bg-sage-500/15 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] bg-warm-100 dark:bg-warm-300/15 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-steel-100 dark:bg-steel-500/15 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            className="space-y-6 order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sage-50 dark:bg-sage-500/10 border border-sage-200 dark:border-sage-500/30 text-sage-600 dark:text-sage-400 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-sage-400 mr-2 animate-pulse" />
              Open to opportunities
            </div>

            <h1 className="
              text-4xl sm:text-5xl lg:text-6xl font-bold text-heading dark:text-dark-text leading-[1.1]
              
            ">
              Hi, I&apos;m{" "}
              <span className="text-sage-500 dark:text-sage-400">Bharath</span>
              <br />
              Challagulla
            </h1>

            <p className="text-xl lg:text-2xl text-sage-400 dark:text-sage-300 font-medium">
              {portfolioData.title}
            </p>

            <p className="text-body dark:text-dark-secondary text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Building scalable, enterprise-grade applications with modern
              technologies and about 5 years crafting solutions across healthcare,
              automotive, and public sector domains.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sage-500 text-white rounded-xl font-medium hover:bg-sage-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                View My Work <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-sage-300 dark:border-sage-500/40 text-sage-600 dark:text-sage-400 rounded-xl font-medium hover:bg-sage-50 dark:hover:bg-sage-500/10 transition-all duration-300"
              >
                <Mail size={18} /> Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Decorative layers behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-sage-200 to-warm-200 dark:from-sage-500/30 dark:to-warm-300/30 rounded-3xl rotate-6 opacity-60" />
              <div className="absolute -inset-2 bg-gradient-to-br from-warm-100 to-sage-100 dark:from-warm-300/20 dark:to-sage-500/20 rounded-3xl rotate-3 opacity-50" />

              <Image
                src="/profile1.jpg"
                alt="Bharath Challagulla"
                width={420}
                height={420}
                className="relative rounded-3xl object-cover shadow-xl w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
