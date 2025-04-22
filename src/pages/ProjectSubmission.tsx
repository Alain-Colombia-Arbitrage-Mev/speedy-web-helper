import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useDracmaBalance } from "@/hooks/useTokenBalance";
import { FileText, Upload } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ProjectSubmissionHeader from "@/components/project-submission/ProjectSubmissionHeader";
import ProjectFormBasicInfo, { projectSchema } from "@/components/project-submission/ProjectFormBasicInfo";
import ProjectFormFinancials from "@/components/project-submission/ProjectFormFinancials";
import FileUploadField from "@/components/project-submission/FileUploadField";
import InsufficientBalanceMessage from "@/components/project-submission/InsufficientBalanceDialog";
import * as z from "zod";

const ProjectSubmission = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isHolder, balance, isLoading } = useDracmaBalance();
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [businessPlanFile, setBusinessPlanFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showInsufficientBalanceDialog, setShowInsufficientBalanceDialog] = useState(false);

  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projectName: "",
      description: "",
      location: "",
      investmentGoal: "",
      returns: "",
      contactEmail: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof projectSchema>) => {
    if (!thumbnailFile) {
      toast({
        title: "Error",
        description: "Por favor, sube una imagen del proyecto",
        variant: "destructive",
      });
      return;
    }

    if (!businessPlanFile) {
      toast({
        title: "Error",
        description: "Por favor, sube el plan de negocios",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    // Simulated submission
    setTimeout(() => {
      toast({
        title: "Proyecto enviado",
        description: "Tu proyecto ha sido enviado para revisión. Te contactaremos pronto.",
      });
      setSubmitting(false);
      navigate("/projects");
    }, 2000);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-center mb-6">Verificando tu balance de tokens DRACMA...</p>
          </CardContent>
        </Card>
      );
    }

    if (!isHolder && balance === "0") {
      return (
        <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-center mb-6">Conecta tu wallet para verificar si eres elegible para subir proyectos.</p>
            <ConnectButton />
            <p className="text-center text-muted-foreground mt-4">
              Necesitas tener 10,000 DRACMA para ser elegible y subir proyectos.
            </p>
          </CardContent>
        </Card>
      );
    }

    if (!isHolder) {
      return (
        <div className="space-y-6">
          <InsufficientBalanceMessage 
            currentBalance={balance}
            onClose={() => setShowInsufficientBalanceDialog(false)}
          />
          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                Una vez que adquieras los tokens necesarios, podrás subir tu proyecto.
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <ProjectFormBasicInfo form={form} />
              
              <div className="space-y-4">
                <FileUploadField
                  id="thumbnail"
                  label="Imagen del Proyecto"
                  description="PNG, JPG o WEBP"
                  icon={Upload}
                  accept="image/png,image/jpeg,image/webp"
                  maxSize="5MB"
                  onFileSelect={setThumbnailFile}
                  selectedFile={thumbnailFile}
                />

                <FileUploadField
                  id="businessPlan"
                  label="Plan de Negocios (PDF)"
                  description="PDF"
                  icon={FileText}
                  accept="application/pdf"
                  maxSize="10MB"
                  onFileSelect={setBusinessPlanFile}
                  selectedFile={businessPlanFile}
                />
              </div>

              <ProjectFormFinancials form={form} />

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90"
                disabled={submitting}
              >
                {submitting ? "Enviando..." : "Enviar Proyecto"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Header />
      <main className="flex-grow pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ProjectSubmissionHeader />
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectSubmission;
