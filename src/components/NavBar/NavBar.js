"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import icon from "@/assets/icon.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { MdOutlineShoppingCart } from "react-icons/md";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sm:px-4 lg:px-8">
      <Navbar className={styles.navbar} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
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
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/categories">Categories</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/sign-up" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem>
            <Link href="/">Home</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/categories">Categories</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/login">Login</Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="/cart">
              <MdOutlineShoppingCart className="text-xl" />
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;
