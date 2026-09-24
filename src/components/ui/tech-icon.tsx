import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiSocketdotio,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiNeon,
  SiPrisma,
  SiMongodb,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiJenkins,
  SiGooglecloud,
  SiArduino,
  SiEspressif,
  SiStripe,
  SiRedis,
  SiGooglegemini,
  SiLeaflet,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { GrHeroku } from "react-icons/gr";
import { TbApi, TbNetwork } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { LuCpu, LuSparkles, LuCode } from "react-icons/lu";

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export function TechIcon({
  name,
  className = "h-3.5 w-3.5",
  ...props
}: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // Languages
  if (normalized === "javascript" || normalized === "js") {
    return <SiJavascript className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "typescript" || normalized === "ts") {
    return <SiTypescript className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "python") {
    return <SiPython className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "java") {
    return <FaJava className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "c") {
    return <SiC className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "html" || normalized === "html5") {
    return <SiHtml5 className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "css" || normalized === "css3") {
    return <SiCss className={className} aria-hidden="true" {...props} />;
  }

  // Frontend
  if (normalized.includes("react")) {
    return <SiReact className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("next")) {
    return <SiNextdotjs className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("tailwind")) {
    return (
      <SiTailwindcss className={className} aria-hidden="true" {...props} />
    );
  }
  if (normalized.includes("ui/ux") || normalized.includes("figma")) {
    return <SiFigma className={className} aria-hidden="true" {...props} />;
  }

  // Backend & Real-Time
  if (normalized === "node.js" || normalized === "node") {
    return <SiNodedotjs className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("express")) {
    return <SiExpress className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("spring")) {
    return <SiSpringboot className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("rest") || normalized.includes("api")) {
    return <TbApi className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("socket.io") || normalized === "socket") {
    return (
      <SiSocketdotio className={className} aria-hidden="true" {...props} />
    );
  }
  if (normalized.includes("websocket") || normalized.includes("stomp")) {
    return <TbNetwork className={className} aria-hidden="true" {...props} />;
  }

  // Data & Infrastructure
  if (normalized.includes("postgres")) {
    return <SiPostgresql className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("firebase") || normalized.includes("firestore")) {
    return <SiFirebase className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("supabase")) {
    return <SiSupabase className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "neon") {
    return <SiNeon className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("prisma")) {
    return <SiPrisma className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("mongo")) {
    return <SiMongodb className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "git") {
    return <SiGit className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "github") {
    return <SiGithub className={className} aria-hidden="true" {...props} />;
  }
  if (normalized === "gitlab") {
    return <SiGitlab className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("docker")) {
    return <SiDocker className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("jenkins")) {
    return <SiJenkins className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("heroku")) {
    return <GrHeroku className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("cloud run") || normalized.includes("gcp")) {
    return (
      <SiGooglecloud className={className} aria-hidden="true" {...props} />
    );
  }

  // Additional stack tools
  if (normalized.includes("arduino")) {
    return <SiArduino className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("esp")) {
    return <SiEspressif className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("stripe")) {
    return <SiStripe className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("redis")) {
    return <SiRedis className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("gemini")) {
    return (
      <SiGooglegemini className={className} aria-hidden="true" {...props} />
    );
  }
  if (normalized.includes("leaflet")) {
    return <SiLeaflet className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("azure")) {
    return <VscAzure className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("openrouter") || normalized.includes("ai")) {
    return <LuSparkles className={className} aria-hidden="true" {...props} />;
  }
  if (
    normalized.includes("matrix") ||
    normalized.includes("serial") ||
    normalized.includes("servo") ||
    normalized.includes("ws2812b") ||
    normalized.includes("a4988")
  ) {
    return <LuCpu className={className} aria-hidden="true" {...props} />;
  }

  return <LuCode className={className} aria-hidden="true" {...props} />;
}
