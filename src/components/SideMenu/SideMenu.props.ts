import { DetailedHTMLProps, HTMLAttributes } from "react";

export type SideMenuProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    isActiveMobile: boolean;
    setIsActiveMobile: () => void;
};
