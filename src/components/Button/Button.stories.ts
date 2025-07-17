import { html } from 'lit';

export default {
  title: 'Components/Button',
  component: 'Button',
  argTypes: {
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    buttonClick: { action: 'buttonClick' },
  },
};

const Template = ({ type, variant, size, disabled, slot }) => html`
  <Button
    type=${type}
    variant=${variant}
    size=${size}
    ?disabled=${disabled}
    @buttonClick=${(e: MouseEvent) => console.log('Clicked', e)}
  >
    ${slot}
  </Button>
`;

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false,
  slot: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
  slot: 'Secondary Button',
};

export const Outline = Template.bind({});
Outline.args = {
  ...Primary.args,
  variant: 'outline',
  slot: 'Outline Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
  slot: 'Disabled Button',
};