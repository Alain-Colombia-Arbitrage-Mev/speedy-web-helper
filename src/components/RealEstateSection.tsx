
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link, Database } from "lucide-react";

const RealEstateSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={sectionRef}
      className="w-full bg-[#141518] text-white py-16 px-4 md:px-8 font-clash"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className="flex items-center justify-center gap-3">
            <div className="flex items-center space-x-3">
            </div>
            <span className="text-white">{t('realEstate.title')}</span>
            <img 
              src="/lovable-uploads/2be46ee9-76e5-46d6-9525-bf467f04849c.png" 
              alt="Fire emoji" 
              className="h-12 w-12"
            />
          </span>
          <p className="text-white mt-2 text-[22px] font-normal">{t('realEstate.subtitle')}</p>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left side - Single featured image with animations */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10 z-0"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-10 z-0"></div>
            
            <motion.div
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 30px -10px rgba(2, 1, 50, 0.5)"
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10 overflow-hidden rounded-lg border-2 border-gray-700 shadow-lg"
            >
              <img 
                src="/lovable-uploads/7df78f14-c84f-42d5-bd8d-a02986ff690e.png" 
                alt="Futuristic luxury house with pool" 
                className="w-full object-cover rounded-lg transition-transform duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">{t('realEstate.finder')}</h3>
            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <span className="text-xl">{t('realEstate.tech1')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <span className="text-xl">{t('realEstate.tech2')}</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 w-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <span className="text-xl">{t('realEstate.tech3')}</span>
              </motion.div>
            </div>
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Button className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB] hover:to-[#FF8F77]/90 text-white shadow-lg shadow-pink-500/20">
                {t('realEstate.exploreButton')}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* New Property Sharing Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative overflow-hidden rounded-lg"
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 30px -10px rgba(2, 1, 50, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="https://i.imgur.com/Er4NeR7.gif" 
                alt="Property sharing grid" 
                className="w-full rounded-lg"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.03, 1],
                  rotate: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="space-y-6 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">{t('realEstate.fractionalTitle')}</h3>
            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {t('realEstate.fractionalDesc1')}
            </motion.p>
            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {t('realEstate.fractionalDesc2')}
            </motion.p>
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Button className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB] hover:to-[#FF8F77]/90 text-white shadow-lg shadow-pink-500/20">
                {t('realEstate.learnMoreButton')}
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Chilean Lithium Mining Section with Updated Information - Now with centered title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mt-24 mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            {t('realEstate.lithiumMiningTitle')}
          </span>
          <img 
            src="/lovable-uploads/2be46ee9-76e5-46d6-9525-bf467f04849c.png" 
            alt="Fire emoji" 
            className="inline-block h-10 w-10 ml-3"
          />
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6 text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Mining title card with highlight - Updated for better readability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="mb-4"
            >
              <Card className="bg-gradient-to-r from-blue-900/40 to-emerald-900/40 border-emerald-500/30 overflow-hidden">
                <CardContent className="p-4">
                  <h4 className="text-xl font-bold text-white mb-2">{t('realEstate.miningTitle')}</h4>
                  <p className="text-gray-200">{t('realEstate.miningPermits')}</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-blue-300">{t('realEstate.atacamaMining')}</span> El Salar de Atacama es el yacimiento de litio más importante de Chile y uno de los más grandes del mundo, representando cerca del 35% de las reservas mundiales de litio.
            </motion.p>
            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="font-semibold text-blue-300">{t('realEstate.uyuniMining')}</span> Situado en Bolivia, es el salar más grande del mundo y contiene la mayor reserva de litio sin explotar. Junto con los salares de Chile y Argentina, forma parte del "Triángulo del Litio" que contiene más del 75% de las reservas mundiales.
            </motion.p>
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Button className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB] hover:to-[#FF8F77]/90 text-white shadow-lg shadow-pink-500/20">
                {t('realEstate.exploreMiningButton')}
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative order-first md:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20 z-0"></div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 30px -10px rgba(2, 1, 50, 0.5)"
              }}
              transition={{ duration: 0.5 }}
              className="relative z-10 overflow-hidden rounded-lg border-2 border-gray-700 shadow-lg"
            >
              <motion.img 
                src="/lovable-uploads/a88a5d72-cb06-49e1-98f2-481a147fac12.png" 
                alt="Salt mounds in lithium mining area" 
                className="w-full object-cover rounded-lg h-80"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* New ChainLink Oracle Integration Section */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mt-24 mb-16"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('realEstate.oracleTitle')}
          </span>
          <img 
            src="/lovable-uploads/2be46ee9-76e5-46d6-9525-bf467f04849c.png" 
            alt="Fire emoji" 
            className="inline-block h-10 w-10 ml-3"
          />
        </motion.h2>

        {/* Oracle visualization section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-[#0D0E15] rounded-[40px] p-6 md:p-12 mt-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-purple-900/5"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl opacity-20">
            <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-indigo-300 mb-2">
                <span className="text-indigo-400">{t('realEstate.realVirtualWorld')}</span>
              </h3>
              <p className="text-xl md:text-2xl text-purple-300">{t('realEstate.offPlanProjects')}</p>
            </motion.div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 mb-12">
              {/* Left side - Icons */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <Database className="w-6 h-6 text-gray-300" />
                </div>
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="p-2 rounded-full border border-gray-700 bg-gray-800/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
              </motion.div>

              {/* Center - ChainLink cube */}
              <motion.div 
                className="relative h-32 w-32 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/18ad1214-52e8-4cdb-b7b0-e957b38ab877.png" 
                    alt="ChainLink Oracle" 
                    className="h-32 w-32 object-contain" 
                  />
                  <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                  </div>
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Geometric pattern */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <img
                  src="/lovable-uploads/fdf7c83d-cbd7-413f-bbdb-e25555d66d16.png"
                  alt="Geometric Oracle Pattern"
                  className="h-32 w-auto object-contain"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mt-8 mb-4"
            >
              <p className="text-lg text-gray-300 mb-2">{t('realEstate.tokenDescription')}</p>
              <p className="text-xl font-semibold text-white">{t('realEstate.tokenValue')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8"
              whileHover={{ scale: 1.05 }}
            >
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/30 px-8 py-6 text-lg">
                <Link className="mr-2 h-5 w-5" />
                {t('realEstate.exploreOracleButton')}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RealEstateSection;
