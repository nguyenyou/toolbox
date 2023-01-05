import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Box",
  component: Box,
  tags: ["docsPage"],
};

export default meta;

export const Primary = {
  render: () => (
    <Box background="red-50" height="3.5" color="red-400" display="flex" alignItems="center" justifyContent="center">
      Box
    </Box>
  ),
};
