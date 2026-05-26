'use client'

import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export function TopHeader() {
  return (
    <div className="hidden md:block border-b border-border/40 bg-secondary/5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between text-sm">
          {/* Left - Contact Info */}
          <div className="flex items-center gap-6">
            <Link
              href="tel:+254103905745"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone size={14} />
              <span>+254 103 905 745</span>
            </Link>
            <Link
              href="mailto:info@pelvin.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={14} />
              <span>info@pelvin.com</span>
            </Link>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" role="img" aria-labelledby="facebookTitle">
                <title id="facebookTitle">Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" role="img" aria-labelledby="twitterTitle">
                <title id="twitterTitle">Twitter</title>
                <path d="M23.953 4.57a10 10 0 002.856-3.915 9.964 9.964 0 01-2.824.856 4.482 4.482 0 00-7.674 3.078c0 .355.042.696.122 1.027A12.75 12.75 0 012.7 3.557a4.482 4.482 0 001.386 5.985 4.466 4.466 0 01-2.03-.556v.056a4.482 4.482 0 003.597 4.387 4.484 4.484 0 01-2.026.077 4.483 4.483 0 004.188 3.112 8.987 8.987 0 01-6.642 2.212 12.74 12.74 0 006.96 2.042c8.35 0 12.905-6.922 12.905-12.905 0-.196-.004-.392-.015-.586a9.236 9.236 0 002.269-2.365z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" role="img" aria-labelledby="linkedinTitle">
                <title id="linkedinTitle">LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.838 0-9.753h3.554v1.381c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.394 3.745 4.389v5.591zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.71 0-.959.79-1.71 1.951-1.71 1.159 0 1.918.751 1.92 1.71 0 .952-.761 1.71-1.956 1.71zm1.946 11.02H3.39V9.695h3.893v10.758zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" role="img" aria-labelledby="instagramTitle">
                <title id="instagramTitle">Instagram</title>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </Link>
            <Link
              href="mailto:info@pelvin.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
