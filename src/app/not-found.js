import Button from "@/components/Button/Button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold tracking-widest">
        404
      </h1>
      <div className="bg-green-600 text-white px-2 text-xs sm:text-sm rounded rotate-12 absolute -mt-10 sm:-mt-4">
        Page Not Found
      </div>
      <Link href={"/"} className="mt-8">
        <Button>Go Home</Button>
      </Link>
    </main>
  );
};

export default NotFound;
