import styles from "./PageHero.module.css";

type Props = {
  label?: string;
  title: string;
  lead?: string;
};

export function PageHero({ label, title, lead }: Props) {
  return (
    <header className={styles.hero}>
      <div className="container">
        {label ? <p className="section-label">{label}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
    </header>
  );
}
