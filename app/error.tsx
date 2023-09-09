'use client' 
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <>
    {/* <section className="py-10 bg-coolGray-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-2">
      <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
        <div className="py-20 px-8 sm:px-20 bg-white rounded-4xl">
          <div className="max-w-2xl mx-auto">
            <div className="max-w-md mb-20 lg:mb-32">
              <span className="inline-block mb-4 py-2 px-3 text-sm text-black leading-none border-1.5 border-black rounded-full transition duration-200">Error</span>
              <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6">Error 404</h2>
              <p className="text-coolGray-60 mb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              <a className="group inline-flex py-5 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200" href="#">
                <span className="mr-2">Back to homepage</span>
                <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
                <span className="group-hover:rotate-45 transform transition duration-100">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 9" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M9 8.33571V1H1.66429" stroke="currentColor" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="max-w-xs ml-auto text-right">
              <span className="block mb-3 text-sm">2023</span>
              <p className="text-coolGray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/12 lg:w-2/12 px-2">
        <img className="w-full h-96 sm:h-112 md:h-150 lg:h-full rounded-4xl object-cover" src="asitrastudio-assets/http-codes/photo-sm.png" alt=""/>
      </div>
      <div className="w-7/12 lg:w-4/12 px-2">
        <img className="w-full h-96 sm:h-112 md:h-150 lg:h-full rounded-4xl object-cover" src="asitrastudio-assets/http-codes/photo-lg.png" alt=""/>
      </div>
    </div>
  </div>
</section> */}
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
    </>
  )
}