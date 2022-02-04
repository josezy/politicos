/* eslint-disable react/prop-types */

import React from 'react'

/**
 * YoutubeVisor component
 */
const YoutubeVisor = React.forwardRef((props, ref) => {


  return (
    <div className="video-responsive">
      <iframe
        src="https://www.youtube.com/embed/bQHD6xvr4Rc"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
  </div>
  )
})

YoutubeVisor.displayName = 'YoutubeVisor'

export default YoutubeVisor
