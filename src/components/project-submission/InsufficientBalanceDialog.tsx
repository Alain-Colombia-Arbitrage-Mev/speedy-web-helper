
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface InsufficientBalanceProps {
  currentBalance: string;
}

const InsufficientBalanceMessage = ({
  currentBalance,
}: InsufficientBalanceProps) => {
  const handleBuyTokens = () => {
    window.open("https://dracma.club", "_blank");
  };

  return (
    <Card className="border-destructive">
      <CardContent className="pt-6 space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-destructive">
            Balance Insuficiente de DRACMA
          </h3>
          <p className="text-sm text-muted-foreground">
            Para subir proyectos, necesitas tener al menos 10,000 tokens DRACMA.
          </p>
          <p className="font-medium">
            Tu balance actual: {Number(currentBalance).toLocaleString()} DRACMA
          </p>
        </div>
        
        <Button 
          onClick={handleBuyTokens}
          className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Comprar tokens DRACMA ahora
        </Button>
      </CardContent>
    </Card>
  );
};

export default InsufficientBalanceMessage;
