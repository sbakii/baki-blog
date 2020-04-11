import Navigation from './navigation'
import Head from 'next/head'

function Layout({ children }) {
    return (
         <div>
         <Head>
            <title>Selçuk Baki'nin Web Sitesi</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navigation />
        <main>
            {children}
        </main>

        <footer>

            baki.site

        </footer>
    </div>
    )
}

export default Layout