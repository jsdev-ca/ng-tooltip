interface Button {
  classNames: string;
  content: string;
}

interface Tooltip {
  body: string;
  classNames: string;
  isVisible: boolean;
}

export interface ButtonTooltipBundle {
  button: Button;
  tooltip: Tooltip;
}
