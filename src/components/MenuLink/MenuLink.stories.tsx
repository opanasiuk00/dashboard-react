import type { Meta, StoryObj } from '@storybook/react';

import { MenuLink } from './MenuLink';
import { CustomersIcon, ProductIcon } from '../Icons';

const meta: Meta<typeof MenuLink> = {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'UI/Link',
	component: MenuLink,
};

export default meta;
type Story = StoryObj<typeof MenuLink>;

export const Link: Story = {
	render: () => <MenuLink icon={<ProductIcon />}>Product</MenuLink>,
};
export const Active: Story = {
	render: () => <MenuLink icon={<CustomersIcon />} className='active'>Customers</MenuLink>,
};