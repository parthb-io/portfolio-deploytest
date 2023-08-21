export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col container gap-4 py-8 md:py-10">
			
				{children}
			</section>
	);
}
