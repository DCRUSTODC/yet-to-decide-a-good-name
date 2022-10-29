import MetaData from './components/Metadata'
import Landing from './components/Landing'
import Header from './components/Header';
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <>
      <MetaData />
      <Header />
      <div className={styles.centered}>
        <Landing />
      </div>
    </>
  )
}
