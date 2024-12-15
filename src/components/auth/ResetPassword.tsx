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
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
});

const ResetPassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit({ email }: z.infer<typeof formSchema>) {
    console.log({ email });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
        <Link href={"/auth/reset-password/otp"} className="block">
          <Button type="submit" variant={"primary"} className="w-full">
            Send Reset Code
          </Button>
        </Link>

        <div className="flex justify-center">
          <Link
            href={"/auth/signin"}
            className={`flex items-center gap-2 text-sm font-medium duration-300 text-dark-90 hover:scale-105 hover:underline hover:text-dark-100 max-w-max`}
          >
            <ChevronLeft size={16} /> Back to Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default ResetPassword;
