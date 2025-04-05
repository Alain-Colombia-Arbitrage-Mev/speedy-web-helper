
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
      </div>
    </div>
  );
};

export default RealEstateSection;
