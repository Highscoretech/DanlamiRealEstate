/**
 * Renders a JSON-LD block. Server component — the markup is in the HTML that
 * Googlebot receives, with no client JavaScript involved.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The payload is our own structured data, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
