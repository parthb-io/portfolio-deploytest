"use client";


import { Avatar} from "@nextui-org/avatar";

import { title} from "@/components/primitives";
import {Link} from "@nextui-org/react";


// import { TechStack } from "@/components/intro-tabs";
import { tech as Tech } from "@/components/tech-stack";

import { infotainment as Infotainment } from "@/components/infotainment";

export default function Home() {
  return (
	<>
	<section className="container flex flex-col items-center justify-center gap-4 py-4 ">
      <div className="container mx-auto w-full  p-2 pb-10 ">
        <div className="mb-8 border-b border-gray-600  pb-12 font-mono">
          <div className="flex items-center">
		  <Avatar
                      isBordered
                      radius="sm"
                      src="https://i.ibb.co/HKQjtq8/profile-pic2.jpg"
                     
					  size="lg"
                    />
          </div>
          
          <br />
          <h1 className={title({ class: "mt-2  text-emerald-500" })}>
            [A FullStack developer]{""}{" "}
          </h1>
          <h1 className={title()}>
            {""} with a knack for coding robust and user-friendly applications.
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
          {/* <p
            className="font-medium mt-8 leading-normal " 
          >
            🔧 When I'm not diving into code, you might find me debugging over a
            glass of juice 🧃, exploring new tech trends 🌐, or contributing to
            [open-source projects] to give back to the developer community. I'm
            all about continuous learning and pushing the boundaries of what's
            possible.
          </p> */}

          <div className="mb-4 mt-8 flex flex-wrap gap-3">
          <Link size="sm" href="#" color="success">#FullStackDeveloper</Link>
          <Link size="sm" href="#" color="success">#WebDeveloper</Link>
          <Link size="sm" href="#" color="success">#FreelanceDeveloper</Link>
           
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
