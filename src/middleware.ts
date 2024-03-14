import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req }) => {
      console.log(req.credentials)
      const sessionToken = req.cookies.get("next-auth.session-token");
      return !!sessionToken
    },
  },
});

export const config = { matcher: ["/dash/:path*"] };