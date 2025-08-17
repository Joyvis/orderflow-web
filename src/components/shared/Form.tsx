import { Form as FormShadcn } from "@/components/ui/form";

interface IFormProps {
    children: React.ReactNode;
    form: React.ReactNode;
    onSubmit: (data: any) => void;
}

export default function Form({ children, form, onSubmit }: IFormProps) {
    return (
        <FormShadcn {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {children}
            </form>
        </FormShadcn>
    )
}