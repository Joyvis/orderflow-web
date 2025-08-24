import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input as InputShadcn } from "@/components/ui/input";

interface IInputProps {
    formObject: any;
    name: string;
    label: string;
    placeholder: string;
    props: any;
}

export default function Input({ formObject, name, label, placeholder, ...props }: IInputProps) {
    return (
        <FormField
            control={formObject.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <InputShadcn placeholder={placeholder} {...field} {...props} />
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
