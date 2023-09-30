"use client";

import { useState } from "react";
import styles from "./page.module.css";
import {
  CircularInput,
  CircularTrack,
  CircularProgress,
  CircularThumb,
} from "react-circular-input";

export default function Home() {
  const [value, setValue] = useState(0.25);

  return (
    <main className={styles.container}>
      <h1>Circular Input Range</h1>
      <div className={styles.area}>
        <div className={styles.circle}>
          <CircularInput value={value} onChange={setValue}>
            <CircularTrack stroke="transparent" />
            <CircularProgress strokeWidth="30" stroke="#F76E7C" />
            <CircularThumb r="10" fill="#3D5A80" />
          </CircularInput>
          <div className={styles.circleValue}>
            <span>{Math.round(value * 100)}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
