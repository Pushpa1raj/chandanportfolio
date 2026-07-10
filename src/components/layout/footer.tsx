export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#6E6E73]">
          © {new Date().getFullYear()} Chandan Kumar. Crafted with care.
        </p>
        <p className="text-xs text-[#6E6E73]/50">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
