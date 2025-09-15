"use client";

export default function LoginBG() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[3rem] pointer-events-none">
      <video
        className="h-full w-full object-cover"
        src="/loginbgn.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 z-10 bg-black/70" />
      <div
        className="absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 30%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(0,0,0,0.0) 100%)",
        }}
      />
    </div>
  );
}
