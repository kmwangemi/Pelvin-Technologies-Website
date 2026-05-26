"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const handleLearnMore = () => {
	const contactSection = document.getElementById("contact");
	if (contactSection) {
		contactSection.scrollIntoView({ behavior: "smooth" });
	}
};

const products = [
	{
		name: "ChurchSync Pro",
		subtitle: "Complete Church Management",
		description:
			"All-in-one platform for churches to manage members, events, giving, and communications.",
		features: [
			"Member Database & Directory",
			"Event Management System",
			"Online Giving Platform",
			"Attendance Tracking",
			"Communication Tools",
			"Financial Reporting",
		],
		highlighted: true,
	},
	{
		name: "ChurchSync Connect",
		subtitle: "Community Engagement",
		description:
			"Build stronger connections with your congregation through digital community features.",
		features: [
			"Group Management",
			"Small Group Coordination",
			"Event Registration",
			"Discussion Forums",
			"Notification System",
			"Mobile App Access",
		],
	},
];

export function ProductsSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8 },
		},
	};

	return (
		<section id="products" className="py-20 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Products</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Purpose-built solutions for modern organizations
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
				>
					{products.map((product, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className={`relative rounded-2xl border p-8 sm:p-10 transition-all duration-300 ${
								product.highlighted
									? "border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg shadow-primary/20"
									: "border-border/40 bg-card/50 hover:border-border/60"
							}`}
						>
							{product.highlighted && (
								<div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
									Featured
								</div>
							)}

							<div className="mb-6">
								<h3 className="text-2xl sm:text-3xl font-bold mb-2">
									{product.name}
								</h3>
								<p className="text-primary font-semibold text-sm">
									{product.subtitle}
								</p>
							</div>

							<p className="text-muted-foreground mb-8">
								{product.description}
							</p>

							<div className="space-y-3 mb-8">
								{product.features.map((feature, idx) => (
									<motion.div
										key={idx}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: idx * 0.05 }}
										viewport={{ once: true }}
										className="flex items-center gap-3"
									>
										<CheckCircle
											size={20}
											className="text-primary flex-shrink-0"
										/>
										<span className="text-foreground">{feature}</span>
									</motion.div>
								))}
							</div>

							<Button
								onClick={handleLearnMore}
								className={`w-full cursor-pointer ${
									product.highlighted
										? "bg-primary hover:bg-primary/90 text-primary-foreground"
										: "border border-primary text-primary hover:bg-primary/10"
								}`}
								variant={product.highlighted ? "default" : "outline"}
							>
								Learn More
								<ArrowRight className="ml-2" size={18} />
							</Button>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
