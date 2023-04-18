import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export type ButtonProps = DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    children: ReactNode;
};
