import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="pb-20 px-4" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-16">
          <img
            src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif"
            width="35"
            height="35"
            alt="Tech stack icon"
            className="object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Technologies That I Know 👨🏻‍💻
          </h2>
        </div>

        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Programming & Web Development */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-500 mb-6 text-center">
              🖥️ Programming & Web Development
            </h3>
            <div className="flex justify-center">
              <div className="w-[900px] max-w-full">
                <img
                  src="https://skillicons.dev/icons?i=c,cpp,java,python,html,css,js,nodejs,bootstrap,tailwind,react,nextjs,svelte,express,materialui&perline=15"
                  alt="Programming and Web Development Skills"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Databases & Development Tools */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-500 mb-6 text-center">
              🗄️ Databases & Development Tools
            </h3>
            <div className="flex justify-center">
              <div className="w-[600px] max-w-full">
                <img
                  src="https://skillicons.dev/icons?i=mysql,postgresql,mongodb,prisma,firebase,git,github,postman,vercel,vite&perline=10"
                  alt="Databases and Development Tools"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Operating Systems & Hardware */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-purple-500 mb-6 text-center">
              🔧 Operating Systems & Other Tools
            </h3>
            <div className="flex justify-center">
              <div className="w-[480px] max-w-full">
                <img
                  src="https://skillicons.dev/icons?i=linux,mint,ubuntu,bash,arduino,raspberrypi,md,latex&perline=8"
                  alt="Operating Systems and Hardware"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
