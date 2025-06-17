import * as RUISelect from "@radix-ui/react-select";
import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";

import DownArrowIcon from "@/icons/down-arrow-icon";

interface SelectOption {
  label: string;
  value: string;
}

interface GenericSelectProps {
  onValueChange: (value: string) => void;
  options: SelectOption[];
  style?: StyleXStyles;
  triggerLabelMap: Record<string, string>;
  value: string;
}

export default function Select({
  value,
  onValueChange,
  options,
  triggerLabelMap,
  style,
}: GenericSelectProps) {
  return (
    <RUISelect.Root value={value} onValueChange={onValueChange}>
      <RUISelect.Trigger {...stylex.props(styles.selectTrigger, style)}>
        <RUISelect.Value aria-label={value}>
          {triggerLabelMap[value]}
        </RUISelect.Value>

        <RUISelect.Icon>
          <DownArrowIcon />
        </RUISelect.Icon>
      </RUISelect.Trigger>

      <RUISelect.Portal>
        <RUISelect.Content {...stylex.props(styles.selectContent)}>
          <RUISelect.Viewport {...stylex.props(styles.selectViewport)}>
            {options.map((option) => (
              <RUISelect.Item
                key={option.value}
                value={option.value}
                {...stylex.props(styles.selectItem)}
              >
                <RUISelect.ItemText>{option.label}</RUISelect.ItemText>
              </RUISelect.Item>
            ))}
          </RUISelect.Viewport>
        </RUISelect.Content>
      </RUISelect.Portal>
    </RUISelect.Root>
  );
}

const styles = stylex.create({
  selectTrigger: {
    alignItems: "center",
    backgroundColor: {
      default: "oklch(100% 0% 0deg / 10%)",
      ":hover": "oklch(100% 0% 0deg / 20%)",
    },
    // eslint-disable-next-line @stylexjs/valid-shorthands
    borderColor: "oklch(100% 0% 0deg / 30%)",
    borderRadius: "0.5rem",
    borderStyle: "solid",
    borderWidth: "1px",
    color: "oklch(100% 0% 0deg)",
    cursor: "pointer",
    display: "flex",
    gap: "0.25rem",
    justifyContent: "space-between",
    minHeight: "2.25rem",
    paddingInline: "1rem",
    transitionDuration: "200ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    width: "100%",
  },
  selectContent: {
    backdropFilter: "blur(30px)",
    backgroundColor: "oklch(30% 5% 285deg / 60%)",
    backgroundImage:
      'url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cfilter%20id%3D%22a%22%20width%3D%221%22%20height%3D%221%22%20x%3D%220%22%20y%3D%220%22%3E%3CfeTurbulence%20baseFrequency%3D%222%22%20numOctaves%3D%223%22%20stitchTiles%3D%22stitch%22%20type%3D%22fractalNoise%22%2F%3E%3CfeColorMatrix%20type%3D%22saturate%22%20values%3D%220%22%2F%3E%3CfeComponentTransfer%3E%3CfeFuncA%20slope%3D%22.1%22%20type%3D%22linear%22%2F%3E%3CfeFuncR%2F%3E%3CfeFuncG%2F%3E%3CfeFuncB%2F%3E%3C%2FfeComponentTransfer%3E%3C%2Ffilter%3E%3Cpath%20d%3D%22M0%200h100v100H0z%22%20filter%3D%22url%28%23a%29%22%2F%3E%3C%2Fsvg%3E")',
    borderRadius: "0.5rem",
    boxShadow:
      "0 5px  5px -3px oklch(0% 0% 0deg / 20%), \
       0 8px 10px  1px oklch(0% 0% 0deg / 14%), \
       0 3px 14px  2px oklch(0% 0% 0deg / 12%)",
    overflow: "hidden",
    zIndex: 1000,
  },
  selectViewport: {
    padding: "0.25rem",
  },
  selectItem: {
    alignItems: "center",
    backgroundColor: {
      ":is([data-highlighted])": "oklch(100% 0% 0deg / 10%)",
    },
    borderRadius: "0.5rem",
    cursor: "pointer",
    display: "flex",
    height: "2.25rem",
    justifyContent: "space-between",
    outline: "none",
    paddingInline: "1rem",
    transitionDuration: "200ms",
    transitionProperty: "background-color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    userSelect: "none",
  },
});
