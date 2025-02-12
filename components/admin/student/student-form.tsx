// app/students/addStudent/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AddStudentButton } from '@/components/button';

const AddStudentPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    nim: '',
    grade: 0,
    class: '',
    parent: '',
    phone: '',
    schoolName: '',
    birthday: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push('/students');
      }
    } catch (error) {
      console.error('Failed to add student:', error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Add Student</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="nim" className="block mb-2 text-sm font-medium text-gray-900">
            NIM
          </label>
          <input
            type="text"
            name="nim"
            value={formData.nim}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="grade" className="block mb-2 text-sm font-medium text-gray-900">
            Grade
          </label>
          <input
            type="number"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="class" className="block mb-2 text-sm font-medium text-gray-900">
            Class
          </label>
          <input
            type="text"
            name="class"
            value={formData.class}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="parent" className="block mb-2 text-sm font-medium text-gray-900">
            Parent
          </label>
          <input
            type="text"
            name="parent"
            value={formData.parent}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="schoolName" className="block mb-2 text-sm font-medium text-gray-900">
            School Name
          </label>
          <input
            type="text"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="birthday" className="block mb-2 text-sm font-medium text-gray-900">
            Birthday
          </label>
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className="border bg-gray-50 border-gray-300 text-gray-900 rounded-lg w-full p-2.5"
          />
        </div>
        <AddStudentButton />
      </form>
    </div>
  );
};

export default AddStudentPage;