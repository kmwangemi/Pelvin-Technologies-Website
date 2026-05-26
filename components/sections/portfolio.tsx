"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
	{
		id: 1,
		title: "E-Commerce Platform",
		category: "Web",
		description:
			"Full-stack e-commerce solution with payment processing and inventory management.",
		tags: ["React", "Node.js", "PostgreSQL"],
		image: "/portfolio/ecommerce-platform.jpg",
		link: "https://example.com/ecommerce",
	},
	{
		id: 2,
		title: "Mobile Banking App",
		category: "Mobile",
		description:
			"Secure mobile banking application for iOS and Android with biometric authentication.",
		tags: ["React Native", "Firebase", "Security"],
		image: "/portfolio/mobile-banking.jpg",
		link: "https://example.com/banking",
	},
	{
		id: 3,
		title: "AI Analytics Dashboard",
		category: "AI",
		description:
			"Machine learning powered analytics platform with real-time insights.",
		tags: ["Python", "TensorFlow", "React"],
		image: "/portfolio/ai-analytics.jpg",
		link: "https://example.com/analytics",
	},
	{
		id: 4,
		title: "Cloud Migration",
		category: "Cloud",
		description:
			"Successfully migrated legacy enterprise systems to AWS with zero downtime.",
		tags: ["AWS", "Infrastructure", "DevOps"],
		image: "/portfolio/cloud-migration.jpg",
		link: "https://example.com/cloud",
	},
	{
		id: 5,
		title: "Real-time Collaboration Tool",
		category: "Web",
		description:
			"WebSocket-based real-time collaboration platform for remote teams.",
		tags: ["WebSockets", "Vue.js", "MongoDB"],
		image: "/portfolio/collaboration-tool.jpg",
		link: "https://example.com/collab",
	},
	{
		id: 6,
		title: "IoT Fleet Management",
		category: "Cloud",
		description:
			"Fleet tracking and management system with live GPS and reporting.",
		tags: ["IoT", "Google Cloud", "Node.js"],
		image: "/portfolio/fleet-management.jpg",
		link: "https://example.com/fleet",
	},
	{
		id: 7,
		title: "AI Chatbot Integration",
		category: "AI",
		description:
			"Intelligent customer support chatbot with natural language understanding.",
		tags: ["OpenAI", "Next.js", "TypeScript"],
		image: "/portfolio/ai-chatbot.jpg",
		link: "https://example.com/chatbot",
	},
	{
		id: 8,
		title: "Health Tracking App",
		category: "Mobile",
		description:
			"Personal health and fitness tracking app with wearable device integration.",
		tags: ["React Native", "HealthKit", "GraphQL"],
		image: "/portfolio/health-tracking.jpg",
		link: "https://example.com/health",
	},
	{
		id: 9,
		title: "SaaS CRM Platform",
		category: "Web",
		description:
			"Customer relationship management platform built for growing African businesses.",
		tags: ["Next.js", "Prisma", "PostgreSQL"],
		image: "/portfolio/crm-platform.jpg",
		link: "https://example.com/crm",
	},
];

const categories = ["All", "Web", "Mobile", "Cloud", "AI"];
const ITEMS_PER_PAGE = 6; // 2 rows × 3 columns

export function PortfolioSection() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [currentPage, setCurrentPage] = useState(0);

	const filteredProjects =
		selectedCategory === "All"
			? projects
			: projects.filter((p) => p.category === selectedCategory);

	const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
	const paginatedProjects = filteredProjects.slice(
		currentPage * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
	);

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		setCurrentPage(0);
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.1 },
		},
		exit: { opacity: 0 },
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
	};

	return (
		<section id="portfolio" className="py-20 sm:py-32 bg-card/30 backdrop-blur">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
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
							onClick={() => handleCategoryChange(category)}
							className={`cursor-pointer ${
								selectedCategory === category
									? "bg-primary text-primary-foreground"
									: ""
							}`}
						>
							{category}
						</Button>
					))}
				</motion.div>
				{/* Projects grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={`${selectedCategory}-${currentPage}`}
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-100"
					>
						{paginatedProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								className="group rounded-xl border border-border/40 bg-background overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
							>
								{/* Image */}
								<div className="h-44 relative overflow-hidden bg-linear-to-br from-primary/20 to-secondary/20">
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
										onError={(e) => {
											e.currentTarget.style.display = "none";
										}}
									/>
									{/* Fallback placeholder shown behind image */}
									<div className="absolute inset-0 flex items-center justify-center z-0">
										<span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
											{project.category.charAt(0)}
										</span>
									</div>
									{/* Hover overlay */}
									<div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-primary font-semibold text-sm hover:bg-white/90 transition-colors"
										>
											<ExternalLink size={16} />
											View Project
										</a>
									</div>
								</div>
								{/* Content */}
								<div className="p-6">
									<div className="flex items-start justify-between mb-2">
										<h3 className="text-lg font-bold group-hover:text-primary transition-colors">
											{project.title}
										</h3>
										<span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary shrink-0 ml-2">
											{project.category}
										</span>
									</div>
									<p className="text-sm text-muted-foreground mb-4">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
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
				</AnimatePresence>
				{/* Pagination */}
				{totalPages > 1 && (
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						className="flex items-center justify-center gap-4 mt-10"
					>
						<Button
							variant="outline"
							size="icon"
							onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
							disabled={currentPage === 0}
							aria-label="Previous page"
							className="p-3 rounded-full cursor-pointer"
						>
							<ChevronLeft size={18} />
						</Button>
						<div className="flex items-center gap-2">
							{Array.from({ length: totalPages }).map((_, i) => (
								<button
									type="button"
									key={i}
									onClick={() => setCurrentPage(i)}
									aria-label={`Go to page ${i + 1}`}
									className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
										currentPage === i
											? "bg-primary w-6"
											: "bg-muted-foreground/30 hover:bg-muted-foreground/60"
									}`}
								/>
							))}
						</div>
						<Button
							variant="outline"
							size="icon"
							onClick={() =>
								setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
							}
							disabled={currentPage === totalPages - 1}
							aria-label="Next page"
							className="p-3 rounded-full cursor-pointer"
						>
							<ChevronRight size={24} />
						</Button>
					</motion.div>
				)}
			</div>
		</section>
	);
}
