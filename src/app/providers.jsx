"use client";

import AuthProvider from "@/providers/AuthProvider";
import { NextUIProvider } from "@nextui-org/react";
import { EditorProvider } from "react-simple-wysiwyg";
import { Toaster } from "sonner";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <NextUIProvider>
        <EditorProvider>
          {children}
          <Toaster richColors position="top-center" />
        </EditorProvider>
      </NextUIProvider>
    </AuthProvider>
  );
}
