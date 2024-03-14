import NextAuth, { type AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
// import CredentialsProvider from "next-auth/providers/credentials"; Maybe ?
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/libs/database";


export const authOptions: AuthOptions = {
  providers: [ 
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: "https://discord.com/api/oauth2/authorize?scope=identify+email",
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  theme: {
    logo: "/character.png",
    colorScheme: "dark",
  },
  callbacks: {
    signIn({ credentials, account }) {
      console.log("credentials", credentials);
      return true;
    },
  }
};


const handler = NextAuth(authOptions);


export { handler as GET, handler as POST}