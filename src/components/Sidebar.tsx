"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Upload,
  Lightbulb,
  Bot,
  BarChart3,
  Settings,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/upload", label: "Upload", icon: Upload },
  { href: "/insights", label: "Insights", icon: Lightbulb },
  { href: "/agents", label: "Agents", icon: Bot },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-56 flex flex-col border-r border-[rgba(94,106,210,0.1)] bg-[rgba(6,6,12,0.98)] z-50">
      {/* Logo */}
      <div className="px-5 py-5 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#5E6AD2] to-[#3B82F6] flex items-center justify-center">
            <BarChart3 size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">DataLens</h1>
            <p className="text-[9px] text-[#555566] tracking-wider uppercase">
              AI Analysis
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-item ${isActive ? "active" : ""}`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.label === "Insights" && (
                  <span className="ml-auto text-[9px] bg-[rgba(245,158,11,0.1)] text-[#F59E0B] px-1.5 py-0.5 rounded font-semibold">
                    6
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Dataset info */}
      <div className="px-4 py-3 border-t border-[rgba(94,106,210,0.1)]">
        <p className="text-[9px] text-[#555566] uppercase tracking-wider mb-2">Current Dataset</p>
        <div className="glass p-3">
          <p className="text-xs font-semibold">ecommerce_sales.csv</p>
          <div className="flex items-center gap-3 mt-1.5 text-[10px] text-[#8A8F98]">
            <span>12,480 rows</span>
            <span>•</span>
            <span>8 columns</span>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E] pulse-live" />
            <span className="text-[9px] text-[#22C55E] font-medium">Analyzed</span>
          </div>
        </div>
      </div>

      {/* MiMo Badge */}
      <div className="px-4 py-3 border-t border-[rgba(94,106,210,0.1)]">
        <div className="text-center">
          <p className="text-[8px] text-[#555566] uppercase tracking-wider">Powered by</p>
          <p className="text-[11px] font-bold text-[#5E6AD2]">Xiaomi MiMo V2.5</p>
          <p className="text-[8px] text-[#555566]">12.2B tokens/day</p>
        </div>
      </div>
    </aside>
  );
}
