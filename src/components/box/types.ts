import React from "react";
import { ReactNode } from "react";

type BoxProps = {
  /**
   * The title of the component
   */
  title: string;
  /**
   * The content of the component
   */
  children: ReactNode | React.JSX.Element;
};

export { type BoxProps };
