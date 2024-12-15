"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Text } from "../common/Text";

const formSchema = z.object({
  otp: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

const VerifyOtp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
    },
  });

  function onSubmit({ otp }: z.infer<typeof formSchema>) {
    console.log({ otp });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP
                  id="otp"
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  {...field}
                >
                  <InputOTPGroup className="w-full justify-center">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center flex-col items-center">
          <Text className="text-center text-sm py-2" variant="gray">
            Didn’t receive the code yet?
          </Text>
          <Link
            href={"/auth/reset-password/otp"}
            className={`text-sm font-medium duration-300 text-dark-90 hover:scale-105 underline hover:text-dark-100 max-w-max`}
          >
            Resend Code
          </Link>
        </div>

        <Link href={"/auth/set-password"} className="block">
          <Button type="submit" variant={"primary"} className="w-full">
            Reset Password
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

export default VerifyOtp;
