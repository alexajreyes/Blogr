import React from 'react'
import Typography from 'component/Typography'
import {
    BackgroundImageIlustratorMobile,
    Container,
    ImageMobile,
    ImageBackgroundCircle,
    ContainerInfoMobile,
    ContainerDescription,
    ContainerInfoDesktop,
    ImageBackgroundDesktop,
    ContainerScreenDesktop,
    ContainerDescriptionFeature,
} from './style'
import ImageIlustratorMobile from '../../assets/images/illustration-editor-mobile.svg'
import ImagePhone from '../../assets/images/illustration-phones.svg'
import ImageDesktop from '../../assets/images/illustration-laptop-mobile.svg'
import ImageCircle from '../../assets/images/bg-pattern-circles.svg'
export default function Hero() {
    return (
        <>
            <Container>
                <Typography
                    variant='title4'
                    value='Designed for the future'
                    align='center'
                    mt='24px'
                    mb='32px'
                />
                <ContainerScreenDesktop>
                    <BackgroundImageIlustratorMobile
                        src={ImageIlustratorMobile}
                        alt='Image Ilustratot Mobile'
                    />
                    <ContainerDescriptionFeature>
                        <Typography
                            variant='title4'
                            value='Indroducing an extensible editor'
                            align='center'
                            mt='24px'
                        />
                        <Typography
                            variant='body'
                            value='Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports mnagement of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
                            align='center'
                            mt='24px'
                        />

                        <Typography
                            variant='title4'
                            value='Robust content management'
                            align='center'
                            mt='32px'
                        />
                        <Typography
                            variant='body'
                            value='Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you´re in full control.'
                            align='center'
                            mt='16px'
                        />
                    </ContainerDescriptionFeature>
                </ContainerScreenDesktop>
            </Container>
            <ContainerInfoMobile>
                <ImageMobile src={ImagePhone} alt='image mobile' />
                <ImageBackgroundCircle src={ImageCircle} alt='image circle' />
                <ContainerDescription>
                    <Typography
                        variant='title4'
                        value='Robust content management'
                        align='center'
                    />
                    <Typography
                        variant='body'
                        value='Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you´re in full control.'
                        align='center'
                        mt='16px'
                    />
                </ContainerDescription>
            </ContainerInfoMobile>
            <ContainerInfoDesktop>
                <ImageBackgroundDesktop
                    src={ImageDesktop}
                    alt='image desktop'
                />
                <ContainerDescriptionFeature>
                    <Typography
                        variant='title4'
                        value='Free, open, simple'
                        align='center'
                        mt='32px'
                    />
                    <Typography
                        variant='body'
                        value='Blogr is a free and open source application backend by a large community of helpful developer. It supports features such as code syntax highlighting, RSS feeds, social media integration, thir-party commenting tools, and works seamlessly with Google analytics. The architecture is clean and is relatively easy to learn.'
                        align='center'
                        mt='24px'
                    />
                    <Typography
                        variant='title4'
                        value='Powerful tooling'
                        align='center'
                        mt='32px'
                    />
                    <Typography
                        variant='body'
                        value='Batteries inclued. we built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producin even the most complicated sites.'
                        align='center'
                        mt='24px'
                    />
                </ContainerDescriptionFeature>
            </ContainerInfoDesktop>
        </>
    )
}
