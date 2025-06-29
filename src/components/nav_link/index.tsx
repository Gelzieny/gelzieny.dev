"use client";

import Link from "next/link";
import React, { ElementType } from "react";

import "@/styles/header.css";

interface NavLinkProps {
	href: string;
	icon: ElementType;
	text: string;
	isActive?: boolean;
	onClick?: () => void;
}

export function NavLink({
	href,
	icon: Icon,
	text,
	isActive,
	onClick,
}: NavLinkProps) {
	return (
		<li className="nav__item">
			<Link
				href={href}
				className={`nav__link ${isActive ? "active-link" : ""}`}
				onClick={onClick}
			>
				<Icon className="nav__icon" />
				{text}
			</Link>
		</li>
	);
}
