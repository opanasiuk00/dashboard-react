import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type PopupProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    children: ReactNode;
    isActive: boolean;
};
