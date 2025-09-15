export type MenuItem = {
  label: string;
  href: string;
  badge?: "NEW" | "HOT" | "PRO" | string;
};

export type MenuColumn = {
  heading: string;
  items: MenuItem[];
};

export type MenuConfig = {
  promo?: {
    title: string;
    subtitle?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
  columns: MenuColumn[];
};

export const MEGA_MENU: Record<string, MenuConfig> = {
  Quickstart: {
    promo: {
      title: "Trade with a high-performance trading platform",
      subtitle:
        "Trade Indices, Shares, Commodities, and Crypto with lightning-fast execution and deep liquidity across global markets.",
      primaryCta: { label: "Start Trading", href: "/open-account" },
      secondaryCta: { label: "Try Free Demo", href: "/demo" },
    },
    columns: [
      {
        heading: "Introduction",
        items: [
          { label: "Why Fynixfx", href: "/why" },
          { label: "What you can trade", href: "/products" },
          { label: "Simple Pricing", href: "/pricing" },
          { label: "Forex Trading", href: "/forex" },
          { label: "Raw Trader Plus", href: "/raw-trader-plus", badge: "NEW" },
        ],
      },
      {
        heading: "Your Account",
        items: [
          { label: "Live Accounts", href: "/accounts/live" },
          { label: "Demo Accounts", href: "/accounts/demo" },
          { label: "How to deposit", href: "/help/deposit" },
          { label: "How to withdraw", href: "/help/withdraw" },
          { label: "Fynixfx Mobile App", href: "/apps/mobile" },
        ],
      },
      {
        heading: "Trading Platform",
        items: [
          { label: "MetaTrader", href: "/platforms/metatrader" },
          { label: "TradingView", href: "/platforms/tradingview", badge: "NEW" },
          { label: "cTrader", href: "/platforms/ctrader" },
          { label: "WebTrader", href: "/platforms/webtrader" },
          
        ],
      },
    ],
  },
  Trading: {
    promo: {
      title: "Access Global Markets with a Multi-Asset Trading Platform",
      primaryCta: { label: "Start Trading", href: "/open-account" },
      secondaryCta: { label: "Try Free Demo", href: "/demo" },
    },
    columns: [
      {
        heading: "Trading Accounts",
        items: [
          { label: "Accounts Overview", href: "/accounts/accounts" },
          { label: "Raw Spread", href: "/accounts/raw-spread" },
          { label: "Standard", href: "/accounts/standard" },
          { label: "How to deposit", href: "/help/deposit" },
          { label: "How to withdraw", href: "/help/withdraw" },
        ],
      },
      {
        heading: "Products",
        items: [
          { label: "Range of Products", href: "/products" },
          { label: "Forex CFDs", href: "/products/forex" },
          { label: "Commodities CFDs", href: "/products/commodities" },
          { label: "Indices CFDs", href: "/products/indices" },
          { label: "Bonds CFDs", href: "/products/bonds" },
          { label: "Digital currencies", href: "/products/crypto" },
          { label: "Stocks CFDs", href: "/products/stocks" },
          { label: "Futures CFDs", href: "/products/futures" },
        ],
      },
      {
        heading: "Pricing",
        items: [
          { label: "Trading Conditions", href: "/pricing/conditions" },
          { label: "Spreads", href: "/pricing/spreads" },
          
        ],
      },
    ],
  },
  Platforms: {
    promo: {
      title: "Trade from anywhere, on any device, at any time",
      primaryCta: { label: "Start Trading", href: "/open-account" },
      secondaryCta: { label: "Try Free Demo", href: "/demo" },
    },
    columns: [
      {
        heading: "MetaTrader 5 & 4",
        items: [
          { label: "MetaTrader 5", href: "/platforms/metatrader-5", badge: "RECOMMENDED" },
          { label: "MetaTrader 4", href: "/platforms/metatrader" },
          { label: "MetaTrader WebTrader", href: "/platforms/mt-web" },
          
        ],
      },
      {
        heading: "TradingView",
        items: [{ label: "TradingView", href: "/platforms/tradingview" }],
      },
    ],
  },
  More: {
    promo: {
      title: "Trade with a high-performance trading platform",
      primaryCta: { label: "Start Trading", href: "/open-account" },
      secondaryCta: { label: "Try Free Demo", href: "/demo" },
    },
    columns: [
      {
        heading: "Company",
        items: [
          { label: "About Fynixfx", href: "/company/about" },
          { label: "Why Fynixfx", href: "/why" },
          { label: "Contact Us", href: "/company/contact" },
        ],
      },
      {
        heading: "Education",
        items: [
          { label: "Education Overview", href: "/education" },
          { label: "Advantages of Forex", href: "/education/forex" },
          { label: "Advantages of CFDs", href: "/education/cfds" },
          { label: "Podcast", href: "/education/podcast", badge: "NEW" },
          { label: "Getting Started Tutorial Videos", href: "/education/tutorials" },
        ],
      },
      {
        heading: "Help & Resources",
        items: [
          { label: "Help Centre", href: "/help" },
          { label: "Forex Calculators", href: "/tools/calculators" },
          { label: "Economic Calendar", href: "/tools/calendar" },
          { label: "Forex Glossary", href: "/tools/glossary" },
          { label: "Cybersecurity and Scams", href: "/security/scams" },
        ],
      },
    ],
  },
};
