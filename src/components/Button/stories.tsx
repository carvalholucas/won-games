import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        children: {
            type: 'string'
        },
        icon: {
            type: ''
        }
    }
} as Meta

export const Default: Story = (args) => <Button {...args}/>

Default.args = {
    children: 'Click here',
}

export const WithIcon: Story = (args) => <Button {...args}/>

WithIcon.args = {
    size: 'small',
    children: 'Click here',
    icon: <AddShoppingCart />
}