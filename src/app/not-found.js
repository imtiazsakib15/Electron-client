"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import notFound from "@/assets/not-found.json";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="sm:w-2/3 md:w-1/2 mx-auto text-center">
      <Player autoplay loop src={notFound}></Player>
      <Link href="/">
        <Button className="bg-green-600 px-8 text-white font-medium">
          Go Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
