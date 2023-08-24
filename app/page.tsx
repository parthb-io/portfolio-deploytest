"use client";


import { Avatar} from "@nextui-org/avatar";
import Typewriter from 'typewriter-effect';
import { title} from "@/components/primitives";
import {Link} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import ReactCountryFlag from "react-country-flag";
import {Divider} from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";



import { tech as Tech } from "@/components/tech-stack";

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
  <Chip className="sm:hidden text-tiny" color="success" variant="dot">About me</Chip>
    
    <div className="flex flex-wrap -mx-4 mb-20">
      
      <div className="lg:w-1/2 xl:w-5/12 px-4 mb-10 lg:mb-0">
      <Avatar
      
      className="w-[150px] h-[150px] mt-6 mb-6"
                      isBordered
                      radius="sm"
                      src="profile3.jpeg"
                     
					  
                    />
                    <h1 className={title({ class: "mt-6  text-emerald-500" })}>
          <Typewriter
  options={{
    strings: ['[I am Parth Bhatt ]','[A Software developer]',  '[A Photographer]', '[A Tech Founder]','[A Web developer]' ],
    autoStart: true,
    
    loop: true,
  }}
/>{""}{" "}
          </h1>
        
        
      </div>
      <div className="lg:w-1/2 xl:w-7/12 px-4">
      
        <div className="max-w-2xl lg:pl-12 lg:ml-auto">
        <Chip className="hidden lg:flex text-tiny mb-4" size="sm" color="success" variant="dot">About me</Chip>
        <span className=" mb-6 text-sm text-gray-500">Hi, I am Parth Bhatt, full-stack developer based in Canada  
            <ReactCountryFlag
                countryCode="CA"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="CA"
                style={{
                  width: '2em',
                  height: '1em',
              }}
                className="mr-2 "
            />
               {""}with roots in 
               <ReactCountryFlag
                countryCode="UG"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                style={{
                  width: '2em',
                  height: '1em',
              }}
                title="UG"
                className="ml-2 "
            />
               Uganda & India
               <ReactCountryFlag
                countryCode="IN"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="IN"
                className="mr-2 "
                style={{
                  width: '2em',
                  height: '1em',
                  
              }}
            />

               .</span>
        <p
            className="text-lg mt-6 leading-normal "
          >
           
            {/* 🔧 When I&apos;m not diving into code, you might find me debugging over a
            glass of juice 🧃, exploring new tech trends 🌐, or contributing to
            [open-source projects] to give back to the developer community. I&apos;m
            all about continuous learning and pushing the boundaries of what&apos;s */}
            Parthb.io is a tech initiative that seeks out regions and markets with robust underlying catalysts, and income growth, better quality of life and a business-friendly environment. In those carefully selected markets and locations🌐, we bring tech and expertise to create or enhance the  ecosystem that can transform communities.
            possible.
            
          </p>
          <span ></span>
          
        </div>
      </div>
    </div>
    
    <div className=" py-10 md:py-20">
      <ul>
        <li className="flex items-center px-3 justify-between mb-4 pb-2 ">
          <span className="text-lg">Work Experience</span>
          <span className="text-xl">
            <span>2+ org</span>
            {/* <sup>2</sup> */}
          </span>
        </li>
        <Divider className="my-4" />
        <li className="flex items-center px-3  justify-between mb-4 pb-2 ">
          <span className="text-lg">Projects Finished</span>
          <span className="text-xl">
            <span>50+</span>
          </span>
        </li>
       
        <Divider className="my-4" />
        
        <Accordion variant="light">
      <AccordionItem  key="1" aria-label="techstack" title="Daily Tech Stack" >
        
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="career" title="Career Preferrences">
        {defaultContent}
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
