import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connectToDatabase from "@/utils/mongodb";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        await connectToDatabase();

        const user = await User.findOne({ email: credentials.email }).lean();
        if (!user) return null;

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) return null;

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      return session;
    },
  },

  // 🔥 required for signOut to redirect properly
  pages: {
    signIn: "/signin",
  },

  // 🔥 this is what fixes logout
  redirect: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
