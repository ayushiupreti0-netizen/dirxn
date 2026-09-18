"use client";

import { useState } from "react";
import Image from "next/image";

/** Plays a video if the source exists; otherwise falls back to a still image.
 *  Drop the real file at the given src and it plays automatically. */
export default function VideoOrPoster({
  src,
  poster,
  posterAlt,
  posterW,
  posterH,
}: {
  src: string;
  poster: string;
  posterAlt: string;
  posterW: number;
  posterH: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <Image src={poster} alt={posterAlt} width={posterW} height={posterH} priority />;
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={posterAlt}
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" onError={() => setFailed(true)} />
    </video>
  );
}
