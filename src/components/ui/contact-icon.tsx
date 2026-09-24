import React from "react";
import { LuMail, LuMapPin } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

interface ContactIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

export function ContactIcon({
  name,
  className = "h-4 w-4",
  ...props
}: ContactIconProps) {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes("email") || normalized.includes("mail")) {
    return <LuMail className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("linkedin")) {
    return <FaLinkedin className={className} aria-hidden="true" {...props} />;
  }
  if (normalized.includes("github")) {
    return <FaGithub className={className} aria-hidden="true" {...props} />;
  }
  if (
    normalized.includes("location") ||
    normalized.includes("map") ||
    normalized.includes("address")
  ) {
    return <LuMapPin className={className} aria-hidden="true" {...props} />;
  }

  return <LuMail className={className} aria-hidden="true" {...props} />;
}
