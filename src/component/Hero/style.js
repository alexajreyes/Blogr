import styled from 'styled-components'

const BREAKPOINT = '420px'
const BREAKPOINT1 = '500px'
const BREAKPOINTDESKTOP = '840px'

export const Container = styled.section`
    padding: 8px 4%;
`
export const ContainerScreenDesktop = styled.div`
    h4 {
        @media (min-width: ${BREAKPOINTDESKTOP}) {
            text-align: end;
        }
    }
    p {
        @media (min-width: ${BREAKPOINTDESKTOP}) {
            text-align: justify;
        }
    }
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        display: flex;
        justify-content: space-between;
    }
`
export const ContainerDescriptionFeature = styled.div`
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        display: flex;
        flex-direction: column;
        width: 400px;
        h4 {
            @media (min-width: ${BREAKPOINTDESKTOP}) {
                text-align: end;
            }
        }
        p {
            @media (min-width: ${BREAKPOINTDESKTOP}) {
                text-align: justify;
            }
        }
    }
`
export const BackgroundImageIlustratorMobile = styled.img`
    width: 100%;
    margin-top: 16px;
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        width: 620px;
    }
`
export const ContainerInfoMobile = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 4%;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    background: #0d1223;
    height: 550px;
    margin: 160px 0 34px 0;
    @media (min-width: ${BREAKPOINT}) {
        height: 700px;
    }
    @media (min-width: ${BREAKPOINT1}) {
        height: 950px;
    }
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        display: flex;
        height: 230px;
        flex-direction: row;
    }
`
export const ImageMobile = styled.img`
    width: 100%;
    transform: translateY(-162px);
    z-index: 2;
    position: relative;
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        height: 280px;
        width: 270px;
        top: -39px;
        transform: translateY(0);
    }
`
export const ImageBackgroundCircle = styled.img`
    margin: 0 auto;
    width: 50%;
    transform: translateY(-367px);
    position: relative;
    z-index: 1;
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        right: 32%;
        width: 230px;
        height: 230px;
        top: -20px;
        transform: translateY(0);
    }
`
export const ContainerDescription = styled.div`
    padding: 8px 4%;
    transform: translateY(-320px);
    position: relative;
    z-index: 3;
    h4 {
        color: white;
    }
    p {
        color: white;
    }
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        width: 360px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateY(0);
    }
`
export const ContainerInfoDesktop = styled.div`
    padding: 8px 4%;
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        display: flex;
        justify-content: space-between;
    } ;
`
export const ImageBackgroundDesktop = styled.img`
    width: 100%;
    @media (min-width: ${BREAKPOINTDESKTOP}) {
        width: 620px;
    } ;
`
