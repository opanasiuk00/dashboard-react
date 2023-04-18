import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'UI/HeaderMobile',
	component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Header1: Story = {
	render: () => <Header isActiveMobile={false} setIsActiveMobile={() => 1}>Product</Header>,
};
export const Active: Story = {
	render: () => <Header isActiveMobile={true} setIsActiveMobile={() => 1}>Product</Header>,
};