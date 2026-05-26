"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function VisionMissionSection() {
	return (
		<section className="py-20 sm:py-32 relative overflow-hidden bg-linear-to-b from-background via-secondary/5 to-background">
			{/* Decorative elements */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
				<div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />
			</div>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<Badge className="mx-auto mb-4" variant="outline">
						OUR DIRECTION
					</Badge>
					<h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
						Vision & Mission
					</h2>
					<p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
						Guided by purpose, driven by passion
					</p>
				</motion.div>
				{/* Vision and Mission cards */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
					{/* Vision Card */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<Card className="h-full bg-linear-to-br from-card to-secondary/5 border-border/40 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
							<div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
								<div className="flex items-start gap-4 mb-6">
									<div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
										<Lightbulb className="w-6 h-6 text-primary" />
									</div>
									<h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
										Our Vision
									</h3>
								</div>
								<p className="text-base sm:text-lg text-muted-foreground leading-relaxed grow">
									To be the world&apos;s most trusted technology partner,
									empowering businesses of all sizes to achieve their ambitious
									goals through innovative, sustainable, and transformative
									software solutions.
								</p>
								<div className="mt-8 pt-8 border-t border-border/40">
									<p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
										We envision a world where
									</p>
									<ul className="space-y-3 text-muted-foreground text-sm">
										<li className="flex items-start gap-2">
											<span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
											<span>
												Technology bridges gaps and creates unlimited
												opportunities
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
											<span>
												Innovation accelerates growth and positive impact
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
											<span>
												Digital transformation drives business excellence
											</span>
										</li>
									</ul>
								</div>
							</div>
						</Card>
					</motion.div>
					{/* Mission Card */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<Card className="h-full bg-linear-to-br from-card to-primary/5 border-border/40 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
							<div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
								<div className="flex items-start gap-4 mb-6">
									<div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
										<Target className="w-6 h-6 text-primary" />
									</div>
									<h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
										Our Mission
									</h3>
								</div>
								<p className="text-base sm:text-lg text-muted-foreground leading-relaxed grow">
									To deliver exceptional software solutions that exceed
									expectations, drive measurable business value, and create
									lasting partnerships built on trust, innovation, and
									excellence.
								</p>
								<div className="mt-8 pt-8 border-t border-border/40">
									<p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
										We are committed to
									</p>
									<ul className="space-y-3 text-muted-foreground text-sm">
										<li className="flex items-start gap-2">
											<span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
											<span>
												Client success through collaborative partnerships
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
											<span>
												Continuous innovation and technical excellence
											</span>
										</li>
										<li className="flex items-start gap-2">
											<span className="inline-block w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
											<span>Sustainable solutions with lasting impact</span>
										</li>
									</ul>
								</div>
							</div>
						</Card>
					</motion.div>
				</div>
				{/* Key objectives */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="bg-linear-to-r from-primary/5 to-secondary/5 rounded-xl p-8 sm:p-12 border border-border/40"
				>
					<h3 className="text-2xl font-bold text-foreground mb-8 text-center">
						Strategic Objectives
					</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{ title: "Innovate", desc: "Pioneer next-gen solutions" },
							{ title: "Scale", desc: "Grow impact globally" },
							{ title: "Empower", desc: "Enable client transformation" },
							{ title: "Sustain", desc: "Build lasting value" },
						].map((obj, index) => (
							<motion.div
								key={obj.title}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.05 }}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="text-lg font-bold text-primary mb-2">
									{obj.title}
								</div>
								<p className="text-sm text-muted-foreground">{obj.desc}</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
