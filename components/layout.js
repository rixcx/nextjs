import Header from './header'
import Footer from './footer'
import styles from '../styles/Layout.module.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.inner}>
          <Header />
            <main>
                {children}
            </main>
          <Footer />
        </div>
      </div>
    </>
  )
}