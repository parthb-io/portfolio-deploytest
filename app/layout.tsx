import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import Script from "next/script";

// import {Button} from "@nextui-org/react";

import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { GithubIcon, TwitterIcon } from "@/components/icons";

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
    icon: "/profile.ico",
    shortcut: "/profile.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Y67B43DHVB" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-Y67B43DHVB');
        `}
        </Script>
        {/* <!-- gtag.js-ends --> */}
      </head>
      {/* <head /> */}

      <body
        className={clsx(
          "min-h-screen bg-background font-mono antialiased",
          fontSans.variable
        )}
      >
        {/* theme-service-provider */}
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex  flex-col h-screen">
            {/* navigation */}
            <Navbar />

            {/* main-starts */}
            <main className="relative font-mono flex container mx-auto">
              {children}
            </main>
            {/* main-ends */}

            {/* footer-starts */}
            <footer className="relative w-full flex container  mx-auto pt-4">
              <div className="mx-auto container px-4 pb-16 pt-6 sm:px-6 lg:px-8 ">
                {/* footer-header */}
                <div className="text-center">
                  <h2 className="text-2xl mb-6  md:text-3xl">
                    Let&apos;s Collaborate On A SaaS/App/Website?
                  </h2>
                  {/* <Button color="success" size="lg" radius="full" variant="ghost">
        Contact Now
      </Button>  */}
                </div>

                {/* footer-body */}
                <div className="mt-10 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between ">
                  {/* footer-menu */}
                  <ul className="flex flex-wrap justify-center gap-4 text-tiny lg:justify-end">
                    {/* copyright */}
                    <li>
                      <a href="#" className=" transition hover:opacity-75"></a>
                    </li>
                    {/* cookies */}
                    <Link href="#" color="foreground" isDisabled>
                      Cookies
                    </Link>

                    {/* privacy-policy */}
                    <Link href="#" color="foreground" isDisabled>
                      Privacy Policy
                    </Link>
                  </ul>
                  {/* social-links */}
                  <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                    {/* Twitter */}
                    <Link
                      isExternal
                      href={siteConfig.links.twitter}
                      aria-label="Twitter"
                    >
                      <TwitterIcon className="text-default-500" />
                    </Link>
                    {/* linkedln */}
                    <Link
                      className="my-2 hover:text-blue-600"
                      color="foreground"
                      aria-label="Twitter"
                      isExternal
                      href={siteConfig.links.linkedln}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 mr-3 flex-none fill-zinc-400 transition group-hover:fill-teal-500"
                      >
                        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                      </svg>
                    </Link>

                    {/* Github */}
                    <Link
                      isExternal
                      href={siteConfig.links.github}
                      aria-label="Github"
                    >
                      <GithubIcon className="text-default-500" />
                    </Link>
                    {/* Instagram */}
                    <Link
                      isExternal
                      href={siteConfig.links.github}
                      aria-label="Github"
                    >
                      {/* <InstagramIcon className="text-default-500" /> */}
                    </Link>
                  </ul>
                </div>
              </div>
            </footer>
            {/* footer-ends */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
