import { getAuthSession } from '@/utils/auth';
import { NextResponse } from 'next/server';
import prisma from '@/utils/connect';

export const POST = async (req) => {
    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'Not Authenticated!' }, { status: 401 }));
    }

    try {
        const body = await req.json();
        const comment = await prisma.comment.create({
            data: { ...body, userEmail: session.user.email }
        });

        return new NextResponse(JSON.stringify(comment, { status: 201 }));
    } catch (err) {
        console.log(err);

        return new NextResponse(JSON.stringify({ message: 'Something went wrong!' }, { status: 500 }));
    }
};