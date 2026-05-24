export const agents = [
  { name: "Profiler", icon: "🔍", role: "Data Profiler", desc: "Auto-detect column types, data quality, distributions, missing values", tokens: "2.6B/day", color: "#3B82F6" },
  { name: "Visualizer", icon: "📊", role: "Chart Generator", desc: "Select optimal chart types, generate visualizations, layout optimization", tokens: "2.4B/day", color: "#22C55E" },
  { name: "Anomaly", icon: "⚡", role: "Anomaly Detector", desc: "Statistical outlier detection, pattern deviation, z-score analysis", tokens: "2.1B/day", color: "#F59E0B" },
  { name: "Trend", icon: "📈", role: "Trend Analyzer", desc: "Time-series analysis, moving averages, seasonal decomposition", tokens: "1.9B/day", color: "#8B5CF6" },
  { name: "Correlation", icon: "🔗", role: "Correlation Engine", desc: "Pearson/Spearman correlation, feature importance, multicollinearity", tokens: "1.7B/day", color: "#F43F5E" },
  { name: "Reporter", icon: "📝", role: "Insight Reporter", desc: "Natural language summaries, executive reports, actionable insights", tokens: "1.5B/day", color: "#06B6D4" },
];

// Mock dataset: E-commerce sales
export const salesData = [
  { month: "Jan", revenue: 42000, orders: 320, customers: 280, avgOrder: 131 },
  { month: "Feb", revenue: 38000, orders: 290, customers: 250, avgOrder: 131 },
  { month: "Mar", revenue: 55000, orders: 410, customers: 360, avgOrder: 134 },
  { month: "Apr", revenue: 48000, orders: 380, customers: 320, avgOrder: 126 },
  { month: "May", revenue: 62000, orders: 470, customers: 400, avgOrder: 132 },
  { month: "Jun", revenue: 71000, orders: 520, customers: 450, avgOrder: 137 },
  { month: "Jul", revenue: 68000, orders: 500, customers: 430, avgOrder: 136 },
  { month: "Aug", revenue: 75000, orders: 560, customers: 480, avgOrder: 134 },
  { month: "Sep", revenue: 82000, orders: 610, customers: 520, avgOrder: 134 },
  { month: "Oct", revenue: 91000, orders: 680, customers: 580, avgOrder: 134 },
  { month: "Nov", revenue: 105000, orders: 780, customers: 660, avgOrder: 135 },
  { month: "Dec", revenue: 120000, orders: 890, customers: 750, avgOrder: 135 },
];

export const categoryData = [
  { name: "Electronics", value: 35, revenue: 285000, color: "#3B82F6" },
  { name: "Clothing", value: 25, revenue: 203000, color: "#22C55E" },
  { name: "Home & Garden", value: 18, revenue: 146000, color: "#F59E0B" },
  { name: "Sports", value: 12, revenue: 98000, color: "#8B5CF6" },
  { name: "Books", value: 10, revenue: 81000, color: "#F43F5E" },
];

export const regionData = [
  { region: "North America", users: 12400, revenue: 420000, growth: 12.5 },
  { region: "Europe", users: 9800, revenue: 340000, growth: 8.3 },
  { region: "Asia Pacific", users: 15200, revenue: 510000, growth: 22.1 },
  { region: "Latin America", users: 4300, revenue: 120000, growth: 15.7 },
  { region: "Middle East", users: 2100, revenue: 68000, growth: 31.2 },
];

export const correlationData = [
  { x: 120, y: 85, z: 45, name: "Jan" },
  { x: 150, y: 92, z: 52, name: "Feb" },
  { x: 180, y: 78, z: 61, name: "Mar" },
  { x: 200, y: 110, z: 58, name: "Apr" },
  { x: 240, y: 125, z: 72, name: "May" },
  { x: 280, y: 140, z: 68, name: "Jun" },
  { x: 310, y: 155, z: 85, name: "Jul" },
  { x: 350, y: 162, z: 92, name: "Aug" },
  { x: 380, y: 175, z: 98, name: "Sep" },
  { x: 420, y: 190, z: 105, name: "Oct" },
  { x: 480, y: 210, z: 118, name: "Nov" },
  { x: 520, y: 230, z: 130, name: "Dec" },
];

