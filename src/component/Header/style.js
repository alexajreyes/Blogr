import styled from 'styled-components'

export const BackgroundImage = styled.img`
    position: absolute;
    top: -6%;
    right: -76%;
    z-index: 0;
    min-width: 244px;
    max-width: 900px;
    width: 900px;

    @media (min-width: 768px) {
        top: -10%;
        right: -10%;
    }
`
export const ContainerHeader = styled.div`
    padding: 8px 16px;
    height: 540px;
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
    display: flex;
    margin-top: 48px;
    gap: 8px;
`
