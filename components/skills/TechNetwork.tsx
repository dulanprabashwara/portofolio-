"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { TechNode, TechEdge } from "@/types/portfolio";
import { DURATIONS, EASINGS, VIEWPORT } from "@/lib/animations";

interface TechNetworkProps {
  nodes: readonly TechNode[];
  edges: readonly TechEdge[];
}

type TechNodeId = TechNode["id"];

interface Coord {
  x: number;
  y: number;
}

// Normalized percentage coordinates (0-100) specifically designed for 0 edge crossings
const DESKTOP_POSITIONS: Record<TechNodeId, Coord> = {
  nextjs: { x: 18, y: 22 },
  react: { x: 14, y: 50 },
  typescript: { x: 24, y: 76 },
  websocket: { x: 46, y: 20 },
  docker: { x: 74, y: 18 },
  nodejs: { x: 60, y: 38 },
  "spring-boot": { x: 84, y: 38 },
  "rest-api": { x: 64, y: 64 },
  postgresql: { x: 64, y: 86 },
};

const MOBILE_POSITIONS: Record<TechNodeId, Coord> = {
  nextjs: { x: 30, y: 10 },
  react: { x: 70, y: 10 },
  typescript: { x: 50, y: 22 },
  websocket: { x: 26, y: 36 },
  docker: { x: 74, y: 36 },
  nodejs: { x: 30, y: 52 },
  "spring-boot": { x: 70, y: 52 },
  "rest-api": { x: 50, y: 68 },
  postgresql: { x: 50, y: 84 },
};

