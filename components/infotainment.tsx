import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { Input } from "@nextui-org/input";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import {Textarea} from "@nextui-org/react";


import { AnchorIcon } from "./anchor-icon";

export const infotainment = () => {
  return (
    <>
      {/* infotainment cards */}
      <section className="container flex flex-col pt-16 relative  py-4">
        <div className="container mx-auto w-full gap-6 md:gap-8  grid grid-cols-12 grid-rows-2  pb-10  ">
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
          {/* Card 2 */}
          <Card className="relative col-span-12 sm:col-span-6 h-[400px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="/profile-logo.svg"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Quick Bio</p>
                  <p className="text-small  text-default-500">
                    Work & Education Exp
                  </p>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-end">
                <a className="mr-2 rounded-full bg-blue-200 p-1" href="#">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                </a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="mb-4">
              <ol className="mt-3 space-y-4">
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      alt="nextui logo"
                      height={30}
                      radius="sm"
                      src="./vebcommerce-logo.png"
                      width={30}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only ">Company</dt>
                    <dd className="w-full flex-none text-sm md:text-md ">
                      Full-stack Developer / Project Manager
                    </dd>
                    <dt className="sr-only hidden sm:block">Role</dt>
                    <dd className="mt-1 hidden text-tiny sm:block">
                      VebCommerce
                    </dd>
                    <dt className="sr-only hidden">Date</dt>
                    <dd
                      className="ml-auto mt-1 text-tiny text-blue-500"
                      aria-label="2022 till 2023"
                    >
                      <time dateTime="2019">2022</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime="2023">2023</time>
                    </dd>
                  </dl>
                </li>
                <Divider />
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      alt="nextui logo"
                      height={30}
                      radius="sm"
                      src="./lofcart-logo.png"
                      width={30}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full text-sm md:text-md flex-none ">
                      Web Developer / Project Co-ordinator
                    </dd>
                    <dt className="sr-only hidden sm:block">Role</dt>
                    <dd className="hidden sm:block text-tiny">
                      Lofcart Alberta Ltd
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-tiny text-blue-500 "
                      aria-label="2021 until 2022"
                    >
                      <time dateTime="2014">2021</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime="2019">2022</time>
                    </dd>
                  </dl>
                </li>
                <Divider />
                <li className="flex gap-4">
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      alt="nextui logo"
                      height={30}
                      radius="sm"
                      src="georgian-logo.png"
                      width={30}
                    />
                  </div>
                  <dl className="flex flex-auto flex-wrap gap-x-2">
                    <dt className="sr-only">Company</dt>
                    <dd className="w-full flex-none text-sm md:text-md ">
                      Computer Programmer / Diploma Program
                    </dd>
                    <dt className="sr-only hidden sm:block">Role</dt>
                    <dd className="hidden  sm:block text-tiny">
                      Georgian College
                    </dd>
                    <dt className="sr-only">Date</dt>
                    <dd
                      className="ml-auto text-tiny text-blue-500"
                      aria-label="2018 until 2021"
                    >
                      <time dateTime="2018">2018</time>{" "}
                      <span aria-hidden="true">—</span>{" "}
                      <time dateTime="2021">2021</time>
                    </dd>
                  </dl>
                </li>
              </ol>
            </CardBody>

            <CardFooter className="absolute mb-2 mt-6 pt-6 bottom-0 z-10 ">
              <Button
                href="https://docs.google.com/document/d/1L8xBEcyQcA0kBVaIT4wzzeqeyO9zXk7WeTDBUyzFytE/edit?usp=sharing"
                as={Link}
                color="default"
                showAnchorIcon
                variant="bordered"
              >
                Download Cv
              </Button>
            </CardFooter>
          </Card>
          {/* Card 3 */}
          <Card className="col-span-12 sm:col-span-6 h-[400px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="./profile-logo.svg"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Project List</p>
                  <p className="text-tiny md:text-small text-default-500">
                    Saas | NextJs | MERN Stack | API&apos;s
                  </p>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-end">
                <a className="mr-2 rounded-full bg-emerald-200 p-1" href="#">
                  <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                </a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              </div>
            </CardHeader>
            <Divider />

            <CardBody>
              <div className=" flex flex-col p-1 gap-6">
                <Table 
                className="bg-transparent border-transparent"
                  color={"success"}
                  selectionMode="single"
                  defaultSelectedKeys={["2"]}
                  aria-label="Example static collection table"
                >
                  <TableHeader className="border-1 border-default-200">
                    <TableColumn>PROJECT</TableColumn>
                    <TableColumn className="hidden lg:block" >Role</TableColumn>
                    <TableColumn>STATUS</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>
                        <Link
                          className="text-tiny md:text-sm"
                          color="foreground"
                          isExternal
                          showAnchorIcon
                          href="https://github.com/nextui-org/nextui"
                          anchorIcon={<AnchorIcon />}
                        >
                          BantsyAI Saas
                        </Link>
                      </TableCell>
                      <TableCell className="hidden lg:block">
                        Open AI Saas
                      </TableCell>
                      <TableCell>
                        <Chip
                          className="text-tiny md:text-sm"
                          size="sm"
                          color="success"
                          variant="light"
                        >
                          Active
                        </Chip>
                      </TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>
                        <Link
                          className="text-tiny md:text-sm"
                          color="foreground"
                          isExternal
                          showAnchorIcon
                          href="https://github.com/nextui-org/nextui"
                          anchorIcon={<AnchorIcon />}
                        >
                          Airbnb Clone
                        </Link>
                      </TableCell>
                      <TableCell className="hidden lg:block">
                        FullStack Dev
                      </TableCell>
                      <TableCell>
                        <Chip
                          className="text-tiny md:text-sm"
                          size="sm"
                          color="warning"
                          variant="light"
                        >
                          Paused
                        </Chip>
                      </TableCell>
                    </TableRow>
                    
                    <TableRow key="3">
                      <TableCell>
                        <Link
                          className="text-tiny md:text-sm"
                          color="foreground"
                          isExternal
                          showAnchorIcon
                          href="https://github.com/nextui-org/nextui"
                          anchorIcon={<AnchorIcon />}
                        >
                          Bikefy - Bike Rental
                        </Link>
                      </TableCell>
                      <TableCell className="hidden lg:block">
                        Saas Web App
                      </TableCell>
                      <TableCell>
                        <Chip
                          className="text-tiny md:text-sm"
                          color="success"
                          variant="light"
                        >
                          Demo
                        </Chip>
                      </TableCell>
                    </TableRow>
                    
                  </TableBody>
                </Table>
              </div>
            </CardBody>
          </Card>
          {/* card 4 */}
          <Card className="col-span-12 sm:col-span-6 h-[400px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="./profile-logo.svg"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md font-semibold">Freelance Services</p>
                  <p className="text-tiny text-default-500 md:text-small  ">
                    Fiverr | UpWork | GoSavis
                  </p>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-end">
                <a className="mr-2 rounded-full bg-purple-200 p-1" href="#">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex flex-wrap mb-2 py-1 px-4 items-center justify-between  rounded-md">
                <div className="w-auto p-2">
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="w-auto p-1.5 border-l border-purple-500 ">
                     
                      <Link color="success" className="mb-1 text-sm md:text-md ml-2" href="#" underline="always">I Will create Business GoDaddy website usibg Godaddy builder</Link>
                      <p className="text-tiny ml-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
              <Divider />
              <div className="flex flex-wrap mb-2 py-1 px-4 items-center justify-between  rounded-md">
                <div className="w-auto p-2">
                  <div className="flex flex-wrap items-center -m-1.5">
                    <div className="w-auto p-1.5 border-l border-purple-500 ">
                     
                      <Link color="secondary" className="mb-1 text-sm md:text-md ml-2" href="#" underline="always" isDisabled>Fiverr Web Development Gig</Link>
                      <p className="text-tiny ml-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                
              </div>
              <Divider/>
              
            </CardBody>
            <CardFooter className="absolute bg-black/10 bottom-0 z-10 border-t-1 border-purple-600 dark:border-purple-300">
              <div className="flex flex-grow gap-2 items-center">
                <AvatarGroup  max={1} size="sm">
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                  <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                </AvatarGroup>
              </div>
              <Button
                href=""
                as={Link}
                radius="full"
                size="md"
                color="default"
                variant="bordered"
                showAnchorIcon
              >
                More Services
              </Button>
            </CardFooter>
          </Card>
          {/* card 5 */}
          <Card className="col-span-12 sm:col-span-6 h-[400px]">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="./profile-logo.svg"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Kalaakar</p>
                  <p className="text-small  text-default-500">
                    Digital Guest Boook
                  </p>
                </div>
              </div>
              <div className="mb-2 flex items-center justify-end">
                <a className="mr-2 rounded-full bg-pink-200 p-1" href="#">
                  <div className="h-2 w-2 rounded-full bg-pink-600"></div>
                </a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a
                  className="mr-3 h-1 w-1 rounded-full bg-gray-200"
                  href="#"
                ></a>
                <a className="h-1 w-1 rounded-full bg-gray-200" href="#"></a>
              </div>
            </CardHeader>

            <Image
              alt="Woman listing to music"
              className="object-cover h-[350px] md:h-[400px] lg:h-[400px] w-full"
              src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHw5Mnx8cXVvdGVzfGVufDB8fHx8MTY5MjQwMTY5MHww&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920"
            />
            <CardFooter className="justify-between before:bg-white/10 border-black/30 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny ">Available soon.</p>
              <Button
                className="text-tiny  bg-pink-500"
                variant="bordered"
                color="default"
                radius="full"
                size="md"
              >
                Notify me
              </Button>
            </CardFooter>
          </Card>
          {/* card 6 */}
         
        </div>
      </section>

      {/* infotainment cards-end */}
    </>
  );
};
