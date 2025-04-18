
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
import { DollarSign, CreditCard, Wallet } from "lucide-react";

const ProjectAlpha = () => {
  const { isDarkMode } = useTheme();
  const [investmentAmount, setInvestmentAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("usdt");
  
  // Project details
  const projectDetails = {
    currentInvestment: 175000,
    goalInvestment: 250000,
    progress: (175000 / 250000) * 100
  };

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setInvestmentAmount(value);
    }
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
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">Alpha</span>
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Residential property development in Santiago, Chile.
            </p>
          </motion.div>

          <Card className={`mb-8 ${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
            <CardHeader>
              <CardTitle>Investment Progress</CardTitle>
              <CardDescription>Goal: $250,000</CardDescription>
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
              <CardTitle>Invest in Project Alpha</CardTitle>
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
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Debit Card
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90"
                >
                  Invest Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectAlpha;
