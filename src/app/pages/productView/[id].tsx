import { useRouter } from 'next/router'
import React from 'react'

const productView = () => {
  const router = useRouter()
  const {id} = router.query
  console.log(id);
  
  return (
    <div>productView:</div>
  )
}

export default productView