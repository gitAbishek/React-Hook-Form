import React,{useEffect, useState} from 'react'

import { Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Details = () => {
  const [getData, setGetData] = useState([])
  const history = useNavigate()
  console.log('data',getData)
  useEffect(()=>{
    const getItems = JSON.parse(localStorage.getItem("datakey"));
    if(getItems){
    setGetData(getItems);
    } else{
      history('/signin')
    }
  },[history])

  return (
    <div> 
        Siggn In
        <Text>{getData.name}</Text>
        <Text>{getData.email}</Text>
        <Text>{getData.number}</Text>
    </div>
  )
}

export default Details