import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", textAlign: "center", padding: "4rem 2rem" }}>
      <div>
        <h1 style={{ fontSize: "clamp(48px, 10vw, 120px)", fontWeight: 600, letterSpacing: "-.02em", margin: 0 }}>404</h1>
        <p style={{ marginTop: "1rem", fontSize: "clamp(16px, 2vw, 20px)", color: "#656565" }}>
          This page doesn&rsquo;t exist &mdash; even we couldn&rsquo;t find a direction for it.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            marginTop: "2rem",
            padding: "14px 28px",
            background: "#800000",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
