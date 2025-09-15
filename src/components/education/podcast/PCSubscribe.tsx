import Link from "next/link";
import { FaSpotify, FaApple, FaGoogle, FaYoutube } from "react-icons/fa";

export default function PCSubscribe() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6 sm:p-8 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-xl font-extrabold text-black">Subscribe to never miss an episode</h3>
            <p className="mt-1 text-sm text-neutral-700">Available on Spotify, Apple Podcasts, Google Podcasts and YouTube.</p>
          </div>
          <div className="flex flex-wrap items-center justify-start md:justify-end gap-3">
            <Link href="https://open.spotify.com/" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 text-black font-semibold px-4 py-2.5 hover:bg-neutral-50 transition">
              <FaSpotify className="h-5 w-5 text-[#1DB954]" /> Spotify
            </Link>
            <Link href="https://music.apple.com/" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 text-black font-semibold px-4 py-2.5 hover:bg-neutral-50 transition">
              <FaApple className="h-5 w-5" /> Apple
            </Link>
            <Link href="https://podcasts.google.com/" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 text-black font-semibold px-4 py-2.5 hover:bg-neutral-50 transition">
              <FaGoogle className="h-5 w-5 text-[#4285F4]" /> Google
            </Link>
            <Link href="https://www.youtube.com/" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 text-black font-semibold px-4 py-2.5 hover:bg-neutral-50 transition">
              <FaYoutube className="h-5 w-5 text-[#FF0000]" /> YouTube
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
