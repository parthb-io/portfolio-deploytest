export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Projects",
      href: "/docs",
    },
	{
		label: "Articles",
		href: "/blog",
	  },
    {
      label: "Resources",
      href: "/pricing",
    },
    
    // {
    //   label: "Whitepaper",
    //   href: "/about",
	  
    // }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Projects",
			href: "/docs",
		  },
		  {
			label: "Resources",
			href: "/pricing",
		  },
		  {
			label: "Articles",
			href: "/blog",
		  },
		
	],
	// navMenuItems: [
	// 	{
	// 		label: "Profile",
	// 		href: "/profile",
	// 	},
	// 	{
	// 		label: "Dashboard",
	// 		href: "/dashboard",
	// 	},
	// 	{
	// 		label: "Projects",
	// 		href: "/projects",
	// 	},
	// 	{
	// 		label: "Team",
	// 		href: "/team",
	// 	},
	// 	{
	// 		label: "Calendar",
	// 		href: "/calendar",
	// 	},
	// 	{
	// 		label: "Settings",
	// 		href: "/settings",
	// 	},
	// 	{
	// 		label: "Help & Feedback",
	// 		href: "/help-feedback",
	// 	},
	// 	{
	// 		label: "Logout",
	// 		href: "/logout",
	// 	},
	// ],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "",
	fiverr:"https://www.fiverr.com/parthb_io",
	gosavis:"https://gosavis.com"
	},
};
