import { fetchUsers, saveUser } from '@/utils/actions';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  console.log(req.url);
  console.log(req.nextUrl.searchParams.get('id'));

  const users = await fetchUsers();
  return NextResponse.redirect(new URL('/', req.url));
};
