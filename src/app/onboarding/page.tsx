"use client";
import OnboardingFlow from "@/components/OnboardingFlow";

export default function OnboardingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-50 px-4">
      <div className="max-w-lg w-full">
        <OnboardingFlow />
      </div>
    </main>
  );
} 