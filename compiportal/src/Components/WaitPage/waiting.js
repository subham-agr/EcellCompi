import { Button } from '@mui/material';
import React, { useState } from 'react'
import './waiting.css'

export default function Waiting() {
  return (
    <div className="container">
      <div class="loading">
            <p className='color'>Please wait</p>
            <span><i></i><i></i></span>
        </div>
        {/* <p>Your Response has been recorded. Please Wait</p>
        <p>This is your Total Score.</p> */}
    </div>
  )
}
