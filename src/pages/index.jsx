import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Michael Carpenter.
        </BigTitle>
        <Subtitle>I'm a Software Engineer at YouTube. Previously I ran the engineering for a start-up called FameBit which was acquired by Google in October of 2016.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="FameBit"
            link="https://famebit.com"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            FameBit is a marketplace for influencers and brands to meet up and make deals with each other. Originally founded by David Kierzkowski and Agnes Kozera, I was the VP of Engineering. FameBit ran on AWS using Ubuntu, PHP, MySQL, nginx, Docker, and more. Acquired by Google in October of 2016.
          </ProjectCard>
          <ProjectCard
            title="Zenwerx"
            link=""
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            This site. My personal playground for hosting all my miscellaneous projects over since 2000 when I thought registering my own domain would make me rich!
          </ProjectCard>
          <ProjectCard
            title="Github"
            link="https://github.com/kmcarpenter/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            My github. Not a lot here since I used to host all my personal code locally over the years, but I'm going to start filling it up more in the near future.
          </ProjectCard>
          <ProjectCard
            title="LinkedIn"
            link="https://www.linkedin.com/in/kmichaelcarpenter/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            My LinkedIn profile. Feel free to peruse my many jobs over the years and get a deeper look at my experience.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Michael Carpenter" />
          <AboutSub>
            I'm an experienced Canadian Software Engineer currently living in the Bay Area with my wife and son.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I knew I wanted to write software since I discovered BASIC on my family PC when I was s young lad. When I started high school
          in the early 90's it turned out there was other people whoe liked making computers do things too! Soon after that discovery
          the Internet became a thing and us nerds got popular pretty quick. Ever since then I've been riding the ups and downs of
          Software Engineering and there's no end in sight!
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="https://www.linkedin.com/in/kmichaelcarpenter/">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/kmcarpenter_">Twitter</a> &{' '}
            <a href="https://www.instagram.com/mcarpenter_/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          Content &copy; 2019 by Michael Carpenter.{' '}
          Design &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
