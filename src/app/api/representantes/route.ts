import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const representante = await prisma.representante.findMany();
    return NextResponse.json(representante);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao obter representante' }, { status: 500 });
  }
}
