"use client";

import Sidebar from "@/components/Sidebar";
import {
  kpis,
  salesData,
  categoryData,
  regionData,
  correlationData,
  dailyData,
  anomalies,
  radarData,
} from "@/data";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  ScatterChart,
  Scatter,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

function KPICard({
  label,
  value,
  delta,
  deltaType,
  color,
}: {
  label: string;
  value: string;
  delta: string;
  deltaType: "up" | "down" | "neutral";
  color: string;
}) {
  return (
    <div className={`glass p-4 kpi-card accent-${color}`}>
      <p className="text-[10px] text-[#8A8F98] uppercase tracking-wider mb-1.5 font-medium">{label}</p>
      <p className="text-xl font-bold font-[family-name:var(--font-mono)]">{value}</p>
      <div className="flex items-center gap-1 mt-1.5">
        {deltaType === "up" && <TrendingUp size={11} className="text-[#22C55E]" />}
        {deltaType === "down" && <TrendingDown size={11} className="text-[#EF4444]" />}
        {deltaType === "neutral" && <Minus size={11} className="text-[#8A8F98]" />}
        <span
          className={`text-[11px] font-semibold ${
            deltaType === "up" ? "text-[#22C55E]" : deltaType === "down" ? "text-[#EF4444]" : "text-[#8A8F98]"
          }`}
        >
          {delta}
        </span>
        <span className="text-[9px] text-[#555566] ml-1">vs prev</span>
      </div>
    </div>
  );
}

const tooltipStyle = {
  contentStyle: {
    background: "rgba(16, 16, 30, 0.95)",
    border: "1px solid rgba(94, 106, 210, 0.2)",
    borderRadius: "10px",
    fontSize: "11px",
    backdropFilter: "blur(10px)",
  },
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-orb w-96 h-96 bg-[#5E6AD2] top-[-10%] right-[-5%]" />
      <div className="bg-orb w-80 h-80 bg-[#3B82F6] bottom-[20%] left-[-10%]" />
      <Sidebar />

      <main className="flex-1 ml-56 p-6 relative z-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <div className="w-2 h-2 rounded-full bg-[#22C55E] pulse-live" />
              <span className="text-[10px] text-[#22C55E] font-semibold uppercase tracking-wider">
                6 Agents Active
              </span>
            </div>
            <h1 className="text-xl font-bold">Dashboard</h1>
            <p className="text-xs text-[#8A8F98] mt-0.5">
              E-Commerce Sales Analysis — Last 12 months
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="glass px-3 py-2 text-xs font-medium flex items-center gap-2 hover:border-[rgba(94,106,210,0.3)] transition-all cursor-pointer">
              <BarChart3 size={13} />
              Export
            </button>
            <button className="px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-[#5E6AD2] to-[#3B82F6] text-white flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer">
              Re-analyze
            </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {kpis.map((kpi) => (
            <KPICard key={kpi.label} {...kpi} />
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Revenue Area Chart */}
          <div className="chart-container">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold">Revenue Trend</h3>
                <p className="text-[10px] text-[#8A8F98]">Monthly revenue — 12 month view</p>
              </div>
              <span className="badge badge-success">+18.2%</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5E6AD2" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#5E6AD2" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(94,106,210,0.06)" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#555566" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#555566" }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}K`} />
                <Tooltip {...tooltipStyle} />
                <Area type="monotone" dataKey="revenue" stroke="#5E6AD2" strokeWidth={2} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Orders Bar Chart */}
          <div className="chart-container">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold">Orders & Customers</h3>
                <p className="text-[10px] text-[#8A8F98]">Monthly orders vs unique customers</p>
              </div>
              <span className="badge badge-info">+14.7%</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(94,106,210,0.06)" />
                <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#555566" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "#555566" }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="orders" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="customers" fill="#22C55E" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Scatter / Correlation */}
          <div className="chart-container">
            <div className="mb-4">
              <h3 className="text-sm font-semibold">Ad Spend vs Revenue</h3>
              <p className="text-[10px] text-[#8A8F98]">Correlation: r = 0.82 (strong)</p>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(94,106,210,0.06)" />
                <XAxis dataKey="x" name="Ad Spend" tick={{ fontSize: 9, fill: "#555566" }} axisLine={false} tickLine={false} />
                <YAxis dataKey="y" name="Revenue" tick={{ fontSize: 9, fill: "#555566" }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Scatter data={correlationData} fill="#8B5CF6" fillOpacity={0.7}>
                  {correlationData.map((_, i) => (
                    <Cell key={i} fill={i > 8 ? "#F43F5E" : "#8B5CF6"} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Category breakdown */}
          <div className="chart-container">
            <div className="mb-4">
              <h3 className="text-sm font-semibold">Category Revenue</h3>
              <p className="text-[10px] text-[#8A8F98]">Revenue distribution by category</p>
            </div>
            <div className="space-y-3">
              {categoryData.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                      <span className="text-xs">{cat.name}</span>
                    </div>
                    <span className="text-xs font-[family-name:var(--font-mono)] text-[#8A8F98]">
                      ${(cat.revenue / 1000).toFixed(0)}K
                    </span>
                  </div>
                  <div className="stat-bar">
                    <div
                      className="stat-bar-fill"
                      style={{
                        width: `${cat.value}%`,
                        background: cat.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Radar */}
          <div className="chart-container">
            <div className="mb-4">
              <h3 className="text-sm font-semibold">Performance Radar</h3>
              <p className="text-[10px] text-[#8A8F98]">Current vs industry benchmark</p>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(94,106,210,0.1)" />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 9, fill: "#8A8F98" }} />
                <PolarRadiusAxis tick={false} axisLine={false} />
                <Radar name="Current" dataKey="current" stroke="#5E6AD2" fill="#5E6AD2" fillOpacity={0.2} />
                <Radar name="Benchmark" dataKey="benchmark" stroke="#8A8F98" fill="#8A8F98" fillOpacity={0.1} />
                <Tooltip {...tooltipStyle} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 3: Daily trend + Anomalies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Daily trend */}
          <div className="lg:col-span-2 chart-container">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold">Daily Revenue (30 days)</h3>
                <p className="text-[10px] text-[#8A8F98]">Granular daily view with trend line</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(94,106,210,0.06)" />
                <XAxis dataKey="day" tick={{ fontSize: 8, fill: "#555566" }} axisLine={false} tickLine={false} interval={4} />
                <YAxis tick={{ fontSize: 9, fill: "#555566" }} axisLine={false} tickLine={false} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="revenue" stroke="#5E6AD2" strokeWidth={1.5} dot={false} />
                <Line type="monotone" dataKey="visitors" stroke="#22C55E" strokeWidth={1} dot={false} strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Anomalies */}
          <div className="chart-container">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle size={14} className="text-[#F59E0B]" />
              <h3 className="text-sm font-semibold">Anomalies</h3>
              <span className="ml-auto badge badge-warning">{anomalies.length}</span>
            </div>
            <div className="space-y-3">
              {anomalies.map((a, i) => (
                <div key={i} className="p-3 rounded-lg bg-[rgba(245,158,11,0.04)] border border-[rgba(245,158,11,0.1)]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold">{a.metric}</span>
                    <span className={`badge ${a.severity === "critical" ? "badge-danger" : a.severity === "high" ? "badge-warning" : "badge-info"}`}>
                      {a.severity}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-[#8A8F98]">
                    <span>{a.date}</span>
                    <span>•</span>
                    <span>{a.value}</span>
                    <span className="text-[#EF4444]">({a.deviation})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
