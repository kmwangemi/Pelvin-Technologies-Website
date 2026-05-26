"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	phone: z.string().optional(),
	company: z.string().optional(),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
	{
		icon: Mail,
		label: "Email",
		value: "info@pelvin.com",
		href: "mailto:info@pelvin.com",
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+254 103 905 745",
		href: "tel:+254103905745",
	},
	{
		icon: MapPin,
		label: "Address",
		value: "90 James Gichuru Road, Lavington, Nairobi",
		href: "#",
	},
];

export function ContactSection() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			console.log("Form data:", data);
			toast.success("Message sent successfully! We&apos;ll be in touch soon.");
			reset();
		} catch (_error) {
			toast.error("Failed to send message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

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
		<section id="contact" className="py-20 sm:py-32 bg-card/30 backdrop-blur">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Have a project in mind? Let&apos;s discuss how we can help transform
						your business
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{/* Contact info and map */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="space-y-6"
					>
						{contactInfo.map((info, index) => {
							const Icon = info.icon;
							return (
								<motion.a
									key={index}
									variants={itemVariants}
									href={info.href}
									className="group flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-background hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
								>
									<div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
										<Icon className="w-6 h-6 text-primary" />
									</div>
									<div>
										<p className="font-semibold text-sm">{info.label}</p>
										<p className="text-foreground">{info.value}</p>
									</div>
								</motion.a>
							);
						})}

						{/* Availability */}
						<motion.div
							variants={itemVariants}
							className="p-6 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10"
						>
							<h3 className="font-semibold mb-2">Business Hours</h3>
							<p className="text-sm text-muted-foreground">
								Monday - Friday: 9:00 AM - 6:00 PM <br />
								Saturday - Sunday: Closed
							</p>
						</motion.div>
					</motion.div>

					{/* Contact form */}
					<motion.form
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true, margin: "-100px" }}
						onSubmit={handleSubmit(onSubmit)}
						className="lg:col-span-2 rounded-2xl border border-border/40 bg-background p-8 space-y-6"
					>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{/* Name */}
							<div>
								<label className="block text-sm font-semibold mb-2">Name</label>
								<input
									{...register("name")}
									type="text"
									placeholder="Your name"
									className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
								/>
								{errors.name && (
									<p className="text-sm text-red-500 mt-1">
										{errors.name.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div>
								<label className="block text-sm font-semibold mb-2">
									Email
								</label>
								<input
									{...register("email")}
									type="email"
									placeholder="your@email.com"
									className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
								/>
								{errors.email && (
									<p className="text-sm text-red-500 mt-1">
										{errors.email.message}
									</p>
								)}
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{/* Phone */}
							<div>
								<label className="block text-sm font-semibold mb-2">
									Phone (optional)
								</label>
								<input
									{...register("phone")}
									type="tel"
									placeholder="+254 102 705 645"
									className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
								/>
							</div>

							{/* Company */}
							<div>
								<label className="block text-sm font-semibold mb-2">
									Company (optional)
								</label>
								<input
									{...register("company")}
									type="text"
									placeholder="Your company"
									className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
								/>
							</div>
						</div>

						{/* Message */}
						<div>
							<label className="block text-sm font-semibold mb-2">
								Message
							</label>
							<textarea
								{...register("message")}
								placeholder="Tell us about your project..."
								rows={5}
								className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
							/>
							{errors.message && (
								<p className="text-sm text-red-500 mt-1">
									{errors.message.message}
								</p>
							)}
						</div>

						{/* Submit button */}
						<Button
							type="submit"
							disabled={isSubmitting}
							className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
						>
							{isSubmitting ? "Sending..." : "Send Message"}
							<Send className="ml-2" size={18} />
						</Button>
					</motion.form>
				</div>
			</div>
		</section>
	);
}
