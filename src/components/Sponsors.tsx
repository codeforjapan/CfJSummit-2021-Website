import styles from '~/styles/components/Sponsors.module.scss'
const Sponsors = () => {
  return (
    <section className={styles.lSponsors}>
      <div className={styles.logoSmall}>
        <img src="./assets/img/2020/logo_small.png" alt="Re:Design" />
      </div>
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
      <h2 className={styles.sponsorsHeading}>主催</h2>
      <ul className={styles.sponsorsLogos}></ul>
      <h2 className={styles.sponsorsHeading}>共催</h2>
      <ul className={styles.sponsorsLogos}></ul>
      <h2 className={styles.sponsorsHeading}>後援</h2>
      <p className={styles.sponsorsName}>場所が入ります場所が入ります</p>
    </section>
  )
}

export default Sponsors
