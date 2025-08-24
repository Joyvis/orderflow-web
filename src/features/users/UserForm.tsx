import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect } from 'react';

import { Button } from '@/components/shared/Button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import type { User } from '../../types/User';

// Separate schemas for create and update
export const createUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

export const updateUserSchema = createUserSchema
  .omit({ password: true })
  .extend({
    password: z.string().min(8).optional(),
  });

export type CreateUserSchema = z.infer<typeof createUserSchema>;
export type UpdateUserSchema = z.infer<typeof updateUserSchema>;

interface UserFormProps {
  user: User | null;
  onSubmit: (data: CreateUserSchema | UpdateUserSchema) => void;
  isPending: boolean;
  submitButtonText: string;
}

export default function UserForm({
  user,
  onSubmit,
  isPending,
  submitButtonText,
}: UserFormProps) {
  const isEditMode = Boolean(user);

  // Should we remove this from here?
  // reuse default values to populate the form
  // avoid letting this component knowing about zod logic
  const form = useForm<CreateUserSchema | UpdateUserSchema>({
    resolver: zodResolver(isEditMode ? updateUserSchema : createUserSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // Load user data for editing
  useEffect(() => {
    if (user) {
      form.reset({
        name: user.name,
        email: user.email,
        password: '', // Don't populate password for security
      });
    }
  }, [user, form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {submitButtonText}
        </Button>
      </form>
    </Form>
  );
}
