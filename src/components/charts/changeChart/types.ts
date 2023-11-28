/**
 * The data for chart from api
 */
type ChangeChartProps = {
  prices: Array<number[]>;
  market_caps: Array<number[]>;
  total_volumes: Array<number[]>;
} | undefined ;

export { type ChangeChartProps };
