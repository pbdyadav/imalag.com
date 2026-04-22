import { useEffect } from "react";

export default function AdUnit() {
  const adsEnabled =
    typeof window !== "undefined" &&
    window.__IMALAG_ADSENSE_ENABLED__ &&
    window.adsbygoogle;

  useEffect(() => {
    if (!adsEnabled) {
      return;
    }

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {}
  }, [adsEnabled]);

  if (!adsEnabled) {
    return (
      <div
        aria-hidden="true"
        style={{
          minHeight: "120px",
          margin: "20px auto",
          border: "1px dashed rgba(120, 92, 66, 0.25)",
          borderRadius: "12px",
          display: "grid",
          placeItems: "center",
          color: "rgba(120, 92, 66, 0.55)",
          fontSize: "0.875rem",
          background: "rgba(255, 255, 255, 0.5)",
        }}
      >
        Ad slot preview
      </div>
    );
  }

  return (
    <ins className="adsbygoogle"
      style={{ display: "block", textAlign: "center", margin: "20px auto" }}
      data-ad-client="ca-pub-7180154058776132"
      data-ad-slot="4424495588"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
