"use client";

import { useEffect, useState } from "react";
import { FaRegImages } from "react-icons/fa6";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaRegFileAlt, FaTimes } from "react-icons/fa";
import { IoHome, IoPerson, IoMail } from "react-icons/io5";

import "@/styles/header.css";
import { NavLink } from "../nav_link";

const navItems = [
	{ icon: IoHome, label: "Home", href: "#home" },
	{ icon: IoPerson, label: "Sobre", href: "#about" },
	{ icon: FaRegFileAlt, label: "Skills", href: "#skills" },
	{ icon: FaRegImages, label: "Portfólio", href: "#portfolio" },
	{ icon: IoMail, label: "Contato", href: "#contact" },
];

export function Header() {
	const [activeLink, setActiveLink] = useState<string>("");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems
				.map((item) => document.getElementById(item.href.substring(1)))
				.filter(Boolean);

			const scrollY = window.scrollY;

			let currentActive = "";
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && scrollY >= section.offsetTop - 100) {
					currentActive = `#${section.id}`;
					break;
				}
			}

			if (!currentActive && scrollY < 100 && navItems.length > 0) {
				currentActive = navItems[0].href;
			}

			setActiveLink((prevActiveLink) => {
				if (currentActive !== prevActiveLink) {
					return currentActive;
				}
				return prevActiveLink;
			});
		};

		const handleHashChange = () => {
			const hash =
				window.location.hash || (navItems.length > 0 ? navItems[0].href : "");

			setActiveLink((prevActiveLink) => {
				if (hash !== prevActiveLink) {
					return hash;
				}
				return prevActiveLink;
			});
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("hashchange", handleHashChange);

		handleScroll();
		handleHashChange();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("hashchange", handleHashChange);
		};
	}, []);

	return (
		<header className="header">
			<nav className="container nav">
				<a href="index.html" className="nav__logo">
					Gelzieny.dev
				</a>

				<div className={isMenuOpen ? "nav__menu show-menu" : "nav__menu"}>
					<ul className="nav__list grid">
						{navItems.map((item) => (
							<NavLink
								key={item.href}
								href={item.href}
								icon={item.icon}
								text={item.label}
								isActive={item.href === activeLink}
								onClick={() => setIsMenuOpen(false)} // Close menu on link click
							/>
						))}
					</ul>

					<FaTimes
						className="nav__close"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					/>
				</div>

				<div className="nav__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<AiOutlineAppstore className="nav__icon" />
				</div>
			</nav>
		</header>
	);
}
