"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function LocationMapSection() {
	return (
		<section id="location" className="w-full">
			{/* Map Container */}
			<div className="relative w-full h-96 sm:h-[500px] lg:h-[600px]">
				<iframe
					width="100%"
					height="100%"
					style={{ border: 0 }}
					loading="lazy"
					allowFullScreen
					referrerPolicy="no-referrer-when-downgrade"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.82405314922!2d36.79199!3d-1.27089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1724c3e4e0ad%3A0x5c7c6e3f4d8f9e0a!2s90%20James%20Gichuru%20Road%2C%20Lavington%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1234567890"
					title="PELVIN Technologies Location - Nairobi"
				/>

				{/* Location Info Card */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="absolute top-6 left-6 bg-white dark:bg-card rounded-xl shadow-xl p-6 max-w-sm border border-border/40 backdrop-blur-sm"
				>
					<div className="flex items-start gap-3">
						<div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
							<MapPin className="w-5 h-5 text-primary" />
						</div>
						<div>
							<h3 className="font-semibold text-lg mb-1">Our Location</h3>
							<p className="text-sm text-muted-foreground mb-3">
								Visit us at our Nairobi office
							</p>
							<p className="text-sm font-medium text-foreground">
								90 James Gichuru Road
								<br />
								Lavington, Nairobi, Kenya
							</p>
							<a
								href="https://maps.google.com/?q=90+James+Gichuru+Road+Lavington+Nairobi"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block mt-4 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
							>
								Get Directions →
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
