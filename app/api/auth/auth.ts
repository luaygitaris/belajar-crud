import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/prisma';
import Credentials from 'next-auth/providers/credentials';
import { SignInSchema } from '../../../lib/zod';
import { compareSync } from 'bcrypt-ts';

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: 'jwt',
	},
	callbacks: {
		async session({ session, token }) {
			if (token) {
				session.user.id = token.sub ?? '';
			}
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.sub = user.id;
			}
			return token;
		},

		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const ProtectedRoutes = ['/dashboard', '/user', '/product', '/profile'];

			if (!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)) {
				return Response.redirect(new URL('/login', nextUrl));
			}

			if (isLoggedIn && nextUrl.pathname.startsWith('/login')) {
				return Response.redirect(new URL('/dashboard', nextUrl));
			}
			if (isLoggedIn && nextUrl.pathname.startsWith('/register')) {
				return Response.redirect(new URL('/dashboard', nextUrl));
			}
			return true;
		},
	},
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				const validatedFields = SignInSchema.safeParse(credentials);

				if (!validatedFields.success) {
					return null;
				}

				const { email, password } = validatedFields.data;

				const user = await prisma.user.findUnique({
					where: { email },
				});

				if (!user || !user.password) {
					throw new Error('No User found');
				}

				const passwordMatch = compareSync(password, user.password);

				if (!passwordMatch) return null;

				return user;
			},
		}),
	],
});
