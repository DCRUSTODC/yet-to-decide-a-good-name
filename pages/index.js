import styles from '../styles/Home.module.css'
import MetaData from './components/Metadata'
import Landing from './components/Landing'

export default function Home() {
  return (
    <div className={styles.APP}>
      <MetaData />
      <Landing />
    </div>
  )
}
