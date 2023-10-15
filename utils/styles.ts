import { TailwindCssProp } from "../types";

export const convertCssPropToClasses = (cssProp: TailwindCssProp): string => {
  const classNames = [];

  for (const prop in cssProp) {
    classNames.push(cssProp[prop as keyof TailwindCssProp]);
  }

  return classNames.join(" ").replace(",", " ");
};
