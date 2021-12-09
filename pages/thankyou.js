// import 'tailwindcss/tailwind.css'
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
          We appreciate your input. You are a part of this awesome project.
        </h1>
        <h2 className="text-xl font-light max-w-2xl pt-8 leading-tight dark:text-gray-200 text-gray-700">
          We are working behind the scenes to make this a reality.
        </h2>
      </header>
    </>
  )
}
