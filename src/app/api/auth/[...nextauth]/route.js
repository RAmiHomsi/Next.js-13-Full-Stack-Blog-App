import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect(); //connection to db

        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPassowrd = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPassowrd) {
              return user;
            } else {
              throw new Error("Credentials wrong");
            }
          } else {
            throw new Error("Credentials provider not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
