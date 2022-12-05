
import React from 'react'

function onDeletionLoading({className}) {
  return (
    <div className = {`${className}`}>
      <img src="images/deleteLoading.gif" alt="loadingOndeleting"/>
    </div>
  )
}

export default onDeletionLoading
