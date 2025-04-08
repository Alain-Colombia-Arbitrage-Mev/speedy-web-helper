
import { useTranslation } from "react-i18next";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "Residential property development in Santiago, Chile.",
      image: "/lovable-uploads/2ca1133b-6cd8-42a2-ad78-e526b7d73a87.png",
      roi: "+15%",
      investmentRequired: "$250,000",
      status: "Active"
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Commercial office space in Lima, Peru.",
      image: "/lovable-uploads/6dee9b01-b03c-4b9e-9f2d-78add40c32cf.png",
      roi: "+12%",
      investmentRequired: "$180,000",
      status: "Funding"
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Mixed-use development in Bogotá, Colombia.",
      image: "/lovable-uploads/943baadb-065a-4c5e-b6fd-c597deb3c23f.png",
      roi: "+18%",
      investmentRequired: "$320,000",
      status: "Planned"
    },
    {
      id: 4,
      title: "Agro",
      description: "Agricultural investment in sustainable farming operations.",
      image: "/lovable-uploads/a88a5d72-cb06-49e1-98f2-481a147fac12.png",
      roi: "+20%",
      investmentRequired: "$150,000",
      status: "Active"
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">Projects</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Discover our portfolio of real estate investment opportunities tokenized on the blockchain.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{project.title}</CardTitle>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        project.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        project.status === 'Funding' ? 'bg-blue-100 text-blue-800' : 
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <CardDescription className={isDarkMode ? 'text-gray-400' : ''}>
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Expected ROI</p>
                        <p className="text-lg font-semibold text-green-500">{project.roi}</p>
                      </div>
                      <div>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Investment</p>
                        <p className="text-lg font-semibold">{project.investmentRequired}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
