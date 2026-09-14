/**
 * Responsive 16:9 YouTube embed. Server component — no facade/click-to-load
 * needed at our traffic scale, but it is lazy-loaded by the browser via the
 * iframe's native `loading="lazy"`.
 */
export default function YouTubeEmbed({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  return (
    <div className="video-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
