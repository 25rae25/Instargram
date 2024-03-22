import GoogleProvider from "next-auth/providers/google";
import { addUser } from "@/service/user";
import { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_OAUTH_ID as string || '',
			clientSecret: process.env.GOOGLE_OAUTH_SECRET as string || '',
		}),
	],
	callbacks: {
		async signIn({ user: {id, name, image, email} }) {
			if(!email) {
				return false
			}
			addUser({ 
				id, 
				name: name || '', 
				image, 
				email, 
				username: email.split('@')[0] 
			});
			return true;
		},
		async session({ session, token }) {
			const user = session?.user;
			if(user) {
				session.user = {
					...user,
					username: user.email?.split('@')[0] || '',
					id: token.id as string,
				}
			}
			return session;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl
		},
		async jwt({token, user}) {	
			if(user) {
				token.id = user.id;
			}
			return token;
		}
	},
	pages: {
		signIn: '/auth/signin',
	},
	
}