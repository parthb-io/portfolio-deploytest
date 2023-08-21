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

import { AnchorIcon } from "./anchor-icon";

export const infotainment = () => {
  return (
    <>
      {/* infotainment cards */}
      <section className="container flex flex-col relative  py-4">
      <div className="container mx-auto w-full gap-4 md:gap-8  grid grid-cols-12 grid-rows-2  pb-10  " >
        {/* card 1 */}
        <Card
          isFooterBlurred
          className="relative w-full h-[450px] md:h-[500px] col-span-12 sm:col-span-12"
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
        <Card className="relative col-span-12 sm:col-span-6 h-[450px] md:h-[500px]">
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
            <ol className="mt-3 space-y-4">
              <li className="flex gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/40 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    alt="nextui logo"
                    height={24}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={24}
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
                    height={24}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={24}
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
                    height={24}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={24}
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

        <Card className="col-span-12 sm:col-span-6 h-[450px] md:h-[500px]">
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
            <div className="flex flex-col p-1 gap-6">
              <Table
                color={"success"}
                selectionMode="single"
                defaultSelectedKeys={["2"]}
                aria-label="Example static collection table"
              >
                <TableHeader className="bg-transparent border-1 border-default-200">
                  <TableColumn>PROJECT</TableColumn>
                  <TableColumn className="hidden lg:block">ROLE</TableColumn>
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
                        William Howard
                      </Link>
                    </TableCell>
                    <TableCell className="hidden lg:block">Web Developer</TableCell>
                    <TableCell><Chip size="sm" color="success" variant="light">Active</Chip></TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>
                      <Link
                        size="sm"
                        color="foreground"
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                        anchorIcon={<AnchorIcon />}
                      >
                        William Howard
                      </Link>
                    </TableCell>
                    <TableCell className="hidden lg:block">FullStack Dev</TableCell>
                    <TableCell><Chip size="sm" color="primary" variant="light">Paused</Chip></TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>
                      <Link
                        size="sm"
                        color="foreground"
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                        anchorIcon={<AnchorIcon />}
                      >
                        William Howard
                      </Link>
                    </TableCell>
                    <TableCell className="hidden lg:block">Web3 Developer</TableCell>
                    <TableCell><Chip size="sm" color="success" variant="light">Active</Chip></TableCell>
                  </TableRow>
                  <TableRow key="4">
                    <TableCell>
                      <Link
                        size="sm"
                        color="foreground"
                        isExternal
                        showAnchorIcon
                        href="https://github.com/nextui-org/nextui"
                        anchorIcon={<AnchorIcon />}
                      >
                        William Howard
                      </Link>
                    </TableCell>
                    <TableCell className="hidden lg:block">Community Manager</TableCell>
                    <TableCell><Chip color="warning" variant="light">Vacation</Chip></TableCell>
                  </TableRow>
                  
                  
                </TableBody>
              </Table>
            </div>
          </CardBody>
          </Card>
        {/* card 4 */}
        <Card className="col-span-12 sm:col-span-6 h-[450px] md:h-[500px]">
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
                    <h3 className="mb-1 text-sm md:text-md ml-2">Instant sales support</h3>
                    <p className="text-tiny ml-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
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
                    <h3 className="mb-1 text-sm md:text-md ml-2">Instant sales support</h3>
                    <p className="text-tiny ml-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
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
            <Divider className="hidden md:flex flex-wrap" />
            <div className="hidden md:flex flex-wrap py-1 px-4 items-center justify-between  rounded-md">
              <div className="w-auto p-2">
                <div className="flex flex-wrap items-center -m-1.5">
                  <div className="w-auto p-1.5 border-l border-purple-500 ">
                    <h3 className="mb-1 text-sm md:text-md ml-2">Instant sales support</h3>
                    <p className="text-tiny ml-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      <br />
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
          <CardFooter className="absolute bg-purple-500/10 bottom-0 z-10 border-t-1 border-purple-600 dark:border-purple-300">
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
              href=""
              as={Link}
              radius="full"
              size="md"
              color="default"
              variant="bordered"
              showAnchorIcon
            >
              Check more Services
            </Button>
          </CardFooter>
        </Card>
        {/* card 5 */}
        <Card className="col-span-12 sm:col-span-6 h-[450px] md: h-[500px]">
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
            className="object-cover h-[400px] md: h-[500px] w-full"
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
        <Card className="col-span-12  sm:col-span-12 h-[450px] md:h-[400px]">
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
          <CardBody></CardBody>
        </Card>
      </div>
      </section>
      
      {/* infotainment cards-end */}
    </>
  );
};
