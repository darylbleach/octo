"use client";
import { Dumbbell, Salad, ShoppingBag, User } from "lucide-react";

const tabs = [
  { name: "Activities", icon: Dumbbell, href: "/" },
  { name: "Nutrition", icon: Salad, href: "/nutrition" },
  { name: "Marketplace", icon: ShoppingBag, href: "/marketplace" },
  { name: "Profile", icon: User, href: "/profile" },
];

export default function BottomNavigation() {
  // For now, mock 'Activities' as active
  const active = "/";
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 shadow-lg z-50">
      <ul className="flex justify-around items-center h-16">
        {tabs.map((tab) => (
          <li key={tab.name}>
            <a
              href={tab.href}
              className={`flex flex-col items-center text-xs font-medium transition-colors ${active === tab.href ? "text-pink-500" : "text-neutral-400"}`}
            >
              <tab.icon size={24} />
              {tab.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 