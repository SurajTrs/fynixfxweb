export type SymbolItem = { name: string; tv: string };
export type SymbolCategory = { key: string; label: string; items: SymbolItem[] };

export const SYMBOL_CATEGORIES: SymbolCategory[] = [
  {
    key: "forex",
    label: "Forex CFDs",
    items: [
      { name: "EURUSD", tv: "FX:EURUSD" },
      { name: "GBPUSD", tv: "FX:GBPUSD" },
      { name: "USDJPY", tv: "FX:USDJPY" },
      { name: "AUDUSD", tv: "FX:AUDUSD" },
      { name: "USDCAD", tv: "FX:USDCAD" },
      { name: "USDCHF", tv: "FX:USDCHF" },
      { name: "NZDUSD", tv: "FX:NZDUSD" },
      { name: "EURGBP", tv: "FX:EURGBP" },
      { name: "EURJPY", tv: "FX:EURJPY" },
      { name: "GBPJPY", tv: "FX:GBPJPY" },
      { name: "EURCAD", tv: "FX:EURCAD" },
      { name: "AUDJPY", tv: "FX:AUDJPY" },
      { name: "USDTRY", tv: "FX:USDTRY" },
      { name: "USDMXN", tv: "FX:USDMXN" }
    ]
  },
  {
    key: "commodities",
    label: "Commodities CFDs",
    items: [
      { name: "Gold", tv: "TVC:GOLD" },
      { name: "Silver", tv: "TVC:SILVER" },
      { name: "WTI Oil", tv: "TVC:USOIL" },
      { name: "Brent Oil", tv: "TVC:UKOIL" },
      { name: "Natural Gas", tv: "NYMEX:NG1!" },
      { name: "Copper", tv: "COMEX:HG1!" }
    ]
  },
  {
    key: "indices",
    label: "Indices CFDs",
    items: [
      { name: "S&P 500", tv: "TVC:SPX" },
      { name: "Dow 30", tv: "TVC:DJI" },
      { name: "Nasdaq 100", tv: "NASDAQ:NDX" },
      { name: "GER40 (DAX)", tv: "TVC:DAX" },
      { name: "FTSE 100", tv: "TVC:UKX" },
      { name: "EURO STOXX 50", tv: "TVC:STOXX50E" },
      { name: "Nikkei 225", tv: "TVC:NI225" }
    ]
  },
  {
    key: "bonds",
    label: "Bonds CFDs",
    items: [
      { name: "US 10Y", tv: "TVC:US10Y" },
      { name: "US 02Y", tv: "TVC:US02Y" },
      { name: "US 30Y", tv: "TVC:US30Y" },
      { name: "DE 10Y", tv: "TVC:DE10Y" }
    ]
  },
  {
    key: "crypto",
    label: "Digital currencies",
    items: [
      { name: "Bitcoin", tv: "CRYPTO:BTCUSD" },
      { name: "Ethereum", tv: "CRYPTO:ETHUSD" },
      { name: "Solana", tv: "CRYPTO:SOLUSD" },
      { name: "Ripple", tv: "CRYPTO:XRPUSD" }
    ]
  },
  {
    key: "stocks",
    label: "Stocks CFDs",
    items: [
      { name: "Apple", tv: "NASDAQ:AAPL" },
      { name: "Microsoft", tv: "NASDAQ:MSFT" },
      { name: "Tesla", tv: "NASDAQ:TSLA" },
      { name: "NVIDIA", tv: "NASDAQ:NVDA" },
      { name: "Amazon", tv: "NASDAQ:AMZN" },
      { name: "Meta", tv: "NASDAQ:META" }
    ]
  },
  {
    key: "futures",
    label: "Futures CFDs",
    items: [
      { name: "S&P 500 E-mini", tv: "CME_MINI:ES1!" },
      { name: "Nasdaq 100 E-mini", tv: "CME_MINI:NQ1!" },
      { name: "Gold Futures", tv: "COMEX:GC1!" },
      { name: "Crude Oil Futures", tv: "NYMEX:CL1!" }
    ]
  }
];
