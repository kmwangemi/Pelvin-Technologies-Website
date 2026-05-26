"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
	{
		id: 1,
		title: "E-Commerce Platform",
		category: "Web",
		description: "Full-stack e-commerce solution with payment processing",
		tags: ["React", "Node.js", "PostgreSQL"],
	},
	{
		id: 2,
		title: "Mobile Banking App",
		category: "Mobile",
		description: "Secure mobile banking application for iOS and Android",
		tags: ["React Native", "Firebase", "Security"],
	},
	{
		id: 3,
		title: "AI Analytics Dashboard",
		category: "AI",
		description: "Machine learning powered analytics platform",
		tags: ["Python", "TensorFlow", "React"],
	},
	{
		id: 4,
		title: "Cloud Migration",
		category: "Cloud",
		description: "Successfully migrated legacy systems to AWS",
		tags: ["AWS", "Infrastructure", "DevOps"],
	},
	{
		id: 5,
		title: "Real-time Collaboration Tool",
		category: "Web",
		description: "WebSocket-based real-time collaboration platform",
		tags: ["WebSockets", "Vue.js", "MongoDB"],
	},
	{
		id: 6,
		title: "IoT Fleet Management",
		category: "Cloud",
		description: "Fleet tracking and management system",
		tags: ["IoT", "Google Cloud", "Node.js"],
	},
];

const categories = ["All", "Web", "Mobile", "Cloud", "AI"];

export function PortfolioSection() {
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((p) => p.category === selectedCategory);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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
		<section id="portfolio" className="py-20 sm:py-32 bg-card/30 backdrop-blur">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Portfolio</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Showcase of successful projects and transformations
					</p>
				</motion.div>

				{/* Filter buttons */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					className="flex flex-wrap gap-3 justify-center mb-12"
				>
					{categories.map((category) => (
						<Button
							key={category}
							variant={selectedCategory === category ? "default" : "outline"}
							onClick={() => setSelectedCategory(category)}
							className={
								selectedCategory === category
									? "bg-primary text-primary-foreground"
									: ""
							}
						>
							{category}
						</Button>
					))}
				</motion.div>

				{/* Projects grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{filteredProjects.map((project) => (
						<motion.div
							key={project.id}
							variants={itemVariants}
							layout
							className="group rounded-xl border border-border/40 bg-background overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
						>
							<div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
										{project.category.charAt(0)}
									</div>
								</div>
							</div>

							<div className="p-6">
								<div className="flex items-start justify-between mb-2">
									<h3 className="text-lg font-bold">{project.title}</h3>
									<span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
										{project.category}
									</span>
								</div>
								<p className="text-sm text-muted-foreground mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, idx) => (
										<span
											key={idx}
											className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
