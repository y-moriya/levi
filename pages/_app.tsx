import { Provider } from 'next-auth/client'
import Head from 'next/head'
import { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from '../components/Header'
import '../styles/global.css'

const queryClient = new QueryClient()
const Layout = ({ children }): ReactElement => (
  <div>
    <Head>
      <title>Levi</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="w-full">
      <Header />
      {children}
    </div>
  </div>
)

export default function App({ Component, pageProps }): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </Layout>
      </Provider>
    </QueryClientProvider>
  )
}
