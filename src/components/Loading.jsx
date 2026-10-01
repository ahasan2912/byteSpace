import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Zap,
  Layers,
  Activity,
} from "lucide-react";

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    { title: "Initializing Quantum Core", icon: Cpu, detail: "Encrypting session keys & memory allocations" },
    { title: "Connecting Edge Mesh", icon: Globe, detail: "Establishing high-speed CDN handshake" },
    { title: "Syncing User Preferences", icon: Layers, detail: "Loading personalized workspace modules" },
    { title: "Verifying Security Tokens", icon: ShieldCheck, detail: "Zero-Trust authentication active" },
    { title: "Finalizing Workspace", icon: Zap, detail: "Rendering interface elements..." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          if (onComplete) {
            // Delay komiye 150ms kora hoyeche jate fast finish hoy
            setTimeout(onComplete, 150);
          }
          return 100;
        }

        // Increment barano hoyeche (10% - 20% per tick)
        const diff = Math.random() * 10 + 10;
        const nextProgress = Math.min(prevProgress + diff, 100);

        const stepThreshold = 100 / steps.length;
        const calculatedStep = Math.min(
          Math.floor(nextProgress / stepThreshold),
          steps.length - 1
        );

        setCurrentStepIndex(calculatedStep);

        return nextProgress;
      });
    }, 100); // Interval komiye 100ms kora hoyeche

    return () => clearInterval(timer);
  }, [steps.length, onComplete]);

  const CurrentIcon = steps[currentStepIndex]?.icon || Cpu;

  return (
    <div className="relative w-full min-h-screen bg-[#0338E3] font-sans select-none overflow-hidden flex flex-col justify-between p-6 sm:p-10 text-white">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "97.6px 97.6px",
          backgroundPosition: "center top",
        }}
      />

      {/* Main Center Loading Card Container */}
      <main className="relative z-10 my-auto w-full max-w-xl mx-auto py-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <div className="absolute -inset-3 rounded-full bg-linear-to-r from-cyan-400 to-indigo-500 opacity-30 blur-md animate-pulse" />

            <div className="relative w-24 h-24 rounded-full p-0.5 bg-linear-to-tr from-white/80 via-cyan-300/30 to-white/10">
              <div className="w-full h-full rounded-full bg-[#032eb9] flex items-center justify-center relative overflow-hidden backdrop-blur-md">
                <CurrentIcon className="w-10 h-10 text-cyan-300 transition-all duration-300 transform scale-110" />
                <div className="absolute top-0 right-0 w-12 h-12 bg-white/10 rounded-full blur-sm" />
              </div>
            </div>

            <div className="absolute -bottom-1 -right-1 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] tracking-wider uppercase shadow-md flex items-center gap-1 border border-emerald-300/40">
              <Activity className="w-3 h-3 animate-pulse" />
              {Math.round(progress)}%
            </div>
          </div>

          <h3 className="text-xl font-semibold text-cyan-200 mb-1">
            {steps[currentStepIndex]?.title}
          </h3>
          <p className="text-xs text-blue-200/70 mb-6 max-w-sm">
            {steps[currentStepIndex]?.detail}
          </p>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-6 font-mono">
            {Math.round(progress)}
            <span className="text-cyan-300 text-2xl font-sans font-light ml-1">%</span>
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="relative w-full h-3 bg-black/20 rounded-full p-0.5 overflow-hidden border border-white/10 backdrop-blur-sm">
            <div
              className="h-full rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-300 transition-all duration-150 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-white rounded-full blur-[2px] shadow-[0_0_12px_#ffffff]" />
            </div>
          </div>

          <div className="flex justify-between items-center text-[11px] text-blue-200/60 font-mono tracking-wider pt-1">
            <span>STATUS: INITIALIZING</span>
            <span>EST. TIME: ~1s</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Loading;