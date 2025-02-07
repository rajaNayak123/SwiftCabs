import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-start gap-4">
              <img className="h-10 w-10 rounded-full object-top" src="https://i.pinimg.com/736x/35/61/4b/35614bc96ddec9afe6ac21e656b8c2a0.jpg" alt="" />
              <h4 className="text-lg font-medium">raja Nayak</h4>
            </div>
            <div>
              <h4 className="text-xl font-semibold">$300</h4>
              <p className="text-sm font-medium text-gray-600">Earned</p>
            </div>
          </div>
          <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start">
            <div className="text-center">
              <i className="text-3xl font-thin ri-time-line"></i>
              <h5 className="text-lg font-medium">12:00</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-3xl font-thin ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">12:00</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center">
              <i className="text-3xl font-thin ri-sticky-note-line"></i>
              <h5 className="text-lg font-medium">12:00</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails