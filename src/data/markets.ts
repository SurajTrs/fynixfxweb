export type Stat = { label: string; value: string; meter?: number };
export type Market = {
  key: string;
  icon?: string; // simple emoji/icon placeholder
  title: string;
  blurb: string;
  points?: string[]; // additional content bullets
  stats: Stat[];
  cta?: { label: string; href: string };
  links?: { label: string; href: string }[]; // extra inline actions
  popular?: string; // popular account name
};

export const MARKETS: Market[] = [
  {
    key: "forex",
    icon: "💱",
    title: "Forex CFD",
    blurb:
      "Access the world’s most liquid financial market with institutional‑grade pricing and deep, multi‑venue liquidity. Benefit from raw spreads from 0.0 pips, low latency execution typically under 40ms, and a robust infrastructure engineered for consistency across trading sessions.",
    stats: [
      { label: "Pairs", value: "60+", meter: 85 },
      { label: "Spread", value: "from 0.0", meter: 95 },
      { label: "Exec Speed", value: "< 40ms", meter: 90 },
    ],
    points: [
      "Trade major, minor and exotic currency pairs 24/5",
      "Low‑latency connectivity and reliable fills during peak sessions",
      "Tight raw spreads with competitive commissions",
      "Supports scalping, hedging and algorithmic strategies",
    ],
    cta: { label: "View Forex", href: "/products/forex" },
    links: [
      { label: "See our Spreads", href: "/pricing/spreads" },
      { label: "Download Product Details", href: "/products/forex#details" },
    ],
    popular: "Raw Spread",
  },
  {
    key: "indices",
    icon: "📈",
    title: "Indices CFD",
    blurb:
      "Gain diversified exposure to global equity markets through leading index CFDs. Trade major benchmarks around the clock with competitive costs, fast execution during peak liquidity, and flexible position sizing designed to suit a broad range of strategies.",
    stats: [
      { label: "Markets", value: "20+", meter: 70 },
      { label: "Spread", value: "low", meter: 75 },
      { label: "Min Trade", value: "micro", meter: 65 },
    ],
    points: [
      "Trade leading benchmarks such as US30, US500, GER40 and more",
      "Tight pricing and fast execution across sessions",
      "Flexible position sizing for short‑term and swing strategies",
      "Extended trading hours on select indices",
    ],
    cta: { label: "View Indices", href: "/products/indices" },
    links: [
      { label: "See our Spreads", href: "/pricing/spreads#indices" },
      { label: "Download Product Details", href: "/products/indices#details" },
    ],
    popular: "Standard",
  },
  {
    key: "commodities",
    icon: "🛢️",
    title: "Commodities CFD",
    blurb:
      "Trade key commodity markets including energy, precious metals, and soft commodities with institutional‑grade pricing. Our deep liquidity and reliable connectivity help you manage risk efficiently while capturing opportunities across cycles and sessions.",
    stats: [
      { label: "Symbols", value: "30+", meter: 65 },
      { label: "Product", value: "Metals, Energy", meter: 60 },
      { label: "Exec Speed", value: "fast", meter: 80 },
    ],
    points: [
      "Access Gold, Silver, Oil and other key commodities",
      "Institutional‑like liquidity and robust connectivity",
      "Hedge portfolios or express macro views efficiently",
      "Transparent costs with powerful platforms",
    ],
    cta: { label: "View Commodities", href: "/products/commodities" },
    links: [
      { label: "See our Spreads", href: "/pricing/spreads#commodities" },
      { label: "Download Product Details", href: "/products/commodities#details" },
    ],
    popular: "Raw Spread",
  },
  {
    key: "stocks",
    icon: "🏦",
    title: "Stocks CFD",
    blurb:
      "Speculate on price movements of leading global companies with competitive margin requirements and transparent costs. Execute on professional platforms with advanced charting, watchlists, and order management designed for active traders.",
    stats: [
      { label: "Exchanges", value: "US, EU, AU", meter: 75 },
      { label: "Funding", value: "low", meter: 70 },
      { label: "Spreads", value: "sharp", meter: 72 },
    ],
    points: [
      "Speculate on popular US, EU and AU equities",
      "Benefit from competitive financing and costs",
      "Advanced charts, lists and order controls",
      "Diversify across sectors and geographies",
    ],
    cta: { label: "View Stocks", href: "/products/stocks" },
    links: [
      { label: "See our Spreads", href: "/pricing/spreads#stocks" },
      { label: "Download Product Details", href: "/products/stocks#details" },
    ],
    popular: "Raw Spread",
  },
  {
    key: "bonds",
    icon: "📊",
    title: "Bonds CFD",
    blurb:
      "Express macro views on interest rates and fixed‑income markets by trading government and note CFDs. Take advantage of flexible position sizing, extended market hours, and robust pricing sourced from multiple venues.",
    stats: [
      { label: "Symbols", value: "various", meter: 55 },
      { label: "Product", value: "Govt, Notes", meter: 50 },
      { label: "Hours", value: "extended", meter: 60 },
    ],
    points: [
      "Express rate views with government bond CFDs",
      "Flexible sizing suitable for hedging or speculation",
      "Extended hours access on select instruments",
      "Multi‑venue pricing for robust discovery",
    ],
    cta: { label: "View Bonds", href: "/products/bonds" },
    links: [
      { label: "See our Spreads", href: "/pricing/spreads#bonds" },
      { label: "Download Product Details", href: "/products/bonds#details" },
    ],
    popular: "Standard",
  },
  {
    key: "crypto",
    icon: "💡",
    title: "Cryptocurrency CFD",
    blurb:
      "Participate in digital asset price movements via crypto CFDs, without the need to hold underlying wallets. Trade popular instruments with competitive spreads, prudent risk controls, and seamless platform access.",
    stats: [
      { label: "Coins", value: "popular", meter: 68 },
      { label: "Funding", value: "varies", meter: 55 },
      { label: "Spread", value: "competitive", meter: 65 },
    ],
    points: [
      "Trade price moves of popular digital assets via CFDs",
      "No wallet management required",
      "Prudent risk controls and platform stability",
      "Responsive execution across sessions",
    ],
    cta: { label: "View Crypto", href: "/products/crypto" },
    links: [
      { label: "See our Spreads", href: "/pricing/spreads#crypto" },
      { label: "Download Product Details", href: "/products/crypto#details" },
    ],
    popular: "Raw Spread",
  },
  {
    key: "futures",
    icon: "⏱️",
    title: "Futures CFD",
    blurb:
      "Access futures market themes with the flexibility of CFDs and efficient capital usage. Diversify strategies across multiple asset classes while benefiting from competitive costs and reliable, fast execution.",
    stats: [
      { label: "Markets", value: "multiple", meter: 62 },
      { label: "Product", value: "varied", meter: 58 },
      { label: "Spread", value: "low", meter: 66 },
    ],
    points: [
      "Access futures themes with CFD flexibility",
      "Efficient capital usage and competitive costs",
      "Diversify strategies across asset classes",
      "Reliable execution with low latency",
    ],
    cta: { label: "View Futures", href: "/products/futures" },
    links: [
      { label: "See our Spreads", href: "/pricing/spreads#futures" },
      { label: "Download Product Details", href: "/products/futures#details" },
    ],
    popular: "Raw Spread",
  },
];
