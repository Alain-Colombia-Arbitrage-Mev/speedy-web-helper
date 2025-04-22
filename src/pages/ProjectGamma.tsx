
import React, { useState } from 'react';
import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DollarSign, CreditCard, Wallet, FileText, Link as LinkIcon, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProjectGamma = () => {
  const { isDarkMode } = useTheme();
  const { toast } = useToast();
  const [investmentAmount, setInvestmentAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("usdt");
  
  const projectWalletAddress = "0x4A8f1f5B6AEC987D42C11E9C10594F7eCBe27234";
  
  const projectDetails = {
    currentInvestment: 120000,
    goalInvestment: 320000,
    progress: (120000 / 320000) * 100
  };

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setInvestmentAmount(value);
    }
  };
  
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(projectWalletAddress);
    toast({
      title: "Dirección copiada",
      description: "La dirección del proyecto ha sido copiada al portapapeles",
    });
  };
  
  const getFiatOnRampUrl = () => {
    return `https://onramp.gatefi.com/?merchantId=3e1a127a-0da9-45aa-8cb8-06cf343b8ca0&cryptoCurrency=USDT-BEP20&cryptoCurrencyLock=true&wallet=${projectWalletAddress}`;
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
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">Gamma</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Mixed-use development in Bogotá, Colombia.
            </p>
          </motion.div>

          <Card className={`mb-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img 
                src="/lovable-uploads/943baadb-065a-4c5e-b6fd-c597deb3c23f.png"
                alt="Project Gamma Property"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">About the Project</h2>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Project Gamma is an innovative mixed-use development in the vibrant city of Bogotá, Colombia. 
                This project combines residential, commercial, and retail spaces, creating a dynamic community 
                hub that caters to modern urban lifestyles.
              </p>
              
              <div className="mb-6 p-4 border rounded-lg">
                <h3 className="text-lg font-medium mb-2">Project Smart Contract</h3>
                <div className="flex items-center justify-between gap-2 p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  <code className="text-sm overflow-x-auto whitespace-nowrap flex-1">
                    {projectWalletAddress}
                  </code>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleCopyAddress}
                    className="flex-shrink-0"
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <a href="/business-plan-gamma.pdf" target="_blank" rel="noopener noreferrer">
                    Business Plan
                  </a>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" />
                  <a href="/disbursement-info-gamma.pdf" target="_blank" rel="noopener noreferrer">
                    Disbursement Information
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className={`mb-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <CardHeader>
              <CardTitle>Investment Progress</CardTitle>
              <CardDescription>Goal: $320,000</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={projectDetails.progress} className="mb-4" />
              <div className="flex justify-between text-sm">
                <span>Current: ${projectDetails.currentInvestment.toLocaleString()}</span>
                <span>Goal: ${projectDetails.goalInvestment.toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <CardHeader>
              <CardTitle>Invest in Project Gamma</CardTitle>
              <CardDescription>Choose your investment amount and payment method</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Investment Amount (USD)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter amount"
                      value={investmentAmount}
                      onChange={handleInvestmentChange}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Payment Method</Label>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className={`flex items-center space-x-2 rounded-lg border p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <RadioGroupItem value="usdt" id="usdt" />
                      <Label htmlFor="usdt" className="flex items-center gap-2">
                        <Wallet className="h-5 w-5" />
                        USDT
                      </Label>
                    </div>
                    <div className={`flex items-center space-x-2 rounded-lg border p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <RadioGroupItem value="usdc" id="usdc" />
                      <Label htmlFor="usdc" className="flex items-center gap-2">
                        <Wallet className="h-5 w-5" />
                        USDC
                      </Label>
                    </div>
                    <div className={`flex items-center space-x-2 rounded-lg border p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <RadioGroupItem value="wbnb" id="wbnb" />
                      <Label htmlFor="wbnb" className="flex items-center gap-2">
                        <Wallet className="h-5 w-5" />
                        WBNB
                      </Label>
                    </div>
                    <div className={`flex items-center space-x-2 rounded-lg border p-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <RadioGroupItem value="fiat" id="fiat" />
                      <Label htmlFor="fiat" className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Fiat on Ramp
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {paymentMethod === "fiat" ? (
                  <Button 
                    className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90"
                    onClick={() => window.open(getFiatOnRampUrl(), "_blank")}
                  >
                    Proceed to Payment Gateway
                  </Button>
                ) : (
                  <Button 
                    className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90"
                  >
                    Invest Now
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectGamma;
