export type SpreadSection = {
  key: string;
  title: string;
  content: string;
};

export const SPREAD_SECTIONS: SpreadSection[] = [
  {
    key: "forex",
    title: "Forex",
    content:
      "Raw spreads from 0.0 pips on major pairs with competitive commissions and fast execution. Pricing is sourced from multiple venues for deep liquidity across sessions.",
  },
  {
    key: "commodities",
    title: "Commodities",
    content:
      "Institutional-like pricing on energy and metals with robust connectivity. Hedge portfolios or express macro views efficiently.",
  },
  {
    key: "indices",
    title: "Indices",
    content:
      "Tight pricing and flexible sizing on major global benchmarks such as US500, US30 and GER40.",
  },
  {
    key: "stocks",
    title: "Stocks",
    content:
      "Access popular equities with transparent costs and advanced platforms supporting active trading.",
  },
  {
    key: "crypto",
    title: "Crypto",
    content:
      "Trade popular digital assets via CFDs without managing wallets, with prudent risk controls.",
  },
];
