"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="border-t border-border/40 bg-card/50 backdrop-blur">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					{/* Company */}
					<div>
						<div className="mb-4 transition-opacity hover:opacity-80">
							<Image
								src="/logo.png"
								alt="PELVIN Technologies"
								width={140}
								height={40}
								className="h-8 w-auto object-contain"
								style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))" }}
							/>
						</div>
						<p className="text-sm text-muted-foreground">
							Transforming ideas into digital reality with innovative software
							solutions that drive business growth.
						</p>
					</div>
					{/* Services */}
					<div>
						<h3 className="font-semibold mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#services"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Web Development
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Mobile Apps
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Cloud Solutions
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									AI Integration
								</Link>
							</li>
						</ul>
					</div>
					{/* Company Links */}
					<div>
						<h3 className="font-semibold mb-4">Company</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#team"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Team
								</Link>
							</li>
							<li>
								<Link
									href="#portfolio"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Portfolio
								</Link>
							</li>
							<li>
								<Link
									href="#process"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Process
								</Link>
							</li>
							<li>
								<Link
									href="#"
									className="text-sm text-muted-foreground hover:text-foreground transition-colors"
								>
									Blog
								</Link>
							</li>
						</ul>
					</div>
					{/* Contact */}
					<div>
						<h3 className="font-semibold mb-4">Connect With Us</h3>
						<div className="flex gap-3 mb-4 flex-wrap">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
								aria-label="Facebook"
							>
								<svg
									role="img"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-labelledby="title-facebook"
								>
									<title id="title-facebook">Facebook</title>
									<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
								</svg>
							</a>
							<a
								href="https://x.com"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
								aria-label="X"
							>
								<svg
									role="img"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-labelledby="title-x"
								>
									<title id="title-x">X</title>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
								aria-label="LinkedIn"
							>
								<svg
									role="img"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-labelledby="title-linkedin"
								>
									<title id="title-linkedin">LinkedIn</title>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.838 0-9.753h3.554v1.381c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.394 3.745 4.389v5.591zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.71 0-.959.79-1.71 1.951-1.71 1.159 0 1.918.751 1.92 1.71 0 .952-.761 1.71-1.956 1.71zm1.946 11.02H3.39V9.695h3.893v10.758zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
								</svg>
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
								aria-label="Instagram"
							>
								<svg
									role="img"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-labelledby="title-instagram"
								>
									<title id="title-instagram">Instagram</title>
									<rect
										x="2"
										y="2"
										width="20"
										height="20"
										rx="5"
										ry="5"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<path
										d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
								</svg>
							</a>
						</div>
						<p className="text-sm text-muted-foreground">info@pelvin.com</p>
					</div>
				</div>
				{/* Divider */}
				<div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© {currentYear} PELVIN Technologies. All rights reserved.
					</p>
					<div className="flex gap-6">
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="#"
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
