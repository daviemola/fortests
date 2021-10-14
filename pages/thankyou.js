import 'tailwindcss/tailwind.css'
import Head from 'next/head'

export default function thankyou() {
  return (
    <>
      <Head>
        <title>MBA Masters</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="text-center py-16 flex flex-col items-center">
        <h1 className="md:text-5xl text-3xl font-extrabold leading-tighter max-w-screen-md">
          Thank you. We'll surely give you updates on how this project develops.
          We appreciate your input. You are a part of it.
        </h1>
        <h2 className="text-xl font-light max-w-2xl pt-8 leading-tight dark:text-gray-200 text-gray-700">
          This was a test to find out if this will be useful to the student
          community, instead of putting resources and time only to find out
          people won't use the application.
        </h2>
      </header>
    </>
  )
}
