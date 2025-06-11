import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export type AnyLink = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  href?: string;
  to?: string;
}
