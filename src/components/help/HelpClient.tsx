"use client";

import { useState } from "react";
import HelpSearch from "@/components/help/HelpSearch";
import HelpCategories from "@/components/help/HelpCategories";
import HelpFAQGroup from "@/components/help/HelpFAQGroup";

export default function HelpClient() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string | undefined>(undefined);

  return (
    <>
      <HelpSearch onQuery={setQuery} />
      <HelpCategories onSelect={(k) => setActive(k)} />
      <HelpFAQGroup query={query} activeKey={active} />
    </>
  );
}
