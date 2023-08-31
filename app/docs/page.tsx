"use client";
import React from "react";

import { title } from "@/components/primitives";

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
} from "@nextui-org/react";
import { Tabs, Tab, Chip } from "@nextui-org/react";

export default function DocsPage() {
  // project-list
  const list = [
    {
      logo: "/favicon.ico",
      subtitle: "teest1",
      title: "Orange",

      img: "https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3N8ZW58MHx8fHwxNjkyNTc2MDI0fDA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
      url: "$5.50",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest1",
      title: "Tangerine",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8dHJhdmVsJTIwd2Vic2l0ZXxlbnwwfHx8fDE2OTI1NzYzMDJ8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
      url: "$3.00",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest1",
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      url: "$10.00",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest1",
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      url: "$5.30",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest1",
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      url: "$15.70",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest1",
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      url: "$8.00",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest1",
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      url: "$7.50",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest1",
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      url: "$12.20",
    },
  ];

  // services-list
  const services = [
    {
      platform: "/favicon.ico",
      subtitle: "teest1",
      listing: "Orange",

      thumbnail:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyOHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNjkyNTc1NzgxfDA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
      price: "$5.50",
    },
    {
      platform: "/favicon.ico",
      subtitle: "teest1",
      listing: "Orange",

      thumbnail: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      platform: "/favicon.ico",
      subtitle: "teest1",
      listing: "Orange",

      thumbnail: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      platform: "/favicon.ico",
      subtitle: "teest1",
      listing: "Orange",

      thumbnail: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      platform: "/favicon.ico",
      subtitle: "teest1",
      listing: "Orange",

      thumbnail: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
  ];
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <section className="container px-2 md:px-10 lg:px-16 flex flex-col items-center justify-center gap-4 py-4 ">
      <div className="container mx-auto w-full px-2 md:px-16 lg:px-12   pb-20 ">
        {/* hero-section */}
        <div className="mb-8 px-8  overflow-hidden  pb-8 font-mono">
          <h1 className={title()}>{""} Things I’ve made trying to put my </h1>

          <h1 className={title({ class: "mt-2  text-emerald-500" })}>
            {""} dent in the universe.{""}{" "}
          </h1>

          {/* <p className="font-medium mt-8 leading-normal ">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p> */}

          {/* <div className="mb-4 mt-8 flex flex-wrap gap-3">
            <a
              className="group  -m-1 p-1"
              aria-label="Follow on GitHub"
              href="https://github.com"
            >
              #FullStackDeveloper
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Follow on Twitter"
              href="https://twitter.com"
            >
              #FullStackDeveloper
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Follow on Twitter"
              href="https://twitter.com"
            >
              #FullStackDeveloper
            </a>
          </div> */}
        </div>
        <Divider className="px-8" />

        {/* card-section */}
        <div className="container mx-auto w-full gap-6 grid grid-cols-12 py-16 grid-rows-2 px-8">
          {/* Card-1 */}
          <Card shadow="lg" className="col-span-12  sm:col-span-6 ">
            <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="/profile-logo.svg"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p>
                I’ve worked on tons of little projects over the years but these
                are the ones that I’m most proud of. Many of them are
                open-source, so if you see something that piques your interest,
                check out the code and contribute if you have ideas for how it
                can be improved.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
          {/* Cards 2&3 */}
          <div className="col-span-12 sm:col-span-6 flex flex-col mx-auto w-full gap-8">
            <Card shadow="lg" className="overflow-hidden p-4 relative ">
              <CardHeader className="justify-between">
                <div className="flex gap-5 ">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src="/profile-logo.svg"
                  />
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    color="primary"
                    src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                  />
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    color="secondary"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    color="success"
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  />
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    color="warning"
                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                  />
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    color="danger"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                  />
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    color="danger"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="hidden  lg:flex md:flex"
                  />
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    color="danger"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="hidden  lg:flex md:flex"
                  />
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    color="danger"
                    src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    className="hidden  lg:flex md:flex"
                  />
                  {/* <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      Zoey Lang
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      @zoeylang
                    </h5>
                  </div> */}
                </div>
                
              </CardHeader>
            </Card>
            <Card shadow="lg" className="overflow-hidden p-4 relative ">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src="/avatars/avatar-1.png"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      Zoey Lang
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      @zoeylang
                    </h5>
                  </div>
                </div>
                <Button
                  className={
                    isFollowed
                      ? "bg-transparent text-foreground border-default-200"
                      : ""
                  }
                  color="primary"
                  radius="full"
                  size="sm"
                  variant={isFollowed ? "bordered" : "solid"}
                  onPress={() => setIsFollowed(!isFollowed)}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </Button>
              </CardHeader>
              <Divider className="my-4" />
              <CardBody className="px-3 overflow-hidden py-0 text-small text-default-400">
                <p>
                  Frontend developer and UI/UX enthusiast. Join me on this
                  coding adventure!
                </p>
                <span className="pt-2">
                  #FrontendWithZoey
                  <span className="py-2" aria-label="computer" role="img">
                    💻
                  </span>
                </span>
              </CardBody>
              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">4</p>
                  <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                  <p className="font-semibold text-default-400 text-small">
                    97.1K
                  </p>
                  <p className="text-default-400 text-small">Followers</p>
                </div>
              </CardFooter>
            </Card>
          </div>
          {/* Card 4  */}
          <Card
            shadow="lg"
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-4"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h1 className="text-lg border rounded-full p-2 text-white/60 uppercase font-bold">
                1
              </h1>
            </CardHeader>
           
            <Image
              removeWrapper
              alt="Card background"
              height={380}
              className="z-0 w-full h-[380px] object-cover"
              src="https://images.unsplash.com/photo-1550170618-bd1ec6a9dd2c?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw0fHxwb3J0Zm9saW98ZW58MHwyfHx8MTY5MzQzMjE2MHww&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>

          {/* Card 5  */}
          <Card
            shadow="lg"
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-4"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h1 className="text-lg border rounded-full p-2 text-white/60 uppercase font-bold">
                2
              </h1>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              height={380}
              className="z-0 w-full h-[380px] object-cover"
              src="https://images.unsplash.com/photo-1635656731280-293c96c2ebb8?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyMHx8cG9ydGZvbGlvfGVufDB8Mnx8fDE2OTM0MzIxNjd8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>

          {/* card-6 */}
          <Card
            shadow="lg"
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-4"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <h1 className="text-lg border rounded-full p-2 text-white/60 uppercase font-bold">
                3
              </h1>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              height={380}
              className="z-0 w-full h-[380px] object-cover"
              src="https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzM3x8cG9ydGZvbGlvfGVufDB8Mnx8fDE2OTM0MzIxOTl8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>

          {/* card-7 */}
          <Card
            shadow="lg"
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-4"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-lg border rounded-full p-2 text-white/60 uppercase font-bold">
                4
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card background"
              height={380}
              className="z-0 w-full h-[380px] object-cover"
              src="https://images.unsplash.com/photo-1633876841461-772d2b0b0e39?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxN3x8cG9ydGZvbGlvfGVufDB8Mnx8fDE2OTM0MzIxNjd8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
