import * as RUITabs from "@radix-ui/react-tabs";
import * as stylex from "@stylexjs/stylex";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface TabProps<C extends ElementType = "div"> {
  children?: ReactNode;
  component?: C;
  value: string;
}

export default function Tab<C extends ElementType = "div">({
  children,
  component,
  value,
  ...rest
}: TabProps<C> & ComponentPropsWithoutRef<C>) {
  const Component = component ?? "div";

  return (
    <RUITabs.Trigger asChild value={value}>
      <Component {...stylex.props(styles.container)} {...rest}>
        {children}
      </Component>
    </RUITabs.Trigger>
  );
}

const styles = stylex.create({
  container: {
    color: {
      default: "oklch(100% 0% 0deg / 40%)",
      ":hover:not([data-state=active])": "oklch(100% 0% 0deg / 70%)",
      ":is([data-state=active])": "oklch(100% 0% 0deg)",
    },
    fontWeight: 700,
    position: "relative",
    textDecoration: "none",
    transitionDuration: "200ms",
    transitionProperty: "color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    "::before": {
      bottom: "-1rem",
      content: "",
      left: "-1rem",
      position: "absolute",
      right: "-1rem",
      top: "-1rem",
    },
  },
});
