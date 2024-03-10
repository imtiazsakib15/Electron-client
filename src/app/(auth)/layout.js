import Image from "next/image";
import Link from "next/link";
import icon from "@/assets/icon.png";

const layout = ({ children }) => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-1 pt-5 ps-4 sm:ps-8 lg:ps-12"
      >
        <Image className="size-6 sm:size-7" src={icon} alt="Brand Icon" />
        <p className="font-medium text-lg sm:text-xl font-mono text-inherit">
          Electron
        </p>
      </Link>
      {children}
    </>
  );
};

export default layout;
