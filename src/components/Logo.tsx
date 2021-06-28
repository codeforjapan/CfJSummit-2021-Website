import { VFC } from 'react'
import styles from '~/styles/components/LogoSection.module.scss'
import Image from 'next/image'
import LogoPNG from '~/assets/cfj-summit-2021_logo_rectangle-white.png'

const Logo: VFC = () => {
  return (
    <section className={styles.lLogo}>
      <Image src={LogoPNG} layout={'intrinsic'} alt={'rebirth'} />
    </section>
  )
}

export default Logo
