"use client";
import PersonalizedCard from "@/components/PersonalizedCard";
import CycleIndicator from "@/components/CycleIndicator";
import ProgressTracker from "@/components/ProgressTracker";
import AIChatQuickAccess from "@/components/AIChatQuickAccess";
import RecommendationsCarousel from "@/components/RecommendationsCarousel";
import ActivityRecommendations from "@/components/ActivityRecommendations";
import Gamification from "@/components/Gamification";
import AIChat from "@/components/AIChat";
import AIChatModal from "@/components/AIChatModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 pb-20">
      <AIChatModal />
      <section className="max-w-6xl w-full mx-auto px-4 pt-12">
        <div className="grid grid-cols-3 gap-10 items-start">
          {/* Main column */}
          <div className="col-span-2 flex flex-col gap-8">
            <PersonalizedCard />
            <RecommendationsCarousel />
            <ActivityRecommendations />
          </div>
          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            <ProgressTracker />
            <Gamification />
            <AIChatQuickAccess />
          </div>
        </div>
      </section>
    </main>
  );
}
