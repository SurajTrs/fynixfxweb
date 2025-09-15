export type Episode = {
  id: string;
  title: string;
  guest?: string;
  duration: string;
  published: string;
  summary: string;
  cover: string; // public path
  url: string; // external audio/video link
};

export const EPISODES: Episode[] = [
  {
    id: "silver-economy",
    title: "The Silver Economy: The Golden Era",
    guest: "Queenie Man",
    duration: "28:34",
    published: "2025-01-05",
    summary:
      "How demographic shifts shape consumption, innovation and capital markets over the coming decade.",
    cover: "/commonbg.png",
    url: "https://open.spotify.com/",
  },
  {
    id: "cyber-slam-dunk",
    title: "A Cyber Slam Dunk",
    duration: "24:12",
    published: "2024-12-12",
    summary: "Exploring the intersection of cybersecurity, data and market structure.",
    cover: "/commonbg.png",
    url: "https://podcasts.google.com/",
  },
  {
    id: "new-trade-tech",
    title: "The New Trade Tech",
    duration: "26:07",
    published: "2024-11-08",
    summary: "How execution, connectivity and tooling evolve to support active traders.",
    cover: "/commonbg.png",
    url: "https://music.apple.com/",
  },
  {
    id: "risk-in-focus",
    title: "Risk In Focus",
    duration: "31:20",
    published: "2024-10-02",
    summary: "Frameworks for risk management and decision hygiene in volatile markets.",
    cover: "/commonbg.png",
    url: "https://www.youtube.com/",
  },
  // Additional episodes (placeholders with real platform bases)
  { id: "ep-05", title: "Macro Themes for Q1", duration: "23:10", published: "2024-09-15", summary: "Setting the stage for the quarter ahead.", cover: "/commonbg.png", url: "https://open.spotify.com/" },
  { id: "ep-06", title: "Liquidity and Volatility", duration: "21:44", published: "2024-08-28", summary: "What drives spreads and fills.", cover: "/commonbg.png", url: "https://www.youtube.com/" },
  { id: "ep-07", title: "Session Playbooks", duration: "27:05", published: "2024-08-10", summary: "Structuring your day with intent.", cover: "/commonbg.png", url: "https://music.apple.com/" },
  { id: "ep-08", title: "Event Risk 101", duration: "19:53", published: "2024-07-22", summary: "Trading around news and data releases.", cover: "/commonbg.png", url: "https://podcasts.google.com/" },
  { id: "ep-09", title: "Patterns vs. Probabilities", duration: "29:02", published: "2024-07-01", summary: "Separating signal from noise.", cover: "/commonbg.png", url: "https://open.spotify.com/" },
  { id: "ep-10", title: "Risk Units & Sizing", duration: "25:11", published: "2024-06-14", summary: "Position sizing frameworks.", cover: "/commonbg.png", url: "https://www.youtube.com/" },
  { id: "ep-11", title: "Execution Quality", duration: "22:39", published: "2024-05-29", summary: "Routes, latencies and consistency.", cover: "/commonbg.png", url: "https://open.spotify.com/" },
  { id: "ep-12", title: "TradingView Playbook", duration: "24:06", published: "2024-05-10", summary: "Alerts, layouts and templates.", cover: "/commonbg.png", url: "https://www.youtube.com/" },
  { id: "ep-13", title: "MetaTrader Tips", duration: "18:45", published: "2024-04-20", summary: "Speed up your MT workflow.", cover: "/commonbg.png", url: "https://music.apple.com/" },
  { id: "ep-14", title: "cTrader Shortcuts", duration: "20:14", published: "2024-03-31", summary: "Efficiency on cTrader.", cover: "/commonbg.png", url: "https://podcasts.google.com/" },
  { id: "ep-15", title: "Journaling for Traders", duration: "28:18", published: "2024-03-11", summary: "Turning experience into edge.", cover: "/commonbg.png", url: "https://open.spotify.com/" },
  { id: "ep-16", title: "Psychology & Process", duration: "30:22", published: "2024-02-24", summary: "Staying process‑driven.", cover: "/commonbg.png", url: "https://www.youtube.com/" },
  { id: "ep-17", title: "Indices Deep Dive", duration: "26:35", published: "2024-02-03", summary: "Equity benchmarks explained.", cover: "/commonbg.png", url: "https://open.spotify.com/" },
  { id: "ep-18", title: "Commodities Outlook", duration: "22:57", published: "2024-01-18", summary: "Energy and metals themes.", cover: "/commonbg.png", url: "https://music.apple.com/" },
  { id: "ep-19", title: "FX Majors", duration: "24:44", published: "2023-12-30", summary: "What moves EURUSD, GBPUSD and USDJPY.", cover: "/commonbg.png", url: "https://podcasts.google.com/" },
  { id: "ep-20", title: "Crypto Narratives", duration: "21:28", published: "2023-12-08", summary: "Cycles, catalysts and caution.", cover: "/commonbg.png", url: "https://www.youtube.com/" },
  { id: "ep-21", title: "Bond Market Signals", duration: "23:01", published: "2023-11-19", summary: "Rates and macro implications.", cover: "/commonbg.png", url: "https://open.spotify.com/" },
  { id: "ep-22", title: "Position Management", duration: "25:59", published: "2023-11-01", summary: "Scaling in and out with intent.", cover: "/commonbg.png", url: "https://music.apple.com/" },
  { id: "ep-23", title: "Backtesting Basics", duration: "19:31", published: "2023-10-12", summary: "From idea to validation.", cover: "/commonbg.png", url: "https://podcasts.google.com/" },
  { id: "ep-24", title: "From Demo to Live", duration: "18:22", published: "2023-09-25", summary: "Bridging the gap.", cover: "/commonbg.png", url: "https://www.youtube.com/" },
  { id: "ep-25", title: "Building a Routine", duration: "20:17", published: "2023-09-05", summary: "Consistency compounds.", cover: "/commonbg.png", url: "https://open.spotify.com/" },
  { id: "ep-26", title: "Year in Review", duration: "27:41", published: "2023-08-18", summary: "Lessons and themes from the year.", cover: "/commonbg.png", url: "https://music.apple.com/" },
];