export function TechNetwork({ nodes, edges }: TechNetworkProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [announcedText, setAnnouncedText] = useState<string>("");

  const activeNodeId = hoveredNodeId ?? selectedNodeId;

  const nodeMap = useMemo(() => {
    const map = new Map<string, TechNode>();
    for (const n of nodes) {
      map.set(n.id, n);
    }
    return map;
  }, [nodes]);

  // Derive direct connections from techEdges (bidirectional)
  const connectedNodeIds = useMemo(() => {
    if (!activeNodeId) return new Set<string>();
    const set = new Set<string>();
    set.add(activeNodeId);

    for (const edge of edges) {
      if (edge.from === activeNodeId) {
        set.add(edge.to);
      } else if (edge.to === activeNodeId) {
        set.add(edge.from);
      }
    }
    return set;
  }, [activeNodeId, edges]);

  const activeNode = activeNodeId ? nodeMap.get(activeNodeId) : null;

  const connectedLabels = useMemo(() => {
    if (!activeNodeId) return [];
    const labels: string[] = [];
    for (const id of connectedNodeIds) {
      if (id !== activeNodeId) {
        const node = nodeMap.get(id);
        if (node) labels.push(node.label);
      }
    }
    return labels;
  }, [activeNodeId, connectedNodeIds, nodeMap]);

  const handleNodeClick = (node: TechNode) => {
    if (selectedNodeId === node.id) {
      setSelectedNodeId(null);
      setAnnouncedText("Technology selection cleared.");
    } else {
      setSelectedNodeId(node.id);
      const neighborLabels: string[] = [];
      for (const edge of edges) {
        if (edge.from === node.id) {
          const target = nodeMap.get(edge.to);
          if (target) neighborLabels.push(target.label);
        } else if (edge.to === node.id) {
          const target = nodeMap.get(edge.from);
          if (target) neighborLabels.push(target.label);
        }
      }
      setAnnouncedText(
        `${node.label} connects with ${neighborLabels.join(", ") || "no direct neighbors"}.`,
      );
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Network Header */}
      <div className="flex flex-col gap-2">
        <span className="font-display text-sm font-bold tracking-widest text-emerald-dark uppercase">
          Core Stack Relationships
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
          How the Stack Connects
        </h3>
        <p className="font-body text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          Explore how the core technologies used across my projects connect
          across frontend, backend, data, real-time systems, and deployment.
        </p>
      </div>

      {/* Screen Reader Live Announcement */}
      <div className="sr-only" aria-live="polite">
        {announcedText}
      </div>

      {/* Interactive Diagram Canvas */}
      <div
        className="relative w-full min-h-[580px] sm:min-h-[540px] lg:min-h-[520px] rounded-2xl bg-surface-light border border-mint/20 p-4 sm:p-6 overflow-hidden shadow-xs"
        onClick={() => setSelectedNodeId(null)}
      >
        {/* Subtle background grid pattern fragment */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Desktop SVG Connection Lines (viewBox 0 0 1000 600) */}
        <svg
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 600"
          aria-hidden="true"
        >
          {edges.map((edge) => {
            const from = DESKTOP_POSITIONS[edge.from];
            const to = DESKTOP_POSITIONS[edge.to];
            if (!from || !to) return null;

            const x1 = from.x * 10;
            const y1 = from.y * 6;
            const x2 = to.x * 10;
            const y2 = to.y * 6;

            const isEdgeActive =
              activeNodeId !== null &&
              (edge.from === activeNodeId || edge.to === activeNodeId);
            const isUnrelated =
              activeNodeId !== null &&
              edge.from !== activeNodeId &&
              edge.to !== activeNodeId;

            return (
              <motion.line
                key={`desktop-${edge.from}-${edge.to}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isEdgeActive ? "#10B981" : "#A7F3D0"}
                strokeWidth={isEdgeActive ? 2.5 : 1.5}
                strokeOpacity={isEdgeActive ? 0.95 : isUnrelated ? 0.12 : 0.4}
                initial={{
                  pathLength: shouldReduceMotion ? 1 : 0,
                  opacity: shouldReduceMotion ? 1 : 0,
                }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={VIEWPORT}
                transition={{
                  duration: shouldReduceMotion ? 0 : DURATIONS.reveal,
                  ease: EASINGS.smooth,
                }}
              />
            );
          })}
        </svg>

        {/* Mobile SVG Connection Lines (viewBox 0 0 500 700) */}
        <svg
          className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 500 700"
          aria-hidden="true"
        >
          {edges.map((edge) => {
            const from = MOBILE_POSITIONS[edge.from];
            const to = MOBILE_POSITIONS[edge.to];
            if (!from || !to) return null;

            const x1 = from.x * 5;
            const y1 = from.y * 7;
            const x2 = to.x * 5;
            const y2 = to.y * 7;

            const isEdgeActive =
              activeNodeId !== null &&
              (edge.from === activeNodeId || edge.to === activeNodeId);
            const isUnrelated =
              activeNodeId !== null &&
              edge.from !== activeNodeId &&
              edge.to !== activeNodeId;

            return (
              <motion.line
                key={`mobile-${edge.from}-${edge.to}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isEdgeActive ? "#10B981" : "#A7F3D0"}
                strokeWidth={isEdgeActive ? 2.5 : 1.5}
                strokeOpacity={isEdgeActive ? 0.95 : isUnrelated ? 0.12 : 0.4}
                initial={{
                  pathLength: shouldReduceMotion ? 1 : 0,
                  opacity: shouldReduceMotion ? 1 : 0,
                }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={VIEWPORT}
                transition={{
                  duration: shouldReduceMotion ? 0 : DURATIONS.reveal,
                  ease: EASINGS.smooth,
                }}
              />
            );
          })}
        </svg>

        {/* Positioned HTML Node Buttons (Rendered once with responsive CSS custom properties) */}
        {nodes.map((node, index) => {
          const dPos = DESKTOP_POSITIONS[node.id] || { x: 50, y: 50 };
          const mPos = MOBILE_POSITIONS[node.id] || { x: 50, y: 50 };

          const isSelected = activeNodeId === node.id;
          const isNeighbor =
            activeNodeId !== null &&
            connectedNodeIds.has(node.id) &&
            !isSelected;
          const isUnrelated =
            activeNodeId !== null && !connectedNodeIds.has(node.id);

          return (
            <motion.button
              key={node.id}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick(node);
              }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              onFocus={() => setHoveredNodeId(node.id)}
              onBlur={() => setHoveredNodeId(null)}
              style={
                {
                  "--dx": `${dPos.x}%`,
                  "--dy": `${dPos.y}%`,
                  "--mx": `${mPos.x}%`,
                  "--my": `${mPos.y}%`,
                } as React.CSSProperties
              }
              initial={{
                scale: shouldReduceMotion ? 1 : 0.85,
                opacity: shouldReduceMotion ? 1 : 0,
              }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={VIEWPORT}
              transition={{
                duration: shouldReduceMotion ? 0 : DURATIONS.normal,
                ease: EASINGS.smooth,
                delay: shouldReduceMotion ? 0 : 0.1 + index * 0.03,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 left-[var(--mx)] top-[var(--my)] lg:left-[var(--dx)] lg:top-[var(--dy)] min-h-[44px] px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-display text-sm sm:text-base font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald ${
                isSelected
                  ? "bg-surface-dark text-mint border-2 border-emerald shadow-[0_0_16px_rgba(16,185,129,0.3)] scale-105 z-20"
                  : isNeighbor
                    ? "bg-surface-light text-ink border-2 border-emerald/80 shadow-xs scale-102 z-10"
                    : isUnrelated
                      ? "opacity-35 bg-surface-light/80 text-text-muted border border-mint/20 z-0"
                      : "bg-surface-light text-ink border border-mint/30 shadow-2xs hover:border-emerald hover:text-emerald-dark z-1"
              }`}
              aria-label={`Highlight technologies related to ${node.label}`}
            >
              {node.label}
            </motion.button>
          );
        })}
      </div>

      {/* Relationship Summary Footer */}
      <div className="p-4 sm:p-5 rounded-xl bg-surface-light border border-mint/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold uppercase tracking-wider text-text-muted text-xs">
            {activeNode ? activeNode.label : "Interactive Stack"}
          </span>
          {activeNode && (
            <span className="text-xs px-2 py-0.5 rounded bg-emerald/15 text-emerald-dark font-semibold font-body">
              Active
            </span>
          )}
        </div>
        <div className="font-body text-text-muted">
          {activeNode ? (
            <span>
              Connects with:{" "}
              <strong className="text-ink font-semibold">
                {connectedLabels.join(" • ") || "None"}
              </strong>
            </span>
          ) : (
            <span className="text-text-muted italic">
              Select a technology to explore its connections.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
