"use client";

import { motion } from "framer-motion";

const partners = [
	{
		name: "AWS",
		category: "Cloud Infrastructure",
		description:
			"Scalable cloud computing, storage, and global infrastructure.",
		logo: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="w-8 h-8"
				role="img"
				aria-labelledby="logo-aws"
			>
				<title id="logo-aws">AWS</title>
				<path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.240-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.778.778 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.311.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.743.167-1.166.167z" />
			</svg>
		),
	},
	{
		name: "Google Cloud",
		category: "Cloud & AI Platform",
		description:
			"Cloud infrastructure and AI/ML services powering modern apps.",
		logo: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="w-8 h-8"
				role="img"
				aria-labelledby="logo-google-cloud"
			>
				<title id="logo-google-cloud">Google Cloud</title>
				<path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006.005a6.016 6.016 0 0 0 3.867 1.382h5.389c.44 0 .902-.05 1.32-.13h.015a6.024 6.024 0 0 0 4.281-2.112 6.2 6.2 0 0 0 1.459-4.046v-.031a6.197 6.197 0 0 0-1.693-4.25l-.028-.03a9.355 9.355 0 0 0-5.135-8.622zm.013 2.535a6.81 6.81 0 0 1 4.12 2.182l-1.86 1.86a4.266 4.266 0 0 0-5.99.427L6.61 7.53a6.82 6.82 0 0 1 5.593-2.617zM6.46 9.308l1.872 1.872a4.266 4.266 0 0 0 .427 5.99l-1.869 1.87A6.82 6.82 0 0 1 6.46 9.308zm9.073.445a6.82 6.82 0 0 1 .43 7.732l-1.874-1.874a4.266 4.266 0 0 0-.43-5.99zm-4.54.74a1.732 1.732 0 1 1 0 3.465 1.732 1.732 0 0 1 0-3.465zm-3.476 4.668l1.869-1.869a4.266 4.266 0 0 0 5.99-.428l1.869 1.869a6.82 6.82 0 0 1-9.728.428z" />
			</svg>
		),
	},
	{
		name: "OpenAI",
		category: "AI & Machine Learning",
		description:
			"Powering intelligent features with GPT and cutting-edge AI APIs.",
		logo: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="w-8 h-8"
				role="img"
				aria-labelledby="logo-openai"
			>
				<title id="logo-openai">OpenAI</title>
				<path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
			</svg>
		),
	},
	{
		name: "Vercel",
		category: "Deployment & Hosting",
		description:
			"Instant deployments and global edge network for modern web apps.",
		logo: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="w-8 h-8"
				role="img"
				aria-labelledby="logo-vercel"
			>
				<title id="logo-vercel">Vercel</title>
				<path d="M24 22.525H0l12-21.05z" />
			</svg>
		),
	},
	{
		name: "Stripe",
		category: "Payments & Fintech",
		description:
			"Secure, reliable payment infrastructure for global transactions.",
		logo: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="w-8 h-8"
				role="img"
				aria-labelledby="logo-stripe"
			>
				<title id="logo-stripe">Stripe</title>
				<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
			</svg>
		),
	},
	{
		name: "GitHub",
		category: "Version Control & DevOps",
		description:
			"Collaborative development, CI/CD pipelines, and code management.",
		logo: (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className="w-8 h-8"
				role="img"
				aria-labelledby="logo-github"
			>
				<title id="logo-github">GitHub</title>
				<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
			</svg>
		),
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

export function PartnersSection() {
	return (
		<section id="partners" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
						Our{" "}
						<span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
							Partners
						</span>
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
						We collaborate with industry-leading platforms and tools to deliver
						world-class solutions for our clients.
					</p>
				</motion.div>
				{/* Partners Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{partners.map((partner) => (
						<motion.div
							key={partner.name}
							variants={itemVariants}
							className="group p-6 rounded-xl border border-border/40 bg-card/50 hover:bg-card/80 transition-all hover:shadow-lg hover:border-primary/50"
						>
							{/* Logo */}
							<div className="w-16 h-16 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors text-primary">
								{partner.logo}
							</div>
							{/* Content */}
							<h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
								{partner.name}
							</h3>
							<p className="text-sm text-primary font-semibold mb-2">
								{partner.category}
							</p>
							<p className="text-sm text-muted-foreground">
								{partner.description}
							</p>
							{/* Hover effect line */}
							<div className="mt-4 h-1 w-0 bg-linear-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
						</motion.div>
					))}
				</motion.div>
				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<p className="text-muted-foreground mb-4">
						Interested in becoming a PELVIN partner?
					</p>
					<button
						type="button"
						onClick={() =>
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
					>
						Partner With Us
					</button>
				</motion.div>
			</div>
		</section>
	);
}
