import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Background,
  BackgroundVariant,
  ReactFlow,
  useReactFlow,
  MiniMap,
  Controls,
  Panel,
} from "@xyflow/react";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import "@xyflow/react/dist/style.css";
import "./graph.css";

import { ThemeContext } from "../../context/ThemeContext";
import {
  getVisibleEdges,
  getVisibleNodes,
} from "../../data/portfolioGraph";

import PersonNode from "./nodes/PersonNode";
import CategoryNode from "./nodes/CategoryNode";
import ItemNode from "./nodes/ItemNode";

const nodeTypes = {
  person: PersonNode,
  category: CategoryNode,
  item: ItemNode,
};

function neighborSet(selectedNodeId, edges) {
  const set = new Set([selectedNodeId]);

  edges.forEach((e) => {
    if (e.source === selectedNodeId) set.add(e.target);
    if (e.target === selectedNodeId) set.add(e.source);
  });

  return set;
}

const projectStack = (project) => {
  if (Array.isArray(project?.data?.stack)) return project.data.stack;
  if (!project?.data?.subtitle) return [];

  return project.data.subtitle
    .split("+")
    .map((item) => item.trim())
    .filter(Boolean);
};

export default function PortfolioGraph() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { fitView } = useReactFlow();

  const isDark = theme === "dark";

  const edgePalette = useMemo(
    () => ({
      active: isDark ? "#22d3ee" : "#5eead4",
      selected: isDark ? "#f59e0b" : "#a78bfa",
      inactive: isDark ? "#1e293b" : "#b6c4d6",
    }),
    [isDark]
  );

  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [expandedTools, setExpandedTools] = useState({});
  const [showSearch, setShowSearch] = useState(false);
  const [nodePositions, setNodePositions] = useState({});

  const visibleNodes = useMemo(
    () => getVisibleNodes(expandedCategories, expandedTools),
    [expandedCategories, expandedTools]
  );

  const visibleEdges = useMemo(
    () => getVisibleEdges(expandedCategories, expandedTools, visibleNodes),
    [expandedCategories, expandedTools, visibleNodes]
  );

  const neighbors = useMemo(() => {
    if (!selectedNodeId) return null;
    return neighborSet(selectedNodeId, visibleEdges);
  }, [selectedNodeId, visibleEdges]);

  const selectedProject = useMemo(
    () =>
      visibleNodes.find(
        (node) => node.id === selectedNodeId && node.id.startsWith("project-")
      ),
    [selectedNodeId, visibleNodes]
  );

  useEffect(() => {
    if (!selectedNodeId) return;
    if (!visibleNodes.some((node) => node.id === selectedNodeId)) {
      setSelectedNodeId(null);
    }
  }, [selectedNodeId, visibleNodes]);

  /* ---------- NODES ---------- */

  const renderedNodes = useMemo(() => {
    return visibleNodes.map((node) => ({
      ...node,
      position: nodePositions[node.id] || node.position,
      selected: node.id === selectedNodeId,
      className: `${
        node.type === "person"
          ? "portfolio-node-person"
          : node.type === "category"
          ? "portfolio-node-category"
          : "portfolio-node-item"
      } ${
        selectedNodeId && !neighbors?.has(node.id)
          ? "portfolio-node-dim"
          : "portfolio-node-visible"
      }`,
    }));
  }, [visibleNodes, selectedNodeId, neighbors, nodePositions]);

  /* ---------- EDGES ---------- */

  const styledEdges = useMemo(() => {
    return visibleEdges.map((edge) => {
      const active =
        !selectedNodeId ||
        edge.source === selectedNodeId ||
        edge.target === selectedNodeId;

      return {
        ...edge,
        type: "smoothstep",
        className: active ? "portfolio-edge-active" : "portfolio-edge-muted",
        labelShowBg: true,
        labelBgBorderRadius: 12,
        labelBgPadding: [7, 4],
        labelStyle: {
          fill: isDark ? "#cbd5e1" : "#64748b",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0,
          opacity: active ? 0.82 : 0.22,
        },
        labelBgStyle: {
          fill: isDark ? "rgba(3, 7, 18, 0.9)" : "rgba(255, 255, 255, 0.72)",
          stroke: isDark ? "rgba(34, 211, 238, 0.24)" : "rgba(125, 211, 252, 0.28)",
          strokeWidth: 1,
          opacity: active ? 1 : 0.45,
        },
        style: {
          stroke:
            selectedNodeId && active ? edgePalette.selected : edgePalette.active,
          strokeWidth: active ? 2.8 : 1.25,
          opacity: active ? 0.9 : 0.18,
        },
      };
    });
  }, [visibleEdges, selectedNodeId, edgePalette, isDark]);

  useEffect(() => {
    fitView({ padding: 0.18, duration: 420 });
  }, [expandedCategories, expandedTools, fitView]);

  /* ---------- CLICK ---------- */

  const onNodeClick = useCallback(
    (_, node) => {
      if (node.data?.expandable) {
        if (["tools", "projects", "hobbies"].includes(node.id)) {
          setExpandedCategories((prev) => ({
            tools: false,
            projects: false,
            hobbies: false,
            [node.id]: !prev[node.id],
          }));
          setExpandedTools({});
          setSelectedNodeId(null);

          return;
        }

        if (node.id.startsWith("skill-")) {
          setExpandedTools((prev) => ({
            "skill-react": false,
            "skill-js": false,
            "skill-node": false,
            "skill-python": false,
            "skill-csharp": false,
            "skill-postgres": false,
            "skill-mongo": false,
            "skill-git": false,
            [node.id]: !prev[node.id],
          }));
          setSelectedNodeId(null);

          return;
        }
      }

      setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
    },
    []
  );

  const onNodeDoubleClick = useCallback(
    (_, node) => {
      if (node.data?.navigateTo) navigate(node.data.navigateTo);
    },
    [navigate]
  );

  const onNodeDrag = useCallback((_, node) => {
    setNodePositions((prev) => ({
      ...prev,
      [node.id]: node.position,
    }));
  }, []);

  const resetView = () => {
    setExpandedCategories({});
    setExpandedTools({});
    setSelectedNodeId(null);

    fitView({
      padding: 0.18,
      duration: 500,
    });
  };

  const flowClassName = `portfolio-flow ${isDark ? "portfolio-flow-dark" : "portfolio-flow-light"}`;
  const shellClassName = `portfolio-graph-shell ${
    isDark ? "portfolio-graph-shell-dark" : "portfolio-graph-shell-light"
  } relative h-full w-full overflow-hidden rounded-3xl border`;

  return (
    <div className={shellClassName}>
      <ReactFlow
        nodes={renderedNodes}
        edges={styledEdges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onNodeDoubleClick={onNodeDoubleClick}
        onNodeDrag={onNodeDrag}
        onPaneClick={() => setSelectedNodeId(null)}
        className={flowClassName}
        style={{
          background: isDark ? "#111318" : "transparent",
        }}
        fitView
        minZoom={0.3}
        maxZoom={2}
        nodesDraggable={true}
        nodesConnectable={false}
        elementsSelectable={false}
        elevateNodesOnSelect={false}
        panOnScroll
        onlyRenderVisibleElements
        defaultEdgeOptions={{
          type: "smoothstep",
          interactionWidth: 24,
        }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={22}
          size={1.4}
          bgColor={isDark ? "#111318" : undefined}
          color={isDark ? "rgba(44, 50, 62, 0.72)" : "rgba(148, 163, 184, 0.28)"}
        />

        <MiniMap
          pannable
          zoomable
          style={{
            background: isDark ? "rgba(3, 7, 18, 0.9)" : "rgba(255, 255, 255, 0.72)",
            borderRadius: 18,
          }}
          nodeColor={(node) =>
            isDark
              ? node.type === "person"
                ? "#22d3ee"
                : node.type === "category"
                ? "#f59e0b"
                : "#d946ef"
              : node.type === "person"
              ? "#99f6e4"
              : node.type === "category"
              ? "#c4b5fd"
              : "#bfdbfe"
          }
        />

        <Controls showInteractive={false} />

        <Panel position="top-right">
          <div className="flex gap-2">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="rounded-2xl border border-white/60 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 shadow-lg shadow-teal-200/30 backdrop-blur-xl transition hover:scale-[1.02] hover:border-teal-200 hover:text-teal-700 dark:border-cyan-900/80 dark:bg-zinc-950/80 dark:text-cyan-100 dark:shadow-black/50 dark:hover:border-cyan-700"
            >
              Search
            </button>

            <button
              onClick={resetView}
              className="rounded-2xl bg-gradient-to-r from-teal-300 via-sky-300 to-violet-300 px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg shadow-teal-200/40 transition hover:scale-[1.02] dark:from-cyan-500 dark:via-fuchsia-500 dark:to-amber-400 dark:text-zinc-950 dark:shadow-black/50"
            >
              Reset
            </button>
          </div>
        </Panel>

        {showSearch && (
          <Panel position="top-left">
            <div className="rounded-3xl border border-white/60 bg-white/70 p-4 shadow-xl shadow-violet-200/30 backdrop-blur-2xl dark:border-cyan-900/70 dark:bg-zinc-950/85 dark:shadow-black/50">
              <input
                placeholder="Search nodes..."
                className="w-72 rounded-2xl border border-teal-100/80 bg-white/70 px-4 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-200 focus:ring-4 focus:ring-violet-100/70 dark:border-cyan-900/80 dark:bg-black/80 dark:text-cyan-50 dark:placeholder:text-slate-600 dark:focus:border-cyan-600 dark:focus:ring-cyan-500/10"
              />
            </div>
          </Panel>
        )}

        {selectedProject && (
          <Panel position="bottom-right" className="portfolio-detail-panel">
            <aside className="w-[min(360px,calc(100vw-32px))] rounded-3xl border border-white/65 bg-white/72 p-5 text-slate-700 shadow-2xl shadow-violet-200/30 backdrop-blur-2xl dark:border-cyan-900/70 dark:bg-zinc-950/88 dark:text-slate-200 dark:shadow-black/60">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600/80 dark:text-amber-400/90">
                    Project
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                    {selectedProject.data?.label}
                  </h3>
                </div>
                <button
                  type="button"
                  aria-label="Close project details"
                  onClick={() => setSelectedNodeId(null)}
                    className="rounded-2xl border border-white/60 bg-white/55 p-2 text-slate-500 shadow-sm transition hover:scale-105 hover:text-slate-900 dark:border-cyan-900/70 dark:bg-black/80 dark:text-cyan-200 dark:hover:text-white"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {selectedProject.data?.description || selectedProject.data?.subtitle}
              </p>

              <div className="mt-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  <CodeBracketIcon className="h-4 w-4" />
                  Stack
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {projectStack(selectedProject).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-2xl border border-white/60 bg-gradient-to-r from-teal-50/90 via-sky-50/80 to-violet-50/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm dark:border-cyan-900/70 dark:bg-cyan-950/20 dark:bg-none dark:text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {selectedProject.data?.navigateTo && (
                  <button
                    type="button"
                    onClick={() => navigate(selectedProject.data.navigateTo)}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-teal-200 via-sky-200 to-violet-200 px-4 py-2 text-sm font-bold text-slate-800 shadow-lg shadow-teal-100/40 transition hover:scale-[1.02] dark:from-cyan-500 dark:via-fuchsia-500 dark:to-amber-400 dark:text-zinc-950 dark:shadow-black/50"
                  >
                    View Project
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </button>
                )}
                {selectedProject.data?.githubUrl && (
                  <a
                    href={selectedProject.data.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/55 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:scale-[1.02] hover:text-teal-700 dark:border-cyan-900/70 dark:bg-black/70 dark:text-cyan-100"
                  >
                    GitHub
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </aside>
          </Panel>
        )}
      </ReactFlow>
    </div>
  );
}
