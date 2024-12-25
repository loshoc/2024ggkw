'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function StartPage() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="h-screen w-screen flex flex-col items-center bg-[#F4F4F4] font-[-apple-system]"
    >
      <div className="text-center space-y-4 pt-20">
        <motion.div 
          className="flex items-center justify-center"
          layout
        >
          <motion.h1 layout className="text-[80px] font-bold text-black">2024</motion.h1>
          <motion.div layout className="w-[24px] h-[24px] ml-2 mb-10 relative">
            <Image
              src="/heart.svg"
              alt="Heart icon"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </motion.div>
        <div className="space-y-1">
          <p className="text-lg font-medium text-black/30">GIGI & KIWI</p>
          <p className="text-lg font-medium text-black/30">年度恋爱报告</p>
        </div>
      </div>

      <motion.div 
        className="flex flex-col items-center space-y-2 mt-10"
      >
        <div className="w-6 h-6 relative">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-bounce">
            <path d="M12 20L4 12L6 10L12 16L18 10L20 12L12 20Z" fill="black" fillOpacity="0.3"/>
          </svg>
        </div>
      </motion.div>

      <div className="flex-grow" />
      <div className="w-[300px] h-[300px] relative mb-10">
        <Image
          src="/gw.svg"
          alt="Couple illustration"
          fill
          priority
          className="object-contain"
        />
      </div>
    </motion.div>
  );
}