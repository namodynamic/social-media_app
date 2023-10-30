import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2,{message: "Name should be at least 2 characters"}),
    username: z.string().min(2,{message: "Username should be at least 2 characters"}),
    email: z.string().email({ message: "Enter a valid email" }),
    password: z.string().min(8,{message: "Password should be at least 8 characters"}),
})
  
export const SigninValidation = z.object({
    email: z.string().email({ message: "Enter a valid email" }),
    password: z.string().min(8,{message: "Password should be at least 8 characters"}),
  })
  