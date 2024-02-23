"use client";

import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import lockLottie from "@/assets/lock.json";
import Lottie from "lottie-react";
import Container from "../Container/Container";
import { IoEyeOff } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { toast } from "sonner";

const SignUp = ({ saveUserInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isVisible, setIsVisible] = useState(false);
  const { createUser } = useAuth();

  const onSubmit = (data) => {
    const { email, password } = data;

    createUser(email, password)
      .then(async () => {
        const res = await saveUserInfo(data);
        if (res?._id) {
          toast.success("Registered Successfully!");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Container>
      <div className="flex items-center gap-8">
        <Lottie
          className="hidden md:inline-block md:w-1/2"
          animationData={lockLottie}
          loop={false}
        />
        <form
          className="w-full md:w-1/2 space-y-4 py-12"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center">
            Sign Up
          </h1>
          <Input
            type="text"
            label="Name"
            {...register("name", {
              required: "This field is required",
            })}
            variant="bordered"
            color={errors.name ? "danger" : "success"}
            errorMessage={errors.name && errors.name?.message}
            className="w-full"
          />
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
              minLength: {
                value: 6,
                message: "Password should have at least 6 character",
              },
              maxLength: {
                value: 32,
                message: "Password should contain less than 32 character",
              },
              pattern: {
                value: /(?=.*[a-z])(?=.*[A-Z])/,
                message:
                  "Password should have at least one capital, and one small letter.",
              },
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
          <button type="submit" className="mx-auto">
            <Button>Sign Up</Button>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
