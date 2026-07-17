export default function BackgroundEffects() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(36,88,255,0.08)_0%,transparent_28%,rgba(0,143,107,0.08)_54%,transparent_78%,rgba(240,109,79,0.08)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white/95 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#F7F8FB] to-transparent" />
    </div>
  );
}
