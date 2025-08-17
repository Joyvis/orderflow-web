'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import Input from '@/components/shared/Input';
import { userSchema } from "./User";
import Form from '@/components/shared/Form';

const formSchema = userSchema.pick({ name: true });

export default function UserForm() {
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Populate type with form data and submit with repo
        console.log(values);
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
        },
    })

    return (
        <div>
            <h1>User Form</h1>
            <Form form={form} onSubmit={onSubmit}>
                <Input form={form} name="name" label="Name" placeholder="Name" />
                <Input form={form} name="email" label="Email" placeholder="Email" />
                <Input form={form} name="password" label="Password" placeholder="Password" />

                <Button form={form} type="submit">Submit</Button>
            </Form>
        </div>
    );
}
