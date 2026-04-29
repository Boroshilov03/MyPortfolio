/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { memo, useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

import ProfilePic from "/src/assets/pfp-main.png";

function PersonNode({ data, selected }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Handles */}
      <Handle
        type="source"
        position={Position.Left}
        id="out-left"
        className="!h-3 !w-3 !border-0 !bg-teal-300"
      />

      <Handle
        type="source"
        position={Position.Right}
        id="out-right"
        className="!h-3 !w-3 !border-0 !bg-sky-300"
      />

      <Handle
        type="source"
        position={Position.Bottom}
        id="out-bottom"
        className="!h-3 !w-3 !border-0 !bg-violet-300"
      />

      {/* Card */}
      <div
        className={`w-[360px] rounded-3xl border border-white/75 bg-white/68 p-7 shadow-xl shadow-teal-100/50 backdrop-blur-2xl transition-all duration-200 dark:border-cyan-900/70 dark:bg-zinc-950/86 dark:shadow-black/50 ${
          hovered ? "scale-[1.01]" : "scale-100"
        }`}
        style={{
          boxShadow: selected
            ? "0 0 0 3px rgba(34,211,238,.42), 0 0 0 6px rgba(217,70,239,.12), 0 24px 48px rgba(0,0,0,.48)"
            : "0 22px 46px rgba(0,0,0,.42), inset 0 1px 0 rgba(34,211,238,.08)",
        }}
      >
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          {/* Avatar */}
          <img
            src={ProfilePic}
            alt={data?.name}
            loading="lazy"
            className="h-28 w-28 rounded-2xl object-cover shadow-lg sm:h-32 sm:w-32"
          />

          {/* Text */}
          <div className="flex-1">
            <span className="inline-flex rounded-2xl bg-violet-100/80 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-cyan-950/60 dark:text-cyan-200">
              {data?.title}
            </span>

            <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
              {data?.name}
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {data?.subtitle}
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/45 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal-200 hover:bg-teal-50/70 dark:border-cyan-900/70 dark:bg-black/60 dark:text-cyan-100"
              >
                <UserIcon className="h-4 w-4" />
                About
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-200 via-sky-200 to-violet-200 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg shadow-teal-100/60 transition hover:scale-[1.02] dark:from-cyan-500 dark:via-fuchsia-500 dark:to-amber-400 dark:text-zinc-950 dark:shadow-black/40"
              >
                <BriefcaseIcon className="h-4 w-4" />
                Projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/70 bg-white/45 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-rose-200 hover:bg-rose-50/70 dark:border-fuchsia-900/60 dark:bg-black/60 dark:text-fuchsia-100"
              >
                <EnvelopeIcon className="h-4 w-4" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PersonNode);
