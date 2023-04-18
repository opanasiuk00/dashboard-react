import { DetailedHTMLProps, HTMLAttributes } from "react";

export type UserProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    image: string;
    name: string;
    position: string;
};
