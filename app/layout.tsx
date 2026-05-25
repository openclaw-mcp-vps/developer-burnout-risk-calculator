import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Burnout Risk Calculator",
  description: "Calculate burnout risk from Git activity patterns. Analyzes commit patterns, work hours, and code quality metrics to identify developers at burnout risk."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="178ab6fd-444d-4f2c-ac75-ff49cabd96a9"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
