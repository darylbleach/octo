"use client";
import { useState } from "react";
import { Menu, X, Dumbbell, Salad, ShoppingBag, User } from "lucide-react";

const navLinks = [
  { name: "Activities", icon: Dumbbell, href: "/" },
  { name: "Nutrition", icon: Salad, href: "/nutrition" },
  { name: "Marketplace", icon: ShoppingBag, href: "/marketplace" },
  { name: "Profile", icon: User, href: "/profile" },
];

function TopNavigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white border-b border-neutral-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-pink-500 tracking-tight">Wellness</span>
        </div>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="flex items-center gap-2 text-lg font-medium text-neutral-700 hover:text-pink-500 transition-colors">
                <link.icon size={20} />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile burger */}
        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Open menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-white border-b border-neutral-100 animate-fade-in">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="flex items-center gap-2 text-lg font-medium text-neutral-700 hover:text-pink-500 transition-colors py-2">
                <link.icon size={20} />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default TopNavigation; 