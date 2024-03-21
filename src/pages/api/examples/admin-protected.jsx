import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req,res
) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    return res.send({
      content:
        "This is a protected page. You can access this page because you are signed in.",
    })
  }

  res.send({
    error: "You must be signed in to view the protected page.",
  })
}