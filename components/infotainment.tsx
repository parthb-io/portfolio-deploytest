import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";

import { Link } from "@nextui-org/link";

export const infotainment = () => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [value, setValue] = React.useState("junior2nextui.org");

  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validationState = React.useMemo(() => {
    if (value === "") return undefined;

    return validateEmail(value) ? "valid" : "invalid";
  }, [value]);

  return (
    <>
      {/* infotainment cards */}
      <div className="relative gap-8 grid grid-cols-12 grid-rows-2 px-8">
        {/* card 1 */}
        <Card
          isFooterBlurred
          className="relative w-full h-[400px] col-span-12 sm:col-span-12"
        >
          <Image
            removeWrapper
            isZoomed
            isBlurred
            alt="Relaxing app background"
            className=" z-0 w-full h-full object-cover"
            shadow="lg"
            radius="lg"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMXx8dHJhdmVsJTIwd2Vic2l0ZXxlbnwwfHx8fDE2OTI1NzYzMDJ8MA&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
          />
          <CardFooter className="justify-between before:bg-white/10 border-black/20 border-1 overflow-hidden py-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny ">Available soon.</p>
          </CardFooter>
        </Card>
        <Card className="relative col-span-12 sm:col-span-6 h-[400px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Quick Bio</p>
                <p className="text-small text-blue-500 text-default-500">
                  Work & Education Exp
                </p>
              </div>
            </div>
            <div className="mb-2 flex items-center justify-end">
              <a className="mr-2 rounded-full bg-blue-200 p-1" href="#">
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              </a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="mb-4">
            <ol className="mt-6 space-y-4">
              <li className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img
                    alt=""
                    loading="lazy"
                    width="32"
                    height="32"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7"
                    src="/_next/static/media/planetaria.ecd81ade.svg"
                  />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none ">
                    Full-stack Developer / Project Manager
                  </dd>
                  <dt className="sr-only hidden sm:block">Role</dt>
                  <dd className="mt-1 hidden  sm:block">VebCommerce</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto mt-1 " aria-label="2019 until Present">
                    <time dateTime="2019">2022</time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime="2023">2023</time>
                  </dd>
                </dl>
              </li>
              <li className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img
                    alt=""
                    loading="lazy"
                    width="28"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7"
                    src="/_next/static/media/airbnb.b4000690.svg"
                  />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none ">
                    Web Developer / Project Co-ordinator
                  </dd>
                  <dt className="sr-only hidden sm:block">Role</dt>
                  <dd className="hidden sm:block">Lofcart Alberta Ltd</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto " aria-label="2014 until 2019">
                    <time dateTime="2014">2021</time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime="2019">2022</time>
                  </dd>
                </dl>
              </li>
              <li className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img
                    alt=""
                    loading="lazy"
                    width="28"
                    height="28"
                    decoding="async"
                    data-nimg="1"
                    className="h-7 w-7"
                    src="/_next/static/media/facebook.dd9e7d48.svg"
                  />
                </div>
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="w-full flex-none ">
                    Computer Programmer / Diploma Program
                  </dd>
                  <dt className="sr-only hidden sm:block">Role</dt>
                  <dd className="hidden  sm:block">Georgian College</dd>
                  <dt className="sr-only">Date</dt>
                  <dd className="ml-auto " aria-label="2011 until 2014">
                    <time dateTime="2011">2018</time>{" "}
                    <span aria-hidden="true">—</span>{" "}
                    <time dateTime="2014">2021</time>
                  </dd>
                </dl>
              </li>
            </ol>
          </CardBody>

          <CardFooter className="absolute mb-2  bottom-0 z-10 ">
            <Button
              href="https://docs.google.com/document/d/1L8xBEcyQcA0kBVaIT4wzzeqeyO9zXk7WeTDBUyzFytE/edit?usp=sharing"
              as={Link}
              color="primary"
              showAnchorIcon
              variant="solid"
            >
              Download Cv
            </Button>
          </CardFooter>
        </Card>
        {/* card 2 */}
        <Card className="col-span-12 sm:col-span-6 h-[400px]">
          {/* <CardHeader className="absolute  top-1 flex-col  ">
      
      <div className="mb-2 flex items-center justify-end">
                <a className="mr-2 rounded-full bg-emerald-200 p-1" href="#">
                  <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                </a>
                <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
                <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
                <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              </div>
              <h2 className="font-heading mb-5 border-b border-gray-200 pb-2 font-semibold text-emerald-500">Ongoing Project</h2>
              <div className=" mb-4">
                <h2 className="font-heading text-2xl font-semibold ">Bantsy-AI</h2>
                <p className="font-heading mt-1 text-sm ">OpenAI. SaaS. Nextjs</p>
              </div>
              
      </CardHeader> */}

          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Bantsy-AI</p>
                <p className="text-small text-emerald-500 text-default-500">
                  Ongoing Project
                </p>
              </div>
            </div>
            <div className="mb-2 flex items-center justify-end">
              <a className="mr-2 rounded-full bg-emerald-200 p-1" href="#">
                <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
              </a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
            </div>
          </CardHeader>
          <Divider />

          <CardBody>
            <div className="flex flex-wrap py-1 px-4 items-center justify-between  rounded-md">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-1.5">
                  
                  <div className="w-auto p-1.5">
                    <h5 className="text-md ">Images</h5>
                    <span className="text-tiny ">344 images</span>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
              <div className="w-auto p-2">
            <div className="flex items-center p-2 bg-green-700 rounded-md">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9.66675 1V3.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4.3335 1V3.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1.66675 6.33337H12.3334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6.3335 9H7.00016" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 9V11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span className="ml-2 text-small">Jul 05</span>
            </div>
          </div>
              </div>
            </div>
            <Divider />
            <div className="flex flex-wrap py-1 px-4 items-center justify-between  rounded-md">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-1.5">
                  
                  <div className="w-auto p-1.5">
                    <h5 className="text-md ">Images</h5>
                    <span className="text-tiny ">344 images</span>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
              <div className="w-auto p-2">
            <div className="flex items-center p-2 bg-green-700 rounded-md">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9.66675 1V3.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4.3335 1V3.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1.66675 6.33337H12.3334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6.3335 9H7.00016" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 9V11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span className="ml-2 text-small">Jul 05</span>
            </div>
          </div>
              </div>
            </div>
            <Divider />
            <div className="flex flex-wrap py-1 px-4 items-center justify-between  rounded-md">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-1.5">
                  
                  <div className="w-auto p-1.5">
                    <h5 className="text-md ">Images</h5>
                    <span className="text-tiny ">344 images</span>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
              <div className="w-auto p-2">
            <div className="flex items-center p-2 bg-green-700 rounded-md">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.0001 2.33337H3.00008C2.2637 2.33337 1.66675 2.93033 1.66675 3.66671V11.6667C1.66675 12.4031 2.2637 13 3.00008 13H11.0001C11.7365 13 12.3334 12.4031 12.3334 11.6667V3.66671C12.3334 2.93033 11.7365 2.33337 11.0001 2.33337Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M9.66675 1V3.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M4.3335 1V3.66667" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1.66675 6.33337H12.3334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6.3335 9H7.00016" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 9V11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <span className="ml-2 text-small">Jul 05</span>
            </div>
          </div>
              </div>
            </div>
            
          </CardBody>
          <CardFooter className="absolute bg-black/20 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <AvatarGroup isBordered max={3} size="sm">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>
            </div>
            <Button
              className="text-tiny"
              color="success"
              radius="full"
              size="sm"
            >
              Project Details
            </Button>
          </CardFooter>
        </Card>
        {/* card 3 */}
        <Card className="col-span-12 sm:col-span-6 h-[400px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Web Dev</p>
                <p className="text-small text-purple-500 ">
                  Discover Freelance Services
                </p>
              </div>
            </div>
            <div className="mb-2 flex items-center justify-end">
              <a className="mr-2 rounded-full bg-purple-200 p-1" href="#">
                <div className="h-2 w-2 rounded-full bg-purple-600"></div>
              </a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
          <div className="flex flex-wrap py-1 px-4 items-center justify-between  rounded-md">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-1.5">
                  
                  <div className="w-auto p-1.5 border-l border-purple-500 ">
                  <h3 className="mb-1 text-md ml-2">Instant sales support</h3>
                    <p className="text-tiny ml-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
              <div className="w-auto p-2">
              <div className="w-full md:w-auto p-2">
                    <button className="flex flex-wrap justify-center items-center w-6 h-6 hover:bg-purple-500 font-medium text-sm text-gray-500 border border-gray-500 hover:border-purple-300 rounded-md shadow-button">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.95 9.40832L8.23334 4.69999C8.15587 4.62188 8.0637 4.55989 7.96215 4.51758C7.8606 4.47527 7.75168 4.45349 7.64167 4.45349C7.53166 4.45349 7.42274 4.47527 7.32119 4.51758C7.21964 4.55989 7.12747 4.62188 7.05001 4.69999C6.8948 4.85613 6.80768 5.06733 6.80768 5.28749C6.80768 5.50764 6.8948 5.71885 7.05001 5.87499L11.175 10.0417L7.05001 14.1667C6.8948 14.3228 6.80768 14.534 6.80768 14.7542C6.80768 14.9743 6.8948 15.1855 7.05001 15.3417C7.12718 15.4204 7.21922 15.483 7.32078 15.526C7.42235 15.5689 7.53142 15.5912 7.64167 15.5917C7.75193 15.5912 7.861 15.5689 7.96256 15.526C8.06412 15.483 8.15616 15.4204 8.23334 15.3417L12.95 10.6333C13.0346 10.5553 13.1021 10.4606 13.1483 10.3552C13.1944 10.2497 13.2183 10.1359 13.2183 10.0208C13.2183 9.90574 13.1944 9.7919 13.1483 9.68648C13.1021 9.58107 13.0346 9.48636 12.95 9.40832V9.40832Z"
                          fill="black"
                        ></path>
                      </svg>
                    </button>
                  </div>
          </div>
              </div>
            </div>
            <Divider />
            <div className="flex flex-wrap py-1 px-4 items-center justify-between  rounded-md">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-1.5">
                  
                  <div className="w-auto p-1.5 border-l border-purple-500 ">
                  <h3 className="mb-1 text-md ml-2">Instant sales support</h3>
                    <p className="text-tiny ml-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
              <div className="w-auto p-2">
              <div className="w-full md:w-auto p-2">
                    <button className="flex flex-wrap justify-center items-center w-6 h-6 hover:bg-purple-500 font-medium text-sm text-gray-500 border border-gray-500 hover:border-purple-300 rounded-md shadow-button">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.95 9.40832L8.23334 4.69999C8.15587 4.62188 8.0637 4.55989 7.96215 4.51758C7.8606 4.47527 7.75168 4.45349 7.64167 4.45349C7.53166 4.45349 7.42274 4.47527 7.32119 4.51758C7.21964 4.55989 7.12747 4.62188 7.05001 4.69999C6.8948 4.85613 6.80768 5.06733 6.80768 5.28749C6.80768 5.50764 6.8948 5.71885 7.05001 5.87499L11.175 10.0417L7.05001 14.1667C6.8948 14.3228 6.80768 14.534 6.80768 14.7542C6.80768 14.9743 6.8948 15.1855 7.05001 15.3417C7.12718 15.4204 7.21922 15.483 7.32078 15.526C7.42235 15.5689 7.53142 15.5912 7.64167 15.5917C7.75193 15.5912 7.861 15.5689 7.96256 15.526C8.06412 15.483 8.15616 15.4204 8.23334 15.3417L12.95 10.6333C13.0346 10.5553 13.1021 10.4606 13.1483 10.3552C13.1944 10.2497 13.2183 10.1359 13.2183 10.0208C13.2183 9.90574 13.1944 9.7919 13.1483 9.68648C13.1021 9.58107 13.0346 9.48636 12.95 9.40832V9.40832Z"
                          fill="black"
                        ></path>
                      </svg>
                    </button>
                  </div>
          </div>
              </div>
            </div>
            <Divider />
            <div className="flex flex-wrap py-1 px-4 items-center justify-between  rounded-md">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-1.5">
                  
                  <div className="w-auto p-1.5 border-l border-purple-500 ">
                  <h3 className="mb-1 text-md ml-2">Instant sales support</h3>
                    <p className="text-tiny ml-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                      
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-auto p-2">
              <div className="w-auto p-2">
              <div className="w-full md:w-auto p-2">
                    <button className="flex flex-wrap justify-center items-center w-6 h-6 hover:bg-purple-500 font-medium text-sm text-gray-500 border border-gray-500 hover:border-purple-300 rounded-md shadow-button">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.95 9.40832L8.23334 4.69999C8.15587 4.62188 8.0637 4.55989 7.96215 4.51758C7.8606 4.47527 7.75168 4.45349 7.64167 4.45349C7.53166 4.45349 7.42274 4.47527 7.32119 4.51758C7.21964 4.55989 7.12747 4.62188 7.05001 4.69999C6.8948 4.85613 6.80768 5.06733 6.80768 5.28749C6.80768 5.50764 6.8948 5.71885 7.05001 5.87499L11.175 10.0417L7.05001 14.1667C6.8948 14.3228 6.80768 14.534 6.80768 14.7542C6.80768 14.9743 6.8948 15.1855 7.05001 15.3417C7.12718 15.4204 7.21922 15.483 7.32078 15.526C7.42235 15.5689 7.53142 15.5912 7.64167 15.5917C7.75193 15.5912 7.861 15.5689 7.96256 15.526C8.06412 15.483 8.15616 15.4204 8.23334 15.3417L12.95 10.6333C13.0346 10.5553 13.1021 10.4606 13.1483 10.3552C13.1944 10.2497 13.2183 10.1359 13.2183 10.0208C13.2183 9.90574 13.1944 9.7919 13.1483 9.68648C13.1021 9.58107 13.0346 9.48636 12.95 9.40832V9.40832Z"
                          fill="black"
                        ></path>
                      </svg>
                    </button>
                  </div>
          </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="absolute bg-black/20 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <AvatarGroup isBordered max={3} size="sm">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>
            </div>
            <Button radius="full" size="sm" color="secondary">
              Check more Services
            </Button>
          </CardFooter>
        </Card>
        {/* card 4 */}
        <Card className="col-span-12 sm:col-span-6 h-[400px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Kalaakar</p>
                <p className="text-small text-pink-500 text-default-500">
                  Digital Guest Boook
                </p>
              </div>
            </div>
            <div className="mb-2 flex items-center justify-end">
              <a className="mr-2 rounded-full bg-pink-200 p-1" href="#">
                <div className="h-2 w-2 rounded-full bg-pink-600"></div>
              </a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
            </div>
          </CardHeader>

          <Image
            alt="Woman listing to music"
            className="object-cover w-full"
            src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw5Mnx8cXVvdGVzfGVufDB8fHx8MTY5MjQwMTY5MHww&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
          />
          <CardFooter className="justify-between before:bg-white/10 border-black/30 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny ">Available soon.</p>
            <Button
              className="text-tiny  bg-pink-500"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Notify me
            </Button>
          </CardFooter>
        </Card>
        {/* card 5 */}
        <Card className="col-span-12  sm:col-span-12 h-[300px]">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">Chat with Me</p>
                <p className="text-small text-blue-500 text-default-500">
                  Weekly Newsletters
                </p>
              </div>
            </div>
            <div className="mb-2 flex items-center justify-end">
              <a className="mr-2 rounded-full bg-blue-200 p-1" href="#">
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              </a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="mr-3 h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
            </div>
          </CardHeader>
          <Divider />
          {/* <CardBody>
            <p className="mt-4">
              Get notified when I publish something new, and unsubscribe at any
              time.
            </p>
            <Input
              autoFocus
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              className="mt-8"
            />
            <p className="mt-4"></p>
          </CardBody>

          <CardFooter className="absolute  bottom-0 z-10 ">
            <div className="flex flex-grow gap-2 items-center"></div>
            <Button radius="full" color="primary">
              Submit
            </Button>
          </CardFooter> */}
          <CardBody>
          
          <div className="flex flex-col gap-4">
      
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Input
          label="Email"
          placeholder="nextui"
          labelPlacement="outside"
          
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">@gmail.com</span>
            </div>
          }
        />
        <Input
          label="Price"
          placeholder="0.00"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                className="outline-none border-0 bg-transparent text-default-400 text-small"
                id="currency"
                name="currency"
              >
                <option>USD</option>
                <option>ARS</option>
                <option>EUR</option>
              </select>
            </div>
          }
          type="number"
        />
        <Input
          type="url"
          label="Website"
          placeholder="nextui"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">https://</span>
            </div>
          }
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">.org</span>
            </div>
          }
        />
      </div>
    </div>  
    <Button  className="absolute  bottom-r-0 z-10 " color="primary" variant="shadow">
        Submit
      </Button>
             
      
          </CardBody>
        </Card>
      </div>

      {/* infotainment cards-end */}
    </>
  );
};
