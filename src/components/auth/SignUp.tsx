"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PinInput from "../forms/PinInput";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const formSchema = z.object({
  password: z.string().min(6, {
    message: "Please enter the password",
  }),
  name: z.string().min(6, {
    message: "Please enter your full name",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  agree: z.boolean().default(false),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      name: "",
      email: "",
      agree: false,
    },
  });

  function onSubmit({ password }: z.infer<typeof formSchema>) {
    console.log({ password });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PinInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem className="flex items-center justify-center my-3 gap-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel className="block text-dark-80 text-xs pb-1">
                I agree to all statement included in
                <Link
                  href={"/#"}
                  className={`duration-300 text-dark-90 hover:scale-105 pl-1 underline`}
                >
                  Terms & Conditions
                </Link>
              </FormLabel>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant={"primary"}
          className="uppercase min-w-full"
        >
          SIGN UP
        </Button>
      </form>
    </Form>
  );
};

export default SignUp;
