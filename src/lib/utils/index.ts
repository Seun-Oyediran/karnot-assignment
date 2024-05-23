export function calculatePriceChange(oldPrice: number, newPrice: number) {
  const change = ((newPrice - oldPrice) / oldPrice) * 100;

  return change;
}

export function formatData(data: number[][], days: number) {
  if (!data) {
    return [];
  }
  const newData = data?.map((item) => ({
    timestamp: item[0],
    time: formatTimestamp(item[0], days),
    data: item[1],
  }));

  return newData;
}

function formatTimestamp(timestamp: number, days: number) {
  const date = new Date(timestamp);

  if (days !== 1) {
    const formattedDate = date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
    });

    return formattedDate;
  }

  const formattedDate = date.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });

  return formattedDate.replace(" ", ":00 ");
}

export function formatTooltipTime(timestamp: number) {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
  });

  const formattedTime = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate} ${formattedTime}`;
}

export function formatMoney(
  amount: number,
  locale: string = "en-US",
  minimumFractionDigits = 2,
  maximumFractionDigits = 2
): string {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(amount);
}

export function formatLastUpdated(_date?: number): string {
  const date = new Date(_date || "");
  const now = new Date();
  const dateStr = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (date.toDateString() === now.toDateString()) {
    return `Today, ${timeStr}`;
  }

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday, ${timeStr}`;
  }

  return `${dateStr}, ${timeStr}`;
}
