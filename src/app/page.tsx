import React from 'react'

const page = () => {

  return (
    <div><figure className="md:flex bg-yellow-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-full rounded-full mx-auto" src="/kk.jpg" alt="" width="384" height="512" />
    <div className="pt-6 md:p-8 text-center md:text-centre space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hello, myself Ashir Akram from Kot Samaba. I'M currently studing for a Bachelor's
           degree at Khwaja Fareed University of Engineering and 
           Information Technology(KFUEIT).”
        </p>
      </blockquote>
      <figcaption className="font-large">
        <div className="text-sky-500 dark:text-sky-400">
          Ashir Akram
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Software Engineer,KFUEIT
        </div>
      </figcaption>
    </div>
  </figure></div>

  )
}

export default page
