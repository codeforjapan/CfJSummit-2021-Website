import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Navigation from '~/components/Navigation'
import { NextPage } from 'next'
import Header from '~/components/Header'
import Concept from '~/components/Concept'
import Logo from '~/components/Logo'
import Ticket from '~/components/Ticket'
import Slack from '~/components/Slack'
import CoC from '~/components/CoC'
import Accessibility from '~/components/Accessibility'
import Contact from '~/components/Contact'
import Sponsors from '~/components/Sponsors'
import Footer from '~/components/Footer'
import MetaHead from '~/components/MetaHead'
import Program from '~/components/Program'
import Scroll from '../styles/components/Scroll.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <MetaHead isTop />
      <div className={Scroll.box}>
        <Navigation nowPage={'Home'} />
        <Header />
        <div className={Scroll.arrowWrap} aria-hidden={true}>
          <div className={Scroll.arrowInner}>
            <p>SCROLL DOWN</p>
            <div className={Scroll.arrow} />
          </div>
        </div>
      </div>

      <Concept />
      <Logo />
      <Program />
      <Ticket />
      <Slack />
      <CoC />
      <Accessibility />
      <Contact />
      <Sponsors />
      <Footer />
    </>
  )
}

export default Home
