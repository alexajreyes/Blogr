import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Wrapper,
    NavBar,
    Overlay,
    ContainerButton,
    HR,
} from './style'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { Spin as HamburMenu } from 'hamburger-react'
import useWindowWidth from 'hook/useWindowWidth.hook'
import Button from 'component/Button'
const BREAKPOINT = 850

function AppBar() {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const WindowWidth = useWindowWidth()

    useEffect(() => {
        WindowWidth > BREAKPOINT ? setMenuIsOpen(true) : setMenuIsOpen(false)
    }, [WindowWidth])

    const closeMenu = () =>
        WindowWidth > BREAKPOINT ? setMenuIsOpen(true) : setMenuIsOpen(false)
    return (
        <Container>
            <Wrapper>
                <Logo />
                <Overlay visible={menuIsOpen}>
                    <NavBar>
                        <Link to='#' onClick={closeMenu}>
                            Company
                        </Link>
                        <Link to='#' onClick={closeMenu}>
                            Product
                        </Link>
                        <Link to='#' onClick={closeMenu}>
                            Connect
                        </Link>
                        {WindowWidth < BREAKPOINT && (
                            <>
                                <HR />
                                <ContainerButton>
                                    <Button variant='outline'>Login</Button>
                                </ContainerButton>
                                <ContainerButton>
                                    <Button variant='filled'>Sign Up</Button>
                                </ContainerButton>
                            </>
                        )}
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
