import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAllStarships } from '../../services/sw-api'

const Starships = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchAllStarships = async () =>{
      const starshipsData = await getAllStarships()
      setStarships(starshipsData.results)
    }
    fetchAllStarships()
  }, [])

  

}