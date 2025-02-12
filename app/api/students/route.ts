import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const grade = parseInt(body.grade, 10);
    if (isNaN(grade)) {
      throw new Error('Invalid grade value');
    }

    const student = await prisma.student.create({
      data: {
        name: body.name,
        email: body.email,
        address: body.address,
        nim: body.nim,
        grade: grade,
        class: body.class,
        parent: body.parent,
        phone: body.phone,
        schoolName: body.schoolName,
        birthday: new Date(body.birthday),
      },
    });

    return NextResponse.json(student, { status: 201 });

  } catch (error) {
    console.error('Failed to create student:', error);
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
  }
}
