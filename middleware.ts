import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: Response) {
  console.log('Hello middlewear');
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: ['/about/:path*', '/tours/:path*'],
};
