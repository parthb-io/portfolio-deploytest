"use client";


import { title } from "@/components/primitives";


import { Avatar } from "@nextui-org/avatar";
import Typewriter from "typewriter-effect";


import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Tab,
  Image,
  Tabs,
} from "@nextui-org/react";


import { tech as Tech } from "@/components/tech-stack";


export default function PricingPage() {
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
      subtitle: "teest2",
      title: "Tangerine",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8dHJhdmVsJTIwd2Vic2l0ZXxlbnwwfHx8fDE2OTI1NzYzMDJ8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
      url: "$3.00",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest3",
      title: "Lemon",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8dHJhdmVsJTIwd2Vic2l0ZXxlbnwwfHx8fDE2OTI1NzYzMDJ8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
      url: "$3.00",
    },
    {
      logo: "/favicon.ico",
      subtitle: "teest4",
      title: "Banana",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8dHJhdmVsJTIwd2Vic2l0ZXxlbnwwfHx8fDE2OTI1NzYzMDJ8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
      url: "$3.00",
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


  return (
    <>
      <section className="py-6 bg-coolGray-50">
        <div className="mb-8 border-b border-gray-600  pb-16 font-mono">
          <div className="flex mb-4 items-center">
            <Avatar
              className="w-[100px] h-[100px]"
              isBordered
              radius="sm"
              src="profile3.jpeg"
            />
            {/* https://images.unsplash.com/photo-1620945873198-659df09f8f04?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyN3x8cGVhY2V8ZW58MHwxfHx8MTY5Mjc1NjY5M3ww&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920 */}
          </div>


          <br />


          <h1 className={title({ class: "mt-6  text-emerald-500" })}>
            <Typewriter
              options={{
                strings: [
                  "[A FullStack developer]",
                  "[A Web developer]",
                  "[A Photographer]",
                  "[A Tech Founder]",
                ],
                autoStart: true,


                loop: true,
              }}
            />
            {""}{" "}
          </h1>
          <h1 className="text-xl md:text-3xl mt-2">
            {""} with a knack for coding robust and user-friendly apps.
          </h1>


          <p className="text-sm mt-8 leading-normal ">
            🚀 From front-end magic with{" "}
            <a href="" className="underline">
              HTML,
            </a>{" "}
            <a href="" className="underline">
              CSS,
            </a>{" "}
            and{" "}
            <a href="" className="underline">
              JavaScript
            </a>{" "}
            to back-end wizardry with{" "}
            <a href="" className="underline">
              Node.js,
            </a>{" "}
            and{" "}
            <a href="" className="underline">
              C++,
            </a>{" "}
            databases, I love building seamless digital experiences. My journey
            in the world of code began <span className="text-bold">5</span>{" "}
            years ago, and I&apos;ve been hooked ever since.
          </p>
          <p className="text-sm mt-1 leading-normal ">
            🔧 When I&apos;m not diving into code, you might find me debugging
            over a glass of juice 🧃, exploring new tech trends 🌐, or
            contributing to [open-source projects] to give back to the developer
            community. I&apos;m all about continuous learning and pushing the
            boundaries of what&apos;s possible.
          </p>


          <div className="mb-4 mt-8 flex flex-wrap gap-3">
            <Link size="sm" href="#" color="success" isDisabled>
              #FullStackDeveloper
            </Link>
            <Link size="sm" href="#" color="success" isDisabled>
              #WebDeveloper
            </Link>
            <Link size="sm" href="#" color="success" isDisabled>
              #FreelanceDeveloper
            </Link>
          </div>
          <Tech />
          {/* <TechStack /> */}
        </div>
      </section>
      <section className="py-6 px-8 container">
        <div className="flex w-full px-8 justify-center flex-col">
          <Tabs aria-label="Options" variant="bordered">
            {/* projects-tab */}
            <Tab key="projects" title="Projects">
              <Card className="bg-transparent ring-transparent container">
                <CardBody>
                  <div className="gap-6  grid  sm:grid-cols-4">
                    {list.map((item, index) => (
                      <Card
                        shadow="sm"
                        key={index}
                        isPressable
                        onPress={() => console.log("item pressed")}
                        className="border-none"
                      >
                        {/* <CardHeader>
                        <Image
         
          className="z-0 object-cover w-full h-full rounded-xl"
          src={item.img}
                            alt={item.title}
         
        />
                        </CardHeader>
                        <Divider /> */}


                        {/* <CardBody className="overflow-visible ">
                         


                          <Image
                            removeWrapper
                            isZoomed
                            className="z-0 w-full h-full object-cover"
                            src={item.img}
                            alt={item.title}
                          />
                        </CardBody> */}


                        {/* <CardFooter className="text-small justify-between">
                          <p>{item.title}</p>
                          <p className="text-default-500">{item.url}</p>
                        </CardFooter> */}
                        <Image
                          className="object-cover"
                          src={item.img}
                          alt={item.title}
                        />


                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                          <p className="text-tiny text-white/80">
                            {item.title}
                          </p>
                          <Button
                            className="text-tiny text-white bg-black/20"
                            variant="flat"
                            color="default"
                            radius="lg"
                            size="sm"
                          >
                            Notify me
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>{" "}
                </CardBody>
              </Card>
            </Tab>


            {/* services-tab */}
            <Tab key="services" title="Services">
              <Card className="bg-transparent ring-transparent container">
                <CardBody>
                  <div className="gap-6  grid s sm:grid-cols-4">
                    {services.map((item, index) => (
                      <Card
                        shadow="sm"
                        key={index}
                        isPressable
                        onPress={() => console.log("item pressed")}
                      >
                        <CardHeader className="flex gap-3">
                          <Image
                            alt="nextui logo"
                            height={40}
                            radius="sm"
                            src={item.platform}
                            width={40}
                          />
                          <div className="flex flex-col">
                            <p className="text-md">{item.listing}</p>
                            {/* <p className="text-small text-default-500">{item.subtitle}</p> */}
                          </div>
                        </CardHeader>
                        <CardBody className="overflow-visible py-1">
                          {/* <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            /> */}
                          <Image
                            className="object-cover rounded-xl h-[200px]"
                            src={item.thumbnail}
                            alt={item.listing}
                            width={270}
                            radius="sm"
                          />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                          <b>{item.listing}</b>
                          <p className="text-default-500">{item.price}</p>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>{" "}
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
        s
      </section>
    </>
  );
}



