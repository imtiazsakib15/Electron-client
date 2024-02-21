"use client";

import AuthProvider from "@/providers/AuthProvider";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </AuthProvider>
  );
}
