/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { memo, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { ArrowUpRightIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

function ItemNode({ data, selected }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const compact = data?.compact;
  const emphasis = data?.emphasis;

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => setShowTooltip(true), 500);
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
      aria-label={`${data?.label}${data?.navigateTo ? ', navigable' : ''}`}
    >
      <div
        className={`relative rounded-2xl border border-white/55 bg-gradient-to-br from-white/48 via-white/36 to-white/24 px-4 py-3 text-center shadow-lg backdrop-blur-2xl transition-all hover:scale-[1.035] hover:-translate-y-0.5 dark:border-zinc-700/90 dark:from-fuchsia-950/35 dark:via-zinc-950/82 dark:to-cyan-950/30 sm:px-5 sm:py-4 ${
          compact ? "px-3 py-2.5 sm:px-4 sm:py-3" : "px-4 py-3"
        } ${
          emphasis
            ? "ring-2 ring-teal-400/80 dark:ring-amber-400/40"
            : ""
        }`}
        style={{
          boxShadow: selected
            ? `0 0 0 3px ${emphasis ? 'rgba(245, 158, 11, 0.36)' : 'rgba(34, 211, 238, 0.34)'}, 0 18px 34px -12px rgba(0, 0, 0, 0.55)`
            : isHovered
            ? emphasis
              ? "0 14px 28px -14px rgba(245, 158, 11, 0.22), 0 0 0 1px rgba(245, 158, 11, 0.2)"
              : "0 14px 28px -14px rgba(0, 0, 0, 0.58), 0 0 0 1px rgba(34, 211, 238, 0.24)"
            : emphasis
            ? "0 10px 22px -14px rgba(245, 158, 11, 0.16), 0 0 0 1px rgba(245, 158, 11, 0.18)"
            : "0 10px 22px -16px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(34, 211, 238, 0.1)"
        }}
      >
        {/* Background gradient on hover */}
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
            emphasis
              ? "from-teal-500/15 via-cyan-500/10 to-emerald-500/15 dark:from-amber-500/10 dark:via-orange-600/8 dark:to-fuchsia-600/10"
              : "from-slate-200/20 via-slate-100/15 to-slate-200/20 dark:from-fuchsia-950/30 dark:via-zinc-950/45 dark:to-cyan-950/28"
          } ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />

        <Handle
          id="l"
          type="target"
          position={Position.Left}
          className="!h-3 !w-3 !border-0 !bg-slate-400 !shadow-md"
        />
        <Handle
          id="t"
          type="target"
          position={Position.Top}
          className="!h-3 !w-3 !border-0 !bg-slate-400 !shadow-md"
        />
        <Handle
          id="b"
          type="target"
          position={Position.Bottom}
          className="!h-3 !w-3 !border-0 !bg-slate-400 !shadow-md"
        />
        <Handle
          id="r"
          type="target"
          position={Position.Right}
          className="!h-3 !w-3 !border-0 !bg-slate-400 !shadow-md"
        />
        <Handle
          id="r"
          type="source"
          position={Position.Right}
          className="!h-3 !w-3 !border-0 !bg-slate-400 !shadow-md"
        />

        <div className="relative z-10 flex items-center gap-4">
          {data?.icon ? (
            <div className="relative shrink-0">
              {/* Icon background glow */}
              <div
                className={`absolute -inset-1 rounded-xl transition-opacity duration-300 ${
                  emphasis
                    ? "bg-gradient-to-r from-teal-500/30 to-cyan-500/30 dark:from-amber-500/22 dark:to-fuchsia-500/16"
                    : "bg-gradient-to-r from-slate-400/20 to-slate-500/20 dark:from-cyan-500/12 dark:to-zinc-700/12"
                } ${isHovered ? 'opacity-80' : 'opacity-40'}`}
              />
              {!imageLoaded && (
                <div className={`h-9 w-9 animate-pulse rounded-xl ${
                    emphasis
                      ? "bg-gradient-to-br from-teal-200 to-cyan-200 dark:from-teal-800 dark:to-cyan-800"
                      : "bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600"
                  } sm:h-10 sm:w-10`}
                />
              )}
              <img
                src={data.icon}
                alt={`${data?.label} icon`}
                className={`relative h-9 w-9 shrink-0 rounded-xl object-contain shadow-lg transition-all duration-300 sm:h-10 sm:w-10 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                } ${isHovered ? 'scale-110' : 'scale-100'}`}
                onLoad={() => setImageLoaded(true)}
                loading="lazy"
              />
            </div>
          ) : null}

          <div className="min-w-0 flex-1">
            <span
              className={`block font-bold text-slate-800 transition-colors duration-200 dark:text-cyan-100 ${
                compact ? "text-sm sm:text-base" : "text-base"
              }`}
              style={{
                color: isHovered && emphasis ? "#fbbf24" : undefined
              }}
            >
              {data?.label}
              {data?.isNew && (
                <span className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-lg">
                  NEW
                </span>
              )}
            </span>

            {(data?.subtitle || data?.navigateTo) && (
              <p className="mt-1.5 flex items-center justify-center gap-1.5 text-xs text-slate-500 transition-opacity duration-200 dark:text-zinc-400 sm:justify-start">
                {data?.navigateTo && <ArrowUpRightIcon className="h-3.5 w-3.5" />}
                <span className="truncate">
                  {data?.subtitle || data.navigateTo}
                </span>
              </p>
            )}
          </div>
        </div>

        {/* Tooltip */}
        {showTooltip && data?.description && (
          <div className="absolute -bottom-16 left-1/2 z-50 w-48 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-xl dark:bg-slate-800">
            {data.description}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-900 dark:border-b-slate-800" />
          </div>
        )}
      </div>

      {/* Info icon for items with details but no navigateTo */}
      {data?.description && !data?.navigateTo && (
        <div className="absolute -right-1 -top-1 z-10">
          <InformationCircleIcon className="h-4 w-4 text-slate-400 dark:text-slate-500" />
        </div>
      )}
    </div>
  );
}

export default memo(ItemNode);
