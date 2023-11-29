type BalanceChartProps =
  | {
      prices: Array<number[]>;
      market_caps: Array<number[]>;
      total_volumes: Array<number[]>;
    }
  | undefined;

export { type BalanceChartProps };
