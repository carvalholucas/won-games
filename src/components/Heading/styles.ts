import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

const wrapperModifiers = {
    lineLeft: (theme: DefaultTheme) => css`
        border-left: 0.7rem solid ${theme.colors.secondary};
        padding-left: ${theme.spacings.xxsmall};
    `,

    lineBottom: (theme: DefaultTheme) => css`
        position: relative;
        margin-bottom: ${theme.spacings.medium};

        &::after {
            content: '';
            border-bottom: 0.5rem solid ${theme.colors.primary};
            bottom: -1rem;
            left: 0;
            position: absolute;
            width: 5rem;
        }
    `
}

export const Wrapper = styled.h2<HeadingProps>`
    ${({ theme, color, lineLeft, lineBottom }) => css`
        color: ${theme.colors[color!]};
        font-size: ${theme.font.sizes.xxlarge};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}

        ${lineLeft && wrapperModifiers.lineLeft(theme)}
        ${lineBottom && wrapperModifiers.lineBottom(theme)}
    `}
`