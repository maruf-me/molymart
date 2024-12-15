"use client";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { Text } from "../common/Text";
import { Button } from "../ui/button";

const ContinueWithSocial = () => {
  const pathname = usePathname();
  const activePage = pathname === "/auth" ? "sign up" : "sign in";
  const pageTitle =
    pathname === "/auth" ? "Create your account" : "Sign in to your account";

  return (
    <>
      <div>
        <Text className="text-center text-xl font-medium">{pageTitle}</Text>

        <Button variant={"outline"} className="w-full my-3 text-dark-80">
          <Icon icon="devicon:google" height={24} width={24} />
          Continue with Google
        </Button>
        <Button variant={"outline"} className="w-full text-dark-80">
          <Icon icon="logos:facebook" height={24} width={24} />
          Continue with Facebook
        </Button>
      </div>

      <div className="flex items-center gap-3 my-4">
        <hr className="w-full" />
        <Text className="text-sm min-w-max" variant="gray">
          or {activePage} with your email
        </Text>
        <hr className="w-full" />
      </div>
    </>
  );
};

export default ContinueWithSocial;
