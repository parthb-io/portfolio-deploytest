"use client";
import { siteConfig } from "@/config/site";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { title } from "@/components/primitives";
import { list } from "postcss";

export default function BlogPage() {
  return (
    <>
      <div className="sm:px-8 py-12 pb-12">
        <div className="mx-auto w-full container px-6 lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-10">
                {/* Image */}
                <div className="lg:pl-28">
                  <div className="max-w-xs px-2.5 lg:max-w-none">
                    <Image
                      isBlurred
                      width={800}
                      height={800}
                      src="profilePic.jpeg"
                      alt="NextUI Album Cover"
                      className="m-5 aspect-square rotate-3 "
                    />
                  </div>
                </div>
                {/* Intro-text */}
                <div className="lg:order-first lg:row-span-2">
                  <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                    👋, I&apos;m Parth Bhatt.
                  </h1>
                  <h2 className="text-xl font-bold tracking-tight mt-6 text-zinc-800 dark:text-zinc-100 sm:text-2xl">
                    I live in Edmonton City, where I code for the  future.
                  </h2>
                  <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
                      I&apos;ve always envisioned things, be it code, design, decisions, emotions, for as long as I can remember. This website is just another definition of what I have an ability for matched with what I&apos;m willing to hustle to get. 
                      .
                    </p>

                    <p>
                      Today, I&apos;m the co-founder of GoSavis, where we&apos;re
                      tailoring a way for you to connect with your favorites and
                      also all businesses. 2 meticulously crafted products are moving your way designed to entirely re-think how services get to you!
                    </p>
                    <p>
                      I&apos;ve worked on tons of little projects over the years but
                      these are the ones that I&apos;m most proud of. Many of them
                      are open-source, so if you see something that piques your
                      interest, check out the code and contribute if you have
                      ideas for how it can be improved.
                    </p>
                  </div>
                </div>
                {/* Social cards */}
                <div className="lg:pl-28">
                  <ul role="list">
                    {/* twitter */}
                    <div className="flex ">
                    
                     
                      <Link
                      className="my-2 hover:text-blue-600"
                      color="foreground"
                      aria-label="Twitter"
                        isExternal
                        href={siteConfig.links.twitter}
                        showAnchorIcon
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 mr-3 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                        </svg>
                        Follow on Twitter
                      </Link>
                    </div>

                    {/* Github */}
                    <div className="flex ">
                    
                     
                    <Link
                    className="my-2 hover:text-blue-600"
                    color="foreground"
                    aria-label="Twitter"
                      isExternal
                      href={siteConfig.links.github}
                      showAnchorIcon
                    >
                      <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 mr-3 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                          ></path>
                        </svg>
                      Follow on Github
                    </Link>
                  </div>

                    {/* linkedln */}
                    <div className="flex ">
                    
                     
                    <Link
                    className="my-2 hover:text-blue-600"
                    color="foreground"
                    aria-label="Twitter"
                      isExternal
                      href={siteConfig.links.linkedln}
                      showAnchorIcon
                    >
                       <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 mr-3 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                        </svg>
                      Follow on Linkedln
                    </Link>
                  </div>

                    <Divider className="my-4"/>

                    {/* email */}
                    <div className="flex ">
                    
                     
                    <Link
                    className="hover:text-blue-600"
                    color="foreground"
                    aria-label="Twitter"
                      isDisabled
                      href="#"
                      
                    >
                      <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 mr-3 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                          ></path>
                        </svg>
                      chat@parthb.io
                    </Link>
                  </div>

                    

                    
                   
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
