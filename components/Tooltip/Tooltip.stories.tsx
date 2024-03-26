import type { Meta, StoryObj } from "@storybook/react"
import {Tooltip} from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Tooltip",
  component: Tooltip,
  args: {},
}

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => <Tooltip{...args} />,
}

export default meta
