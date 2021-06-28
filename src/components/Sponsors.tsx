import styles from '~/styles/components/Sponsors.module.scss'
import CfAizu from '~/assets/co-sp/CfAizu.png'
import CfAkita from '~/assets/co-sp/CfAkita.png'
import CfFukushima from '~/assets/co-sp/CfFukushima.png'
import CfIwate from '~/assets/co-sp/CfIwate.png'
import CfSendai from '~/assets/co-sp/CfSendai.gif'
import CfShiogama from '~/assets/co-sp/CfShiogama.jpeg'
import CfJLogo from '~/assets/CfJLogo.png'
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
      <h2 className={styles.sponsorsHeading}>主催</h2>
      <ul className={styles.sponsorsLogos}>
        <li>
          <Image src={CfJLogo} layout={'intrinsic'} alt="Code for Japan" />
        </li>
      </ul>
      <h2 className={styles.sponsorsHeading}>共催</h2>
      <ul className={styles.sponsorsLogos}>
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
          <Image src={CfShiogama} layout={'intrinsic'} alt="Code for Shiogama" />
        </li>
      </ul>
      {/*
      <h2 className={styles.sponsorsHeading}>後援</h2>
      <p className={styles.sponsorsName}>場所が入ります場所が入ります</p>
      */}
    </section>
  )
}

export default Sponsors