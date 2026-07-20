"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function VideoShowcase() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    setMuted(next);
  };

  return (
    <section className="bg-kerygma-black py-20 sm:py-28">
      <div className="container-wide">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-4xl sm:text-5xl tracking-widest">
            {t.video.title}
          </h2>
          <button
            onClick={toggleMute}
            className="inline-flex items-center gap-2 px-4 py-2 border border-kerygma-white/20 rounded-full text-xs uppercase tracking-widest text-kerygma-white/80 hover:bg-kerygma-red hover:border-kerygma-red hover:text-kerygma-white transition"
            aria-label={muted ? t.video.unmuted : t.video.muted}
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            <span>{muted ? t.video.unmuted : t.video.muted}</span>
          </button>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl border border-kerygma-line bg-kerygma-line">
          <div className="relative w-full" style={{ aspectRatio: "16 / 7" }}>
            <video
              ref={videoRef}
              src="/assets/video/showcase.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kerygma-black/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}