"use client";

import Sidebar from "@/components/Sidebar";
import { columns } from "@/data";
import { Upload, FileSpreadsheet, Database, CheckCircle, AlertCircle } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-orb w-80 h-80 bg-[#22C55E] top-[-5%] right-[10%]" />
      <Sidebar />

      <main className="flex-1 ml-56 p-6 relative z-10">
        <header className="mb-6">
          <h1 className="text-xl font-bold">Upload Dataset</h1>
          <p className="text-xs text-[#8A8F98] mt-0.5">
            Upload CSV or JSON — AI agents will auto-analyze your data
          </p>
        </header>

        {/* Dropzone */}
        <div className="dropzone mb-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-[rgba(94,106,210,0.1)] flex items-center justify-center mb-4">
              <Upload size={28} className="text-[#5E6AD2]" />
            </div>
            <p className="text-sm font-semibold mb-1">Drop your file here</p>
            <p className="text-xs text-[#8A8F98] mb-4">or click to browse — CSV, JSON, XLSX supported</p>
            <button className="px-5 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-[#5E6AD2] to-[#3B82F6] text-white cursor-pointer hover:opacity-90 transition-all">
              Browse Files
            </button>
          </div>
        </div>

        {/* Current Dataset */}
        <div className="glass p-5 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[rgba(94,106,210,0.1)] flex items-center justify-center">
              <FileSpreadsheet size={18} className="text-[#5E6AD2]" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">ecommerce_sales.csv</h3>
              <p className="text-[10px] text-[#8A8F98]">Uploaded 2 hours ago — 2.4 MB</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <CheckCircle size={14} className="text-[#22C55E]" />
              <span className="text-[10px] text-[#22C55E] font-semibold">Analyzed</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            <div className="p-3 rounded-lg bg-[rgba(94,106,210,0.04)] border border-[rgba(94,106,210,0.08)]">
              <p className="text-[9px] text-[#555566] uppercase">Rows</p>
              <p className="text-lg font-bold font-[family-name:var(--font-mono)]">12,480</p>
            </div>
            <div className="p-3 rounded-lg bg-[rgba(94,106,210,0.04)] border border-[rgba(94,106,210,0.08)]">
              <p className="text-[9px] text-[#555566] uppercase">Columns</p>
              <p className="text-lg font-bold font-[family-name:var(--font-mono)]">8</p>
            </div>
            <div className="p-3 rounded-lg bg-[rgba(94,106,210,0.04)] border border-[rgba(94,106,210,0.08)]">
              <p className="text-[9px] text-[#555566] uppercase">Missing</p>
              <p className="text-lg font-bold font-[family-name:var(--font-mono)] text-[#F59E0B]">173</p>
            </div>
            <div className="p-3 rounded-lg bg-[rgba(94,106,210,0.04)] border border-[rgba(94,106,210,0.08)]">
              <p className="text-[9px] text-[#555566] uppercase">Quality</p>
              <p className="text-lg font-bold font-[family-name:var(--font-mono)] text-[#22C55E]">94%</p>
            </div>
          </div>

          {/* Column Profiler */}
          <h4 className="text-xs font-semibold mb-3 flex items-center gap-2">
            <Database size={13} />
            Column Profile (Profiler Agent)
          </h4>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Type</th>
                  <th>Nulls</th>
                  <th>Unique</th>
                  <th>Sample</th>
                  <th>Quality</th>
                </tr>
              </thead>
              <tbody>
                {columns.map((col) => (
                  <tr key={col.name}>
                    <td>
                      <span className="font-[family-name:var(--font-mono)] text-xs font-semibold">
                        {col.name}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${
                        col.type === "numeric" ? "badge-info" :
                        col.type === "categorical" ? "badge-purple" :
                        col.type === "datetime" ? "badge-success" :
                        "badge-warning"
                      }`}>
                        {col.type}
                      </span>
                    </td>
                    <td className="font-[family-name:var(--font-mono)] text-xs">
                      {col.nulls === 0 ? (
                        <span className="text-[#22C55E]">0</span>
                      ) : (
                        <span className="text-[#F59E0B]">{col.nulls}</span>
                      )}
                    </td>
                    <td className="font-[family-name:var(--font-mono)] text-xs">{col.unique.toLocaleString()}</td>
                    <td className="font-[family-name:var(--font-mono)] text-[11px] text-[#8A8F98]">{col.sample}</td>
                    <td>
                      <div className="stat-bar" style={{ width: 60 }}>
                        <div
                          className="stat-bar-fill"
                          style={{
                            width: `${col.nulls === 0 ? 100 : Math.max(60, 100 - col.nulls)}%`,
                            background: col.nulls === 0 ? "#22C55E" : "#F59E0B",
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Agent Analysis Summary */}
        <div className="glass p-5">
          <h4 className="text-xs font-semibold mb-4">Agent Analysis Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { agent: "Profiler", status: "complete", findings: "8 columns profiled, 3 numeric, 3 categorical, 1 datetime, 1 identifier" },
              { agent: "Anomaly", status: "complete", findings: "4 anomalies detected — 1 critical, 2 high, 1 medium severity" },
              { agent: "Correlation", status: "complete", findings: "Strong correlation found: ad_spend ↔ revenue (r=0.82)" },
            ].map((a) => (
              <div key={a.agent} className="p-3 rounded-lg bg-[rgba(34,197,94,0.04)] border border-[rgba(34,197,94,0.1)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold">{a.agent}</span>
                  <CheckCircle size={12} className="text-[#22C55E]" />
                </div>
                <p className="text-[11px] text-[#8A8F98]">{a.findings}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
