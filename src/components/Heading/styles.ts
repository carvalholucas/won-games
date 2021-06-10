import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from '.'

const wrapperModifiers = {
    small: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.medium};

        &::after {
            width: 3rem;
        }
    `,

    medium: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.xlarge};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}
    `,

    lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
        border-left: 0.7rem solid ${theme.colors[lineColor]};
        padding-left: ${theme.spacings.xxsmall};
    `,

    lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
        position: relative;
        margin-bottom: ${theme.spacings.medium};

        &::after {
            content: '';
            border-bottom: 0.5rem solid ${theme.colors[lineColor]};
            bottom: -1rem;
            left: 0;
            position: absolute;
            width: 5rem;
        }
    `
}

export const Wrapper = styled.h2<HeadingProps>`
    ${({ theme, color, lineLeft, lineBottom, lineColor, size }) => css`
        color: ${theme.colors[color!]};
        font-size: ${theme.font.sizes.xxlarge};

        ${media.greaterThan('medium')`
            font-size: ${theme.font.sizes.xxlarge};
        `}

        ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
        ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
        ${!!size && wrapperModifiers[size](theme)}
    `}
`