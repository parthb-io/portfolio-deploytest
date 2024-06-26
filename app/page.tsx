"use client";

import React from "react";
import { saveAs } from "file-saver";
import ReactCountryFlag from "react-country-flag";
import { siteConfig } from "@/config/site";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Divider,
  Avatar,
  Link,
  CircularProgress,
  Snippet,
  Badge,
  Progress,
  AvatarGroup,
  Chip,
} from "@nextui-org/react";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  const saveFile = () => {
    saveAs("resume-swe2.pdf");
  };

  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const [isFollowed, setIsFollowed] = React.useState(false);

  // oldstylehome
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  // oldstylehome

  return (
    <>
      <section className="container px-4   flex flex-col items-center justify-center  py-16 mb-12 ">
        <div className="z-10 w-full items-center justify-center max-w-4xl py-6 pb-16 px-5 ">
          <h1 className="animate-fade-up  text-center  text-4xl font-bold  drop-shadow-sm md:text-6xl">
            Shaping the digital future, one code at a time.
          </h1>
          <p className="mt-6  text-center text-default-500 m">
            {" "}
            Forging the Digital Frontier, One Line of Code at a Time – Where
            Innovation Meets Excellence.
          </p>
          <div className="mx-auto mt-4 flex animate-fade-up items-center justify-center space-x-5 ">
            <Button className="mt-16 " color="default" variant="ghost">
              <Link
                isExternal
                href={siteConfig.links.github}
                color="foreground"
                aria-label="Github"
              >
                <GithubIcon className="text-default-500 mr-2" /> Star Github
              </Link>
            </Button>
            <Button
              isExternal
              href={siteConfig.links.twitter}
              as={Link}
              className="mt-16 "
              color="danger"
              variant="shadow"
            >
              Chat ☕
            </Button>
          </div>
        </div>

        <div className="container pt-12 pb-6  lg:px-12 grid grid-cols-12 mx-auto w-full gap-6">
          {/* bio-card */}
          <Card shadow="lg" className="col-span-12 p-4 sm:col-span-8">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Badge content="hire" color="secondary" size="sm">
                  <Avatar
                    isBordered
                    radius="lg"
                    color="secondary"
                    src="profile4.jpeg"
                  />
                </Badge>
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    Parth Bhatt
                  </h4>
                  <h5 className="text-tiny md:text-sm lg:text-sm tracking-tight  mr-4 text-default-500">
                    @parthb.io
                  </h5>
                </div>
              </div>
              <Button
                isExternal
                href={siteConfig.links.twitter}
                as={Link}
                color="primary"
                radius="full"
                size="md"
                variant="ghost"
              >
                Follow
              </Button>
            </CardHeader>

            <Divider className="my-2 " />
            <CardBody className="px-3 overflow-hidden py-0 text-small text-default-500">
              <p className="py-4  leading-loose">
                I bring over 2 years of valuable IT experience, currently as an{" "}
                {""}
                <Chip color="danger" size="sm" variant="dot">
                  Associate Fullstack Dev 
                </Chip>
                {""}
                 and {""}
                <Chip color="danger" size="sm" variant="dot">
                  AI enthusiast{" "}
                </Chip>{" "}
                {""} based in Canada
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
                />{" "}
                but strongly rooted in Uganda
                <ReactCountryFlag
                  countryCode="UG"
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  style={{
                    width: "2em",
                    height: "1.5em",
                  }}
                  title="UG"
                  className="mr-2 "
                />
                {""}
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
                    height: "1.5em",
                  }}
                />
                .
              </p>
              <p className="pt-4 leading-loose">
                My expertise spans a wide array of programming languages,
                libraries, & frameworks, such as
                {""}{" "}
                <Chip color="warning" size="sm" variant="faded">
                  ReactJS
                </Chip>
                ,{""}{" "}
                <Chip color="warning" size="sm" variant="faded">
                  AngularJS
                </Chip>
                ,{""}{" "}
                <Chip color="warning" size="sm" variant="faded">
                  GatsbyJS
                </Chip>{" "}
                &{""}{" "}
                <Chip color="warning" size="sm" variant="faded">
                  Framer Motion
                </Chip>
                , as well as back-end development with
                {""}{" "}
                <Chip color="warning" size="sm" variant="faded">
                  NodeJS
                </Chip>{" "}
                &{""}{" "}
                <Chip color="warning" size="sm" variant="faded">
                  Python
                </Chip>
                , all implemented on maintaining & enhancing web-based
                applications through the entire Software Development Life Cycle
                (SDLC).
              </p>
              <p className="py-4">Join me on this coding adventure!</p>
            </CardBody>

            <CardFooter className="gap-6 overflow-hidden ">
              <Snippet
                className="text-purple-400 font-semibold  text-tiny "
                symbol="#"
                hideCopyButton
                variant="bordered"
                size="sm"
                color="secondary"
              >
                codewithBantsy 💻
              </Snippet>

              <Snippet
                className="text-purple-400 font-semibold  text-tiny "
                symbol="#"
                hideCopyButton
                variant="bordered"
                size="sm"
                color="secondary"
              >
                onairBantsy 🎙️
              </Snippet>
              <Snippet
                className="text-purple-400 font-semibold  text-tiny "
                symbol="#"
                hideCopyButton
                variant="bordered"
                size="sm"
                color="secondary"
              >
                parthb.io 🚀
              </Snippet>
            </CardFooter>
          </Card>
          {/* resume-card */}
          <Card
            isFooterBlurred
            shadow="lg"
            className="col-span-12 p-4 sm:col-span-4"
          >
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="/profile-logo.svg"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Resume / Bio</p>
                  <p className="text-small  text-default-500">
                    Work & Education Exp
                  </p>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-end">
                <a className="mr-2 rounded-full bg-blue-200 p-1" href="#">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="mb-4">
              <ol className="mt-3 space-y-4">
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-8  w-8  flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      alt="nextui logo"
                      height={50}
                      radius="sm"
                      src="./vebcommerce-logo.png"
                      width={50}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only ">Company</dt>
                    <dd className="w-full flex-none text-md  ">
                      Full-stack Developer
                    </dd>
                    <dt className="sr-only hidden sm:block">Role</dt>
                    <dd className="text-tiny ">VebCommerce</dd>
                    <dt className="sr-only hidden">Date</dt>
                    <dd
                      className="ml-auto mt-1 text-tiny  text-blue-600"
                      aria-label="2022 till 2023"
                    >
                      <time dateTime="2019">2022</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime="2023">2023</time>
                    </dd>
                  </dl>
                </li>
                <Divider />
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-8  w-8  flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      alt="nextui logo"
                      height={50}
                      radius="sm"
                      src="./lofcart-logo.png"
                      width={50}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full text-md md:text-md  flex-none ">
                      Web Developer
                    </dd>
                    <dt className="sr-only hidden sm:block">Role</dt>
                    <dd className="text-tiny ">Lofcart Alberta Ltd</dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-tiny  text-blue-600 "
                      aria-label="2021 until 2022"
                    >
                      <time dateTime="2014">2021</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime="2019">2022</time>
                    </dd>
                  </dl>
                </li>
                <Divider />
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-8  w-8  flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      alt="nextui logo"
                      height={50}
                      radius="sm"
                      src="georgian-logo.png"
                      width={50}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-md  ">
                      Computer Programmer [Diploma-Prg]
                    </dd>
                    <dt className="sr-only hidden sm:block">Role</dt>
                    <dd className="text-tiny ">Georgian College</dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-tiny  text-blue-600"
                      aria-label="2018 until 2021"
                    >
                      <time dateTime="2018">2018</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime="2021">2021</time>
                    </dd>
                  </dl>
                </li>
              </ol>
            </CardBody>

            <CardFooter className="absolute mb-2 mt-6 pt-6 bottom-0 z-10 ">
              <Button
                // href="https://docs.google.com/document/d/1L8xBEcyQcA0kBVaIT4wzzeqeyO9zXk7WeTDBUyzFytE/edit?usp=sharing"
                as={Link}
                color="danger"
                showAnchorIcon
                variant="shadow"
                onClick={saveFile}
              >
                Download Resume
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="container py-6  lg:px-12 grid grid-cols-12 mx-auto w-full gap-6">
          {/* card-1 */}
          <Card
            isFooterBlurred
            shadow="lg"
            className="col-span-12 p-4 sm:col-span-4"
          >
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="./profile-logo.svg"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Kalaakar</p>
                  <p className="text-small  text-default-500">
                    Digital Guest Boook
                  </p>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-end">
                <a className="mr-2 rounded-full bg-pink-200 p-1" href="#">
                  <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                </a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              </div>
            </CardHeader>

            <Image
              alt="Woman listing to music"
              className="object-cover h-[300px]  w-full"
              src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw5Mnx8cXVvdGVzfGVufDB8fHx8MTY5MjQwMTY5MHww&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
            />
            <CardFooter className="justify-between before:bg-white/10 border-black/30 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny ">Available soon.</p>
              <Button
                className="text-tiny  bg-pink-500"
                variant="bordered"
                color="default"
                radius="full"
                size="md"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
          {/* card2-starts */}
          <Card
            isFooterBlurred
            shadow="lg"
            className="col-span-12 h-[400px] p-4 sm:col-span-4"
          >
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="./profile-logo.svg"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md font-semibold">Freelance Services</p>
                  <p className="text-tiny text-default-500 md:text-small  ">
                    Fiverr | UpWork | GoSavis
                  </p>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-end">
                <a className="mr-2 rounded-full bg-purple-200 p-1" href="#">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex flex-wrap overflow-hidden mb-2 py-1 px-4 items-center justify-between  rounded-md">
                <div className="w-auto p-2">
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="w-auto p-1.5 border-l border-purple-500 ">
                      <Link
                        isExternal
                        color="success"
                        className="mb-1 text-sm md:text-md ml-2"
                        href={siteConfig.links.fiverr}
                        underline="always"
                      >
                        I will create custom business websites with godaddy
                        builder
                      </Link>
                      <p className="text-tiny ml-2">
                        Using the versatile GoDaddy GoCentral builder, I&apos;ll
                        bring your vision to life with a captivating website and
                        a functional online store. <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </CardBody>
            <CardFooter
              className="bg-black/10 bottom-0 z-10 border-t-1 border-purple-600
             dark:border-purple-300"
            >
              <Button
                href=""
                as={Link}
                radius="full"
                size="sm"
                color="default"
                variant="bordered"
                showAnchorIcon
                isDisabled
              >
                More Services
              </Button>
            </CardFooter>
          </Card>
          {/* card2-ends */}
          {/* card3 */}
          <Card
            isFooterBlurred
            shadow="lg"
            className="col-span-12  sm:col-span-4"
          >
            <Image
              removeWrapper
              isZoomed
              isBlurred
              alt="Relaxing app background"
              className="  w-auto h-[300px] md:h-auto lg:h-full object-cover"
              shadow="lg"
              radius="lg"
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8dHJhdmVsJTIwd2Vic2l0ZXxlbnwwfHx8fDE2OTI1NzYzMDJ8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
            />

            <CardFooter className="absolute  bottom-0 z-10 ">
              <p>Feature Loading Soon...</p>
            </CardFooter>
          </Card>
          {/* card3 */}
        </div>
      </section>
    </>
  );
}
