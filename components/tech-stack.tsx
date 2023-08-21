import { Tabs, Tab } from "@nextui-org/tabs";
import { Card,  CardBody, CardFooter } from "@nextui-org/card";



export const tech = () => {
    return(
        <>
        {/* tabs */}
        <div className="flex w-full flex-col mt-10">
            <Tabs aria-label="Options" 
        color="primary" 
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]"
        }}>
            <Tab key="career" title="Career Preference">
                <Card>
                  <CardBody>
                  <div className="-mb-3">
                    <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">FullStack Developer</span>
                    <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">Web Developer</span>
                    <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">Javascript Developer</span>
                    <span className="mb-3 mr-3 hidden rounded-full border border-gray-600 px-4 py-1 text-sm leading-6  xl:inline-block">IT Support Technician</span>
                    <span className="mb-3 mr-3 hidden rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 xl:inline-block">Project Manager</span>
                    <span className="mb-3 mr-3 hidden rounded-full border border-gray-600 px-4 py-1 text-sm leading-6  xl:inline-block">Freelance Developer</span>
                  </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="stack" title="Daily TechStack">
                <Card>
                  <CardBody>
                  <div className="mb-4">

<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/css3-logo.svg" alt="nodelogo" />
</div>
<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/javascript-logo.svg" alt="mongodb" />
</div>
<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/html5-logo.svg" alt="html5" />
</div>
<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/css3-logo.svg" alt="css3" />
</div>
<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/javascript-logo.svg" alt="expressjs" />
</div>
<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/css3-logo.svg" alt="agile" />
</div>
<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/javascript-logo.svg" alt="graphql" />
</div>
<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/css3-logo.svg" alt="prisma" />
</div>
<div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
  <img src="trizzle-assets/logos/javascript-logo.svg" alt="auth2.0" />
</div>
</div>
                  </CardBody>
                </Card>
              </Tab>
              
              
            </Tabs>
          </div>
          {/* tabs-end */}</>
    );
};