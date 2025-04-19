
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const ProjectSubmissionHeader = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div 
      className="text-center mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Crear <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">Proyecto</span>
      </h1>
      <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        Propón tu proyecto de inversión inmobiliaria para la plataforma Dracma
      </p>
    </motion.div>
  );
};

export default ProjectSubmissionHeader;
