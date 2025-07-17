import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core';

@Component({
  tag: 'ref-button',
  styleUrl: 'Button.scss',
  shadow: true,
})
export class Button {
  /** Button type: button, submit, or reset */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /** Button variant */
  @Prop() variant: 'primary' | 'secondary' | 'outline' = 'primary';

  /** Button size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Disabled state */
  @Prop() disabled: boolean = false;

  /** Emits click event */
  @Event() buttonClick: EventEmitter<MouseEvent>;

  private handleClick = (event: MouseEvent) => {
    if (!this.disabled) {
      this.buttonClick.emit(event);
    }
  };

  render() {
    return (
      <Host>
        <button
          type={this.type}
          class={`tui-btn tui-btn-${this.variant} tui-btn-${this.size}`}
          disabled={this.disabled}
          onClick={this.handleClick}
        >
          <slot />
        </button>
      </Host>
    );
  }
}