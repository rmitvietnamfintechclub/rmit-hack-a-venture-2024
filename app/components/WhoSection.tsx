import React from 'react'

export const WhoSection = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-bold text-[#C93FDD] mb-8">Who can join <span className="text-white">Hack-A-Venture?</span></h2>
        <div className="p-8 lg:p-0 grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Card 1 */}
          <div className="bg-black rounded-lg p-0">
            <img
              src="/who-can-join-1.webp"
              alt="University Students Passionate About Tech & Business"
              className="rounded-md w-full"
            />
            <p className="mt-4 text-md lg:text-xl font-semibold">
              University Students Passionate About Tech & Business
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-black rounded-lg p-0">
            <img
              src="/who-can-join-2.webp"
              alt="Business-Related Majors"
              className="rounded-md w-full"
            />
            <p className="mt-4 text-md md:text-xl font-semibold">Business-Related Majors</p>
          </div>
          {/* Card 3 */}
          <div className="bg-black rounded-lg p-0">
            <img
              src="/who-can-join-3.webp"
              alt="Technology-Related Majors"
              className="rounded-md w-full"
            />
            <p className="mt-4 text-md md:text-xl font-semibold">Technology-Related Majors</p>
          </div>
          {/* Card 4 */}
          <div className="bg-black rounded-lg p-0">
            <img
              src="/who-can-join-4.webp"
              alt="Finance-Related Majors"
              className="rounded-md w-full"
            />
            <p className="mt-4 text-md md:text-xl font-semibold">Finance-Related Majors</p>
          </div>
          {/* Card 5 */}
          <div className="bg-black rounded-lg p-0">
            <img
              src="/who-can-join-5.webp"
              alt="Marketing-Related Majors"
              className="rounded-md w-full"
            />
            <p className="mt-4 text-md md:text-xl font-semibold">Marketing-Related Majors</p>
          </div>
        </div>
      </div>
    </section>
  )
}
