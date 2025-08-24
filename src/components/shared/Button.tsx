import { Button as ButtonShadcn } from "@/components/ui/button";

interface IButtonProps {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    [key: string]: any; // Allow other standard button props
}

export function Button({ children, type, ...props }: IButtonProps) {
    return (
        <ButtonShadcn type={type} {...props}>
            {children}
        </ButtonShadcn>
    )
}