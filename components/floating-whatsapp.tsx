"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingWhatsApp() {
	const [isOpen, setIsOpen] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	useEffect(() => {
		setIsMounted(true);
	}, []);
	if (!isMounted) return null;
	return (
		<div className="fixed bottom-24 right-8 z-30">
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, y: 20 }}
						transition={{ duration: 0.3 }}
						className="absolute bottom-20 right-0 w-80 bg-white dark:bg-card rounded-2xl shadow-2xl border border-border/40 overflow-hidden"
					>
						{/* Header */}
						<div className="bg-linear-to-r from-green-500 to-green-600 px-6 py-4">
							<h3 className="text-white font-semibold">Chat with PELVIN</h3>
							<p className="text-green-100 text-sm">
								We usually reply within minutes
							</p>
						</div>
						{/* Content */}
						<div className="p-6 space-y-4">
							<p className="text-sm text-muted-foreground">
								Hi! Have questions about our services? Chat with us directly on
								WhatsApp.
							</p>
							<a
								href="https://wa.me/254706612976?text=Hello%20PELVIN%20Technologies%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
								target="_blank"
								rel="noopener noreferrer"
								className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
							>
								<MessageCircle size={20} />
								Start Chat
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			{/* Floating Button */}
			<motion.button
				onClick={() => setIsOpen(!isOpen)}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				className="relative w-14 h-14 bg-linear-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-white group cursor-pointer"
			>
				<AnimatePresence>
					{isOpen ? (
						<motion.div
							key="close"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<X size={24} />
						</motion.div>
					) : (
						<motion.div
							key="whatsapp"
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<MessageCircle size={24} fill="currentColor" />
						</motion.div>
					)}
				</AnimatePresence>
				{/* Pulsing indicator */}
				<span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-30" />
			</motion.button>
		</div>
	);
}
