import { title } from "@/components/primitives";
"use client"
import {Image} from "@nextui-org/react";


export default function AboutPage() {
	return (
		<>
		<section className="py-6 bg-coolGray-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 xl:w-5/12 px-4  lg:mb-0">
        <div className="max-w-lg mx-auto lg:mx-0  ">
        <h1 className={title()}>
            Page is under maintenance, we are adding more features and functionality.
          </h1>
         
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
      <Image
      isBlurred
      width={340}
      src="https://images.unsplash.com/photo-1661294667246-2492ae1447b4?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMHx8bWluaW9ufGVufDB8fHx8MTY5MjUxMjU3N3ww&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
      alt="NextUI Album Cover"
      className="m-5"
    />
       
      </div>
    </div>
  
  </div>
</section>
		</>
	);
}
