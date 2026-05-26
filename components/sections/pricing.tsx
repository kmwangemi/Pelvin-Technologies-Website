"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const plans = [
	{
		name: "Starter",
		description: "Perfect for small projects",
		price: "$5,000",
		period: "one-time",
		features: [
			"Up to 3 pages",
			"Responsive design",
			"Basic SEO optimization",
			"30 days support",
			"Hosting setup",
		],
		highlighted: false,
	},
	{
		name: "Professional",
		description: "Ideal for growing businesses",
		price: "$15,000",
		period: "one-time",
		features: [
			"Up to 10 pages",
			"Advanced features",
			"Full SEO optimization",
			"90 days support",
			"Analytics setup",
			"CMS integration",
			"Database setup",
		],
		highlighted: true,
	},
	{
		name: "Enterprise",
		description: "For complex applications",
		price: "Custom",
		period: "quote",
		features: [
			"Unlimited pages",
			"Custom features",
			"API integration",
			"Priority support",
			"Performance optimization",
			"Security audit",
			"Dedicated account manager",
			"Training included",
		],
		highlighted: false,
	},
];

export function PricingSection() {
	const [billingPeriod, setBillingPeriod] = useState("monthly");

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
			transition: { duration: 0.6 },
		},
	};

	return (
		<section id="pricing" className="py-20 sm:py-32 bg-card/30 backdrop-blur">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">
						Simple Pricing
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
						Flexible plans tailored to your budget and needs
					</p>
					{/* Billing toggle */}
					<div className="inline-flex items-center gap-4 p-1 rounded-lg bg-muted">
						<button
							type="button"
							onClick={() => setBillingPeriod("monthly")}
							className={`px-4 py-2 rounded-md transition-all ${
								billingPeriod === "monthly"
									? "bg-primary text-primary-foreground"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							Monthly
						</button>
						<button
							type="button"
							onClick={() => setBillingPeriod("yearly")}
							className={`px-4 py-2 rounded-md transition-all ${
								billingPeriod === "yearly"
									? "bg-primary text-primary-foreground"
									: "text-muted-foreground hover:text-foreground"
							}`}
						>
							Yearly
						</button>
					</div>
				</motion.div>
				{/* Pricing cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
				>
					{plans.map((plan, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className={`relative rounded-2xl border p-8 transition-all duration-300 ${
								plan.highlighted
									? "border-primary/50 bg-linear-to-br from-primary/5 to-secondary/5 shadow-lg shadow-primary/20 scale-105"
									: "border-border/40 bg-background hover:border-border/60"
							}`}
						>
							{plan.highlighted && (
								<div className="absolute -top-4 left-8 px-4 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
									Most Popular
								</div>
							)}
							<div className="mb-8">
								<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
								<p className="text-sm text-muted-foreground">
									{plan.description}
								</p>
							</div>
							<div className="mb-8">
								<div className="text-4xl font-bold mb-2">{plan.price}</div>
								<p className="text-sm text-muted-foreground">{plan.period}</p>
							</div>
							<Button
								className={`w-full mb-8 ${
									plan.highlighted
										? "bg-primary hover:bg-primary/90 text-primary-foreground"
										: "border border-primary text-primary hover:bg-primary/10"
								}`}
								variant={plan.highlighted ? "default" : "outline"}
							>
								Get Started
							</Button>
							<div className="space-y-4">
								{plan.features.map((feature, idx) => (
									<motion.div
										key={idx}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: idx * 0.05 }}
										viewport={{ once: true }}
										className="flex items-start gap-3"
									>
										<Check size={20} className="text-primary shrink-0 mt-0.5" />
										<span className="text-sm text-foreground">{feature}</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
				{/* FAQ CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mt-16"
				>
					<p className="text-muted-foreground mb-4">
						Have questions about pricing? Check our{" "}
						<button
							type="button"
							onClick={() =>
								document
									.getElementById("faq")
									?.scrollIntoView({ behavior: "smooth" })
							}
							className="text-primary hover:underline font-semibold"
						>
							FAQ section
						</button>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
