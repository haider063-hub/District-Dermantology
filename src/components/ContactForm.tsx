"use client";

import { FormEvent, useState } from "react";
import { doctors, locations, SITE } from "@/data/site";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [doctorOpen, setDoctorOpen] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("District Dermatology website inquiry");
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone")}`,
        `Location: ${data.get("location")}`,
        `Doctor: ${data.get("doctor")}`,
        "",
        String(data.get("comments") || ""),
      ].join("\n"),
    );
    setSent(true);
    window.location.href = `mailto:info@districtderm.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <p className={styles.note}>
        If you have questions or comments, fill out the form below. This form is
        not for private health information—call {SITE.phoneDisplay} for clinical
        matters.
      </p>

      <label>
        Location
        <span
          className={`${styles.selectWrap} ${locationOpen ? styles.selectOpen : ""}`}
        >
          <select
            name="location"
            required
            defaultValue=""
            onMouseDown={() => setLocationOpen(true)}
            onBlur={() => setLocationOpen(false)}
            onChange={() => setLocationOpen(false)}
          >
            <option value="" disabled>
              Select one
            </option>
            {locations.map((loc) => (
              <option key={loc.slug} value={loc.addressDisplay}>
                {loc.addressLines[0]}, {loc.city}
              </option>
            ))}
          </select>
          <span className={styles.caret} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 4.25L6 7.75L9.5 4.25"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </label>

      <label>
        Doctor
        <span
          className={`${styles.selectWrap} ${doctorOpen ? styles.selectOpen : ""}`}
        >
          <select
            name="doctor"
            required
            defaultValue=""
            onMouseDown={() => setDoctorOpen(true)}
            onBlur={() => setDoctorOpen(false)}
            onChange={() => setDoctorOpen(false)}
          >
            <option value="" disabled>
              Select one
            </option>
            {doctors.map((doc) => (
              <option key={doc.slug} value={`${doc.name}, ${doc.credentials}`}>
                {doc.name}, {doc.credentials}
              </option>
            ))}
          </select>
          <span className={styles.caret} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2.5 4.25L6 7.75L9.5 4.25"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </label>

      <label>
        Name
        <input
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
        />
      </label>

      <label>
        Email Address
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </label>

      <label>
        Phone Number
        <input
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="703-992-9211"
        />
      </label>

      <label>
        Comments
        <textarea
          name="comments"
          className={styles.comments}
          required
          placeholder="How can we help?"
        />
      </label>

      <button type="submit" className="btn btn-primary">
        Send message
      </button>

      {sent ? (
        <p className={styles.sent} role="status">
          Opening your email client… If nothing opens, please call the office.
        </p>
      ) : null}
    </form>
  );
}
