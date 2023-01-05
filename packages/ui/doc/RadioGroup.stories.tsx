import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import type { CheckboxVariants } from "../components/Checkbox/Checkbox.css";
import { Box, RadioGroup } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof RadioGroup.Item> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "RadioGroup",
  component: RadioGroup.Item,
  tags: ["docsPage"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup.Item>;

type Props = {} & CheckboxVariants;

const CheckboxWithHooks = (props: Props) => {
  const [value, setValue] = useState("value1");

  return (
    <Box>
      <RadioGroup.Root value={value} onValueChange={(v) => setValue(v)}>
        <Box display="flex" alignItems="center" gap="2">
          <RadioGroup.Item color="primary" value="value1" id="r1" />
          <label className="Label" htmlFor="r1">
            Option 1
          </label>
        </Box>
        <Box display="flex" alignItems="center" gap="2">
          <RadioGroup.Item color="primary" value="value2" id="r2" />
          <label className="Label" htmlFor="r2">
            Option 2
          </label>
        </Box>
      </RadioGroup.Root>
    </Box>
  );
};

const Colors = () => {
  return (
    <Box>
      <RadioGroup.Root value="v1" onValueChange={(v) => v}>
        <Box display="flex" alignItems="center" gap="2">
          <RadioGroup.Item color="primary" value="v1" id="r3" />
          <label className="Label" htmlFor="r3">
            Primary
          </label>
        </Box>
      </RadioGroup.Root>
      <RadioGroup.Root value="v2" onValueChange={(v) => v}>
        <Box display="flex" alignItems="center" gap="2">
          <RadioGroup.Item color="secondary" value="v2" id="r4" />
          <label className="Label" htmlFor="r4">
            Secondary
          </label>
        </Box>
      </RadioGroup.Root>
    </Box>
  );
};

export const Basic: Story = {
  render: () => <CheckboxWithHooks />,
};

export const Color: Story = {
  render: () => <Colors />,
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup.Root disabled value="vdis" onValueChange={(v) => v}>
      <Box display="flex" alignItems="center" gap="2">
        <RadioGroup.Item color="primary" value="vdis" id="vdis" />
        <label className="Label" htmlFor="vdis">
          Disabled
        </label>
      </Box>
      <Box display="flex" alignItems="center" gap="2">
        <RadioGroup.Item color="primary" value="vdis2" id="vdis" />
        <label className="Label" htmlFor="vdis2">
          Disabled
        </label>
      </Box>
    </RadioGroup.Root>
  ),
};
