export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs font-medium text-[#5E6673]">
          © {new Date().getFullYear()} Chandan Kumar. Crafted with care.
        </p>
        <p className="text-xs font-medium text-[#5E6673]/70">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
