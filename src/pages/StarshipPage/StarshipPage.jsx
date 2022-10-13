import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getDetails } from '../../services/sw-api'


const StarshipPage = () => {
  const [starshipPage, setStarshipPage] = useState({})
  const location = useLocation()

	useEffect(() => {
    const fetchDetails = async () => {
      const starshipPage = await getDetails(location.state.starshipName.url)
      setStarshipPage(starshipPage)
      console.log(location.state)
      console.log(StarshipPage.name)
    }
    fetchDetails()
  }, [location.state.starshipName.url])
  
  return (
    <>
      <div>
        {StarshipPage.name ?
        <>
        <div>NAME: {starshipPage.name}</div>
        <div>MODEL: {starshipPage.model}</div>
        <Link to='/'>back</Link>
        </>:
        <>
          <p>Loading details...</p>
        </>
        }
      </div>
    </>
  );
}

export default StarshipPage;