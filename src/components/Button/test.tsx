import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button/>', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Click here</Button>)

    expect(screen.getByRole('button', { name: /Click here/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Click here</Button>)

    expect(screen.getByRole('button', { name: /Click here/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Click here</Button>)

    expect(screen.getByRole('button', { name: /Click here/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render a full width version', () => {
    renderWithTheme(<Button fullWidth>Click here</Button>)

    expect(screen.getByRole('button', { name: /Click here/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={
        <AddShoppingCart data-testid="icon" />
      }>Click here</Button>
    )

    expect(screen.getByText(/click here/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={
        <AddShoppingCart data-testid="icon" />
      }>Click here</Button>
    )

    expect(screen.getByText(/click here/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">Click here</Button>
    )

    expect(screen.getByRole('link', { name: /click here/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
