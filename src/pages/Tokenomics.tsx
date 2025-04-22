
import React from 'react';
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Tokenomics = () => {
  const { isDarkMode } = useTheme();
  
  const tokenDistribution = [
    { name: "Reserva del Ecosistema", percentage: 25, amount: "250M DRA", color: "bg-blue-500" },
    { name: "Venta Privada", percentage: 20, amount: "200M DRA", color: "bg-purple-500" },
    { name: "Venta Pública", percentage: 15, amount: "150M DRA", color: "bg-green-500" },
    { name: "Equipo & Asesores", percentage: 15, amount: "150M DRA", color: "bg-yellow-500" },
    { name: "Marketing & Partnerships", percentage: 10, amount: "100M DRA", color: "bg-pink-500" },
    { name: "Staking & Rewards", percentage: 10, amount: "100M DRA", color: "bg-orange-500" },
    { name: "Treasury", percentage: 5, amount: "50M DRA", color: "bg-red-500" },
  ];

  const privateRounds = [
    {
      title: "Ronda 1",
      price: "$0.20",
      allocation: "100M DRA",
      totalValue: "$20,000,000",
      minInvestment: "$10",
      vesting: "12 meses",
      tge: "10%",
      unlock: "Inmediato"
    },
    {
      title: "Ronda 2",
      price: "$0.50",
      allocation: "100M DRA",
      totalValue: "$50,000,000",
      minInvestment: "$5,000",
      vesting: "9 meses",
      tge: "15%",
      unlock: "Inmediato"
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Tokenomics <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF56BB] to-[#FF8F77]">DRACMA</span>
          </h1>

          <Tabs defaultValue="distribution" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="distribution">Distribución de Tokens</TabsTrigger>
              <TabsTrigger value="sales">Estructura de Ventas</TabsTrigger>
            </TabsList>

            <TabsContent value="distribution" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tokenDistribution.map((item, index) => (
                  <Card key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{item.name}</span>
                        <span className="text-lg font-medium">{item.amount}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={item.percentage} className={`${item.color}`} />
                      <p className="mt-2 text-sm text-muted-foreground">{item.percentage}% del suministro total</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                <CardHeader>
                  <CardTitle>Token Lock & Vesting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Time Lock</h3>
                    <p>1 año de período de bloqueo</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Mudra Token Vault</h3>
                    <Button variant="outline" className="flex items-center gap-2" asChild>
                      <a 
                        href="https://bscscan.com/token/0x8a9f07fdbc75144c9207373597136c6e280a872d?a=0x5f5c1d687699be39b6f50578a6c751b09af6f6cf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Ver en BSCScan
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sales" className="space-y-6">
              {privateRounds.map((round, index) => (
                <Card key={index} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : ''}`}>
                  <CardHeader>
                    <CardTitle>Venta Privada - {round.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Precio</p>
                        <p className="font-medium">{round.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Allocation</p>
                        <p className="font-medium">{round.allocation}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Valor Total</p>
                        <p className="font-medium">{round.totalValue}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Inversión Mínima</p>
                        <p className="font-medium">{round.minInvestment}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Vesting</p>
                        <p className="font-medium">{round.vesting}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">TGE</p>
                        <p className="font-medium">{round.tge}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Desbloqueo</p>
                        <p className="font-medium">{round.unlock}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tokenomics;
