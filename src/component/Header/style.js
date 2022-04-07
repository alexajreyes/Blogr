import styled from 'styled-components'
const BREAKPOINT = '400px'
export const BackgroundImage = styled.img`
    position: absolute;
    top: -11%;
    right: -76%;
    z-index: 0;
    min-width: 244px;
    max-width: 1024px;
    width: 900px;

    @media (min-width: 768px) {
        top: -10%;
        right: -10%;
        width: 980px;
    }
`
export const ContainerHeader = styled.div`
    padding: 8px 4%;
    height: 430px;
    border-bottom-left-radius: 70px;
    background: rgb(252, 68, 62);
    background: linear-gradient(
        0deg,
        rgba(252, 68, 62, 1) 72%,
        rgba(252, 149, 62, 1) 100%
    );
`
export const ContainerTitle = styled.div`
    position: relative;
`
export const ContainerButton = styled.div`
    margin: 0 auto;
    width: 240px;
    display: flex;
    margin-top: 48px;
    gap: 4px;
    @media (min-width: ${BREAKPOINT}) {
        margin: 0 auto;
        width: 334px;
        display: flex;
        margin-top: 48px;
        gap: 8px;
    }
`
