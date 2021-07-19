import emotionsData from "../../data/emotions";
import styles from "../../styles/emotions-card.module.css";
import dividerImg from "../../public/divider.png";

interface EmotionCardProps {
  id: string;
}

function EmotionCard({ id }: EmotionCardProps) {
  const data = emotionsData[id];
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.divider}>
          <img src="/divider.png" alt="" />
        </div>
        <p className={styles.subtitle1}>{data.subtitle1}</p>
        <p className={styles.subtitle2}>{data.subtitle2}</p>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Gifts</h2>
          <div className={styles.sectionBody}>
            <ul className={styles.plainList}>
              {data.gifts.map((gift) => (
                <li key={gift}>{gift}</li>
              ))}
            </ul>
          </div>
        </section>
        {data.questions && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Internal Questions</h2>
            <div className={styles.sectionBody}>
              <ul className={styles.plainList}>
                {data.questions.map((question, i) => (
                  <li key={i}>{question}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
        {data.statements && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>The Internal Statement</h2>
            <div className={styles.sectionBody}>
              <ul className={styles.plainList}>
                {data.statements.map((statement, i) => (
                  <li key={i}>{statement}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Signs of Obstruction</h2>
          <div className={styles.sectionBody}>{data.signsOfObstruction}</div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Practice</h2>
          <div className={styles.sectionBody}>
            <p>{data.practice}</p>
          </div>
        </section>
      </main>
      {/* <footer className={styles.footer}>
        For more, read Karla McLaren's book: The Language of Emotions
      </footer> */}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(emotionsData).map((id) => ({ params: { id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return { props: { id: params.id } };
}

export default EmotionCard;
