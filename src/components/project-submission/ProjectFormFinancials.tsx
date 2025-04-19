
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { projectSchema } from "./ProjectFormBasicInfo";

interface ProjectFormFinancialsProps {
  form: UseFormReturn<z.infer<typeof projectSchema>>;
}

const ProjectFormFinancials = ({ form }: ProjectFormFinancialsProps) => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default ProjectFormFinancials;
