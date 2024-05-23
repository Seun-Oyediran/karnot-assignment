"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../../public/scss/main.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body>
          <ToastContainer />

          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
