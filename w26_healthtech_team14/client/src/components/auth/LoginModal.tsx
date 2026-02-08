import React, { useState } from 'react';
import Modal from '../common/Modal';
import RoleSelector from './RoleSelector';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({ email: z.string().email('Invalid email'), password: z.string().min(6, 'Minimum 6 characters') });
type Form = z.infer<typeof schema>;

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void; }): JSX.Element {
  const [role, setRole] = useState<string | undefined>();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({ resolver: zodResolver(schema) });

  function onRoleSelect(id: string) { setRole(id); }

  async function onSubmit(data: Form) {
    await new Promise(r => setTimeout(r, 600));
    alert('Logged in (stub)');
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose} labelledBy="login-title">
      <div>
        <h2 id="login-title" className="text-xl font-semibold mb-3">Login</h2>
        <p className="text-sm text-gray-600 mb-4">Select your role and sign in</p>

        <RoleSelector selected={role} onSelect={onRoleSelect} />

        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 grid gap-3">
          <label className="text-sm">Email</label>
          <input {...register('email')} className="border p-2 rounded" />
          {errors.email && <div className="text-red-600 text-sm">{errors.email.message}</div>}

          <label className="text-sm">Password</label>
          <input type="password" {...register('password')} className="border p-2 rounded" />
          {errors.password && <div className="text-red-600 text-sm">{errors.password.message}</div>}

          <div className="flex justify-between text-sm">
            <a href="#">Forgot password?</a>
            <button type="submit" disabled={isSubmitting} className="bg-black text-white px-4 py-2 rounded">Sign in</button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
