"use client";

import Typewriter from "typewriter-effect";

import { Link } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import ReactCountryFlag from "react-country-flag";
import { Divider } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Code } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

import { infotainment as Infotainment } from "@/components/infotainment";

export default function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <>
      <section className="container px-2 md:px-10 lg:px-16 flex flex-col items-center justify-center gap-4 py-4 ">
        <div className="container mx-auto w-full px-2 md:px-16 lg:px-12   pb-20 ">
          <section className="py-12  ">
            <div className="container mx-auto px-4">
              <Chip
                className="sm:hidden mx-4 text-tiny"
                color="success"
                variant="dot"
              >
                About me
              </Chip>

              <div className="flex flex-wrap -mx-4 mb-12">
                <div className="lg:w-1/2 xl:w-5/12 px-4 mb-10 lg:mb-0">
                  <Image
                    isBlurred
                    height={150}
                    width={150}
                    src="profile2.jpeg"
                    fallbackSrc="https://via.placeholder.com/300x200"
                    alt="NextUI Album Cover"
                    className="m-5 mt-6 mb-6"
                  />

                  <h1 className="mt-6 font-semibold text-3xl md:text-4xl lg:text-5xl text-emerald-500">
                    <Typewriter
                      options={{
                        strings: [
                          "[Am Parth Bhatt]",
                          "[A Software developer]",
                          "[A Photographer]",
                          "[A Tech Founder]",
                          "[A Web developer]",
                        ],
                        autoStart: true,

                        loop: true,
                      }}
                    />
                    {""}{" "}
                  </h1>
                </div>
                <div className="lg:w-1/2 xl:w-7/12 px-4">
                  <div className="max-w-2xl lg:pl-12  lg:ml-auto">
                    <Chip
                      className="hidden lg:flex text-tiny mb-6"
                      size="sm"
                      color="success"
                      variant="dot"
                    >
                      About me
                    </Chip>

                    <div className="flex flex-wrap ">
                      <Code
                        className=" mb-3 text-sm  lg:mr-2 md:mr-2 "
                        color="default"
                      >
                        👋, I&apos;m Parth Bhatt, <br />
                      </Code>
                      <Code
                        className=" mb-6 text-sm lg:ml-2 md:ml-2 "
                        color="default"
                      >
                        Currently based in Canada
                        <ReactCountryFlag
                          countryCode="CA"
                          svg
                          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                          cdnSuffix="svg"
                          title="CA"
                          style={{
                            width: "2em",
                            height: "1em",
                          }}
                          className="mr-2 "
                        />
                        {""}but <br /> rooted in Uganda
                        <ReactCountryFlag
                          countryCode="UG"
                          svg
                          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                          cdnSuffix="svg"
                          style={{
                            width: "2em",
                            height: "1em",
                          }}
                          title="UG"
                          className="mr-2 "
                        />
                        & India
                        <ReactCountryFlag
                          countryCode="IN"
                          svg
                          cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                          cdnSuffix="svg"
                          title="IN"
                          className="mr-2 "
                          style={{
                            width: "2em",
                            height: "1em",
                          }}
                        />
                        .{" "}
                      </Code>
                    </div>

                    <p className="text-md font-mono mb-4 text-gray-400 leading-normal ">
                      Parthb.io is a tech initiative that seeks out regions and
                      markets with robust underlying catalysts, and income
                      growth, better quality of life and a business-friendly
                      environment. In those carefully selected markets and
                      locations🌐, we bring tech and expertise to create or
                      enhance the ecosystem that can transform communities.
                      possible.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" py-10 md:py-20">
                <ul>
                  <li className="flex items-center px-3 justify-between mb-4 pb-2 ">
                    <span className="text-lg">Work Experience</span>
                    <span className="text-sm lg:text-xl">
                    <Chip color="secondary" variant="dot">4+ Years</Chip>
                     
                      
                    </span>
                  </li>
                  <Divider className="my-4" />
                  <li className="flex items-center px-3  justify-between mb-4 pb-2 ">
                    <span className="text-lg">Projects Finished</span>
                    <span className="text-sm  lg:text-xl">
                    <Chip color="secondary" variant="dot">50+ </Chip>
                      
                    </span>
                  </li>

                  <Divider className="my-4" />

                  <Accordion variant="light">
                    <AccordionItem
                      key="1"
                      aria-label="techstack"
                      title="Daily Tech Stack"
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="career"
                      title="Career Preferrences"
                    >
                      <div className="mb-4  flex flex-wrap gap-3">
                        <Link size="sm" href="#" color="success" isDisabled>
                          <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">
                            #FullStackDeveloper
                          </span>
                        </Link>
                        <Link size="sm" href="#" color="success" isDisabled>
                          <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">
                            #SoftwareDeveloper
                          </span>
                        </Link>
                        <Link size="sm" href="#" color="success" isDisabled>
                          <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">
                            #JavascriptDeveloper
                          </span>
                        </Link>
                        <Link size="sm" href="#" color="success" isDisabled>
                          <span className="mb-3 mr-3 hidden rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 xl:inline-block">
                            #ProjectManager
                          </span>
                        </Link>
                        <Link size="sm" href="#" color="success" isDisabled>
                          <span className="mb-3 mr-3 hidden rounded-full border border-gray-600 px-4 py-1 text-sm leading-6  xl:inline-block">
                            #FreelanceDeveloper
                          </span>
                        </Link>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </ul>
              </div>
            </div>
          </section>

          <Infotainment />
        </div>
      </section>
    </>
  );
}
