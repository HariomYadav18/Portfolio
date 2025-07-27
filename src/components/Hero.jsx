import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] relative overflow-hidden">
      {/* Glowing background effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-cyan-400 opacity-20 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
      </div>
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-white z-10 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to the <span className="text-cyan-400">Future</span>
      </motion.h1>
      <motion.p
        className="mt-6 text-xl md:text-2xl text-gray-200 z-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        I’m <span className="font-bold text-purple-400">Hariom Yadav</span> — Programmer, Developer, and Creator of immersive web experiences.
      </motion.p>
    </section>
  );
} 