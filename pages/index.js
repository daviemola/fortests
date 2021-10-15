import Head from 'next/head'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import React from 'react'
import { API_URL } from '../config/index'
import 'react-toastify/dist/ReactToastify.min.css'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'

export default function index() {
  const router = useRouter()
  const [values, setValues] = React.useState({
    email_address: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    //validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === '',
    )
    if (hasEmptyFields) {
      toast.error('Please enter your email', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }

    const res = await fetch(`${API_URL}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    const data = await res.json()
    console.log(data)

    if (!res.ok) {
      toast.error('Something went wrong. Try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    } else {
      toast.success('Success. Email Submitted', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }

    setTimeout(function () {
      router.push('/thankyou')
    }, 5000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <>
      <Head>
        <title>MBA Masters</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="dark:bg-gray-900 bg-gray-50 dark:text-white text-gray-900 px-5 pb-8">
        <header className="text-center py-16 flex flex-col items-center">
          <h1 className="md:text-5xl text-3xl font-extrabold leading-tighter max-w-screen-md">
            Precise & short courses to assist you to{' '}
            <span className="dark:text-yellow-300 text-yellow-500">
              excel and understand
            </span>{' '}
            various concepts as an MBA student.
          </h1>
          <h2 className="text-xl font-light max-w-2xl pt-8 leading-tight dark:text-gray-200 text-gray-700">
            Learn the skills you need to excel in your examinations and CATS.
            Included are pastpapers with solutions. Watch talks and read
            articles by experts.
          </h2>
        </header>

        <main className="flex flex-col items-center">
          <div className="p-2 relative dark:bg-gray-800 bg-white md:border border-gray-400 border-none rounded-md dark:shadow-none shadow-lg">
            <div className="dark:text-white text-gray-900 dark:bg-gray-900 sm:px-12 sm:py-12 px-6 py-6 flex flex-col items-center max-w-sm relative z-10 rounded-sm">
              <h2 className="text-xl my-3 font-extrabold dark:text-white text-blue-500 text-center uppercase">
                Get KES 250 off when you pre-order
              </h2>
              <h2 className="text-2xl mb-4 font-extrabold dark:text-white text-gray-900">
                Pre-order
              </h2>
              <PlanPrice />
              <PlanFeatures />
              <GetAccessButton />
            </div>
          </div>
          <h1 className="md:text-5xl text-3xl my-5 font-extrabold leading-tighter max-w-screen-md underline">
            or
          </h1>
          <section className="w-full max-w-screen-md">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 my-4">
                <div className="flex flex-row text-center justify-center my-auto ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 my-auto mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                  <h1 className="font-bold text-3xl">Subscribe!</h1>
                </div>
                <div className="text-center my-auto">
                  <h2 className="text-xl">
                    Subscribe to get updates on the progress of this project.
                  </h2>
                </div>
                <div className="py-2 mx-4 lg:py-10">
                  <form onSubmit={handleSubmit}>
                    <div className="shadow flex w-full">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full h-12 rounded-md py-2 px-4 bg-white"
                        name="email_address"
                        value={values.email_address}
                        onChange={handleInputChange}
                      />
                      <button
                        className="bg-blue-600 hover:bg-blue-700 py-2 px-4"
                        type="submit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                          />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

const PlanFeatures = ({ planFeatures = DEFAULT_FEATURES }) => {
  const CheckIcon = () => (
    <svg
      className="text-blue-500 inline-block flex-shrink-0 mt-1"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M6.00266104,15 C5.73789196,15 5.48398777,14.8946854 5.29679603,14.707378 L0.304822855,9.71382936 C0.0452835953,9.46307884 -0.0588050485,9.09175514 0.0325634765,8.74257683 C0.123932001,8.39339851 0.396538625,8.12070585 0.745606774,8.02930849 C1.09467492,7.93791112 1.46588147,8.04203262 1.71655287,8.30165379 L5.86288579,12.4482966 L14.1675324,0.449797837 C14.3666635,0.147033347 14.7141342,-0.0240608575 15.0754425,0.00274388845 C15.4367507,0.0295486344 15.7551884,0.250045268 15.9074918,0.578881992 C16.0597953,0.907718715 16.0220601,1.29328389 15.8088932,1.58632952 L6.82334143,14.5695561 C6.65578773,14.8145513 6.38796837,14.9722925 6.09251656,15 C6.06256472,15 6.03261288,15 6.00266104,15 Z"
      />
    </svg>
  )

  return (
    <ul>
      {planFeatures.map((feature) => {
        return (
          <li className="py-2 font-medium flex" key={feature}>
            <CheckIcon />
            <span className="ml-2 leading-tight">{feature}</span>
          </li>
        )
      })}
    </ul>
  )
}

const DEFAULT_FEATURES = [
  'Full access to all the course videos',
  'Download courses for offline viewing',
  'Closed captions for every video',
  'Commenting and support',
  'Enhanced Transcripts',
]

const GetAccessButton = ({}) => {
  let label = 'Pre-order'
  const search = () => {
    ga.event({
      action: 'Clicked pre-order',
      params: {
        search_term: 'To give KES 250 off',
      },
    })
  }
  return (
    <Link href="/congratulations">
      <a
        className="mt-8 px-5 py-4 text-center bg-blue-600 text-white font-semibold rounded-md w-full hover:bg-blue-700 transition-all duration-300 ease-in-out hover:scale-105"
        onClick={() => search()}
        type="button"
      >
        {label}
      </a>
    </Link>
  )
}

const PlanPrice = ({}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="py-6 flex items-end leading-none">
        <span className="mt-1 self-start">KES</span>
        <span className="text-5xl font-extrabold">1000</span>
        <span className="text-lg font-light mb-1">/course</span>
      </div>
    </div>
  )
}
