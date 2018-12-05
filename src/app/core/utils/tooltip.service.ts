export class TooltipService {
  hideNeighbouringTooltip(states) {
    for (let i = 0; i < states.length; i++) {
      if (states[i].tooltip.isVisible) {
        states[i].tooltip.isVisible = false;
        break;
      }
    }
  }

  toggleTooltip(oldTooltipState, newTooltipState) {
    oldTooltipState.isVisible = newTooltipState.isVisible;
  }
}
