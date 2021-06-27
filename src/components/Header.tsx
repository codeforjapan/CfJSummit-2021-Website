import styles from '~/styles/components/Header.module.scss'
import { VFC } from 'react'

const Header: VFC = () => {
  return (
    <header>
      {/*
      <div className={styles.headerMovie}>
        <video src="./assets/movie/wave.mp4" playsInline muted autoPlay></video>
      </div>*/}
      <section className={styles.headerTitle}>
        <h1>Code for Japan Summit</h1>
        <h2>2020.9.18(sat.)-19(sun.)</h2>
        <p>@オンライン開催</p>
      </section>
    </header>
  )
}

export default Header
