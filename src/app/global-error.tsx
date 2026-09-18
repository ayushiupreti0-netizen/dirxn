"use client";

// global-error replaces the entire root layout, so it defines its own
// <html>/<body> and deliberately stays minimal.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: "2rem" }}>
          <div>
            <h1 style={{ fontSize: "2rem", margin: 0 }}>Something went wrong.</h1>
            <button
              onClick={() => reset()}
              style={{ marginTop: "1.5rem", padding: "12px 24px", background: "#800000", color: "#fff", border: 0, cursor: "pointer" }}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
