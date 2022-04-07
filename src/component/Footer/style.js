import styled from 'styled-components'

const BREAKPOINT = '840px'
export const Container = styled.div`
    padding: 8px 4%;
    margin-top: 32px;
    background: #08090c;
    height: auto;
    border-top-right-radius: 50px;
    @media (min-width: ${BREAKPOINT}) {
        display: flex;
    } ;
`
export const ContainerLogo = styled.div`
    margin-top: 34px;
    display: flex;
    justify-content: center;
`

export const ImageLogo = styled.img`
    height: 40px;
    width: 100px;
    margin-left: 48px;
`

export const ContainerProduct = styled.div`
    margin: 0 50px;
`
