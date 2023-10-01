import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prismadb from "@/lib/prismadb"
import { compare }  from "bcrypt"

export default NextAuth({
    providers: [
            Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email:{
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                }
            },

            async authorize(credentials, req,) {

                if (!credentials?.email) {
                    throw new Error('Email is required!');                 
                }
                if (!credentials?.password) {
                    throw new Error('Password is required!');                 
                }

                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user.hashedPassword) {
                    throw new Error('Email do not exist!');
                }

                const isCorrectPassword = await compare(credentials.password, user.hashedPassword)

                if (!isCorrectPassword) {
                    throw new Error('Incorrect password!') 
                }
                
                return user
            }
        })
    ],
    pages: {
        signIn: '/auth'
    },
    debug: process.env.NODE_ENV === 'development',
    adapter: PrismaAdapter(prismadb),
    session: {
        strategy: "jwt",
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
})

