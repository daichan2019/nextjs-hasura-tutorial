import { ReactNode, FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  children: ReactNode
  title: string
}

export const Layout: FC<Props> = ({
  children,
  title = 'welcome to Next.js',
}) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pg-8 h-14">
            <div className="flex space-x-4">
              <Link
                href="/"
                data-testid="home-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                Home
              </Link>
              <Link
                href="/local-state-a"
                data-testid="makevar-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                makeVar
              </Link>
              <Link
                href="/hasura-main"
                data-testid="fetchpolicy-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                fetchPolicy(Hasura)
              </Link>
              <Link
                href="/hasura-crud"
                data-testid="crud-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                CRUD(Hasura)
              </Link>
              <Link
                href="/hasura-ssg"
                data-testid="ssg-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                SSG+ISR(Hasura)
              </Link>
              <Link
                href="/hooks-memo"
                data-testid="memo-nav"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                custom hook + memo
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          Powered by{' '}
          <span className="ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
