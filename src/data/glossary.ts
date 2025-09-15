export type GlossaryEntry = { term: string; definition: string };

export const GLOSSARY: GlossaryEntry[] = [
  { term: "Ask", definition: "The price at which you can buy a currency pair or instrument." },
  { term: "Bid", definition: "The price at which you can sell a currency pair or instrument." },
  { term: "Spread", definition: "The difference between the bid and ask prices, typically measured in pips." },
  { term: "Pip", definition: "A unit of price movement, usually the fourth decimal place (0.0001) for FX majors." },
  { term: "Lot", definition: "A standardized transaction size. 1.0 lot in FX typically equals 100,000 units." },
  { term: "Leverage", definition: "The ability to control a larger position with a smaller amount of capital." },
  { term: "Margin", definition: "Funds required to open and maintain a leveraged position." },
  { term: "Stop Loss", definition: "An order to close a position once price reaches a specified level to limit losses." },
  { term: "Take Profit", definition: "An order to close a position once price reaches a specified level to lock in gains." },
  { term: "Slippage", definition: "The difference between the expected transaction price and the price at which it is executed." },
  { term: "Swap", definition: "Overnight financing charge or credit applied when positions are held past rollover." },
  { term: "Rollover", definition: "The process of extending the settlement date of an open position to the next trading day." },
  { term: "Liquidity", definition: "How quickly an instrument can be bought or sold at stable prices." },
  { term: "Volatility", definition: "The degree of variation of a trading price series over time." },
  { term: "Market Order", definition: "An order to buy or sell immediately at the best available price." },
  { term: "Limit Order", definition: "An order to buy/sell at a specified price or better." },
  { term: "Stop Order", definition: "An order to buy/sell once price reaches a specified level, becoming a market order." },
  { term: "Equity", definition: "Account balance plus or minus unrealized profit/loss from open positions." },
  { term: "Free Margin", definition: "Funds available to open new positions; equity minus used margin." },
  { term: "Drawdown", definition: "The decline from a peak to a trough in account equity or strategy performance." },
];
