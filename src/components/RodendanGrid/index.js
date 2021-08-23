import React from 'react'
 
import * as styles from './style.module.css';

import GridRod from './GridRod'

const RodendanGrid = () => (
    <section  className={styles.rodendanGrid}>
        <div className="grid-container">
            <div className="grid item grid item-1">
                <GridRod slika="okvir2.png" cijena="100,00 kn" naruci= "NARUČI"></GridRod>
            </div>
            <div className="grid item grid item-2">
                <GridRod slika="okvir2.png" cijena="120,00 kn" naruci= "NARUČI"></GridRod>
            </div>
            <div className="grid item grid item-3">
                <GridRod slika="okvir2.png" cijena="150,00 kn" naruci= "NARUČI"></GridRod>
            </div>
            <div className="grid item grid item-4">
                <GridRod slika="okvir2.png" cijena="100,00 kn" naruci= "NARUČI"></GridRod>
            </div>
            <div className="grid item grid item-5">
                <GridRod slika="okvir2.png" cijena="120,00 kn" naruci= "NARUČI"></GridRod>
            </div>
            <div className="grid item grid item-6">
                <GridRod slika="okvir2.png" cijena="150,00 kn" naruci= "NARUČI"></GridRod>
            </div>
            <div className="grid item grid item-7">
                <GridRod slika="okvir2.png" cijena="100,00 kn" naruci= "NARUČI"></GridRod>
            </div>
            <div className="grid item grid item-8">
                <GridRod slika="okvir2.png" cijena="120,00 kn" naruci= "NARUČI"></GridRod>
            </div>
            <div className="grid item grid item-9">
                <GridRod slika="okvir2.png" cijena="150,00 kn" naruci= "NARUČI"></GridRod>
            </div>
        </div>
    </section>
)
export default RodendanGrid