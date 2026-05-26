"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<motion.button
			onClick={scrollToTop}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
			transition={{ duration: 0.3 }}
			className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 z-40"
			aria-label="Back to top"
		>
			<ArrowUp size={24} />
		</motion.button>
	);
}
