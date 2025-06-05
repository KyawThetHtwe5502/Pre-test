import React from 'react'
import { list } from '../../../service/list'

const useList = () => {

    const handleList = async (data) =>  {
        try {
            const res = await list(data);
            return res.data
        } catch (err) {
            console.log(err.message)
            return err;
        }
    }
  return {
        handleList
    }
  
}

export default useList