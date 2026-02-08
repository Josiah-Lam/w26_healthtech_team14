import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(1, 'Required'),
  companySize: z.string().optional(),
  country: z.string().optional(),
  message: z.string().min(1, 'Please tell us about your project'),
  privacy: z.boolean().refine(v => v === true, 'You must agree')
});

type FormSchema = z.infer<typeof schema>;

export default function ContactForm(): JSX.Element {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormSchema>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormSchema) {
    // placeholder submit
    await new Promise((r) => setTimeout(r, 800));
    alert('Submitted — thank you');
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Transform what's possible in healthcare</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm">First Name <span className="text-red-600">*</span></label>
            <input {...register('firstName')} className="w-full border p-2 rounded" />
            {errors.firstName && <div className="text-red-600 text-sm">{errors.firstName.message}</div>}
          </div>
          <div>
            <label className="text-sm">Last Name <span className="text-red-600">*</span></label>
            <input {...register('lastName')} className="w-full border p-2 rounded" />
            {errors.lastName && <div className="text-red-600 text-sm">{errors.lastName.message}</div>}
          </div>
        </div>

        <div>
          <label className="text-sm">Company Email <span className="text-red-600">*</span></label>
          <input {...register('email')} className="w-full border p-2 rounded" />
          {errors.email && <div className="text-red-600 text-sm">{errors.email.message}</div>}
        </div>

        <div>
          <label className="text-sm">Phone Number <span className="text-red-600">*</span></label>
          <input {...register('phone')} className="w-full border p-2 rounded" />
          {errors.phone && <div className="text-red-600 text-sm">{errors.phone.message}</div>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm">Company Size</label>
            <select {...register('companySize')} className="w-full border p-2 rounded">
              <option value="">Select...</option>
              <option>1-10</option>
              <option>11-50</option>
              <option>51-200</option>
              <option>201+</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Country</label>
            <select {...register('country')} className="w-full border p-2 rounded">
              <option value="">Select...</option>
              <option>Canada</option>
              <option>United States</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm">Message <span className="text-red-600">*</span></label>
          <textarea {...register('message')} rows={5} className="w-full border p-2 rounded" />
          {errors.message && <div className="text-red-600 text-sm">{errors.message.message}</div>}
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" {...register('privacy')} id="privacy" />
          <label htmlFor="privacy" className="text-sm">I agree to the <a href="#" className="underline">privacy policy</a></label>
        </div>
        {errors.privacy && <div className="text-red-600 text-sm">{errors.privacy.message}</div>}

        <div>
          <button type="submit" disabled={isSubmitting} className="bg-black text-white px-6 py-2 rounded-full">{isSubmitting ? 'Sending...' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
}
