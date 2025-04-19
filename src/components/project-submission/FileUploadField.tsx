
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { LucideIcon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FileUploadFieldProps {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
  accept: string;
  maxSize: string;
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
}

const FileUploadField = ({
  id,
  label,
  description,
  icon: Icon,
  accept,
  maxSize,
  onFileSelect,
  selectedFile
}: FileUploadFieldProps) => {
  const { isDarkMode } = useTheme();

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-2">
        <Label 
          htmlFor={id} 
          className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer ${
            isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Icon className="w-8 h-8 mb-2" />
            <p className="mb-2 text-sm">
              <span className="font-semibold">Haz clic para subir</span> o arrastra y suelta
            </p>
            <p className="text-xs">{description} (máx. {maxSize})</p>
          </div>
          <Input 
            id={id} 
            type="file" 
            className="hidden" 
            accept={accept}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                onFileSelect(file);
              }
            }}
          />
        </Label>
        {selectedFile && (
          <p className="mt-2 text-sm">
            Archivo seleccionado: {selectedFile.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default FileUploadField;
