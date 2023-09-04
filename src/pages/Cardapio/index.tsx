import styles from './Cardapio.module.scss';
import logo from 'assets/logo.svg';
import Buscador from './Buscador';
import { useState } from 'react';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    return (
    <main>
        <br></br>
        <nav className={styles.menu}>
            <img src= {logo} alt="logo" />
        </nav>
        <header className={styles.header}> 
            <div className={styles.header__text}>
            A casa do código é a massa
            </div>
        </header>
        <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
            </section>
   </main>
    );
}