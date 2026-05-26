"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
	{
		name: "Amina Wanjiru",
		company: "Savanna Tech Solutions",
		content:
			"Working with this team was a game-changer for our business. They built us a seamless platform that automated our entire operations. The attention to detail and post-launch support has been exceptional.",
		rating: 5,
	},
	{
		name: "Kwame Mensah",
		company: "Accra Digital Hub",
		content:
			"I was blown away by the quality of work delivered. They took our rough idea and turned it into a world-class product. Our user engagement has increased by over 300% since launch.",
		rating: 5,
	},
	{
		name: "Fatima Okonkwo",
		company: "Lagos Fintech Group",
		content:
			"From discovery to deployment, the process was smooth and transparent. They understood the unique challenges of building for the African market and delivered a solution that truly resonates with our users.",
		rating: 5,
	},
	{
		name: "Tendai Moyo",
		company: "Harare Innovation Labs",
		content:
			"The AI integration they built for our platform cut our customer response time by 70%. The team is incredibly skilled and genuinely invested in your success — not just the delivery.",
		rating: 5,
	},
	{
		name: "Nala Dlamini",
		company: "Cape Town Creative Studio",
		content:
			"They delivered on time, on budget, and beyond expectation. What impressed me most was how they challenged our assumptions and proposed smarter solutions we hadn't even considered.",
		rating: 5,
	},
];

export function TestimonialsSection() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const next = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};
	const prev = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length,
		);
	};
	const currentTestimonial = testimonials[currentIndex];
	return (
		<section
			id="testimonials"
			className="py-20 sm:py-32 bg-card/30 backdrop-blur"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">
						What Our Clients Say
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Real feedback from satisfied customers around the world
					</p>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
					className="max-w-3xl mx-auto"
				>
					{/* Testimonial card */}
					<div className="relative rounded-2xl border border-primary/30 bg-linear-to-br from-primary/5 to-secondary/5 p-8 sm:p-12 shadow-lg shadow-primary/20">
						{/* Quote mark */}
						<div className="absolute -top-6 -left-6 text-6xl text-primary/20 font-serif">
							&ldquo;
						</div>
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.5 }}
							className="relative z-10 space-y-6"
						>
							{/* Rating */}
							<div className="flex gap-1">
								{[...Array(currentTestimonial.rating)].map((_, i) => (
									<Star
										key={i}
										size={20}
										className="fill-primary text-primary"
									/>
								))}
							</div>
							{/* Content */}
							<p className="text-xl text-foreground italic leading-relaxed">
								{currentTestimonial.content}
							</p>
							{/* Author */}
							<div className="flex items-center gap-4 pt-6">
								<div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
									{currentTestimonial.name.charAt(0)}
								</div>
								<div>
									<p className="font-semibold text-foreground">
										{currentTestimonial.name}
									</p>
									<p className="text-sm text-muted-foreground">
										{currentTestimonial.company}
									</p>
								</div>
							</div>
						</motion.div>
					</div>
					{/* Navigation */}
					<div className="flex items-center justify-center gap-4 mt-8">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={prev}
							className="p-3 rounded-full border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
						>
							<ChevronLeft size={24} />
						</motion.button>
						{/* Indicators */}
						<div className="flex gap-2">
							{testimonials.map((_, index) => (
								<motion.button
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
										index === currentIndex ? "bg-primary w-6" : "bg-border"
									}`}
									whileHover={{ scale: 1.2 }}
								/>
							))}
						</div>
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							onClick={next}
							className="p-3 rounded-full border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
						>
							<ChevronRight size={24} />
						</motion.button>
					</div>
					{/* Counter */}
					<div className="text-center mt-8">
						<p className="text-sm text-muted-foreground">
							{currentIndex + 1} / {testimonials.length}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
