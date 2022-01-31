import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import InputWithLabel from '../components/InputWithLabel'

const SPREADSHEET_URL = 'https://sheet.best/api/sheets/b0063d9b-eb6a-46a3-a911-d2586863ba64'

export default function Home() {
  const [userID, setUserID] = useState('')

  return (
    <div className={styles.container}>
      <Head>
        <title>Consulta firma de revocatoria</title>
        <meta name="description" content="Página para verificar si tu cédula hace parte del proceso de revocatoria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Firmaste?
        </h1>

        <p className={styles.description}>
          Consulta aquí si tu cédula apoya la revocatoria.
        </p>

        <InputWithLabel
          // placeholder={0}
          label="Cédula"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          onKeyPress={async (target) => {
            if (target.code == 'Enter') {
              fetch(SPREADSHEET_URL)
                .then(res => res.json())
                .then(res => {
                  const IDs = res.map(item => item['Cédula'])
                  if (IDs.includes(userID)) alert('Tu cédula apoya el proceso de revocatoria')
                  else alert('No estás inscrito')
                })
            }
          }}
          autoComplete="off"
          // inputMode="decimal"
        />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
