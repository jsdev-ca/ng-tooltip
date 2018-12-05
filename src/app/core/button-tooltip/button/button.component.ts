import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() classNames: string;
  @Input() content: string;
  @Input() isTooltipVisible: boolean;
  @Output() click = new EventEmitter();

  onClick(event) {
    event.stopPropagation();

    this.click.emit({
      isVisible: !this.isTooltipVisible
    });
  }
}
