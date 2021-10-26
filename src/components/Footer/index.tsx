import React from 'react'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
     <section className={styles.social}>
      <a href="https://twitch.com" style={{['--i' as any]: 2}} className={styles.cardSocial}>
        <img src="/assets/twitch.svg" alt="Logo da Twitch" />
      </a>

      <a href="https://twitch.com"  style={{['--i' as any]: 4}} className={styles.cardSocial}>
        <img src="/assets/youtube.svg" alt="Logo do Youtube" />
      </a>

      <a href="https://twitch.com"  style={{['--i' as any]: 6}} className={styles.cardSocial}>
        <img src="/assets/twitter.svg" alt="Logo do Twitter" />
      </a>

      <a href="https://twitch.com" style={{['--i' as any]: 8}} className={styles.cardSocial}>
        <img src="/assets/instagram.svg" alt="Logo do Instagram" />
      </a>

      <a href="https://twitch.com" style={{['--i' as any]: 10}} className={styles.cardSocial}>
        <img src="/assets/fb.svg" alt="Logo do Facebook" />
      </a>
    </section>
  </footer>

  )
}
