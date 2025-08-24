import { Form as FormShadcn } from "@/components/ui/form";

interface IFormProps {
    children: React.ReactNode;
    onSubmit: (data: any) => void;
    formObject: any;
}

export default function Form({ children, onSubmit, formObject }: IFormProps) {
    return (
        <FormShadcn {...formObject}>
            <form onSubmit={formObject.handleSubmit(onSubmit)} className="space-y-8">
                {children}
            </form>
        </FormShadcn>
    )
}