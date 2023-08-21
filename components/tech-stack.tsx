import { Tabs, Tab } from "@nextui-org/tabs";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export const tech = () => {
  return (
    <>
      {/* tabs */}
      <div className="flex w-full flex-col mt-10">
        <Tabs
          aria-label="Options"
          color="primary"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#22d3ee]",
            tab: "max-w-fit px-0 h-12",
            tabContent: "group-data-[selected=true]:text-[#06b6d4]",
          }}
        >
          <Tab key="career" title="Career Preference">
            <Card>
              <CardBody>
                <div className="-mb-3">
                  <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">
                    FullStack Developer
                  </span>
                  <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">
                    Web Developer
                  </span>
                  <span className="mb-3 mr-3 inline-block rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 ">
                    Javascript Developer
                  </span>
                  <span className="mb-3 mr-3 hidden rounded-full border border-gray-600 px-4 py-1 text-sm leading-6  xl:inline-block">
                    IT Support Technician
                  </span>
                  <span className="mb-3 mr-3 hidden rounded-full border border-gray-600 px-4 py-1 text-sm leading-6 xl:inline-block">
                    Project Manager
                  </span>
                  <span className="mb-3 mr-3 hidden rounded-full border border-gray-600 px-4 py-1 text-sm leading-6  xl:inline-block">
                    Freelance Developer
                  </span>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="stack" title="Daily TechStack">
            <Card>
              <CardBody className="gap-4" >
                <div className="">
                  <div className="mr-6  inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                    <Image
                      alt="nodejs logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                  <div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                  <Image
                      alt="mongodb logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                  <div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                  <Image
                      alt="html5 logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                  <div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                  <Image
                      alt="css3 logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                  <div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                  <Image
                      alt="express js logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                  <div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                  <Image
                      alt="agile logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                  <div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                  <Image
                      alt="graphql logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                  <div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                  <Image
                      alt="prisma logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                  <div className="mr-4 mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-400 p-1">
                  <Image
                      alt="auth0 logo"
                      height={32}
                      radius="sm"
                      src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                      width={32}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
      {/* tabs-end */}
    </>
  );
};
