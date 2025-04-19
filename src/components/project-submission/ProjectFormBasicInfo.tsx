
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";

interface ProjectFormBasicInfoProps {
  form: UseFormReturn<z.infer<typeof projectSchema>>;
}

export const projectSchema = z.object({
  projectName: z.string().min(3, { message: "El nombre del proyecto debe tener al menos 3 caracteres" }),
  description: z.string().min(20, { message: "La descripción debe tener al menos 20 caracteres" }),
  location: z.string().min(3, { message: "Ingrese una ubicación válida" }),
  investmentGoal: z.string().min(1, { message: "Ingrese un monto válido" }),
  returns: z.string().optional(),
  contactEmail: z.string().email({ message: "Ingrese un email válido" }),
});

const ProjectFormBasicInfo = ({ form }: ProjectFormBasicInfoProps) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default ProjectFormBasicInfo;
