/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { memo, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import {
  HeartIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  InformationCircleIcon
} from "@heroicons/react/24/outline";

function CategoryNode({ data, selected }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const tone = data?.tone || "teal";
  const palette = {
    violet: {
      bar: "from-violet-200 via-sky-200 to-teal-200 dark:from-fuchsia-500 dark:via-violet-600 dark:to-cyan-500",
      bg: "from-violet-50/85 via-white/60 to-sky-50/80 dark:from-fuchsia-950/35 dark:via-zinc-950/70 dark:to-cyan-950/30",
      text: "from-violet-500 via-sky-500 to-teal-500 dark:from-fuchsia-400 dark:via-violet-300 dark:to-cyan-300",
      ring: "rgba(217, 70, 239, 0.42)",
      glow: "rgba(217, 70, 239, 0.18)",
    },
    blue: {
      bar: "from-sky-200 via-teal-200 to-emerald-100 dark:from-cyan-400 dark:via-blue-600 dark:to-indigo-600",
      bg: "from-sky-50/85 via-white/60 to-teal-50/80 dark:from-fuchsia-950/35 dark:via-zinc-950/70 dark:to-cyan-950/30",
      text: "from-sky-500 via-teal-500 to-emerald-500 dark:from-cyan-300 dark:via-sky-400 dark:to-blue-300",
      ring: "rgba(34, 211, 238, 0.42)",
      glow: "rgba(34, 211, 238, 0.18)",
    },
    teal: {
      bar: "from-teal-200 via-emerald-200 to-rose-200 dark:from-amber-400 dark:via-orange-600 dark:to-fuchsia-600",
      bg: "from-teal-50/85 via-white/60 to-rose-50/75 dark:from-fuchsia-950/35 dark:via-zinc-950/70 dark:to-cyan-950/30",
      text: "from-teal-500 via-emerald-500 to-rose-400 dark:from-amber-300 dark:via-orange-400 dark:to-fuchsia-300",
      ring: "rgba(245, 158, 11, 0.42)",
      glow: "rgba(245, 158, 11, 0.16)",
    },
  }[tone] || {
    bar: "from-teal-200 via-sky-200 to-violet-200",
    bg: "from-teal-50/85 via-white/60 to-violet-50/80 dark:from-teal-300/10 dark:via-white/5 dark:to-violet-300/10",
    text: "from-teal-500 via-sky-500 to-violet-500 dark:from-teal-200 dark:via-sky-200 dark:to-violet-100",
    ring: "rgba(94, 234, 212, 0.58)",
    glow: "rgba(94, 234, 212, 0.26)",
  };

  const isExpanded = data?.expanded || false;
  const isExpandable = data?.expandable || false;

  const getIcon = () => {
    switch (data?.label?.toLowerCase()) {
      case 'hobbies':
        return <HeartIcon className="h-6 w-6" />;
      case 'tools':
        return <WrenchScrewdriverIcon className="h-6 w-6" />;
      default:
        return <SparklesIcon className="h-6 w-6" />;
    }
  };

  const getTooltipContent = () => {
    switch (data?.label?.toLowerCase()) {
      case "hobbies":
        return "Personal interests";
      case "tools":
        return "Technologies I use";
      case "projects":
        return "Featured work";
      default:
        return "Explore category";
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => setShowTooltip(true), 600);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowTooltip(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`${data?.label} category${isExpandable ? ', expandable' : ''}`}
      aria-expanded={isExpandable ? isExpanded : undefined}
    >
      <div
        className={`relative min-w-[165px] overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br p-5 text-center shadow-2xl shadow-teal-100/30 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 sm:min-w-[185px] ${
          "dark:border-zinc-800 dark:bg-zinc-950/86 dark:shadow-black/50"
        }`}
        style={{
          boxShadow: selected
            ? `0 0 0 4px ${palette.ring}, 0 24px 46px -16px ${palette.glow}`
            : isHovered
            ? `0 20px 40px -16px ${palette.glow}, 0 0 0 1px rgba(34, 211, 238, 0.16)`
            : "0 16px 34px -18px rgba(0, 0, 0, 0.58), inset 0 1px 0 rgba(255, 255, 255, 0.035)"
        }}
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${palette.bg} transition-opacity duration-300 ${
            isHovered ? 'opacity-65' : 'opacity-38'
          }`}
        />

        <Handle
          type="target"
          position={Position.Top}
          id="in-top"
          className="!bg-slate-400 !border-0 !w-3 !h-3 !shadow-md"
        />
        <Handle
          type="target"
          position={Position.Left}
          id="in-left"
          className="!bg-slate-400 !border-0 !w-3 !h-3 !shadow-md"
        />
        <Handle
          type="target"
          position={Position.Right}
          id="in-right"
          className="!bg-slate-400 !border-0 !w-3 !h-3 !shadow-md"
        />
        <Handle
          type="source"
          position={Position.Top}
          id="out-top"
          className="!bg-slate-400 !border-0 !w-3 !h-3 !shadow-md"
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="out-bottom"
          className="!bg-slate-400 !border-0 !w-3 !h-3 !shadow-md"
        />
        <Handle
          type="source"
          position={Position.Left}
          id="out-left"
          className="!bg-lime-200 !border-0 !w-3 !h-3 !shadow-md"
        />
        <Handle
          type="source"
          position={Position.Right}
          id="out-right"
          className="!bg-sky-200 !border-0 !w-3 !h-3 !shadow-md"
        />

        <div className="relative z-10 space-y-4">
          {/* Icon and gradient bar */}
          <div className="flex items-center justify-center gap-4">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r ${palette.bar} text-slate-700 shadow-xl transition-shadow duration-300 dark:text-zinc-950`}
              style={{
                boxShadow: isHovered
                  ? `0 8px 25px ${palette.glow}`
                  : `0 4px 15px ${palette.glow}`
              }}
            >
              {getIcon()}
            </div>
            <div
              className={`h-1.5 w-10 rounded-full bg-gradient-to-r ${palette.bar} transition-transform duration-300 ${isHovered ? 'scale-[1.3]' : 'scale-100'}`}
            />
          </div>

          {/* Label */}
          <p
            className={`bg-gradient-to-r bg-clip-text text-lg font-bold text-transparent sm:text-xl ${palette.text} transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
          >
            {data?.label}
          </p>

          {/* Subtitle */}
          <div
            className="flex items-center justify-center gap-2 transition-opacity duration-300"
            style={{ opacity: isHovered ? 1 : 0.8 }}
          >
            <p className="text-sm text-slate-600 dark:text-zinc-500">
              {isExpandable
                ? (isExpanded ? "Click to collapse" : "Click to expand")
                : "Tap to explore"
              }
            </p>
            {isExpandable && (
              <InformationCircleIcon className="h-4 w-4 text-slate-500 dark:text-slate-600" />
            )}
          </div>
        </div>

      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="pointer-events-none absolute -top-16 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-2xl border border-white/20 bg-slate-900/95 px-4 py-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl dark:border-cyan-900/70 dark:bg-zinc-950/95 dark:text-cyan-100">
          <div className="flex items-center gap-2">
            {getIcon()}
            <span>{getTooltipContent()}</span>
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900/95 dark:border-t-zinc-950/95" />
        </div>
      )}
    </div>
  );
}

export default memo(CategoryNode);
