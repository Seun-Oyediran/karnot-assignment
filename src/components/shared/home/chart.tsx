import {
  calculatePriceChange,
  formatMoney,
  formatTooltipTime,
} from "@/lib/utils";
import React, { Fragment, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { Loader, RenderIf } from "..";

interface IProps {
  data: Array<{
    time: string;
    timestamp: number;
    data: number;
  }>;
  oldPrice?: number;
  isLoading?: boolean;
}

const CustomTooltip = (props: any) => {
  return (
    <div className="app_bar_chart_custom_tooltip flex flex-col gap-3">
      {props?.payload?.map((item: any, index: number) => {
        const priceChange = calculatePriceChange(
          props?.oldPrice,
          item?.payload?.data
        );

        return (
          <Fragment key={index}>
            <h3 className="app_bar_chart_custom_tooltip__time">
              {formatTooltipTime(item?.payload?.timestamp)}
            </h3>

            <div className="app_bar_chart_custom_tooltip__ctt">
              <p className="app_bar_chart_custom_tooltip__price">
                <span>$</span> {formatMoney(item?.payload?.data)}
              </p>

              <p className="app_bar_chart_custom_tooltip__price">
                <span className={priceChange < 0 ? "minus" : "plus"}>
                  {priceChange < 0 ? "-" : "+"}
                </span>{" "}
                {Math.abs(priceChange).toFixed(2)} <span>%</span>
              </p>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export function Chart(props: IProps) {
  const { data, oldPrice, isLoading } = props;
  const [loading, setLoading] = useState(true);

  return (
    <div className="app_chart_con">
      <RenderIf condition={!!isLoading || loading}>
        <div className="app_chart_con__loader">
          <Loader />
        </div>
      </RenderIf>
      <ResponsiveContainer width="100%" aspect={650 / 400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="7 7" strokeOpacity={0.1} />
          <XAxis dataKey="time" minTickGap={100} />

          <YAxis type="number" domain={["auto", "auto"]} hide />
          <Tooltip
            content={(props) => (
              <CustomTooltip oldPrice={oldPrice} {...props} />
            )}
            wrapperClassName="app_bar_chart_tooltip_wrapper"
            accessibilityLayer={true}
          />

          <Line
            type="monotone"
            dataKey="data"
            stroke="#358ff6"
            dot={false}
            animationDuration={1000}
            onAnimationStart={() => {
              setLoading(true);
            }}
            onAnimationEnd={() => {
              setLoading(false);
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
