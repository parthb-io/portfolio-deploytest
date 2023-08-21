import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
// import { infotainment as Infotainment } from "@/components/infotainment";

import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="relative container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>

           

            <footer className="relative w-full flex max-w-7xl mx-auto py-12">
              <div className="container pt-16 px-6 mx-auto px-4">
                <div className="flex flex-wrap gap-8 lg:items-center -m-6">
                 
                    
                  
                  <div className="w-full md:w-1/2 p-6">
                    <ul className="flex flex-wrap gap-4 m-5">
                      <Link
                        isExternal
                        className="flex items-center gap-1 "
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage"
                      >
                        Features
                      </Link>
                      <Link
                        isExternal
                        className="flex items-center gap-1 "
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage"
                      >
                        Pricing
                      </Link>

                      <Link
                        isExternal
                        className="flex items-center gap-1 "
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage"
                      >
                        Services
                      </Link>
					  <Link
                        isExternal
                        className="flex items-center gap-1 "
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage"
                      >
                        Services
                      </Link>
					  <Link
                        isExternal
                        className="flex items-center gap-1 "
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage"
                      >
                        Services
                      </Link>
					  <Link
                        isExternal
                        className="flex items-center gap-1 "
                        href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                        title="nextui.org homepage"
                      >
                        Services
                      </Link>
                    </ul>
                  </div>
                  <div className="w-auto md:ml-auto p-6">
                    <div className="flex flex-wrap items-center -m-1.5">
                      <div className="w-auto p-1.5">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.5 6.66669L9.0755 11.0504C9.63533 11.4236 10.3647 11.4236 10.9245 11.0504L17.5 6.66669M4.16667 15.8334H15.8333C16.7538 15.8334 17.5 15.0872 17.5 14.1667V5.83335C17.5 4.91288 16.7538 4.16669 15.8333 4.16669H4.16667C3.24619 4.16669 2.5 4.91288 2.5 5.83335V14.1667C2.5 15.0872 3.24619 15.8334 4.16667 15.8334Z"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div className="w-auto p-1.5">
                        <h3 className="">chat@parthb.io</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-9">
                  <div className="border-b border-gray-800"></div>
                </div>
                <div className="flex flex-wrap items-center justify-between -m-6">
                  <div className="w-auto p-6">
                    <p className=" ">
                      &copy; Copyright 2022. All Rights Reserved by Gradia.
                    </p>
                  </div>
                  <div className="w-auto p-6">
                    <div className="flex flex-wrap -m-6">
                      <div className="w-auto p-6">
                        <a className="" href="#">
                          Privacy Policy
                        </a>
                      </div>
                      <div className="w-auto p-6">
                        <a className="" href="#">
                          Terms &amp; Conditions
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
