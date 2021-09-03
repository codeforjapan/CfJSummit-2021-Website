import styles from '~/styles/components/Sponsors.module.scss'
import CfAizu from '~/assets/co-sp/CfAizu.png'
import CfAkita from '~/assets/co-sp/CfAkita.png'
import CfFukushima from '~/assets/co-sp/CfFukushima.png'
import CfIwate from '~/assets/co-sp/CfIwate.png'
import CfSendai from '~/assets/co-sp/CfSendai.gif'
import CfShiogama from '~/assets/co-sp/CfShiogama.jpeg'
import CfYamagata from '~/assets/co-sp/CfYamagata.jpg'
import CfJLogo from '~/assets/CfJLogo.png'
import RemoLogo from '~/assets/co/Remo.png'
import IntilaqLogo from '~/assets/co/INTILAQ.png'
import UDTalkLogo from '~/assets/sp/UDTalk.png'
import GrafferLogo from '~/assets/sp/Graffer.png'
import InfoLoungeLogo from '~/assets/sp/InfoLounge.png'
import UDCLogo from '~/assets/co/UDC.png'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <section className={styles.lSponsors}>
      {/*
      <h2 className={styles.sponsorsHeading}>プラチナパートナー</h2>
      <ul className={styles.sponsorsLogos}></ul>
      <h2 className={styles.sponsorsHeading}>ゴールドパートナー</h2>
      <ul className={styles.sponsorsLogos}></ul>
      <h2 className={styles.sponsorsHeading}>シルバーパートナー</h2>
      <ul className={styles.sponsorsLogos}></ul>
      <h2 className={styles.sponsorsHeading}>ブロンズパートナー</h2>
      <ul className={styles.sponsorsLogos}></ul>
      <h2 className={styles.sponsorsHeading}>メディアパートナー</h2>
      <ul className={styles.sponsorsLogos}></ul>
      */}
      <h2 className={styles.sponsorsHeading}>協賛</h2>
      <ul className={styles.sponsorsLogos}>
        <li>
          <a href="https://udtalk.jp/" target="_blank" rel="noreferrer noopener">
            <Image src={UDTalkLogo} layout={'intrinsic'} alt="UDTalk" />
          </a>
        </li>
        <li>
          <a href="https://info-lounge.jp/" target="_blank" rel="noreferrer noopener">
            <Image src={InfoLoungeLogo} layout={'intrinsic'} alt="InfoLounge" />
          </a>
        </li>
        <li>
          <a href="https://graffer.jp/" target="_blank" rel="noreferrer noopener">
            <Image src={GrafferLogo} layout={'intrinsic'} alt="Graffer" />
          </a>
        </li>
      </ul>
      <h2 className={styles.sponsorsHeading}>協力</h2>
      <ul className={styles.sponsorsLogos}>
        <li>
          <Image src={RemoLogo} layout={'intrinsic'} alt="Remo" />
        </li>
        <li>
          <Image src={IntilaqLogo} layout={'intrinsic'} alt="INTILAQ" />
        </li>
        <li>
          <Image src={UDCLogo} layout={'intrinsic'} alt="UDC" />
        </li>
      </ul>
      <h2 className={styles.sponsorsHeading}>主催</h2>
      <ul className={styles.sponsorsLogos}>
        <li>
          <Image src={CfJLogo} layout={'intrinsic'} alt="Code for Japan" />
        </li>
      </ul>
      <h2 className={styles.sponsorsHeading}>共催</h2>
      <ul className={styles.sponsorsLogos}>
        <li>
          <Image src={CfShiogama} layout={'intrinsic'} alt="Code for Shiogama" />
        </li>
        <li>
          <Image src={CfAizu} layout={'intrinsic'} alt="Code for Aizu" />
        </li>
        <li>
          <Image src={CfAkita} layout={'intrinsic'} alt="Code for Akita" />
        </li>
        <li>
          <Image src={CfFukushima} layout={'intrinsic'} alt="Code for Fukushima" />
        </li>
        <li>
          <Image src={CfIwate} layout={'intrinsic'} alt="Code for Iwate" />
        </li>
        <li>
          <Image src={CfSendai} layout={'intrinsic'} alt="Code for Sendai" />
        </li>
        <li>
          <Image src={CfYamagata} layout={'intrinsic'} alt="Code for Yamagata" />
        </li>
      </ul>
      <h2 className={styles.sponsorsHeading}>後援</h2>
      <ul className={styles.sponsorsLogos}>
        <li>
          <p className={styles.sponsorsName}>宮城県</p>
        </li>
        <li>
          <p className={styles.sponsorsName}>仙台市</p>
        </li>
        <li>
          <p className={styles.sponsorsName}>秋田県</p>
        </li>
        <li>
          <p className={styles.sponsorsName}>岩手県</p>
        </li>
        <li>
          <p className={styles.sponsorsName}>福島県</p>
        </li>
        <li>
          <p className={styles.sponsorsName}>総務省</p>
        </li>
      </ul>
    </section>
  )
}

export default Sponsors
