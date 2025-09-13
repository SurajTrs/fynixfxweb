export type HeroConfig = {
  eyebrow: string;
  title: string;
  subtitle: string;
  bg: string; // background image path
};

export type AccordionItem = { key: string; title: string; content: string };

export type TableConfig = {
  title: string;
  description?: string;
  headers: string[];
  rows: string[][];
};

export type PricingCard = {
  title: string;
  price: string;
  unit: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const SPREADS_COMMISSIONS = {
  mt4: {
    title: "MetaTrader4 Raw Spread Commission Rates",
    baseCurrencies: [
      { key: "AUD", name: "Australian Dollar" },
      { key: "USD", name: "US Dollar" },
      { key: "EUR", name: "Euro" },
      { key: "GBP", name: "Pound Sterling" },
      { key: "SGD", name: "Singapore Dollar" },
      { key: "JPY", name: "Japanese Yen" },
      { key: "CHF", name: "Swiss Franc" },
      { key: "NZD", name: "New Zealand Dollar" },
      { key: "CAD", name: "Canadian Dollar" },
      { key: "HKD", name: "Hong Kong Dollar" },
    ],
    microLot: [
      { currency: "AUD", perSide: "AUD 0.045", roundTurn: "AUD 0.09" },
      { currency: "USD", perSide: "USD 0.035", roundTurn: "USD 0.07" },
      { currency: "EUR", perSide: "EUR 0.0325", roundTurn: "EUR 0.07" },
      { currency: "GBP", perSide: "GBP 0.0275", roundTurn: "GBP 0.06" },
      { currency: "SGD", perSide: "SGD 0.0475", roundTurn: "SGD 0.10" },
      { currency: "JPY", perSide: "JPY 5.5", roundTurn: "JPY 11" },
      { currency: "CHF", perSide: "CHF 0.033", roundTurn: "CHF 0.07" },
      { currency: "NZD", perSide: "NZD 0.06", roundTurn: "NZD 0.12" },
      { currency: "CAD", perSide: "CAD 0.0475", roundTurn: "CAD 0.10" },
      { currency: "HKD", perSide: "HKD 0.27125", roundTurn: "HKD 0.54" },
    ],
    standardLot: [
      { currency: "AUD", perSide: "AUD 4.5", roundTurn: "AUD 9.0" },
      { currency: "USD", perSide: "USD 3.50", roundTurn: "USD 7.0" },
      { currency: "EUR", perSide: "EUR 3.25", roundTurn: "EUR 6.5" },
      { currency: "GBP", perSide: "GBP 2.75", roundTurn: "GBP 5.5" },
      { currency: "SGD", perSide: "SGD 4.75", roundTurn: "SGD 9.5" },
      { currency: "JPY", perSide: "JPY 550", roundTurn: "JPY 1100" },
      { currency: "CHF", perSide: "CHF 3.30", roundTurn: "CHF 6.60" },
      { currency: "NZD", perSide: "NZD 6.0", roundTurn: "NZD 12.0" },
      { currency: "CAD", perSide: "CAD 4.75", roundTurn: "CAD 9.5" },
      { currency: "HKD", perSide: "HKD 27.125", roundTurn: "HKD 54.25" },
    ],
  },
  ctrader: {
    title: "cTrader and TradingView Commission Rates",
    description:
      "cTrader and TradingView commission is charged per side, per 100,000 USD traded and converted to the account base currency at the current spot rate.",
    example: {
      headers: [
        "Opening Price",
        "Closing Price",
        "Total Commission on Trade",
        "Calculation @ $3 USD per 100,000 USD",
      ],
      rows: [
        ["€100,000 x 1.3000 = USD $130,000", "€100,000 x 1.3100 = USD $131,000", "$7.83", "x (3 / 100,000)"],
        ["Commission on 1 lot EURUSD", "", "$7.83", ""],
      ],
    },
  },
};

export const SPREADS_HERO: HeroConfig = {
  eyebrow: "Pricing",
  title: "Spreads",
  subtitle:
    "Transparent pricing with raw spreads from 0.0 pips and low commissions across platforms.",
  bg: "/commonbg.png",
};

export const SPREADS_INTRO = {
  heading: "Transparent, low-cost pricing",
  body:
    "We offer raw spreads from 0.0 pips on popular instruments with competitive commissions across platforms. Our pricing is sourced from multiple liquidity venues to deliver consistent, fast execution throughout key sessions.",
};

export const SPREADS_ACCORDION: AccordionItem[] = [
  { key: "forex", title: "Forex", content: "Raw spreads from 0.0 pips on majors with low commissions and fast execution." },
  { key: "commodities", title: "Commodities", content: "Institutional-like pricing on energy and metals with robust connectivity." },
  { key: "indices", title: "Indices", content: "Tight pricing and flexible sizing on major global benchmarks." },
  { key: "stocks", title: "Stocks", content: "Access popular equities with transparent costs and strong platforms." },
  { key: "crypto", title: "Crypto", content: "Trade popular digital assets via CFDs without holding wallets." },
];

export const SPREADS_TABLES: TableConfig[] = [
  {
    title: "Forex — Raw vs Standard (Majors)",
    description:
      "Comparison of indicative minimum (MIN) and average (AVG) spreads for Raw Spread and Standard accounts on major FX pairs. MIN = Minimum, AVG = Average.",
    headers: ["SYMBOL", "DESCRIPTION", "MIN (Raw)", "AVG (Raw)", "MIN (Standard)", "AVG (Standard)"],
    rows: [
      ["AUDUSD", "Australian Dollar vs United States Dollar", "0", "0.03", "0.8", "0.83"],
      ["EURUSD", "Euro vs United States Dollar", "0", "0.02", "0.8", "0.82"],
      ["GBPUSD", "British Pound vs United States Dollar", "0", "0.23", "0.8", "1.03"],
      ["USDCAD", "United States Dollar vs Canadian Dollar", "0", "0.25", "0.8", "1.05"],
      ["USDCHF", "United States Dollar vs Swiss Franc", "0", "0.19", "0.8", "0.99"],
      ["USDJPY", "United States Dollar vs Japanese Yen", "0", "0.14", "0.8", "0.94"],
    ],
  },
  {
    title: "MetaTrader Raw Spread Commission Rates",
    description:
      "Representative commission schedule for MT4/MT5 Raw Spread accounts. Actual pricing may vary by instrument and region.",
    headers: ["Instrument", "Commission (Per Side)", "Commission (Round Turn)"],
    rows: [
      ["Major FX", "$3.00", "$6.00"],
      ["Minor FX", "$3.25", "$6.50"],
      ["Metals", "$3.50", "$7.00"],
    ],
  },
  {
    title: "cTrader and TradingView Commission Rates",
    description:
      "Indicative commission schedule for platforms other than MetaTrader. Check your platform for the latest rates.",
    headers: ["Instrument", "Commission (Per Side)", "Commission (Round Turn)"],
    rows: [
      ["Major FX", "$3.50", "$7.00"],
      ["Minor FX", "$3.75", "$7.50"],
      ["Metals", "$3.75", "$7.50"],
    ],
  },
  {
    title: "Forex — Raw vs Standard (Minors)",
    description:
      "Indicative minimum (MIN) and average (AVG) spreads for selected minor FX pairs.",
    headers: ["SYMBOL", "DESCRIPTION", "MIN (Raw)", "AVG (Raw)", "MIN (Standard)", "AVG (Standard)"],
    rows: [
      ["AUDCAD", "Australian Dollar vs Canadian Dollar", "0", "0.35", "1.2", "1.55"],
      ["AUDNZD", "Australian Dollar vs New Zealand Dollar", "0", "0.42", "1.3", "1.68"],
      ["EURNZD", "Euro vs New Zealand Dollar", "0", "0.58", "1.6", "2.05"],
    ],
  },
  {
    title: "Forex — Raw vs Standard (Exotics)",
    description:
      "Indicative minimum (MIN) and average (AVG) spreads for selected exotic FX pairs.",
    headers: ["SYMBOL", "DESCRIPTION", "MIN (Raw)", "AVG (Raw)", "MIN (Standard)", "AVG (Standard)"],
    rows: [
      ["USDTRY", "United States Dollar vs Turkish Lira", "0", "1.20", "2.5", "3.10"],
      ["USDZAR", "United States Dollar vs South African Rand", "0", "0.95", "2.2", "2.80"],
      ["USDMXN", "United States Dollar vs Mexican Peso", "0", "0.85", "2.0", "2.60"],
    ],
  },
  {
    title: "Indices — Raw vs Standard",
    description:
      "Indicative minimum (MIN) and average (AVG) spreads for major equity indices.",
    headers: ["SYMBOL", "DESCRIPTION", "MIN (Raw)", "AVG (Raw)", "MIN (Standard)", "AVG (Standard)"],
    rows: [
      ["US500", "S&P 500 Index", "0.4", "0.6", "0.8", "1.0"],
      ["US30", "Dow Jones Industrial Average", "1.0", "1.4", "1.8", "2.1"],
      ["GER40", "DAX 40", "0.6", "0.8", "1.2", "1.5"],
    ],
  },
  {
    title: "Commodities — Raw vs Standard",
    description:
      "Indicative minimum (MIN) and average (AVG) spreads for popular commodities.",
    headers: ["SYMBOL", "DESCRIPTION", "MIN (Raw)", "AVG (Raw)", "MIN (Standard)", "AVG (Standard)"],
    rows: [
      ["XAUUSD", "Gold vs US Dollar", "0.05", "0.10", "0.15", "0.22"],
      ["XAGUSD", "Silver vs US Dollar", "0.20", "0.28", "0.35", "0.45"],
      ["USOIL", "WTI Crude Oil", "0.8", "1.1", "1.6", "1.9"],
    ],
  },
  {
    title: "Cryptocurrency — Raw vs Standard",
    description:
      "Indicative minimum (MIN) and average (AVG) spreads for selected crypto CFDs.",
    headers: ["SYMBOL", "DESCRIPTION", "MIN (Raw)", "AVG (Raw)", "MIN (Standard)", "AVG (Standard)"],
    rows: [
      ["BTCUSD", "Bitcoin vs US Dollar", "8", "12", "14", "18"],
      ["ETHUSD", "Ethereum vs US Dollar", "2", "3.5", "4.5", "6.0"],
      ["LTCUSD", "Litecoin vs US Dollar", "0.6", "0.9", "1.2", "1.7"],
    ],
  },
  {
    title: "Stocks — Raw vs Standard",
    description:
      "Indicative minimum (MIN) and average (AVG) spreads for selected stock CFDs.",
    headers: ["SYMBOL", "DESCRIPTION", "MIN (Raw)", "AVG (Raw)", "MIN (Standard)", "AVG (Standard)"],
    rows: [
      ["AAPL", "Apple Inc.", "0.02", "0.05", "0.08", "0.12"],
      ["TSLA", "Tesla, Inc.", "0.04", "0.10", "0.16", "0.22"],
      ["AMZN", "Amazon.com, Inc.", "0.03", "0.08", "0.13", "0.18"],
    ],
  },
];

export const SPREADS_CARDS: PricingCard[] = [
  {
    title: "Raw Spread",
    price: "$3",
    unit: "/ side",
    features: ["Raw spreads from 0.0", "Low commissions", "Supports EAs & scalping"],
    cta: { label: "Open Raw Spread", href: "/open-account" },
    featured: true,
  },
  {
    title: "Standard",
    price: "$0",
    unit: "/ commission",
    features: ["All-in spread", "No commission", "Great for starters"],
    cta: { label: "Open Standard", href: "/open-account" },
  },
  {
    title: "cTrader/TV Raw",
    price: "$3.5",
    unit: "/ side",
    features: ["Competitive on cTrader & TV", "Raw pricing", "Advanced charting"],
    cta: { label: "Open cTrader/TV", href: "/open-account" },
  },
];
