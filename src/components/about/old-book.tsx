"use client";

import React from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface OldBookProps {
  className?: string;
}

export function OldBook({ className = "" }: OldBookProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`group/book select-none ${className}`}
    >
      <div
        className={`relative inline-block transition-transform duration-500 ease-out group-hover/book:scale-105 group-hover/book:-translate-y-1.5 group-hover/book:-rotate-2 ${
          shouldReduceMotion ? "" : "animate-[bookFloat_6s_ease-in-out_infinite]"
        }`}
        style={{
          filter: "var(--book-shadow)",
        }}
      >
        <svg
          className="w-56 h-44 sm:w-64 sm:h-52 md:w-72 md:h-58 lg:w-80 lg:h-64 xl:w-[350px] xl:h-[280px] overflow-visible cursor-pointer"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Leather cover gradient */}
            <linearGradient
              id="leatherCoverGrad"
              x1="15"
              y1="20"
              x2="185"
              y2="140"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="var(--book-leather-light)" />
              <stop offset="40%" stopColor="var(--book-leather-mid)" />
              <stop offset="100%" stopColor="var(--book-leather-dark)" />
            </linearGradient>

            {/* Gold leaf foil gradient */}
            <linearGradient id="goldFoil" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--book-gold-bright)" />
              <stop offset="50%" stopColor="var(--book-gold-mid)" />
              <stop offset="100%" stopColor="var(--book-gold-deep)" />
            </linearGradient>

            {/* Parchment left leaf gradient */}
            <linearGradient
              id="parchmentLeft"
              x1="25"
              y1="40"
              x2="98"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="var(--book-parchment-mid)" />
              <stop offset="50%" stopColor="var(--book-parchment-top)" />
              <stop offset="90%" stopColor="var(--book-parchment-top)" />
              <stop offset="100%" stopColor="var(--book-parchment-shade)" />
            </linearGradient>

            {/* Parchment right leaf gradient */}
            <linearGradient
              id="parchmentRight"
              x1="102"
              y1="40"
              x2="175"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="var(--book-parchment-shade)" />
              <stop offset="10%" stopColor="var(--book-parchment-top)" />
              <stop offset="60%" stopColor="var(--book-parchment-top)" />
              <stop offset="100%" stopColor="var(--book-parchment-mid)" />
            </linearGradient>

            {/* Flipping page gradient */}
            <linearGradient
              id="flippingPageGrad"
              x1="100"
              y1="35"
              x2="170"
              y2="115"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="var(--book-parchment-shade)" />
              <stop offset="30%" stopColor="#fff9ec" />
              <stop offset="80%" stopColor="var(--book-parchment-top)" />
              <stop offset="100%" stopColor="var(--book-parchment-mid)" />
            </linearGradient>

            {/* Stacked parchment rim edge gradient */}
            <linearGradient id="pageBlockEdge" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--book-parchment-edge)" />
              <stop offset="50%" stopColor="#dcc59a" />
              <stop offset="100%" stopColor="#ab9063" />
            </linearGradient>

            {/* Crease shadow */}
            <filter id="creaseShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>

          {/* Underbody contact shadow */}
          <ellipse
            cx="100"
            cy="142"
            rx="76"
            ry="9"
            fill="#000000"
            fillOpacity="0.28"
          />

          {/* ================= LEATHER CASING ================= */}
          {/* Left leather cover */}
          <path
            d="M 16 52 Q 22 46 32 44 L 98 48 L 98 126 L 24 130 Q 16 128 14 120 L 12 60 Q 12 54 16 52 Z"
            fill="url(#leatherCoverGrad)"
            stroke="#220e03"
            strokeWidth="1.2"
          />

          {/* Right leather cover */}
          <path
            d="M 102 48 L 168 44 Q 178 46 184 52 L 188 60 Q 188 120 186 120 Q 184 128 176 130 L 102 126 Z"
            fill="url(#leatherCoverGrad)"
            stroke="#220e03"
            strokeWidth="1.2"
          />

          {/* Center spine ridge */}
          <path
            d="M 96 48 Q 100 45 104 48 L 104 126 Q 100 128 96 126 Z"
            fill="#2c1304"
            stroke="#160801"
            strokeWidth="0.8"
          />

          {/* Ornate Gold Corner Mounts */}
          {/* Top-Left Mount */}
          <path
            d="M 16 53 L 28 47 Q 27 54 22 58 L 15 58 Z"
            fill="url(#goldFoil)"
            stroke="#744e0b"
            strokeWidth="0.5"
          />
          <circle cx="20" cy="52" r="0.9" fill="#2a1506" />

          {/* Bottom-Left Mount */}
          <path
            d="M 14 119 L 22 115 Q 26 120 23 126 L 15 125 Z"
            fill="url(#goldFoil)"
            stroke="#744e0b"
            strokeWidth="0.5"
          />
          <circle cx="18" cy="121" r="0.9" fill="#2a1506" />

          {/* Top-Right Mount */}
          <path
            d="M 184 53 L 172 47 Q 173 54 178 58 L 185 58 Z"
            fill="url(#goldFoil)"
            stroke="#744e0b"
            strokeWidth="0.5"
          />
          <circle cx="180" cy="52" r="0.9" fill="#2a1506" />

          {/* Bottom-Right Mount */}
          <path
            d="M 186 119 L 178 115 Q 174 120 177 126 L 185 125 Z"
            fill="url(#goldFoil)"
            stroke="#744e0b"
            strokeWidth="0.5"
          />
          <circle cx="182" cy="121" r="0.9" fill="#2a1506" />

          {/* Gold tooling lines along leather perimeter */}
          <path
            d="M 32 46 L 20 54 L 17 118 L 26 126"
            stroke="url(#goldFoil)"
            strokeWidth="0.6"
            strokeDasharray="2 1.5"
            fill="none"
            opacity="0.65"
          />
          <path
            d="M 168 46 L 180 54 L 183 118 L 174 126"
            stroke="url(#goldFoil)"
            strokeWidth="0.6"
            strokeDasharray="2 1.5"
            fill="none"
            opacity="0.65"
          />

          {/* ================= STACKED PAGE BLOCKS ================= */}
          {/* Left page block edge */}
          <path
            d="M 22 55 L 26 122 L 20 120 L 16 57 Z"
            fill="url(#pageBlockEdge)"
          />
          <line x1="18" y1="72" x2="23" y2="71" stroke="#94774b" strokeWidth="0.5" />
          <line x1="19" y1="88" x2="24" y2="87" stroke="#94774b" strokeWidth="0.5" />
          <line x1="20" y1="104" x2="25" y2="103" stroke="#94774b" strokeWidth="0.5" />

          {/* Right page block edge */}
          <path
            d="M 178 55 L 184 57 L 180 120 L 174 122 Z"
            fill="url(#pageBlockEdge)"
          />
          <line x1="177" y1="72" x2="182" y2="71" stroke="#94774b" strokeWidth="0.5" />
          <line x1="176" y1="88" x2="181" y2="87" stroke="#94774b" strokeWidth="0.5" />
          <line x1="175" y1="104" x2="180" y2="103" stroke="#94774b" strokeWidth="0.5" />

          {/* Bottom stacked page rims */}
          <path
            d="M 24 122 Q 60 128 98 123 L 98 126 Q 60 131 22 125 Z"
            fill="#cbb387"
            stroke="#9e8354"
            strokeWidth="0.5"
          />
          <path
            d="M 102 123 Q 140 128 176 122 L 178 125 Q 140 131 102 126 Z"
            fill="#cbb387"
            stroke="#9e8354"
            strokeWidth="0.5"
          />

          {/* ================= OPEN PARCHMENT PAGES ================= */}
          {/* Left Page Leaf */}
          <path
            d="M 98 50 Q 60 45 25 54 L 26 122 Q 60 123 98 122 Z"
            fill="url(#parchmentLeft)"
            stroke="#c2a77b"
            strokeWidth="0.75"
          />

          {/* Right Page Leaf */}
          <path
            d="M 102 50 Q 140 45 175 54 L 174 122 Q 140 123 102 122 Z"
            fill="url(#parchmentRight)"
            stroke="#c2a77b"
            strokeWidth="0.75"
          />

          {/* Spine Valley / Crease Shadow */}
          <path
            d="M 96 48 Q 100 46 104 48 L 103 124 Q 100 126 97 124 Z"
            fill="#38210e"
            opacity="0.45"
            filter="url(#creaseShadow)"
          />

          {/* Typography etchings on Left Page */}
          <g
            opacity="0.4"
            stroke="var(--book-ink)"
            strokeWidth="1.1"
            strokeLinecap="round"
          >
            <line x1="38" y1="62" x2="64" y2="61" stroke="#8d3d22" strokeWidth="1.4" />
            <line x1="38" y1="70" x2="88" y2="69" />
            <line x1="38" y1="77" x2="86" y2="76" />
            <line x1="38" y1="84" x2="84" y2="83" />
            <line x1="38" y1="91" x2="86" y2="90" />
            <line x1="38" y1="98" x2="82" y2="97" />
            <line x1="38" y1="105" x2="68" y2="104" />
          </g>

          {/* Illuminated Gold Initial ("A") */}
          <rect
            x="36"
            y="58"
            width="8"
            height="8"
            rx="1"
            fill="#fff5d9"
            stroke="url(#goldFoil)"
            strokeWidth="0.8"
          />
          <path
            d="M 38 64 L 40 59 L 42 64 M 39 62.5 L 41 62.5"
            stroke="#75480f"
            strokeWidth="0.7"
            strokeLinecap="round"
          />

          {/* Sacred geometry / algorithmic glyph */}
          <circle
            cx="76"
            cy="104"
            r="5"
            stroke="url(#goldFoil)"
            strokeWidth="0.7"
            fill="none"
            opacity="0.6"
          />
          <polygon
            points="76,99 80.5,106.5 71.5,106.5"
            stroke="#75480f"
            strokeWidth="0.5"
            fill="none"
            opacity="0.5"
          />

          {/* Typography etchings on Right Page */}
          <g
            opacity="0.4"
            stroke="var(--book-ink)"
            strokeWidth="1.1"
            strokeLinecap="round"
          >
            <line x1="114" y1="62" x2="162" y2="63" />
            <line x1="114" y1="69" x2="164" y2="70" />
            <line x1="114" y1="76" x2="160" y2="77" />
            <line x1="114" y1="83" x2="162" y2="84" />
            <line x1="114" y1="90" x2="158" y2="91" />
            <line x1="114" y1="97" x2="162" y2="98" />
            <line x1="114" y1="104" x2="148" y2="105" />
          </g>

          {/* ================= GENTLY FLIPPING PARCHMENT LEAF ================= */}
          <g
            style={{ transformOrigin: "100px 65px" }}
            className={
              shouldReduceMotion
                ? ""
                : "animate-[pageTurnGentle_10s_cubic-bezier(0.4,0,0.2,1)_infinite]"
            }
          >
            <path
              d="M 101 49 Q 138 41 172 50 L 171 118 Q 138 119 101 121 Z"
              fill="url(#flippingPageGrad)"
              stroke="#c2a77b"
              strokeWidth="0.75"
              opacity="0.95"
            />
            <g
              opacity="0.32"
              stroke="var(--book-ink)"
              strokeWidth="1"
              strokeLinecap="round"
            >
              <line x1="112" y1="59" x2="158" y2="60" />
              <line x1="112" y1="66" x2="160" y2="67" />
              <line x1="112" y1="73" x2="156" y2="74" />
              <line x1="112" y1="80" x2="158" y2="81" />
              <line x1="112" y1="87" x2="152" y2="88" />
              <line x1="112" y1="94" x2="142" y2="95" />
            </g>
            <path
              d="M 172 50 Q 166 84 171 118"
              stroke="#ffffff"
              strokeWidth="0.9"
              strokeOpacity="0.5"
              fill="none"
            />
          </g>

          {/* ================= SILK BOOKMARK RIBBON ================= */}
          <path
            d="M 100 48 Q 103 72 98 94 Q 94 114 102 134 Q 106 144 114 148 Q 118 149 122 144 L 118 138 Q 109 133 107 120 Q 111 96 104 68 Z"
            fill="var(--green, #2fae63)"
            opacity="0.9"
          />
          <path
            d="M 114 148 L 122 144 L 120 148 L 113 151 Z"
            fill="url(#goldFoil)"
          />

          {/* ================= DUST PARTICLES ================= */}
          {!shouldReduceMotion && (
            <>
              <circle
                cx="140"
                cy="46"
                r="1.3"
                fill="var(--book-gold-bright)"
                className="animate-[floatDust1_5s_ease-out_infinite_0.5s]"
              />
              <circle
                cx="68"
                cy="38"
                r="1"
                fill="#fff3c9"
                className="animate-[floatDust2_6.5s_ease-out_infinite_2.2s]"
              />
              <circle
                cx="110"
                cy="34"
                r="0.9"
                fill="var(--book-gold-bright)"
                className="animate-[floatDust3_5.8s_ease-out_infinite_3.8s]"
              />
            </>
          )}
        </svg>
      </div>
    </div>
  );
}
