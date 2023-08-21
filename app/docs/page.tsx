"use client";
import { title } from "@/components/primitives";

import {Card, CardHeader, CardBody, CardFooter, Image, Button, Divider} from "@nextui-org/react";
import {Tabs, Tab, Chip} from "@nextui-org/react";


export default function DocsPage() {
	const list = [
		{
      logo:"/favicon.ico",
      subtitle:"teest1",
		  title: "Orange",
      
		  img: "https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3N8ZW58MHx8fHwxNjkyNTc2MDI0fDA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
		  url: "$5.50",
		},
		{
      logo:"/favicon.ico",
      subtitle:"teest1",
		  title: "Tangerine",
		  img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8dHJhdmVsJTIwd2Vic2l0ZXxlbnwwfHx8fDE2OTI1NzYzMDJ8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
		  url: "$3.00",
		},
		{
      logo:"/favicon.ico",
      subtitle:"teest1",
		  title: "Raspberry",
		  img: "/images/fruit-3.jpeg",
		  url: "$10.00",
		},
		{
      logo:"/favicon.ico",
      subtitle:"teest1",
		  title: "Lemon",
		  img: "/images/fruit-4.jpeg",
		  url: "$5.30",
		},
		{
      logo:"/favicon.ico",
      subtitle:"teest1",
		  title: "Avocado",
		  img: "/images/fruit-5.jpeg",
		  url: "$15.70",
		},
		{
      logo:"/favicon.ico",
      subtitle:"teest1",
		  title: "Lemon 2",
		  img: "/images/fruit-6.jpeg",
		  url: "$8.00",
		},
		{
      logo:"/favicon.ico",
      subtitle:"teest1",
		  title: "Banana",
		  img: "/images/fruit-7.jpeg",
		  url: "$7.50",
		},
		{
      logo:"/favicon.ico",
            subtitle:"teest1",
		  title: "Watermelon",
		  img: "/images/fruit-8.jpeg",
		  url: "$12.20",
		},
	  ];
    const services = [
      {
        platform:"/favicon.ico",
        subtitle:"teest1",
        listing: "Orange",
        
        thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyOHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNjkyNTc1NzgxfDA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920",
        price: "$5.50",
      },
      {
        platform:"/favicon.ico",
        subtitle:"teest1",
        listing: "Orange",
        
        thumbnail: "/images/fruit-1.jpeg",
        price: "$5.50",
      },
      {
        platform:"/favicon.ico",
        subtitle:"teest1",
        listing: "Orange",
        
        thumbnail: "/images/fruit-1.jpeg",
        price: "$5.50",
      },
      {
        platform:"/favicon.ico",
        subtitle:"teest1",
        listing: "Orange",
        
        thumbnail: "/images/fruit-1.jpeg",
        price: "$5.50",
      },
      {
        platform:"/favicon.ico",
        subtitle:"teest1",
        listing: "Orange",
        
        thumbnail: "/images/fruit-1.jpeg",
        price: "$5.50",
      },

    ];
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 ">
      <div className="container mx-auto w-full  p-4 pb-10 lg:max-w-screen-xl">
        <div className="mb-8 border-b border-gray-600  pb-12 font-mono">
          <h1 className={title()}>{""} Things I’ve made trying to put my</h1>
          <br />
          <h1 className={title({ class: "mt-2  text-emerald-500" })}>
            dent in the universe.{""}{" "}
          </h1>

          <p className="font-medium mt-8 leading-normal ">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>

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
		<div className="flex w-full flex-col">
      <Tabs  aria-label="Options" variant="bordered">
        <Tab key="projects" title="Projects">
       
          <Card className="bg-transparent ring-transparent container">
          
            <CardBody>
			<div className="gap-6  grid  sm:grid-cols-3">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardHeader className="flex gap-3">
          
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={item.logo}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">{item.title}</p>
              <p className="text-small text-default-500">{item.subtitle}</p>
            </div>
          </CardHeader>
          
          <CardBody className="overflow-visible py-2">
            {/* <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            /> */}
            <Image
          
          className="object-cover w-full rounded-xl h-[200px]"
          src={item.img}
          alt={item.title}
          width={350}
        />
          </CardBody>
          <Divider/>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.url}</p>
          </CardFooter>
        </Card>
      ))}
    </div>  </CardBody>
          </Card> 
         
        </Tab>
        <Tab key="services" title="Services">
       
          <Card className="bg-transparent ring-transparent container">
          
            <CardBody>
			<div className="gap-6  grid s sm:grid-cols-4">
      {services.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
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
    </div>  </CardBody>
          </Card> 
         
        </Tab>
        
      </Tabs>
    </div>
      </div>

	  

	    

      
    </section>
  );
}
