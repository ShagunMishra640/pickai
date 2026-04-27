import React from 'react'

const Protect = ({ plan, fallback, children }) => {
  // Check if user has the required plan
  const userPlan = 'premium' // Replace with actual user plan from context/state
  
  const hasAccess = userPlan === plan
  
  return (
    <>
      {hasAccess ? children : fallback}
    </>
  )
}

export default Protect
