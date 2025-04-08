
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { useRef } from 'react';
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const ChainLinkOracleSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();

  return (
    <div 
      ref={sectionRef}
      className={`w-full ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} py-16 px-4 md:px-8 font-clash`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
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
          className={`relative rounded-[40px] p-6 md:p-12 mt-6 overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
        >
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                <span className={`${isDarkMode ? 'text-white' : 'text-black'}`}>{t('realEstate.realVirtualWorld')}</span>
              </h3>
              <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{t('realEstate.offPlanProjects')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mt-8 mb-4"
            >
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>{t('realEstate.tokenDescription')}</p>
              <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>{t('realEstate.tokenValue')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="flex justify-center mt-8"
              whileHover={{ scale: 1.05 }}
            >
              <Button className={`${isDarkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'} shadow-lg px-8 py-6 text-lg`}>
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
