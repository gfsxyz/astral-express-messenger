"use client";

import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //TODO: Axios Register
    }

    if (variant === "LOGIN") {
      // TODO: Axios Login
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //TODO: Nextauth Social Sign in
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-white shadow sm:rounded lg sm:px-10">
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          id="astral-express-auth-form"
        >
          {variant === "REGISTER" && (
            <Input
              id="email"
              label="Email"
              errors={errors}
              register={register}
              disabled={isLoading}
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            errors={errors}
            register={register}
            disabled={isLoading}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            errors={errors}
            register={register}
            disabled={isLoading}
          />
          <div>
            <Button disabled={isLoading} fullWidht type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
          </div>

          <div className="flex gap-2 mt-6">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
              disabled={isLoading}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="flex justify-center gap-2 px-2 mt-6 text-sm text-gray-500">
          <div>
            {variant === "LOGIN" ? "New to messenger?" : "Have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthForm;
