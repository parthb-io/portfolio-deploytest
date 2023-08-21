export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col items-center justify-center gap-4 ">
			<div className="inline-block relative container mx-auto max-w-7xl  px-6 flex-grow">
				{children}
			</div>
		</section>
	);
}
