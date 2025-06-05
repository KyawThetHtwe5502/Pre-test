import React from 'react'
import { list } from '../../../service/list'
import { useQuery } from '@tanstack/react-query';

const useList = () => {

    const handleList = async (page,limit) =>  {
        try {
            const res = await list({first:page,max:limit});
            return res.data
        } catch (err) {
            console.log(err.message)
            return err;
        }
    }
    const { data, isLoading, isError } = useQuery({
    queryKey: ['list'],
    queryFn: handleList,
  });
  return {
        handleList,
        data,
        isError,
        isLoading
    }
  
}

export default useList