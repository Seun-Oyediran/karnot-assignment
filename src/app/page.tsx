"use client";
import React, { useMemo, useState } from "react";
import {
  Chart,
  Footer,
  Header,
  Rates,
  TimeBar,
} from "@/components/shared/home";
import queries from "@/services/queries/data";
import { formatData } from "@/lib/utils";

export default function Home() {
  const [activeTime, setActiveTime] = useState(30);
  const { data, isLoading, isSuccess } = queries.read({ days: activeTime });

  const chartData = useMemo(
    () => formatData(data?.prices, activeTime),
    [data?.prices]
  );

  return (
    <main className="app_main_page">
      <div className="app_main_page__ctt">
        <Header />

        <Rates />

        <TimeBar
          activeTime={activeTime}
          onChange={(value) => {
            setActiveTime(value);
          }}
        />

        <Chart
          data={chartData}
          oldPrice={data?.prices?.[0]?.[1]}
          isLoading={isLoading}
        />

        <Footer
          oldPrice={data?.prices?.[0]?.[1]}
          newPrice={data?.prices?.[data?.prices?.length - 1][1]}
          time={data?.timestamp}
          isSuccess={isSuccess}
        />
      </div>
    </main>
  );
}
