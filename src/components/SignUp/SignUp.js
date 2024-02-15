"use client";

import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import lockLottie from "@/assets/lock.json";
import Lottie from "lottie-react";
import Container from "../Container/Container";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <div className="flex items-center gap-8">
        <Lottie
          className="hidden md:inline-block md:w-1/2"
          animationData={lockLottie}
          loop={true}
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
            type="password"
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
                value: /(?=.*[0-9])(?=.*[A-Z])/,
                message:
                  "Password should have at least one capital letter, and a number.",
              },
            })}
            variant="bordered"
            color={errors.password ? "danger" : "success"}
            errorMessage={errors.password && errors.password?.message}
            className="w-full"
          />
          <button type="submit">
            <Button>Sign Up</Button>
          </button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
