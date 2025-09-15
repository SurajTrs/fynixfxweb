import type { Metadata } from "next";
import ChatHero from "@/components/support/livechat/ChatHero";
import ChatEmbed from "@/components/support/livechat/ChatEmbed";

export const metadata: Metadata = {
  title: "Live Chat | Fynixfx",
  description: "Chat with our support team 24/5 for quick assistance.",
};

export default function LiveChatPage() {
  return (
    <main>
      <ChatHero />
      <ChatEmbed />
    </main>
  );
}
