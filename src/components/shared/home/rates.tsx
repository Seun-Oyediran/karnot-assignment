import React from "react";

export function Rates() {
  return (
    <div className="app_main_page__ctt__info">
      <div className="app_main_page__ctt__info__item">
        <p className="app_main_page__ctt__info__item__label">Max records</p>

        <p className="app_main_page__ctt__info__item__value">
          2 times increase to the last month
        </p>
      </div>
      <div className="app_main_page__ctt__info__item">
        <p className="app_main_page__ctt__info__item__label">
          Comparitive rates
        </p>

        <p className="app_main_page__ctt__info__item__value">
          <span className="app_main_page__ctt__info__item__value__left">+</span>
          12.83{" "}
          <span className="app_main_page__ctt__info__item__value__right">
            %
          </span>
        </p>
      </div>
    </div>
  );
}
