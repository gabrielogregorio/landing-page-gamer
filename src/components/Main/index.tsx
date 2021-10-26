import React from 'react'
import styles from './styles.module.css'
import gameImage from '../../assets/game.jpg'

export const Main = () => {
  return (
    <main className={styles.main}>
    <section className={styles.presentation}>
      <h1 style={{['--i' as any]: 2}}>Bem vindo ao GG</h1>
      <p style={{['--i' as any]: 2}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </section>

    <img aria-hidden={true} style={{['--i' as any]: 2}} src={gameImage} alt="Vetor de um controle de vidiogame, com uma pessoa a direita encostado no videogame, usando um tablet e uma pessoa a esquerda sentado em uma cadeira encostada ao primeiro 'pé' do controle remoto" />
  </main>
  )
}