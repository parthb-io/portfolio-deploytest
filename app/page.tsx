"use client";


import { Avatar} from "@nextui-org/avatar";
import Typewriter from 'typewriter-effect';
import { title} from "@/components/primitives";
import {Link} from "@nextui-org/react";


// import { TechStack } from "@/components/intro-tabs";
import { tech as Tech } from "@/components/tech-stack";

import { infotainment as Infotainment } from "@/components/infotainment";

export default function Home() {
  return (
	<>
	<section className="container flex flex-col items-center justify-center gap-4 py-4 ">
      <div className="container mx-auto w-full  p-2 pb-20 ">
        <div className="mb-8 border-b border-gray-600  pb-16 font-mono">
          <div className="flex mb-4 items-center">
		  <Avatar
      className="w-[100px] h-[100px]"
                      isBordered
                      radius="sm"
                      src="https://images.unsplash.com/photo-1620945873198-659df09f8f04?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwyN3x8cGVhY2V8ZW58MHwxfHx8MTY5Mjc1NjY5M3ww&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
                     
					  
                    />
          </div>
          
          <br />
         
          <h1 className={title({ class: "mt-6  text-emerald-500" })}>
          <Typewriter
  options={{
    strings: ['[A FullStack developer]', '[A Web developer]', '[A Photographer]', '[A Tech Founder]' ],
    autoStart: true,
    
    loop: true,
  }}
/>{""}{" "}
          </h1>
          <h1 className="text-xl md:text-3xl mt-2">
            {""} with a knack for coding robust and user-friendly apps.
          </h1>

          <p
            className="text-sm mt-8 leading-normal " 
          >
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
            in the world of code began <span className="text-bold">5</span> years ago, and I&apos;ve been hooked ever
            since.
          </p>
          <p
            className="text-sm mt-1 leading-normal "
          >
            🔧 When I&apos;m not diving into code, you might find me debugging over a
            glass of juice 🧃, exploring new tech trends 🌐, or contributing to
            [open-source projects] to give back to the developer community. I&apos;m
            all about continuous learning and pushing the boundaries of what&apos;s
            possible.
          </p>

          <div className="mb-4 mt-8 flex flex-wrap gap-3">
          <Link size="sm" href="#" color="success" isDisabled>#FullStackDeveloper</Link>
          <Link size="sm" href="#" color="success" isDisabled>#WebDeveloper</Link>
          <Link size="sm" href="#" color="success" isDisabled>#FreelanceDeveloper</Link>
           
          </div>
          <Tech />
          {/* <TechStack /> */}
        </div>
        <Infotainment />
      </div>

	 
      





      
    </section>
	 
   </>
    
  );
}
