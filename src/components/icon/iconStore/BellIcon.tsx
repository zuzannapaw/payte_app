import { FC } from "react";
import { IconProps } from "../types";

export const BellIcon: FC<IconProps> = (props: IconProps): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M3.92385 1.07544C2.83068 2.16861 2.06413 3.52735 1.68701 5.00002M16.0142 1.07544C17.1074 2.16861 17.8739 3.52735 18.251 5.00002"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.47855 3.60028C7.41206 2.66677 8.67817 2.14233 9.99835 2.14233C11.3185 2.14233 12.5846 2.66677 13.5181 3.60028C14.4516 4.53379 14.9761 5.7999 14.9761 7.12007C14.9761 8.25818 15.1773 9.15291 15.4747 9.85234C15.773 10.554 16.5943 10.7934 17.2072 11.2471C18.1219 11.9243 17.9451 13.3733 17.1842 13.9359C17.1842 13.9359 15.9557 14.9995 9.99835 14.9995C4.04095 14.9995 2.81247 13.9359 2.81247 13.9359C2.0516 13.3733 1.87475 11.9243 2.78951 11.2471C3.40234 10.7934 4.22366 10.554 4.52203 9.85234C4.81944 9.15291 5.02061 8.25818 5.02061 7.12008C5.02061 5.7999 5.54505 4.53379 6.47855 3.60028Z"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.2373 17.7966C8.59851 18.4701 9.30925 18.9281 10.127 18.9281C10.9447 18.9281 11.6554 18.4701 12.0166 17.7966"
        stroke={props.color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
