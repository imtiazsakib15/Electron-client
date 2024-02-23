"use client";

import AuthProvider from "@/providers/AuthProvider";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <NextUIProvider>
        {children}
        <Toaster richColors position="top-center" />
      </NextUIProvider>
    </AuthProvider>
  );
}
