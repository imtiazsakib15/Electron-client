"use client";

import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import loginLottie from "@/assets/login.json";
import Lottie from "lottie-react";
import Container from "@/components/Container/Container";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { toast } from "sonner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const { loginUser } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then(() => {
        toast.success("Login Successfully!");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <Container>
      <div className="flex items-center gap-8">
        <Lottie
          className="hidden md:inline-block md:w-1/2"
          animationData={loginLottie}
          loop={false}
        />
        <form
          className="w-full md:w-1/2 space-y-4 py-12"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center">
            Login
          </h1>
          <Input
            type="email"
            label="Email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid email",
              },
            })}
            variant="bordered"
            color={errors.email ? "danger" : "success"}
            errorMessage={errors.email && errors.email?.message}
            className="w-full"
          />
          <Input
            type={isVisible ? "text" : "password"}
            label="Password"
            {...register("password", {
              required: "This field is required",
            })}
            variant="bordered"
            color={errors.password ? "danger" : "success"}
            errorMessage={errors.password && errors.password?.message}
            endContent={
              <button
                className="focus:outline-none h-full my-auto"
                type="button"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <IoEyeOff className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <MdRemoveRedEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            className="w-full"
          />
          <p>
            Need to create an account?{" "}
            <Link href="/sign-up" className="text-green-600 hover:underline">
              Sign up
            </Link>
          </p>
          <button type="submit" className="mx-auto">
            <Button>Login</Button>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