export const dailyData = Array.from({ length: 30 }, (_, i) => ({
  day: `Day ${i + 1}`,
  revenue: 3000 + Math.floor(Math.random() * 2000) + (i * 50),
  orders: 25 + Math.floor(Math.random() * 15) + Math.floor(i * 0.5),
  visitors: 200 + Math.floor(Math.random() * 100) + (i * 3),
}));

export const kpis = [
  { label: "Total Revenue", value: "$857K", delta: "+18.2%", deltaType: "up" as const, color: "blue" },
  { label: "Total Orders", value: "6,410", delta: "+14.7%", deltaType: "up" as const, color: "green" },
  { label: "Unique Customers", value: "4,980", delta: "+21.3%", deltaType: "up" as const, color: "purple" },
  { label: "Avg Order Value", value: "$133.7", delta: "+2.1%", deltaType: "up" as const, color: "amber" },
  { label: "Conversion Rate", value: "3.8%", delta: "-0.2%", deltaType: "down" as const, color: "rose" },
  { label: "Churn Rate", value: "4.2%", delta: "-1.1%", deltaType: "up" as const, color: "cyan" },
];

export const anomalies = [
  { metric: "Revenue", date: "Nov 15", value: "$18,200", expected: "$12,400", deviation: "+46.8%", severity: "high" },
  { metric: "Orders", date: "Dec 3", value: "142", expected: "98", deviation: "+44.9%", severity: "high" },
  { metric: "Bounce Rate", date: "Oct 22", value: "68%", expected: "42%", deviation: "+61.9%", severity: "critical" },
  { metric: "Cart Abandon", date: "Sep 8", value: "82%", expected: "68%", deviation: "+20.6%", severity: "medium" },
];

export const insights = [
  { type: "trend-up", title: "Revenue Growth Accelerating", desc: "Month-over-month revenue growth increased from 8% to 15% in Q4. Holiday season driving stronger than expected performance.", agent: "Trend", confidence: 94 },
  { type: "anomaly", title: "Unusual Traffic Spike Detected", desc: "Nov 15 traffic was 3.2x normal levels. Source: viral social media post. Conversion rate held steady at 3.6%.", agent: "Anomaly", confidence: 89 },
  { type: "correlation", title: "Email Campaigns Drive Revenue", desc: "Strong positive correlation (r=0.82) between email send frequency and weekly revenue. Recommend increasing cadence.", agent: "Correlation", confidence: 91 },
  { type: "trend-up", title: "Asia Pacific Outperforming", desc: "APAC region showing 22.1% growth vs 12.5% global average. Mobile-first strategy paying off.", agent: "Trend", confidence: 96 },
  { type: "trend-down", title: "Clothing Category Declining", desc: "Clothing revenue declined 8% MoM while other categories grew. Seasonal shift to winter items slower than expected.", agent: "Trend", confidence: 87 },
  { type: "anomaly", title: "Cart Abandonment Spike", desc: "Oct 22 bounce rate jumped to 68%. Likely caused by checkout page loading issues during peak hours.", agent: "Anomaly", confidence: 92 },
];

export const columns = [
  { name: "date", type: "datetime", nulls: 0, unique: 365, sample: "2024-01-15" },
  { name: "revenue", type: "numeric", nulls: 12, unique: 340, sample: "4,280.50" },
  { name: "orders", type: "numeric", nulls: 0, unique: 89, sample: "34" },
  { name: "category", type: "categorical", nulls: 5, unique: 8, sample: "Electronics" },
  { name: "region", type: "categorical", nulls: 0, unique: 5, sample: "North America" },
  { name: "customer_id", type: "identifier", nulls: 0, unique: 4980, sample: "C-10234" },
  { name: "discount_pct", type: "numeric", nulls: 156, unique: 20, sample: "15%" },
  { name: "channel", type: "categorical", nulls: 0, unique: 4, sample: "Organic" },
];

export const radarData = [
  { metric: "Revenue", current: 85, benchmark: 70 },
  { metric: "Growth", current: 92, benchmark: 65 },
  { metric: "Retention", current: 78, benchmark: 80 },
  { metric: "Acquisition", current: 65, benchmark: 60 },
  { metric: "Satisfaction", current: 88, benchmark: 75 },
  { metric: "Efficiency", current: 71, benchmark: 72 },
];
