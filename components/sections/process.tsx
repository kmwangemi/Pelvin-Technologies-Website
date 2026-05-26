"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
	{
		number: 1,
		title: "Discovery",
		description:
			"We understand your business, goals, and challenges through detailed consultation.",
	},
	{
		number: 2,
		title: "Strategy",
		description:
			"We create a comprehensive roadmap tailored to your specific needs and timeline.",
	},
	{
		number: 3,
		title: "Design",
		description:
			"Our designers craft beautiful, user-centric interfaces and experiences.",
	},
	{
		number: 4,
		title: "Development",
		description:
			"Expert developers build robust, scalable solutions using cutting-edge technologies.",
	},
	{
		number: 5,
		title: "Testing",
		description:
			"Rigorous QA testing ensures quality, performance, and security standards are met.",
	},
	{
		number: 6,
		title: "Launch",
		description:
			"We deploy your solution and provide ongoing support for seamless operation.",
	},
];

export function ProcessSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6 },
		},
	};

	return (
		<section id="process" className="py-20 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Process</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						A proven methodology for delivering excellence at every stage
					</p>
				</motion.div>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="space-y-8"
				>
					{steps.map((step, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="relative"
						>
							{/* Timeline line */}
							{index !== steps.length - 1 && (
								<div className="absolute left-8 top-20 w-1 h-16 bg-linear-to-b from-primary to-secondary hidden sm:block" />
							)}
							<div className="flex gap-6">
								{/* Step number */}
								<div className="shrink-0">
									<div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
										{step.number}
									</div>
								</div>
								{/* Content */}
								<div className="flex-1 pt-2">
									<h3 className="text-2xl font-bold mb-2">{step.title}</h3>
									<p className="text-muted-foreground text-lg">
										{step.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
				{/* CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					viewport={{ once: true, margin: "-100px" }}
					className="mt-16 p-8 sm:p-10 rounded-2xl border border-primary/30 bg-linear-to-br from-primary/10 to-secondary/10 text-center"
				>
					<div className="flex items-center justify-center gap-2 mb-4">
						<CheckCircle2 size={24} className="text-primary" />
						<h3 className="text-2xl font-bold">Ready to Get Started?</h3>
					</div>
					<p className="text-muted-foreground mb-6">
						Let&apos;s discuss your project and how we can help transform your
						vision into reality.
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
						Schedule a Consultation
					</button>
				</motion.div>
			</div>
		</section>
	);
}
