"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BottomNavigation from "./BottomNavigation";

export default function ConditionalBottomNavigation() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything until component is mounted on client
  if (!mounted) {
    return null;
  }
  
  // Hide bottom navigation on onboarding page
  if (pathname === "/onboarding") {
    return null;
  }
  
  return <BottomNavigation />;
} 