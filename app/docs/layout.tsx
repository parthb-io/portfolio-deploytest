export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col container gap-4 py-8 lg:py-10">
			
				{children}
			</section>
	);
}
