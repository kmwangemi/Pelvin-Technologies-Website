"use client";

import { motion } from "framer-motion";

const team = [
	{
		name: "Sarah Johnson",
		role: "CEO & Founder",
		bio: "Tech visionary with 10+ years of software development experience.",
		initials: "SJ",
	},
	{
		name: "Michael Chen",
		role: "Chief Technology Officer",
		bio: "Full-stack architect passionate about scalable solutions.",
		initials: "MC",
	},
	{
		name: "Emma Rodriguez",
		role: "Head of Design",
		bio: "UX/UI specialist focused on creating intuitive experiences.",
		initials: "ER",
	},
];

export function TeamSection() {
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
		<section id="team" className="py-20 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Team</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Talented professionals dedicated to your success
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{team.map((member, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.2 } }}
							className="group rounded-2xl border border-border/40 bg-background overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
						>
							{/* Avatar */}
							<div className="h-32 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center relative overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
								<div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
									{member.initials}
								</div>
							</div>

							{/* Content */}
							<div className="p-6">
								<h3 className="text-xl font-bold mb-1">{member.name}</h3>
								<p className="text-sm text-primary font-semibold mb-3">
									{member.role}
								</p>
								<p className="text-sm text-muted-foreground">{member.bio}</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
