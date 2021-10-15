// import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify'
import React from 'react'
import { API_URL } from '../config/index'
import 'react-toastify/dist/ReactToastify.min.css'
import { useRouter } from 'next/router'

export default function congratulations() {
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

    const res = await fetch(`${API_URL}/discounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      console.log(res)
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
      setTimeout(function () {
        router.push('/thankyou')
      }, 5000)
    }
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
      <div className="dark:bg-gray-900 bg-gray-50 dark:text-white text-gray-900 px-5 pb-8 min-h-screen">
        <header className="text-center py-16 flex flex-col items-center">
          <h1 className="md:text-5xl text-3xl font-extrabold leading-tighter max-w-screen-md">
            Congratulations. We'll surely give you a{' '}
            <span className="dark:text-yellow-300 text-yellow-500">
              KES 250 off
            </span>{' '}
            for the first two courses you purchase when we finally launch.
          </h1>
        </header>

        <main className="flex flex-col items-center">
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
                  <h1 className="font-bold text-3xl">Drop your email!</h1>
                </div>
                <div className="text-center my-auto">
                  <h2 className="text-xl">
                    We will use your email for the discount and for this project
                    updates.
                  </h2>
                </div>
                <div className="py-2 mx-4 lg:py-10">
                  <form onSubmit={handleSubmit}>
                    <div className="shadow flex w-full">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-full h-12 rounded-md py-2 px-4"
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
            <h2 className="text-xl font-light max-w-2xl pt-8 leading-tight dark:text-gray-200 text-center text-gray-700">
              This was a test to find out if this will be useful to the student
              community, instead of putting resources and time only to find out
              people won't use the application.
            </h2>
          </section>
        </main>
      </div>
    </>
  )
}
