
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useDracmaBalance } from "@/hooks/useTokenBalance";
import { FileText, Upload } from "lucide-react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Esquema de validación para el formulario de proyecto
const projectSchema = z.object({
  projectName: z.string().min(3, { message: "El nombre del proyecto debe tener al menos 3 caracteres" }),
  description: z.string().min(20, { message: "La descripción debe tener al menos 20 caracteres" }),
  location: z.string().min(3, { message: "Ingrese una ubicación válida" }),
  investmentGoal: z.string().min(1, { message: "Ingrese un monto válido" }),
  returns: z.string().optional(),
  contactEmail: z.string().email({ message: "Ingrese un email válido" }),
});

const ProjectSubmission = () => {
  const { isDarkMode } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isHolder, balance, isLoading } = useDracmaBalance();
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [businessPlanFile, setBusinessPlanFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

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

  const handleThumbnailUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setThumbnailFile(file);
    }
  };

  const handleBusinessPlanUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setBusinessPlanFile(file);
    }
  };

  const onSubmit = (values: z.infer<typeof projectSchema>) => {
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

    // Aquí iría la lógica para enviar el proyecto al backend
    // Simularemos un envío exitoso con un timeout
    setTimeout(() => {
      toast({
        title: "Proyecto enviado",
        description: "Tu proyecto ha sido enviado para revisión. Te contactaremos pronto.",
      });
      setSubmitting(false);
      navigate("/projects");
    }, 2000);
  };

  // Renderizado condicional basado en la conexión de wallet y el balance
  const renderContent = () => {
    // Si no hay wallet conectada
    if (isLoading) {
      return (
        <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-center mb-6">Verificando tu balance de tokens DRACMA...</p>
          </CardContent>
        </Card>
      );
    }

    // Si no hay wallet conectada, mostrar botón de conexión
    if (!isHolder && balance === "0") {
      return (
        <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-center mb-6">Conecta tu wallet para verificar si eres elegible para subir proyectos.</p>
            <ConnectButton />
          </CardContent>
        </Card>
      );
    }

    // Si el usuario no tiene suficientes tokens
    if (!isHolder) {
      return (
        <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
          <CardContent className="pt-6 flex flex-col items-center justify-center min-h-[300px]">
            <h2 className="text-xl font-semibold mb-4 text-center">Balance insuficiente</h2>
            <p className="text-center mb-2">
              Para subir proyectos, necesitas tener al menos 100,000 tokens DRACMA.
            </p>
            <p className="text-center mb-6">
              Tu balance actual: <span className="font-bold">{Number(balance).toLocaleString()} DRACMA</span>
            </p>
            <Button 
              onClick={() => window.open("https://preventa-dracma.vercel.app/", "_blank")}
              className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90"
            >
              Comprar tokens DRACMA
            </Button>
          </CardContent>
        </Card>
      );
    }

    // Si el usuario es elegible, mostrar el formulario
    return (
      <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
        <CardHeader>
          <CardTitle>Enviar nuevo proyecto</CardTitle>
          <CardDescription>
            Completa el formulario para enviar tu proyecto para evaluación
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Proyecto</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Residencial Los Alamos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción del Proyecto</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe tu proyecto en detalle..." 
                        className="min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ubicación</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Santiago, Chile" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="investmentGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Meta de Inversión (USD)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Ej: 250000" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>El monto total que necesitas recaudar para el proyecto</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="returns"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Retorno Esperado (%)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        placeholder="Ej: 15" 
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>Retorno anual estimado para los inversores</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <div>
                  <Label htmlFor="thumbnail">Imagen del Proyecto</Label>
                  <div className="mt-2">
                    <Label 
                      htmlFor="thumbnail" 
                      className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer ${
                        isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2" />
                        <p className="mb-2 text-sm">
                          <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
                        </p>
                        <p className="text-xs">PNG, JPG o WEBP (máx. 5MB)</p>
                      </div>
                      <Input 
                        id="thumbnail" 
                        type="file" 
                        className="hidden" 
                        accept="image/png,image/jpeg,image/webp" 
                        onChange={handleThumbnailUpload}
                      />
                    </Label>
                    {thumbnailFile && (
                      <p className="mt-2 text-sm">
                        Archivo seleccionado: {thumbnailFile.name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="businessPlan">Plan de Negocios (PDF)</Label>
                  <div className="mt-2">
                    <Label 
                      htmlFor="businessPlan" 
                      className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer ${
                        isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <FileText className="w-8 h-8 mb-2" />
                        <p className="mb-2 text-sm">
                          <span className="font-semibold">Haz clic para subir</span> tu plan de negocios
                        </p>
                        <p className="text-xs">PDF (máx. 10MB)</p>
                      </div>
                      <Input 
                        id="businessPlan" 
                        type="file" 
                        className="hidden" 
                        accept="application/pdf" 
                        onChange={handleBusinessPlanUpload}
                      />
                    </Label>
                    {businessPlanFile && (
                      <p className="mt-2 text-sm">
                        Archivo seleccionado: {businessPlanFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email de Contacto</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="tu@email.com" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Enviar <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">Proyecto</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Propón tu proyecto de inversión inmobiliaria para la plataforma Dracma
            </p>
          </motion.div>

          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectSubmission;
