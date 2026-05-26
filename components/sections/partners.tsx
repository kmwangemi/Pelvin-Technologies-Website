"use client";

import { motion } from "framer-motion";

const partners = [
	{
		name: "TechCloud Solutions",
		category: "Cloud Infrastructure",
		description: "Leading cloud computing solutions",
	},
	{
		name: "DataSync Analytics",
		category: "Analytics & Insights",
		description: "Advanced data analytics platform",
	},
	{
		name: "SecureNet Systems",
		category: "Security",
		description: "Enterprise security solutions",
	},
	{
		name: "DevOps Masters",
		category: "DevOps & CI/CD",
		description: "Continuous integration and deployment",
	},
	{
		name: "WebFlow Design",
		category: "Design Tools",
		description: "Design and prototyping platform",
	},
	{
		name: "CodeForge Framework",
		category: "Development",
		description: "Modern development framework",
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
						We collaborate with industry-leading organizations to deliver
						exceptional solutions and services.
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
					{partners.map((partner, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="group p-6 rounded-xl border border-border/40 bg-card/50 hover:bg-card/80 transition-all hover:shadow-lg hover:border-primary/50"
						>
							{/* Logo Placeholder */}
							<div className="w-16 h-16 rounded-lg bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
								<span className="text-2xl font-bold text-primary">
									{partner.name.charAt(0)}
								</span>
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
						className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all hover:shadow-lg"
					>
						Partner With Us
					</button>
				</motion.div>
			</div>
		</section>
	);
}
