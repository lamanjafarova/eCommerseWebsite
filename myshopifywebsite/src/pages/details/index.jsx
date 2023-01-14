import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductsDeatil = () => {
    const [featuredData, setFeaturedData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/featured/${id}`)
    .then((response) => setFeaturedData(response.data))
  }, [])
    const { id } = useParams()
  return (
    <div>
        <p>{featuredData.name}</p>
    </div>
  )
}

export default ProductsDeatil