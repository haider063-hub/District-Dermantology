import { SITE } from "@/data/site";
import styles from "./SocialLinks.module.css";

const links = [
  {
    href: SITE.social.instagram,
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2Zm0 7.9A3.1 3.1 0 1 1 12 8.9a3.1 3.1 0 0 1 0 6.2Z" />
        <circle cx="17.5" cy="6.5" r="1.15" />
        <path d="M16.5 2.5h-9A4.5 4.5 0 0 0 3 7v9a4.5 4.5 0 0 0 4.5 4.5h9A4.5 4.5 0 0 0 21 16V7a4.5 4.5 0 0 0-4.5-4.5Zm2.9 13.5a2.9 2.9 0 0 1-2.9 2.9h-9A2.9 2.9 0 0 1 4.6 16V7A2.9 2.9 0 0 1 7.5 4.1h9A2.9 2.9 0 0 1 19.4 7v9Z" />
      </svg>
    ),
  },
  {
    href: SITE.social.twitter,
    label: "X (Twitter)",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M18.9 2.25h3.25l-7.1 8.12L23.5 21.75h-6.56l-5.14-6.72-5.88 6.72H2.66l7.6-8.68L.5 2.25h6.73l4.64 6.15 6.03-6.15Zm-1.14 17.5h1.8L6.4 4.1H4.47l13.29 15.65Z" />
      </svg>
    ),
  },
  {
    href: SITE.social.facebook,
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M14.5 22v-8.2h2.75l.4-3.2H14.5V8.55c0-.93.26-1.56 1.6-1.56H17.8V4.14C17.4 4.09 16.1 4 14.55 4 11.3 4 9.1 5.95 9.1 9.2v2.4H6.5v3.2h2.6V22h5.4Z" />
      </svg>
    ),
  },
] as const;

type Props = {
  className?: string;
};

export function SocialLinks({ className }: Props) {
  return (
    <ul className={`${styles.list} ${className ?? ""}`} aria-label="Social media">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
