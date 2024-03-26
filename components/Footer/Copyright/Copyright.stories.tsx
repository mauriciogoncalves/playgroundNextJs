import type { Meta, StoryObj } from "@storybook/react"
import { Copyright } from "./Copyright"

const meta: Meta<typeof Copyright> = {
  title: "Footer/Copyright",
  component: Copyright
}

type Story = StoryObj<typeof Copyright>

export const Default: Story = {
  render: (args) => <Copyright {...args} />,
}

export default meta
