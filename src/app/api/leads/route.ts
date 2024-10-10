
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const leads = await prisma.lead.findMany();
    return NextResponse.json(leads);
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao obter leads' }, { status: 500 });
  }
}
