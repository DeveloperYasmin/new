import NextAuth from "next-auth"

export const config={

    matcher:['/((?!api|static|.*\\..*|_next).*)'],
}