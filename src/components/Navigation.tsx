import { VFC } from 'react'
import Link from 'next/link'
import styles from '~/styles/components/Navigation.module.scss'

const Navigation: VFC = () => {
  return (
    <nav className={styles.lNav}>
      {/*
      <ul className={styles.navList}>
        <li>
          <Link href={'/'}>
            <a className={styles.isActive}>HOME</a>
          </Link>
        </li>
        <li>
          <a href="">PROGRAM</a>
        </li>
      </ul>
      */}
      <ul className={styles.navSns}>
        <li className={styles.navSnsFacebook}>
          <a href="https://www.facebook.com/codeforjapan" target="_blank" rel="noreferrer noopener">
            <svg viewBox="0 0 10 20" width="20px" height="20px">
              <path
                d="M6.49636 20V10.8919H9.45801L9.89824 7.32578H6.49636V5.05432C6.49636 4.02527 6.77271 3.32071 8.19623 3.32071H10V0.141321C9.12236 0.0437405 8.2402 -0.0033761 7.35754 0.000187992C4.73972 0.000187992 2.94237 1.65823 2.94237 4.70204V7.31912H0V10.8852H2.9488V20H6.49636Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
        <li className={styles.navSnsTwitter}>
          <a href="https://twitter.com/codeforjapan" target="_blank" rel="noreferrer noopener">
            <svg viewBox="0 0 20 16" width="20px" height="20px">
              <path
                d="M20 1.9006C19.2645 2.21303 18.4641 2.43788 17.6397 2.52545C18.4956 2.02471 19.1366 1.23362 19.4424 0.300601C18.6392 0.771108 17.7593 1.10104 16.8417 1.27575C16.4582 0.872024 15.9944 0.5504 15.4792 0.330915C14.9639 0.11143 14.4083 -0.00121132 13.8469 9.82343e-06C11.5755 9.82343e-06 9.74883 1.81303 9.74883 4.03788C9.74883 4.3503 9.78729 4.66273 9.84978 4.96332C6.44874 4.78817 3.41546 3.18817 1.39887 0.738471C1.03143 1.3565 0.838874 2.06019 0.841245 2.77634C0.841245 4.17752 1.56472 5.41302 2.66795 6.13965C2.0178 6.11444 1.38287 5.93846 0.814806 5.62604V5.67575C0.814806 7.63787 2.22329 9.26391 4.10047 9.63787C3.74801 9.72803 3.38543 9.77415 3.02127 9.77515C2.75448 9.77515 2.5021 9.74912 2.24733 9.71361C2.76649 11.3136 4.27833 12.4757 6.0786 12.5136C4.67011 13.6 2.9059 14.2391 0.990266 14.2391C0.646557 14.2391 0.329287 14.2272 0 14.1894C1.81709 15.3373 3.97308 16 6.29492 16C13.8325 16 17.957 9.85089 17.957 4.51362C17.957 4.33847 17.957 4.16332 17.945 3.98817C18.7429 3.41303 19.4424 2.7006 20 1.9006Z"
                fill="white"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
