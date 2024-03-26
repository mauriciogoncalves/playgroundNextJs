import type { Meta, StoryObj } from "@storybook/react"
import SignInSide from "./SignInSide";

const meta: Meta<typeof SignInSide> = {
  title: "Login/Page/Login",
  component: SignInSide,
  args: {},
}

type Story = StoryObj<typeof SignInSide>

export const Default: Story = {
  render: (args) => <SignInSide />,
}

export default meta
