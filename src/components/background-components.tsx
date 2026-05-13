"use client";

export function BackgroundComponents() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <div className="absolute inset-0 bg-[#f8faff]" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 50% -20%, rgba(147, 180, 255, 0.25) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 50%, rgba(165, 200, 255, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(180, 210, 255, 0.12) 0%, transparent 50%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
