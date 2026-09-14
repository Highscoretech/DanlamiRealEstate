import Image from "next/image";

/**
 * Stand-in for photography the client has not supplied yet.
 *
 * Deliberately a designed panel rather than a grey box or a stock photo: it
 * carries the brand mark, reads as intentional on a live site, and makes it
 * obvious which properties are still waiting on real images.
 *
 * To replace: put the photo in /public/properties/ and set `image` on the
 * property in content/properties.ts.
 */

export default function PhotoSlot({
  src,
  alt,
  height = "14rem",
  note,
  priority,
  sizes = "(max-width: 54rem) 100vw, (max-width: 76rem) 50vw, 33vw",
  focus = "center",
}: {
  src?: string | null;
  alt: string;
  height?: string;
  note?: string;
  /** Set on the largest above-the-fold image so it is not lazy-loaded. */
  priority?: boolean;
  sizes?: string;
  /** CSS object-position — use for tall/portrait source images where a
      centred crop cuts off the part that matters (e.g. a poster's title). */
  focus?: string;
}) {
  if (src) {
    return (
      <div className="photo-slot" style={{ height, background: "none" }}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover", objectPosition: focus }}
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className="photo-slot" style={{ height }}>
      <Image
        src="/brand/mark.png"
        alt=""
        width={492}
        height={449}
        aria-hidden
        className="photo-slot-mark"
      />
      {note ? <span className="photo-slot-note">{note}</span> : null}
    </div>
  );
}
