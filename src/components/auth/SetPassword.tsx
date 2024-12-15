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
import { Input } from "../ui/input";

const formSchema = z.object({
  password: z.string().min(6, {
    message: "Please enter the new password",
  }),
  confirm: z.string().min(6, {
    message: "Please enter the same password",
  }),
});

const SetPassword = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
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
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <PinInput {...field} />
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
              <FormLabel>Repeat Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={"primary"} className="w-full">
          Confirm Password
        </Button>

        <div className="flex justify-center">
          <Link
            href={"/auth/signin"}
            className={`flex items-center gap-2 text-sm font-medium duration-300 text-dark-90 hover:scale-105 hover:underline hover:text-dark-100 max-w-max`}
          >
            Cancel
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default SetPassword;
