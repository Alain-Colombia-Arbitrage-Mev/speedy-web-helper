
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useRef } from 'react';
import { motion } from "framer-motion";
import { Link } from "lucide-react";

const ChainLinkOracleSection = () => {
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
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            {t('realEstate.oracleTitle')}
          </span>
          <img 
            src="/lovable-uploads/2be46ee9-76e5-46d6-9525-bf467f04849c.png" 
            alt="Fire emoji" 
            className="inline-block h-10 w-10 ml-3"
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] p-6 md:p-12 mt-6 overflow-hidden"
        >
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
                {t('realEstate.comingSoon')}
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChainLinkOracleSection;
