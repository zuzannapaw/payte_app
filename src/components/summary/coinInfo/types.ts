type CoinInfoProps = {
  /**
   * The label of the component
   */
  label: string;
  /**
   * The content of the component
   */
  content: string | number;
  /**
   * Boolean that decreases font-size and image of the component
   */
  variantSmall?: boolean;
  /**
   * Optional image src
   */
  image?: string;
};

export { type CoinInfoProps };
