import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input as InputShadcn } from "@/components/ui/input";

interface IInputProps {
    form: any;
    name: string;
    label: string;
    placeholder: string;
}

export default function Input({ form, name, label, placeholder }: IInputProps) {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <InputShadcn placeholder={placeholder} {...field} />
                    </FormControl>
                    {/* <FormDescription>
                                                    This is the name of the user.
                                                </FormDescription> */}
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}
