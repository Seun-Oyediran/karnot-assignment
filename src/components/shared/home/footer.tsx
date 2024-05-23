import { calculatePriceChange, formatLastUpdated } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup";
import { RenderIf } from "..";

interface IProps {
  oldPrice?: number;
  newPrice?: number;
  time?: number;
  isSuccess?: boolean;
}

export function Footer(props: IProps) {
  const { newPrice = 0, oldPrice = 0, time, isSuccess } = props;

  const priceChange = calculatePriceChange(oldPrice, newPrice);

  return (
    <div className="app_main_page__ctt__bottom">
      <div className="app_main_page__ctt__bottom__info">
        <RenderIf condition={priceChange > 0}>
          <span className="app_main_page__ctt__bottom__info__left">+</span>
        </RenderIf>

        <RenderIf condition={priceChange < 0}>
          <span className="app_main_page__ctt__bottom__info__left minus">
            -
          </span>
        </RenderIf>
        <CountUp
          className="app_main_page__ctt__bottom__info__text"
          end={Math.abs(priceChange)}
          decimals={2}
          duration={1}
        />
        {/* <h2 className="app_main_page__ctt__bottom__info__text">19.23</h2> */}
        <span className="app_main_page__ctt__bottom__info__right">%</span>
      </div>

      <div className="app_main_page__ctt__bottom__date">
        <p className="app_main_page__ctt__bottom__date__label">Last Updated</p>

        <p className="app_main_page__ctt__bottom__date__value">
          <RenderIf condition={!!isSuccess}>{formatLastUpdated(time)}</RenderIf>
        </p>
      </div>
    </div>
  );
}
