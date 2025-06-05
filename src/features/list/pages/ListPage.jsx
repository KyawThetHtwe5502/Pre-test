import React, { useEffect } from 'react'
import ListTable from '../components/listTable'
import { getAccessToken } from '../../../utils/tokenUtils'
import { Navigate } from 'react-router-dom'

const ListPage = () => {
  useEffect(() => {
    const access_token = getAccessToken();
    if(!access_token){
      Navigate("/")
    }
  },[])
  return (
    <div className='container mx-auto'>
      <ListTable/>
    </div>
  )
}

export default ListPage