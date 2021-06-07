import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'

const Concept: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>CONCEPT</h2>
      <h3 className={styles.sectionHeadingSubBig}>ともに考え、ともにつくる</h3>
      <p className={styles.sectionText}>
        SNSを見ると、世の中は不満で溢れています。
        <br />
        確かに、社会の課題は大きく、一人の力では弱いかもしれません。しかし、誰かが動きはじめることで兆しが見え、人々がつながり、大きなうねりになり、社会を変えていくことができます。
        <br />
        <br />
        国内にも、海外にも、テクノロジーで社会課題を解決しようとしている多くの仲間たちがいます。
        <br />
        <br />
        Code for Japan
        Summitは、年に一度のシビックテックの祭典。他の地域の活動を知り、仲間とつながり、次の一歩を踏み出すためのイベントです。
        <br />
        <br />
        今年のテーマは「Re:DESIGN」
        <br />
        世界が大きく変わっていく今だからこそ、少し立ち止まって一緒に未来を考えてみましょう。
      </p>
    </section>
  )
}

export default Concept
