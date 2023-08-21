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
  DropdownSection,  User
} from "@nextui-org/react";


export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold font-mono text-inherit">Parthb.io</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
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

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className=" md:flex">
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button variant="flat">Ecosystem</Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions" >
			<DropdownItem key="gosavis"  ><Link isExternal href={siteConfig.links.gosavis} aria-label="Gosavis">GoSavis</Link></DropdownItem>
      {/* <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link> */}
              <DropdownItem key="web">Web Development</DropdownItem>
			  <DropdownItem key="ai" isDisabled>AI & LLM&apos;s</DropdownItem>
			  <DropdownItem key="cyber" isDisabled>CyberSecurity</DropdownItem>
			  <DropdownItem key="web3" isDisabled>Web 3 &apos; Crytpography</DropdownItem>
			  <DropdownItem key="podcasts" isDisabled>Podcasts</DropdownItem>
              <DropdownItem key="certificates" className="text-secondary" isDisabled >
                Certifications Achieved
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
       
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
      <DropdownTrigger>
        <Button variant="ghost" startContent={<HeartFilledIcon className="text-green-500" />} disableRipple>Hire Me</Button>
      </DropdownTrigger>
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
          <DropdownItem key="settings">Hire On Fiverr</DropdownItem>
          <DropdownItem
            key="new_project"
            
          >
            Hire On Upwork
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Preferences" showDivider>
          
          <DropdownItem isDisabled
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
          <DropdownItem key="logout" isDisabled>Log Out</DropdownItem>
        </DropdownSection> 
      </DropdownMenu>
    </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        

        
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
