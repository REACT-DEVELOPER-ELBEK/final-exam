"use client"
import { useDispatch, useSelector } from 'react-redux';
import { setPage, setItemsPerPage, setTotalItems } from '../../../../redux/slices/paginationSlice';
import { RootState } from '@/redux/reducer/rootReducer';

const Pagination:React.FC = () => {
    const dispatch = useDispatch();
    const pagination = useSelector((state: RootState) => state.pagination);
  
    const handlePageChange = (newPage: number) => {
      dispatch(setPage(newPage));
    };
  return (
    <div>
    <p>Current Page: {pagination.currentPage}</p>
    <button onClick={() => handlePageChange(pagination.currentPage - 1)}>Previous Page</button>
    <button onClick={() => handlePageChange(pagination.currentPage + 1)}>Next Page</button>
  </div>
  )
}

export default Pagination