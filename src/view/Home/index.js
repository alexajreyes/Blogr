import React from 'react'
import { Container, Wrapper } from './style'

import Hero from 'component/Hero'
import Header from 'component/Header'
import Footer from 'component/Footer'
function Home() {
    return (
        <>
            <Container>
                <Header />
                <Wrapper />
                <Hero />
                <Footer />
            </Container>
        </>
    )
}
export default React.memo(Home)
