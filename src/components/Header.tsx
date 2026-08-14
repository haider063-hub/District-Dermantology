"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, NAV_SERVICE_LINKS, SITE } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeServicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (closeServicesTimer.current) {
      clearTimeout(closeServicesTimer.current);
      closeServicesTimer.current = null;
    }
    setServicesOpen(true);
  };

  const scheduleCloseServices = () => {
    if (closeServicesTimer.current) clearTimeout(closeServicesTimer.current);
    closeServicesTimer.current = setTimeout(() => {
      setServicesOpen(false);
      closeServicesTimer.current = null;
    }, 180);
  };

  useEffect(() => {
    return () => {
      if (closeServicesTimer.current) clearTimeout(closeServicesTimer.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!servicesOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="District Dermatology home">
          <Image
            src="/images/logo.png"
            alt="District Dermatology"
            width={280}
            height={76}
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            if ("hasDropdown" in item && item.hasDropdown) {
              return (
                <div
                  key={item.href}
                  className={styles.dropdown}
                  ref={dropdownRef}
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <button
                    type="button"
                    className={`${styles.navLink} ${styles.dropdownTrigger} ${active ? styles.active : ""} ${servicesOpen ? styles.dropdownOpen : ""}`}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((v) => !v)}
                    onFocus={openServices}
                  >
                    {item.label}
                    <svg
                      className={styles.caret}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M2.5 4.25L6 7.75L9.5 4.25"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="services-menu"
                    className={`${styles.dropdownPanel} ${servicesOpen ? styles.dropdownPanelOpen : ""}`}
                    role="menu"
                    aria-hidden={!servicesOpen}
                    inert={!servicesOpen ? true : undefined}
                  >
                    {NAV_SERVICE_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={styles.dropdownLink}
                        role="menuitem"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className={`${styles.dropdownLink} ${styles.dropdownMore}`}
                      role="menuitem"
                    >
                      View More Services
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.active : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <a href={SITE.phoneHref} className={styles.call}>
            {SITE.phoneDisplay}
          </a>
          <Link href="/contact" className={`btn btn-primary ${styles.schedule}`}>
            Book Appointment
          </Link>
          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {NAV.map((item) => {
            if ("hasDropdown" in item && item.hasDropdown) {
              return (
                <div key={item.href} className={styles.mobileGroup}>
                  <button
                    type="button"
                    className={styles.mobileLinkBtn}
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    {item.label}
                    <span aria-hidden="true">{mobileServicesOpen ? "−" : "+"}</span>
                  </button>
                  <div
                    className={`${styles.mobileSub} ${mobileServicesOpen ? styles.mobileSubOpen : ""}`}
                    aria-hidden={!mobileServicesOpen}
                  >
                    <div className={styles.mobileSubInner}>
                      {NAV_SERVICE_LINKS.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.mobileSubLink}>
                          {link.label}
                        </Link>
                      ))}
                      <Link href="/services" className={styles.mobileSubLink}>
                        View More Services
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={styles.mobileLink}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className={styles.mobileActions}>
          <a href={SITE.phoneHref} className="btn btn-outline">
            {SITE.phoneDisplay}
          </a>
          <Link href="/contact" className="btn btn-primary">
            Book Appointment
          </Link>
          <a href={SITE.onlinePayUrl} className="btn btn-outline" target="_blank" rel="noreferrer">
            Online Pay
          </a>
        </div>
      </div>
    </header>
  );
}
