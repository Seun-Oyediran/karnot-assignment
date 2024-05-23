import React from "react";
import { motion } from "framer-motion";

interface IProps {
  activeTime: number;
  onChange: (value: number) => void;
}

const data = [
  { id: 1, label: "24h", value: 1 },
  { id: 2, label: "Week", value: 7 },
  { id: 3, label: "Month", value: 30 },
];

export function TimeBar(props: IProps) {
  const { activeTime, onChange } = props;

  return (
    <div className="app_time_bar">
      {data.map((item) => {
        const active = activeTime === item.value;
        return (
          <button
            key={item.id}
            className={`app_time_bar__btn ${active ? "active" : ""}`}
            onClick={() => {
              onChange(item.value);
            }}
          >
            <div className="app_time_bar__btn__ctt">
              <p>{item.label}</p>
            </div>

            {active && (
              <motion.div
                className="app_time_bar__btn__bg"
                layoutId="app_time_bar"
              ></motion.div>
            )}
          </button>
        );
      })}
    </div>
  );
}
