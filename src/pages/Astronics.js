import styles from '../styles/App.module.css'
import Head from 'next/head'
import { Public_Sans } from '@next/font/google'
import { Barlow } from '@next/font/google'
import { Header } from './Components/Header'
import { ViewProductsAstronics } from './Components/ViewProducts/ViewProducts'
import { functionMap } from './Components/Astronics/ProducsAstronics';
import {Prueba} from './Components/Astronics/ProducsAstronics'
import {Prueba_2} from './Components/Astronics/CarouselAstronics'
import {functionCarousel} from './Components/Astronics/CarouselAstronics'



const inter = Public_Sans ({ 
    subsets: ["latin"], 
    weight: ["100","200","300","400","500","600","700","800","900"]
})


const Astronics = ()=> { 
    return ( 
        <div className={inter.className}>
            <Head className={styles.header}>
                <title>Wiex/Astronics</title>
            </Head>
            <Header/>
            <ViewProductsAstronics className={styles.Astronics} Order={Prueba} Product={functionMap} Order_2={Prueba_2} Product_2={functionCarousel}/>

        </div>
    )
}

export default Astronics; 