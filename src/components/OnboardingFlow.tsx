"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

type OnboardingFormData = {
  goals: string[];
  fitnessLevel: string;
  workoutTypes: string[];
  cycleTracking: string;
  sleepStress: string;
};

const QUESTIONS = [
  {
    name: "goals" as const,
    label: "What are your primary wellness goals?",
    type: "checkbox" as const,
    options: ["Fitness", "Nutrition", "Mental Health", "Cycle Tracking"],
  },
  {
    name: "fitnessLevel" as const,
    label: "What is your current activity level?",
    type: "radio" as const,
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    name: "workoutTypes" as const,
    label: "Preferred workout types?",
    type: "checkbox" as const,
    options: ["Yoga", "HIIT", "Running", "Strength", "Pilates"],
  },
  {
    name: "cycleTracking" as const,
    label: "Do you use a cycle tracking app?",
    type: "radio" as const,
    options: ["Eve", "Flo", "Apple Health", "None"],
  },
  {
    name: "sleepStress" as const,
    label: "Are you interested in sleep or stress management?",
    type: "radio" as const,
    options: ["Sleep", "Stress", "Both", "Neither"],
  },
];

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const { control, handleSubmit } = useForm<OnboardingFormData>({
    defaultValues: {
      goals: [],
      fitnessLevel: "",
      workoutTypes: [],
      cycleTracking: "",
      sleepStress: "",
    },
  });

  const onNext = () => setStep((s) => Math.min(s + 1, QUESTIONS.length - 1));
  const onBack = () => setStep((s) => Math.max(s - 1, 0));
  const onFinish = (data: OnboardingFormData) => {
    alert("Onboarding complete!\n" + JSON.stringify(data, null, 2));
  };

  const question = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;
  const isFirst = step === 0;

  return (
    <form
      onSubmit={handleSubmit(onFinish)}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-8"
    >
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-neutral-400">Step {step + 1} of {QUESTIONS.length}</span>
          <span className="text-sm text-pink-400 font-semibold">{Math.round(((step + 1) / QUESTIONS.length) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden">
          <motion.div
            className="h-2 bg-pink-400"
            initial={{ width: 0 }}
            animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>
      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.name}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <label className="block text-lg font-semibold text-neutral-900 mb-2">
            {question.label}
          </label>
          <Controller
            control={control}
            name={question.name}
            render={({ field }) => {
              if (question.type === "checkbox") {
                const value = Array.isArray(field.value) ? field.value : [];
                return (
                  <div className="flex flex-wrap gap-3">
                    {question.options.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`px-4 py-2 rounded-full border transition-all font-medium text-sm ${value.includes(opt) ? "bg-sage-400 text-white border-sage-400" : "bg-sage-50 text-sage-500 border-sage-200"}`}
                        onClick={() => {
                          if (value.includes(opt)) {
                            field.onChange(value.filter((v) => v !== opt));
                          } else {
                            field.onChange([...value, opt]);
                          }
                        }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                );
              }
              if (question.type === "radio") {
                return (
                  <div className="flex flex-wrap gap-3">
                    {question.options.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`px-4 py-2 rounded-full border transition-all font-medium text-sm ${field.value === opt ? "bg-sage-400 text-white border-sage-400" : "bg-sage-50 text-sage-500 border-sage-200"}`}
                        onClick={() => field.onChange(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                );
              }
              // fallback for unsupported types
              return <></>;
            }}
          />
        </motion.div>
      </AnimatePresence>
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center pt-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirst}
          className="px-6 py-3 rounded-full bg-neutral-300 text-neutral-500 font-bold text-base disabled:opacity-50"
        >
          Back
        </button>
        {isLast ? (
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-pink-500 text-white font-bold text-base shadow-lg hover:bg-pink-600 transition-all"
          >
            Finish
          </button>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="px-8 py-3 rounded-full bg-sage-500 text-white font-bold text-base shadow-lg hover:bg-sage-600 transition-all"
          >
            Next
          </button>
        )}
      </div>
    </form>
  );
} 