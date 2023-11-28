import { ReactNode } from "react";

type SideNavItemProps = {
  /**
   * The label of the component
   */
  label: string;
  /**
   * The path for a tag element
   */
  path: string;
  /**
   * The icon on the left side of the compoennt
   */
  icon: ReactNode | React.JSX.Element;
};

export { type SideNavItemProps };
