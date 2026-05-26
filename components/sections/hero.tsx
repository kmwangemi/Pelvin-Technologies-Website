"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
		>
			{/* Animated background */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
				<div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
			</div>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="space-y-6"
				>
					{/* Badge */}
					<motion.div variants={itemVariants} className="inline-block">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
							<Sparkles size={16} className="text-primary" />
							<span className="text-sm font-medium text-primary">
								Welcome to the Future of Development
							</span>
						</div>
					</motion.div>

					{/* Company Name */}
					<motion.p
						variants={itemVariants}
						className="text-lg font-semibold text-primary uppercase tracking-wider"
					>
						Welcome to PELVIN Technologies
					</motion.p>

					{/* Main heading */}
					<motion.h1
						variants={itemVariants}
						className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance"
					>
						Transform Your Business with{" "}
						<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
							Innovative Solutions
						</span>
					</motion.h1>

					{/* Subheading */}
					<motion.p
						variants={itemVariants}
						className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
					>
						We craft cutting-edge software that drives growth. From concept to
						deployment, PELVIN is your trusted technology partner for digital
						transformation.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div
						variants={itemVariants}
						className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
					>
						<Button
							size="lg"
							className="bg-primary hover:bg-primary/90 text-primary-foreground"
							onClick={() =>
								document
									.getElementById("contact")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							Get Started Today
							<ArrowRight className="ml-2" size={20} />
						</Button>
						<Button
							size="lg"
							variant="outline"
							onClick={() =>
								document
									.getElementById("portfolio")
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							View Our Work
						</Button>
					</motion.div>

					{/* Stats */}
					<motion.div
						variants={itemVariants}
						className="grid grid-cols-3 gap-8 pt-12 max-w-md mx-auto"
					>
						<div>
							<div className="text-3xl font-bold text-primary">50+</div>
							<div className="text-sm text-muted-foreground">
								Projects Delivered
							</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-secondary">30+</div>
							<div className="text-sm text-muted-foreground">Happy Clients</div>
						</div>
						<div>
							<div className="text-3xl font-bold text-accent">5+</div>
							<div className="text-sm text-muted-foreground">
								Years Experience
							</div>
						</div>
					</motion.div>
				</motion.div>

				{/* Scroll indicator */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
				>
					<div className="flex flex-col items-center gap-2">
						<span className="text-xs text-muted-foreground">
							Scroll to explore
						</span>
						<div className="w-6 h-10 border-2 border-primary rounded-full flex items-center justify-center">
							<div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
