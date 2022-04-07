import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Wrapper,
    NavBar,
    Overlay,
    ContainerButton,
    HR,
    ContainerButtons,
} from './style'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { Spin as HamburMenu } from 'hamburger-react'
import useWindowWidth from 'hook/useWindowWidth.hook'
import Button from 'component/Button'
const BREAKPOINT = 840

function AppBar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const WindowWidth = useWindowWidth()

    useEffect(() => {
        WindowWidth >= BREAKPOINT ? setMenuIsOpen(true) : setMenuIsOpen(false)
    }, [WindowWidth])

    // const closeMenu = () =>
    //     WindowWidth >= BREAKPOINT ? setMenuIsOpen(true) : setMenuIsOpen(false)
    return (
        <Container>
            <Wrapper>
                <Logo />
                <Overlay visible={menuIsOpen}>
                    <NavBar>
                        <Link to='#'>Company</Link>
                        <Link to='#'>Product</Link>
                        <Link to='#'>Connect</Link>
                        {WindowWidth < BREAKPOINT && <HR />}
                        <ContainerButtons>
                            <ContainerButton>
                                <Button mb='8px' variant='outline'>
                                    Login
                                </Button>
                            </ContainerButton>
                            <ContainerButton>
                                <Button variant='filled'>Sign Up</Button>
                            </ContainerButton>
                        </ContainerButtons>
                    </NavBar>
                </Overlay>
                {WindowWidth < BREAKPOINT && (
                    <HamburMenu
                        rounded
                        toggled={menuIsOpen}
                        toggle={setMenuIsOpen}
                        size={20}
                        color={'#eaeaea'}
                    />
                )}
            </Wrapper>
        </Container>
    )
}
export default React.memo(AppBar)
