import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRef, useState } from "react";
import { describe, expect, it } from "vitest";
import { achievements } from "@/data/achievements";
import { ImageLightbox } from "./image-lightbox";
import { Recognition } from "./recognition";

function LightboxHarness() {
  const [open, setOpen] = useState(true);
  const triggerRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <button ref={triggerRef}>Open Photo</button>
      <ImageLightbox
        achievement={{
          ...achievements[0],
          image: "/images/achievement.webp",
        }}
        open={open}
        onClose={() => setOpen(false)}
        triggerRef={triggerRef}
      />
    </div>
  );
}

describe("Recognition component", () => {
  it("renders achievements without invented photo controls", () => {
    render(<Recognition />);
    for (const value of [
      "CHAMPIONS",
      "GenZipher Hackathon",
      "Team CodeStormers",
      "1ST RUNNERS-UP",
      "MoraXtreme 10.0",
      "Team Hexa 404",
    ]) {
      expect(screen.getByText(value)).toBeInTheDocument();
    }
    expect(
      screen.queryByRole("button", { name: /open .* photo/i }),
    ).not.toBeInTheDocument();
  });

  it("supports lightbox opening, Escape closing, and focus restoration when image exists", async () => {
    const user = userEvent.setup();
    render(<LightboxHarness />);

    const dialog = screen.getByRole("dialog", { name: "GenZipher Hackathon" });
    expect(dialog).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(
      screen.queryByRole("dialog", { name: "GenZipher Hackathon" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open Photo" })).toHaveFocus();
  });
});
