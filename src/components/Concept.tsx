import { VFC } from 'react'
import styles from '~/styles/components/DefaultSection.module.scss'
import conceptStyles from '~/styles/components/Concept.module.scss'

const Concept: VFC = () => {
  return (
    <section className={styles.lSection}>
      <h2 className={styles.sectionHeading}>CONCEPT</h2>
      <h3 className={styles.sectionHeadingSubBig}>ともに考え、ともにつくる</h3>
      <div className={styles.sectionText}>
        <div className={conceptStyles.TextBlock}>
          <p>東日本大震災から10年。</p>
          <p>自分に何ができるのか、テクノロジーで何かできるのか。</p>
          <p>必死に考え、手を動かしたあの時に日本のシビックテックは生まれました。</p>
        </div>
        <div className={conceptStyles.TextBlock}>
          <p>地震、台風、そして、新型コロナウイルス。</p>
          <p>危機が訪れるたびに、私たちの仲間は増えています。</p>
        </div>
        <div className={conceptStyles.TextBlock}>
          <p>Code for Japan Summitは、年に一度のシビックテックの祭典。</p>
          <p>他の地域の活動を知り、仲間とつながり、次の一歩を踏み出すためのイベントです。</p>
        </div>
        <div>
          <p>今年のテーマは「Rebirth（再生）」</p>
          <p>シビックテックにとって節目となるイベントを、東北の仲間とともに開催します。</p>
          <p>新しいシビックテックの芽を育てるために、一緒に未来を考えてみましょう。</p>
        </div>
      </div>
    </section>
  )
}

export default Concept
