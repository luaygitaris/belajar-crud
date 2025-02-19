'use client';

import { addClass } from '@/lib/actions';
import { Teacher } from '@prisma/client';
import { useActionState } from 'react';

export default function ClassForm({ teachers }: { teachers: Teacher[] }) {
	const [state, formAction] = useActionState(addClass, null);

	return (
		<form action={formAction}>
			<div>
				<label htmlFor='className'>Nama Kelas</label>
				<input
					type='text'
					id='className'
					name='className'
					required
				/>
				<p>{state?.error?.className}</p>
			</div>
			<div>
				<label htmlFor='grade'>Tingkat Kelas</label>
				<input
					type='number'
					id='grade'
					name='grade'
					required
				/>
			</div>
			<div>
				<label htmlFor='capacity'>Kapasitas</label>
				<input
					type='number'
					id='capacity'
					name='capacity'
					required
				/>
			</div>
			<div>
				<label htmlFor='teacherId'>Guru Kelas</label>
				<select
					id='teacherId'
					name='teacherId'
					required
				>
					{teachers.map((teacher) => (
						<option
							key={teacher.id}
							value={teacher.id}
						>
							{teacher.name}
						</option>
					))}
				</select>
			</div>
			<button type='submit'>Tambah Kelas</button>
		</form>
	);
}
