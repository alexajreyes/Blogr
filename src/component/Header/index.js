import React from 'react'
import {
    BackgroundImage,
    ContainerHeader,
    ContainerTitle,
    ContainerButton,
} from './style'
import Image from '../../assets/images/bg-pattern-intro.svg'
import Appbar from 'component/Appbar'
import Typography from 'component/Typography'
import Button from 'component/Button'

function Header() {
    return (
        <ContainerHeader>
            <BackgroundImage src={Image} alt='Background image' />
            <Appbar />
            <ContainerTitle>
                <Typography
                    variant='title2'
                    value='A modern publishing platform'
                    align='center'
                    mt='64px'
                />
                <Typography
                    variant='title3'
                    value='Grow your audience and build your online brand'
                    align='center'
                    mt='24px'
                />
                <ContainerButton>
                    <Button variant='outline'>Start for Free</Button>
                    <Button variant='filled'>Learn more</Button>
                </ContainerButton>
            </ContainerTitle>
        </ContainerHeader>
    )
}
export default React.memo(Header)
