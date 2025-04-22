
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { X, ExternalLink } from "lucide-react";

interface InsufficientBalanceMessageProps {
  currentBalance: string;
  onClose?: () => void;
}

const InsufficientBalanceMessage = ({
  currentBalance,
  onClose
}: InsufficientBalanceMessageProps) => {
  const handleBuyTokens = () => {
    window.open("https://dracma.club", "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="w-full max-w-lg mx-4">
        <CardContent className="pt-6 space-y-4">
          {onClose && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}

          <Alert variant="destructive" className="border-destructive/50">
            <AlertTitle className="text-lg font-semibold">
              Balance Insuficiente de DRACMA
            </AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-2">Para subir proyectos, necesitas tener al menos 10,000 tokens DRACMA.</p>
              <p className="font-medium">
                Tu balance actual: {Number(currentBalance).toLocaleString()} DRACMA
              </p>
            </AlertDescription>
          </Alert>
          
          <Button 
            onClick={handleBuyTokens}
            className="w-full bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Comprar tokens DRACMA ahora
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Una vez que adquieras los tokens necesarios, podrás subir tu proyecto.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsufficientBalanceMessage;
