import * as RUITabs from "@radix-ui/react-tabs";
import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";

interface TabsProps {
  children?: ReactNode;
  value?: string;
}

export default function Tabs({ children, value }: TabsProps) {
  return (
    <RUITabs.Root value={value}>
      <RUITabs.List {...stylex.props(styles.container)}>
        {children}
      </RUITabs.List>
    </RUITabs.Root>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    gap: "3.5rem",
  },
});
