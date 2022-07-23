import React, { useState } from 'react'
import YouTube from 'react-youtube'
import Animation from '../../COMPONENTS/animation'

const opts = {
      height: "390",
      width: "100%",
      playerVars: {
            autoplay: 1,
      },
};

//onError={() => setOpen(true)}

const Play = () => {
      const [loading, setLoading] = useState(true);
      return (
            <div>
                  <div className="container">
                        <div className=''>
                              <h1>Trailer</h1>
                              <div className={loading ? 'off__screen' : ''}>
                                    <YouTube videoId={'ARMD92alRXc'} opts={opts} onReady={() => setLoading(false)} />
                              </div>

                              {loading && <Animation />}

                        </div>
                  </div>

            </div>
      )
}

export default Play