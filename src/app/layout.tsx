import type { Metadata } from "next";
import { Noto_Sans, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/docs/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pucar Design System",
    template: "%s · Pucar Design System",
  },
  description:
    "Pucar's design tokens, foundations, and UI components — documented for product teams and AI agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${notoSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
