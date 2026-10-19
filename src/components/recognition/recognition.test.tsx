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
  it("renders achievements and photo trigger when image exists", () => {
    render(<Recognition />);
    for (const value of [
      "CHAMPIONS",
      "GenZipher Hackathon",
      "1ST RUNNERS-UP",
      "MoraXtreme 10.0",
      "Team Hexa 404",
      "Cre8X 3.0",
      "Team Sputnik",
      "J’PuraXtreme 3.0",
    ]) {
      expect(screen.getByText(value)).toBeInTheDocument();
    }
    expect(screen.getAllByText("FINALIST")).toHaveLength(2);
    expect(screen.getAllByText("Team CodeStormers")).toHaveLength(2);

    expect(
      screen.getByRole("button", { name: "Open GenZipher Hackathon photo" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Open MoraXtreme 10.0 photo" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Open Cre8X 3.0 photo" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Open J’PuraXtreme 3.0 photo" }),
    ).toBeInTheDocument();
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
