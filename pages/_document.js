import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className='bg-gradient-to-r from-[#f3ebed] via-[#fbedf3] to-[#FDFDFE]'>
      <Head />
      <body>
        <Main className='container' />
        <NextScript />
      </body>
    </Html>
  )
}
