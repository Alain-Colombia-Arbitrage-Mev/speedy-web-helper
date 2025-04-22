
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface InsufficientBalanceDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  currentBalance: string;
}

const InsufficientBalanceDialog = ({
  isOpen,
  onOpenChange,
  currentBalance,
}: InsufficientBalanceDialogProps) => {
  const handleBuyTokens = () => {
    window.open("https://preventa-dracma.vercel.app/", "_blank");
    onOpenChange(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Balance Insuficiente</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="mb-2">
              Para subir proyectos, necesitas tener al menos 10,000 tokens DRACMA.
            </p>
            <p className="font-medium">
              Tu balance actual: {Number(currentBalance).toLocaleString()} DRACMA
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => onOpenChange(false)}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleBuyTokens}
            className="bg-gradient-to-r from-[#FF56BB] to-[#FF8F77] hover:from-[#FF56BB]/90 hover:to-[#FF8F77]/90"
          >
            Comprar tokens DRACMA
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default InsufficientBalanceDialog;
