import { useQuery } from '@tanstack/react-query';
import { Button, Label, Pagination, Select, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import useList from '../hooks/useList';
import useLogout from '../hooks/useLogout';

const ListTable = () => {
  const [page,setPage] = useState(0);
  const [limit,setLimit] = useState(10);
  const {handleList,data,isLoading,isError} = useList();
  const {handleLogout} = useLogout() 
     const handlePageChange = (page) => setPage(page);
const handleLimitChange = (e) => {
    setLimit(Number(e.target.value));
    setPage(0);
}


  useEffect(() => {
    handleList(page,limit)
  },[page,limit])

 
  return (
    <div className="overflow-x-auto ">
      <div className='flex justify-between items-center'>
        <h1>List Table</h1>
        <div className='flex items-center gap-4'>
          <div className="flex items-center gap-2">
      <div className="mb-2 block">
        <Label htmlFor="limit">limit</Label>
      </div>
      <Select id="limit"               value={page.toString()}
 onChange={handleLimitChange}>
        <option value={"5"}>5</option>
        <option value={"10"}>10</option>
        <option value={"15"}>15</option>
        <option value={"20"}>20</option>
      </Select>
    </div>
    <Button onClick={() => handleLogout()}>Logout</Button>
        </div>

      </div>
      <Table className='shadow'>
        <TableHead>
          <TableRow>
            <TableHeadCell>No</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>Way ID</TableHeadCell>
            <TableHeadCell>Merchant</TableHeadCell>
            <TableHeadCell>Merchant ID</TableHeadCell>
            <TableHeadCell>Cash Advance</TableHeadCell>
            <TableHeadCell>Prepaid</TableHeadCell>
            <TableHeadCell>Car required</TableHeadCell>
            <TableHeadCell>Parcel arrived</TableHeadCell>
            <TableHeadCell>Total ways</TableHeadCell>
            <TableHeadCell>Delivered</TableHeadCell>
            
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {data?.data.map((item,index) => <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index + 1}
            </TableCell>
            <TableCell>{item?.status}</TableCell>
            <TableCell>{item?.trackingId}</TableCell>
            <TableCell>{item?.osName}</TableCell>
            <TableCell>{item?.osPersonId}</TableCell>
            <TableCell>{item?.cashAdvanceAmount}</TableCell>
            <TableCell>{item?.prepaidAmount}</TableCell>
            <TableCell>{item?.carRequired}</TableCell>
            <TableCell>{item?.routeInboundBucketStatus}</TableCell>
            <TableCell>{item?.totalWays}</TableCell>
            <TableCell>{item?.itemCount}</TableCell>
            
          </TableRow>
          )}
          
          
        </TableBody>
      </Table>
      <div className='flex justify-end items-center'>

            <Pagination currentPage={page} totalPages={100} onPageChange={handlePageChange} />
      </div>

    </div>
  )
}

export default ListTable