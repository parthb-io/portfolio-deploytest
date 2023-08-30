"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  User,
} from "@nextui-org/react";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">

      {/* menu-logo-items */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* site-logo */}
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold font-mono text-inherit">Parthb.io</p>
          </NextLink>
        </NavbarBrand>
        {/* menu-items */}
        <ul className="hidden md:flex lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* menu-icons-buttons */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* Menu-icons */}
        <NavbarItem className="hidden sm:flex gap-2">
          {/* twitter-icon */}
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          {/* discord-icon */}
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          {/* github-icon */}
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          {/* theme-switcher */}
          <ThemeSwitch />
        </NavbarItem>

        {/* ecosystem-dropdown */}
        <NavbarItem className=" md:flex">
          <Dropdown backdrop="blur">
            {/* ecosystem-button */}
            <DropdownTrigger>
              <Button variant="flat">Ecosystem</Button>
            </DropdownTrigger>
            {/* ecosystem-menu */}
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem key="gosavis">
                <Link
                  isExternal
                  href={siteConfig.links.gosavis}
                  aria-label="Gosavis"
                >
                  GoSavis
                </Link>
              </DropdownItem>
              {/* <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link> */}
              <DropdownItem key="web">Web Development</DropdownItem>
              <DropdownItem key="ai" isDisabled>
                AI & LLM&apos;s
              </DropdownItem>
              <DropdownItem key="cyber" isDisabled>
                CyberSecurity
              </DropdownItem>
              <DropdownItem key="web3" isDisabled>
                Web 3 &apos; Crytpography
              </DropdownItem>
              <DropdownItem key="podcasts" isDisabled>
                Podcasts
              </DropdownItem>
              <DropdownItem
                key="certificates"
                className="text-secondary"
                isDisabled
              >
                Certifications Achieved
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        
        {/* hire-dropdown */}
        <NavbarItem className=" md:flex">
          <Dropdown
            showArrow
            radius="sm"
            backdrop="blur"
            classNames={{
              base: "p-0 border-small border-divider bg-background",
              arrow: "bg-default-200",
            }}
          >
            {/* hire-button */}
            <DropdownTrigger>
              <Button
                variant="ghost"
                startContent={<HeartFilledIcon className="text-green-500" />}
                disableRipple
              >
                Hire Me
              </Button>
            </DropdownTrigger>
            {/* hire-menu */}
            <DropdownMenu
              aria-label="Custom item styles"
              disabledKeys={["profile"]}
              className="p-3"
              itemClasses={{
                base: [
                  "rounded-md",
                  "text-default-500",
                  "transition-opacity",
                  "data-[hover=true]:text-foreground",
                  "data-[hover=true]:bg-default-100",
                  "dark:data-[hover=true]:bg-default-50",
                  "data-[pressed=true]:opacity-70",
                  "data-[focus-visible=true]:ring-default-500",
                ],
              }}
            >
              <DropdownSection aria-label="Profile & Actions" showDivider>
                <DropdownItem
                  isReadOnly
                  key="profile"
                  className="h-14 gap-2 opacity-100"
                >
                  <User
                    name="Parth Bhatt"
                    description="@parthb.io"
                    classNames={{
                      name: "text-default-600",
                      description: "text-default-500",
                    }}
                    avatarProps={{
                      size: "sm",
                      src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                    }}
                  />
                </DropdownItem>
                <DropdownItem key="dashboard" isDisabled>
                  Dashboard
                </DropdownItem>
                <DropdownItem key="fiverr">
                  {" "}
                  <Link
                    isExternal
                    href="https://www.fiverr.com/parthb_io"
                    showAnchorIcon
                    color="foreground"
                    size="sm"
                  >
                    Hire On Fiverr
                  </Link>
                </DropdownItem>
                <DropdownItem key="upwork" isDisabled>
                  {" "}
                  <Link
                    isExternal
                    href="https://www.fiverr.com/parthb_io"
                    showAnchorIcon
                    color="foreground"
                    size="sm"
                  >
                    Hire On UpWork
                  </Link>
                </DropdownItem>
              </DropdownSection>

              <DropdownSection aria-label="Preferences" showDivider>
                <DropdownItem
                  isDisabled
                  isReadOnly
                  key="New Project"
                  className="cursor-default"
                  endContent={
                    <select
                      className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                      id="theme"
                      name="theme"
                    >
                      <option>Free Quote</option>
                      <option>Consultation</option>
                      <option>Already A Client</option>
                    </select>
                  }
                >
                  Theme
                </DropdownItem>
              </DropdownSection>

              <DropdownSection aria-label="Help & Feedback">
                <DropdownItem key="help_and_feedback">
                  Chat & Feedback
                </DropdownItem>
                <DropdownItem key="logout" isDisabled>
                  Log Out
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      {/* mobile-menu-icons */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* mobile-menu-navbar */}
      <NavbarMenu>
        <Link
          isExternal
          href="https://www.fiverr.com/parthb_io"
          showAnchorIcon
          color="success"
        >
          Hire On Fiverr
        </Link>

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
      
    </NextUINavbar>
  );
};
