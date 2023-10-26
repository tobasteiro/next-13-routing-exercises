import React from "react";

import Link from "next/link";

const COLORS = ["lavender", "slateblue", "hotpink", "white"];

function ScreenSaverSelector() {
  return (
    <>
      <p>Choose your color:</p>
      <ol>
        {COLORS.map((color) => (
          <li key={color}>
            <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ScreenSaverSelector;
