import React, { useState } from "react";
import { Info } from "../svgs";
import { Popover } from "react-tiny-popover";

const PopoverContent = () => {
  return (
    <div className="app_main_page__ctt__title__popover">
      <p className="app_main_page__ctt__title__popover__text">
        This is a bitcoin price chart built using coingecko API
      </p>
    </div>
  );
};

export function Header() {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="app_main_page__ctt__title">
      <h4 className="app_main_page__ctt__title__text">Overview</h4>

      <Popover
        isOpen={showPopover}
        positions={["bottom", "left", "right"]} // preferred positions by priority
        content={<PopoverContent />}
        align="end"
      >
        <button
          className="app_main_page__ctt__title__icon"
          onMouseEnter={() => {
            setShowPopover(true);
          }}
          onMouseLeave={() => {
            setShowPopover(false);
          }}
        >
          <Info />
        </button>
      </Popover>
    </div>
  );
}
