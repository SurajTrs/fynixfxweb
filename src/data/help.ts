export type FAQItem = { q: string; a: string };
export type FAQGroup = { key: string; title: string; items: FAQItem[] };

export const HELP_CATEGORIES: { key: string; label: string }[] = [
  { key: "accounts", label: "Accounts" },
  { key: "client-area", label: "Client Area" },
  { key: "trading", label: "Trading" },
  { key: "platforms", label: "Platforms" },
  { key: "tradingview", label: "TradingView" },
  { key: "pricing", label: "Pricing & Fees" },
  { key: "kyc", label: "Verification/KYC" },
];

export const HELP_GROUPS: FAQGroup[] = [
  {
    key: "accounts",
    title: "Accounts",
    items: [
      { q: "Can I open a trading account in the name of my company?", a: "Yes, corporate accounts are supported. You will be asked to provide company documents during onboarding." },
      { q: "How do I convert my account to swap‑free?", a: "Submit a request from your Client Area. Once approved, your account type will be updated and reflected in platforms." },
      { q: "Why have my documents not been approved?", a: "Most rejections are related to image quality or mismatched details. Please resubmit with clear photos and ensure names and addresses match your profile." },
      { q: "What timeframe do I need to receive proof of residence in my name?", a: "In most regions, proof of residence must be issued within the last 3 months and show your full name and address." },
    ],
  },
  {
    key: "client-area",
    title: "Client Area",
    items: [
      { q: "How do I access my Client Area?", a: "Visit the website and click Client Login. Use your registered email and password to sign in." },
      { q: "Can I change my registered email?", a: "Yes. Please contact support to request an email change for security verification." },
      { q: "How do I update my residential address?", a: "Update your address in the Profile section and upload a new proof of residence for verification." },
      { q: "How long does it take to reset a locked account?", a: "Most resets are instant once verification checks pass; otherwise our team will contact you within 24 hours." },
    ],
  },
  {
    key: "trading",
    title: "Trading",
    items: [
      { q: "What are your market trading hours?", a: "FX trades 24/5. Other products follow exchange/market sessions. See the product specifications on each instrument for details." },
      { q: "What is the minimum trade size?", a: "From 0.01 lots (micro). Contract sizes may vary by instrument; see specifications in your platform." },
      { q: "Do you offer negative balance protection?", a: "Yes, for retail clients in applicable regions. Professional clients should monitor margin carefully." },
      { q: "Where can I find swap/financing details?", a: "Open the instrument specification in your platform to see overnight financing and contract details." },
    ],
  },
  {
    key: "platforms",
    title: "Platforms",
    items: [
      { q: "Which platforms can I trade on?", a: "MetaTrader 4/5, cTrader and TradingView are available. Web, desktop and mobile are supported." },
      { q: "How do I add custom indicators?", a: "On MetaTrader, place indicators in the MQL folder and restart the platform. On cTrader, use cAlgo. TradingView uses built‑in indicators or Pine scripts." },
      { q: "My platform is not connecting, what should I do?", a: "Check internet connectivity, server selection, and account credentials. If issues persist, contact support with your platform log." },
    ],
  },
  {
    key: "tradingview",
    title: "TradingView",
    items: [
      { q: "How do I connect my account to TradingView?", a: "Open the Trading Panel in TradingView, choose our broker, and sign in using your account credentials." },
      { q: "Which order types are supported?", a: "Market, limit and stop orders are supported. Modify/close positions from the Trading Panel or chart." },
      { q: "Can I use indicators and alerts?", a: "Yes. Use your chart indicators as usual and create alerts from the top bar or via right‑click on the chart." },
    ],
  },
  {
    key: "pricing",
    title: "Pricing & Fees",
    items: [
      { q: "Do you charge deposit or withdrawal fees?", a: "We do not charge fees; however, your payment provider may. Check with your bank or wallet for any charges." },
      { q: "What is the difference between Raw and Standard accounts?", a: "Raw accounts show low raw spreads plus a commission. Standard accounts combine spread and commission into one all‑in price." },
      { q: "How are swaps/financing calculated?", a: "Financing depends on the instrument and interest rate differentials. Check the specification window in your platform for daily rates." },
    ],
  },
  {
    key: "kyc",
    title: "Verification/KYC",
    items: [
      { q: "What documents do I need to verify my account?", a: "A government‑issued photo ID and a recent proof of residence. Additional documents may be required in some regions." },
      { q: "How long does verification take?", a: "In most cases within a few hours, and up to 24 hours during peak times." },
      { q: "Can I trade before verification is complete?", a: "You can open a demo account immediately. Live trading requires verification to be completed." },
    ],
  },
];
