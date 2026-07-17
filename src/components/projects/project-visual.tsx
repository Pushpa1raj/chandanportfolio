interface ProjectVisualProps {
  project: {
    slug: string;
    title: string;
    category: string;
    color: string;
  };
  compact?: boolean;
}

export default function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  const isAI = project.slug.includes("ai");
  const isDashboard = project.slug.includes("devflow");
  const isIoT = project.slug.includes("iot");

  return (
    <div
      className="relative h-full min-h-[260px] overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-[0_18px_52px_rgba(16,24,40,0.12)]"
      style={{
        background: `linear-gradient(135deg, ${project.color}1A 0%, #FFFFFF 42%, ${project.color}0D 100%)`,
      }}
    >
      <div className="flex h-11 items-center gap-2 border-b border-black/[0.07] bg-white/72 px-4 backdrop-blur-xl">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F06D4F]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F5B942]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#008F6B]" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-black/[0.04]" />
      </div>

      <div className="grid h-[calc(100%-2.75rem)] grid-cols-[0.74fr_1.26fr] gap-4 p-4">
        <div className="space-y-3">
          <div className="rounded-lg bg-[#15171C] p-4 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase text-white/58">
              {project.category}
            </p>
            <p className="mt-2 text-lg font-bold leading-tight">{project.title}</p>
          </div>
          <div className="space-y-2 rounded-lg border border-black/[0.06] bg-white/80 p-3">
            {[0.86, 0.62, 0.74].map((width, index) => (
              <span
                key={index}
                className="block h-2 rounded-full bg-black/[0.08]"
                style={{ width: `${width * 100}%` }}
              />
            ))}
          </div>
        </div>

        {isAI && <AIStudioPreview color={project.color} compact={compact} />}
        {isDashboard && <DashboardPreview color={project.color} />}
        {isIoT && <IoTPreview color={project.color} />}
      </div>
    </div>
  );
}

function AIStudioPreview({ color, compact }: { color: string; compact: boolean }) {
  return (
    <div className="grid gap-3">
      <div className="rounded-lg border border-black/[0.06] bg-white/86 p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold uppercase text-[#5E6673]">
            Editor
          </span>
          <span
            className="rounded-full px-2 py-1 text-xs font-semibold text-white"
            style={{ background: color }}
          >
            Drafting
          </span>
        </div>
        <div className="space-y-2">
          {[0.94, 0.76, 0.84, 0.64, 0.9].map((width, index) => (
            <span
              key={index}
              className="block h-2 rounded-full bg-black/[0.08]"
              style={{ width: `${width * 100}%` }}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {["Tone", "SEO"].map((label) => (
          <div key={label} className="rounded-lg border border-black/[0.06] bg-white/76 p-3">
            <p className="text-xs font-semibold text-[#5E6673]">{label}</p>
            <div className="mt-3 h-2 rounded-full bg-black/[0.06]">
              <div
                className="h-full rounded-full"
                style={{ width: compact ? "64%" : "78%", background: color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardPreview({ color }: { color: string }) {
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-3">
        {["PRs", "Tasks", "Focus"].map((label, index) => (
          <div key={label} className="rounded-lg border border-black/[0.06] bg-white/78 p-3">
            <p className="text-xs font-semibold text-[#5E6673]">{label}</p>
            <p className="mt-2 text-xl font-bold text-[#15171C]">{[18, 42, 7][index]}</p>
          </div>
        ))}
      </div>
      <div className="flex h-full min-h-32 items-end gap-2 rounded-lg border border-black/[0.06] bg-white/78 p-4">
        {[42, 72, 54, 86, 64, 92, 76].map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-md"
            style={{ height: `${height}%`, background: index % 2 ? color : "#15171C" }}
          />
        ))}
      </div>
    </div>
  );
}

function IoTPreview({ color }: { color: string }) {
  return (
    <div className="grid gap-3">
      <div className="grid grid-cols-3 gap-2 rounded-lg border border-black/[0.06] bg-white/78 p-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className="aspect-square rounded-md border border-black/[0.05]"
            style={{
              background:
                index === 4
                  ? color
                  : index % 2
                    ? `${color}26`
                    : "rgba(21,23,28,0.05)",
            }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        {["Air quality", "Energy"].map((label, index) => (
          <div key={label} className="rounded-lg border border-black/[0.06] bg-white/78 p-3">
            <p className="text-xs font-semibold text-[#5E6673]">{label}</p>
            <p className="mt-2 text-lg font-bold text-[#15171C]">
              {index === 0 ? "91%" : "74%"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
