import googlePlay from "@/assets/app-store-google.svg";
import applePlay from "@/assets/app-store-apple.svg";
import Image from "next/image";
import Container from "@/components/Container/Container";
import icon from "@/assets/icon.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-8 sm:py-10 lg:py-14">
          <div className="space-y-4 text-sm lg:text-base">
            <Link href="/" className="flex items-center gap-1">
              <Image
                className="w-6 h-6 sm:w-7 sm:h-7"
                src={icon}
                alt="Brand Icon"
              />
              <p className="font-medium text-lg sm:text-xl font-mono text-inherit">
                Electron
              </p>
            </Link>
            <p>
              Largest product search engine, maximum categorized online shopping
              mall and quickest home delivery system.
            </p>
          </div>
          <div className="space-y-4 text-sm lg:text-base">
            <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
            <address>
              <p>House #6, Road # 04, Mohakhali, Dhaka-1205.</p>
              <p className="pt-2">Email: support@electron.com</p>
            </address>
          </div>
          <div className="space-y-4 text-sm lg:text-base">
            <h3 className="text-lg sm:text-xl font-semibold">
              Let Us Help You
            </h3>
            <div className="flex flex-col gap-2">
              <Link href="/">Your Account</Link>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Return & Refund Policy</Link>
              <Link href="/">FAQ</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold">
              Get Electron App
            </h3>
            <Image src={googlePlay} alt="Google play store link" />
            <Image src={applePlay} alt="Google play store link" />
          </div>
        </div>
      </Container>
      <p className="bg-slate-700 text-gray-400 py-5 text-center text-sm">
        &copy;{new Date().getFullYear()} Electron. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
