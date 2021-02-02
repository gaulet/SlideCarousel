import { useState, useEffect } from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useBreakpoint = () => {
    const xs = useMediaQuery(useTheme().breakpoints.only('xs'));
    const sm = useMediaQuery(useTheme().breakpoints.only('sm'));
    const md = useMediaQuery(useTheme().breakpoints.only('md'));
    const lg = useMediaQuery(useTheme().breakpoints.only('lg'));
    const xl = useMediaQuery(useTheme().breakpoints.only('xl'));
    const [b, setB] = useState('')

    useEffect(() => {
        if (xs) setB("xs")
    }, [xs])

    useEffect(() => {
        if (sm) setB("sm")
    }, [sm])

    useEffect(() => {
        if (md) setB("md")
    }, [md])

    useEffect(() => {
        if (lg) setB("lg")
    }, [lg])

    useEffect(() => {
        if (xl) setB("xl")
    }, [xl])

    return b
}

const breakpointS = {
    xs: 2,
    sm: 3,
    md: 4,
    lg: 5,
    xl: 6,
}

export const useBreakpointBox = () => {
    const breakpoint = useBreakpoint('sm')
    const [slidesToShow, setSlideToShow] = useState(2)

    useEffect(() => {
        setSlideToShow(breakpointS[`${breakpoint}`])
    }, [breakpoint])

    return slidesToShow
}