import React from 'react'
import styles from './styles.module.css'
import logoFb from '../../assets/fb.svg'
import logoInstaram from '../../assets/instagram.svg'
import logoTwitter from '../../assets/twitter.svg'
import logoTwitch from '../../assets/twitch.svg'
import logoYoutube from '../../assets/youtube.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
     <section className={styles.social}>
      <a href="https://twitch.com" style={{['--i' as any]: 2}} className={styles.cardSocial}>
        <img src={logoTwitch} alt="Logo da Twitch" />
      </a>

      <a href="https://twitch.com"  style={{['--i' as any]: 4}} className={styles.cardSocial}>
        <img src={logoYoutube} alt="Logo do Youtube" />
      </a>

      <a href="https://twitch.com"  style={{['--i' as any]: 6}} className={styles.cardSocial}>
        <img src={logoTwitter} alt="Logo do Twitter" />
      </a>

      <a href="https://twitch.com" style={{['--i' as any]: 8}} className={styles.cardSocial}>
        <img src={logoInstaram} alt="Logo do Instagram" />
      </a>

      <a href="https://twitch.com" style={{['--i' as any]: 10}} className={styles.cardSocial}>
        <img src={logoFb} alt="Logo do Facebook" />
      </a>
    </section>
  </footer>

  )
}