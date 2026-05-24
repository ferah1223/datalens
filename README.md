# DataLens

> **Powered by Xiaomi MiMo V2.5** — AI Data Analysis Platform

![DataLens Dashboard](public/ss-dashboard.png)

![DataLens Dashboard](public/ss-dashboard.png)

![DataLens](https://img.shields.io/badge/DataLens-AI%20Data%20Analysis-5E6AD2?style=for-the-badge&logo=barchart)
![MiMo](https://img.shields.io/badge/Powered%20by-Xiaomi%20MiMo%20V2.5-orange?style=for-the-badge)
![Agents](https://img.shields.io/badge/Agents-6%20Active-22C55E?style=for-the-badge)
![Tokens](https://img.shields.io/badge/Tokens-12.2B%2FDay-F59E0B?style=for-the-badge)

---

## 🔍 What is DataLens?

DataLens is an AI-powered data analysis platform. Upload a CSV and 6 AI agents instantly analyze your data — profiling columns, detecting anomalies, finding correlations, spotting trends, and generating natural language insights.

No manual analysis needed.

## 🏗️ Agent Pipeline

```
  ┌──────────┐     ┌──────────┐     ┌──────────┐
  │ Profiler │────▶│Visualizer│────▶│ Reporter │
  │ (2.6B)   │     │ (2.4B)   │     │ (1.5B)   │
  └────┬─────┘     └──────────┘     └──────────┘
       │
  ┌────▼─────┐     ┌──────────┐     ┌──────────┐
  │ Anomaly  │────▶│  Trend   │────▶│Correlate │
  │ (2.1B)   │     │ (1.9B)   │     │ (1.7B)   │
  └──────────┘     └──────────┘     └──────────┘
```

## 🤖 The 6 Agents

| Agent | Role | Description | Tokens/Day |
|-------|------|-------------|------------|
| 🔍 Profiler | Data Profiler | Auto-detect column types, data quality, distributions | 2.6B |
| 📊 Visualizer | Chart Generator | Select optimal chart types, generate visualizations | 2.4B |
| ⚡ Anomaly | Anomaly Detector | Statistical outlier detection, z-score analysis | 2.1B |
| 📈 Trend | Trend Analyzer | Time-series analysis, seasonal decomposition | 1.9B |
| 🔗 Correlation | Correlation Engine | Pearson/Spearman correlation, feature importance | 1.7B |
| 📝 Reporter | Insight Reporter | Natural language summaries, executive reports | 1.5B |

**Total: ~12.2B tokens/day**

## 📊 Dashboard Features

- **6 KPI Cards** — Revenue, Orders, Customers, AOV, Conversion, Churn
- **Revenue Area Chart** — 12-month trend with gradient fill
- **Orders Bar Chart** — Monthly orders vs customers comparison
- **Scatter Plot** — Ad spend vs revenue correlation (r=0.82)
- **Category Breakdown** — Revenue distribution with progress bars
- **Radar Chart** — Performance vs industry benchmark
- **Daily Line Chart** — 30-day granular revenue + visitors
- **Anomaly Panel** — 4 detected anomalies with severity badges

## 📄 Pages

| Page | Description |
|------|-------------|
| Dashboard | KPIs, 6 chart types, anomaly detection |
| Upload | Drag-and-drop CSV upload, column profiler |
| Insights | AI-generated findings with confidence scores |
| Agents | The 6 analysis agents and pipeline |

## 🛠️ Tech Stack

- **Frontend:** Next.js 16, React 19, Tailwind CSS 4
- **Charts:** Recharts (area, bar, line, scatter, radar)
- **Typography:** Fira Sans + Fira Code
- **Icons:** Lucide React
- **Design:** Glassmorphism dark theme (Data-Dense Dashboard style)
- **Style Guide:** UI/UX Pro Max skill — accessibility, responsive, WCAG AA

## 🚀 Quick Start

```bash
git clone https://github.com/ferah1223/datalens.git
cd datalens
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📜 License

MIT

---

<div align="center">

**⚡ Powered by Xiaomi MiMo V2.5**

</div>
