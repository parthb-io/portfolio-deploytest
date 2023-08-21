export default function AboutLayout({
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
