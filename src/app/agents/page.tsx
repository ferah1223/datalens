"use client";

import Sidebar from "@/components/Sidebar";
import { agents } from "@/data";
import { Bot, Activity } from "lucide-react";

export default function AgentsPage() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-orb w-80 h-80 bg-[#8B5CF6] bottom-[-5%] right-[-5%]" />
      <Sidebar />

      <main className="flex-1 ml-56 p-6 relative z-10">
        <header className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Bot size={14} className="text-[#5E6AD2]" />
            <span className="text-[10px] text-[#5E6AD2] font-semibold uppercase tracking-wider">
              Analysis Agents
            </span>
          </div>
          <h1 className="text-xl font-bold">AI Agents</h1>
          <p className="text-xs text-[#8A8F98] mt-0.5">
            6 specialized agents — {agents.reduce((s, a) => s + parseFloat(a.tokens), 0).toFixed(1)}B tokens/day
          </p>
        </header>

        {/* Status bar */}
        <div className="glass p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity size={14} className="text-[#22C55E]" />
            <span className="text-xs text-[#8A8F98]">All 6 agents active</span>
          </div>
          <span className="text-xs font-[family-name:var(--font-mono)] text-[#5E6AD2]">12.2B tokens/day</span>
        </div>

        {/* Agent grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {agents.map((agent) => (
            <div key={agent.name} className="glass p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: `${agent.color}12`, border: `1px solid ${agent.color}25` }}
                  >
                    {agent.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{agent.name}</h3>
                    <p className="text-[10px] text-[#8A8F98] uppercase tracking-wider">{agent.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] pulse-live" />
                  <span className="text-[9px] text-[#22C55E] font-semibold">Active</span>
                </div>
              </div>

              <p className="text-xs text-[#8A8F98] mb-4 leading-relaxed">{agent.desc}</p>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-[family-name:var(--font-mono)]" style={{ color: agent.color }}>
                  {agent.tokens}
                </span>
                <div className="stat-bar" style={{ width: 80 }}>
                  <div
                    className="stat-bar-fill"
                    style={{
                      width: `${(parseFloat(agent.tokens) / 2.6) * 100}%`,
                      background: agent.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture */}
        <div className="glass p-5 mt-6">
          <h3 className="text-sm font-semibold mb-4">Agent Pipeline</h3>
          <pre className="font-[family-name:var(--font-mono)] text-[11px] text-[#8A8F98] leading-relaxed overflow-x-auto whitespace-pre">
{`  ┌──────────┐     ┌──────────┐     ┌──────────┐
  │ Profiler │────▶│Visualizer│────▶│ Reporter │
  │ (2.6B)   │     │ (2.4B)   │     │ (1.5B)   │
  └────┬─────┘     └──────────┘     └──────────┘
       │
  ┌────▼─────┐     ┌──────────┐     ┌──────────┐
  │ Anomaly  │────▶│  Trend   │────▶│Correlate │
  │ (2.1B)   │     │ (1.9B)   │     │ (1.7B)   │
  └──────────┘     └──────────┘     └──────────┘`}
          </pre>
        </div>
      </main>
    </div>
  );
}
