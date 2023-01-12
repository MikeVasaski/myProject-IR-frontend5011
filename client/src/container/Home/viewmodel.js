import { getAnime } from '../../service/getAnime'
import { useState, useEffect, cloneElement } from 'react'

export const useViewModel = () => {

    const [data, setData] = useState([])

    const fetchAnime = async () => {
        return await getAnime().then(res =>{ 
            
    setData(res.data.result)            
          })
        .catch(err => console.log('err', err))
    }


    useEffect(() => {
        fetchAnime()
    }, [])


    return { data }
}