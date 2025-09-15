export type Tutorial = {
  id: string;
  title: string;
  duration: string;
  category: "Platform Setup" | "Order Types" | "Risk Management" | "Strategy Basics" | "Tools";
  thumbnail: string; // path in public/
  url: string; // external or internal
  tags?: string[];
};

export const TUTORIALS: Tutorial[] = [
  {
    id: "mt-setup",
    title: "MetaTrader setup in 3 minutes",
    duration: "3:12",
    category: "Platform Setup",
    thumbnail: "/Ios.png",
    url: "https://www.youtube.com/@MetaQuotesOfficial",
    tags: ["metatrader", "platform"],
  },
  {
    id: "tv-connect",
    title: "Connect your account to TradingView",
    duration: "4:05",
    category: "Platform Setup",
    thumbnail: "/GooglePlay.png",
    url: "https://www.youtube.com/@tradingview",
    tags: ["tradingview", "platform"],
  },
  {
    id: "order-types",
    title: "Market, limit and stop orders explained",
    duration: "5:40",
    category: "Order Types",
    thumbnail: "/commonbg.png",
    url: "https://www.youtube.com/@cTrader/videos",
    tags: ["orders", "execution"],
  },
  {
    id: "risk-1",
    title: "Position sizing and stop placement",
    duration: "6:21",
    category: "Risk Management",
    thumbnail: "/commonbg.png",
    url: "https://www.youtube.com/@tradingview/videos",
    tags: ["risk", "position-sizing"],
  },
  {
    id: "strategy-basics",
    title: "Build a simple session playbook",
    duration: "7:10",
    category: "Strategy Basics",
    thumbnail: "/commonbg.png",
    url: "https://www.youtube.com/@tradingview/videos",
    tags: ["strategy", "playbook"],
  },
  {
    id: "ctrader-setup",
    title: "cTrader platform quick start",
    duration: "3:45",
    category: "Platform Setup",
    thumbnail: "/commonbg.png",
    url: "https://www.youtube.com/@cTrader/videos",
    tags: ["ctrader", "platform"],
  },
  {
    id: "mt-order-panel",
    title: "Place orders on MetaTrader",
    duration: "4:32",
    category: "Order Types",
    thumbnail: "/commonbg.png",
    url: "https://www.youtube.com/@MetaQuotesOfficial/videos",
    tags: ["metatrader", "orders"],
  },
  {
    id: "tv-alerts",
    title: "Create alerts on TradingView",
    duration: "3:58",
    category: "Tools",
    thumbnail: "/commonbg.png",
    url: "https://www.youtube.com/@tradingview/videos",
    tags: ["tradingview", "alerts"],
  },
];
