import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div id="home" className="pb-20 mt-12 overflow-hidden">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main content*/}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* Role badge with animation */}
          <div className="relative group">
            <p
              className="uppercase tracking-[0.2em] text-xs md:text-sm text-center text-blue-100 px-4 py-2 rounded-full
              bg-blue-100/5 backdrop-blur-sm border border-blue-100/10 hover:border-blue-100/20 transition-all duration-300"
            >
              Full Stack Developer & Robotics Club President
            </p>
          </div>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-100/20 to-transparent my-4" />

          {/* Main heading*/}
          <div className="mb-6">
            <TextGenerateEffect
              words="Building Intelligent Solutions through Code and Innovation"
              className="text-center text-[32px] sm:text-[40px] md:text-5xl lg:text-6xl font-bold
                bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200"
            />
          </div>

          {/* Bio text*/}
          <p
            className="text-center md:tracking-wide mb-8 text-sm md:text-lg lg:text-xl
  text-gray-300 max-w-3xl leading-relaxed"
          >
            I'm Onkar Mendhapurkar, Computer Science enthusiast at Symbiosis
            Institute of Technology. Passionate about creating innovative
            solutions through code and robotics. Currently leading Rotonity,
            SIT&apos;s Robotics & Automation Club.
          </p>

          {/* Achievement stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-100">5+</p>
              <p className="text-sm text-gray-400">Workshops Conducted</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-purple-100">
                200+
              </p>
              <p className="text-sm text-gray-400">STEM Students Taught</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-100">
                10+
              </p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#projects">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
