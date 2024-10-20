import { useState } from "react";

import { AddCircleOutlineRounded, FullscreenSharp } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import clsx from "clsx";
import "./App.css";
import Navigation from "./components/Navigation";
import LineGraph from "./components/Line";

const NAVLINKS = [
  { key: "summary", label: "Summary" },
  { key: "chart", label: "Chart" },
  { key: "statistics", label: "Statistics" },
  { key: "analysis", label: "Analysis" },
  { key: "settings", label: "Settings" },
];

const DURATIONS = [
  { key: "1d", label: "1d" },
  { key: "3d", label: "3d" },
  { key: "1w", label: "1w" },
  { key: "1m", label: "1m" },
  { key: "6m", label: "6m" },
  { key: "1y", label: "1y" },
  { key: "max", label: "Max" },
];

function App() {
  const [selectedNav, setSelectedNav] = useState(1);
  const [selectedDuration, setSelectedDuration] = useState("1y");

  const handleNavChange = (event, newValue) => {
    setSelectedNav(newValue);
  };

  const handleDurationChange = (value) => {
    setSelectedDuration(value);
  };

  return (
    <div className="w-[920px]">
      <div className="flex">
        <Typography
          variant="h1"
          align="left"
          className="text-[70px] font-normal"
        >
          63,179.71
        </Typography>
        <Typography
          variant="caption"
          className="text-2xl font-normal text-[#BDBEBF]"
        >
          USD
        </Typography>
      </div>
      <Typography
        variant="body1"
        align="left"
        className="text-[#67BF6B] mt-[10px]"
      >
        + 2,161.42 (3.54%)
      </Typography>
      <Navigation
        value={selectedNav}
        onChange={handleNavChange}
        navLinks={NAVLINKS}
      />
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        className="mt-[60px] mb-7"
      >
        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            className="normal-case text-[#6F7177]"
            startIcon={<FullscreenSharp />}
          >
            Fullscreen
          </Button>
          <Button
            variant="text"
            className="normal-case text-[#6F7177]"
            startIcon={<AddCircleOutlineRounded />}
          >
            Contained
          </Button>
        </Stack>

        <Stack direction="row" spacing={1}>
          {DURATIONS.map(({ key, label }) => (
            <Button
              key={key}
              variant={selectedDuration === key ? "contained" : "text"}
              className={clsx("normal-case text-[#6F7177] min-w-12", {
                "bg-[#4B40EE] text-white": selectedDuration === key,
              })}
              onClick={() => handleDurationChange(key)}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </Stack>
      <div className="h-[460px]">
        <LineGraph selectedDuration={selectedDuration} />
      </div>
    </div>
  );
}

export default App;
