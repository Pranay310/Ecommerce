import React, { useState } from 'react'
import './cart.css'
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router';

const Cart = () => {
  const nav = useNavigate();
  const products = useSelector(state => state.products)
  const [quantity, setQuantity] = useState(Array(products.length).fill(1));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const handleQuantity = (idx, operation) => {
    const newQuantity = [...quantity];
    if (operation === 'add') {
      newQuantity[idx] += 1;
    } else {
      if (newQuantity[idx] > 1) {
        newQuantity[idx] -= 1;
      } else {
        alert('Quantity should be at least 1');
      }
    }
    setQuantity(newQuantity);
  };

  const calculateTotal = () => {
    return products.reduce((acc, product, idx) => {
      return acc + product.price * quantity[idx];
    }, 0);
  };

  return (
    <div id='cart-container' className=' w-[100%] bg-white flex flex-col justify-between items-center'>
      <nav className=' h-[15vh] w-[95vw] border border-solid border-black flex justify-between items-center m-[2.5vw] rounded-3xl'>
        <h1 className=' text-6xl mx-[2vw] text-black'>My Cart</h1>
        <button className=' w-[13vw] h-[6vh] mx-[2vw] border border-solid border-black text-black rounded-3xl' onClick={() => { nav('/products') }}>Continue shopping</button>
      </nav>
      <main className=' w-[95vw] mx-[2.5vw]'>
        {products.length > 0 ? (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center" className=' w-[40%]'>Product</StyledTableCell>
                  <StyledTableCell align="right" className=' w-[20%]'>Price</StyledTableCell>
                  <StyledTableCell align="right" className=' w-[20%]'>Quantity</StyledTableCell>
                  <StyledTableCell align="right" className=' w-[20%]'>Total</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((item, idx) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row" className=' w-[40%]'>
                      <section className=' flex justify-start items-center'>
                        <img src={item.images[0]} alt="" className=' w-[170px] h-[180px] ' />
                        <div className='table-title-cell ml-5 flex flex-col justify-center items-start gap-1'>
                          <h1 className=' text-3xl font-extrabold text'>{item.title}</h1>
                          <h1 className=' text-lg'>Discount % {item.discountPercentage}</h1>
                          <h1 className=' text-lg'>Id {item.sku}</h1>
                        </div>
                      </section>
                    </StyledTableCell>
                    <StyledTableCell align="right" className=' w-[20%]'>{item.price} $</StyledTableCell>
                    <StyledTableCell align="right" className=' w-[20%]'>
                      <button className=' w-[30px] h-[30px] bg-black text-white mr-4' onClick={() => handleQuantity(idx, 'add')}>+</button>
                      {quantity[idx]}
                      <button className=' w-[30px] h-[30px] bg-black text-white ml-4' onClick={() => handleQuantity(idx, 'subtract')}>-</button>
                    </StyledTableCell>
                    <StyledTableCell align="right">{(item.price * quantity[idx]).toFixed(2)} $</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <div>
            <h1 className=' text-6xl mx-[2vw] text-black'>Your cart is empty</h1>
          </div>
        )}
      </main>
      <section className=' h-[30vh] w-[95vw] mx-[2.5vw] mt-[2.5vw] bg-[#e9ecef] rounded-tr-2xl rounded-tl-2xl p-5 flex justify-between items-center'>
        <div className=' h-[100%] flex flex-col justify-evenly items-start'>
          <h1 className=' text-3xl text-black'>Choose Shipping Mode</h1>
          <div><input type='radio' name='pickuptype' /><label htmlFor="" className=' p-4 text-black'>Store Pickup</label></div>
          <div><input type='radio' name='pickuptype' /><label htmlFor="" className=' p-4 text-black'>Delivery at home</label></div>
        </div>
        <div className=' w-[30%] h-[100%] flex flex-col justify-between items-start'>
          <div className=' w-[90%] flex justify-between items-center'>
            <h1 className=' text-black'>Sub Total</h1>
            <h1 className=' text-black'>{calculateTotal().toFixed(2)} $</h1>
          </div>
          <hr className='w-full border-t border-gray-300' />
          <div className=' w-[90%] flex justify-between items-center'>
            <h1 className='  text-black'>Shipping</h1>
            <h1 className=' text-black'>{(calculateTotal() > 0 ? 9.98 : 0.00).toFixed(2)} $</h1>
          </div>
          <hr className='w-full border-t border-gray-300' />
          <div className=' w-[90%] flex justify-between items-center'>
            <h1 className='  text-black font-extrabold'>Total</h1>
            <h1 className=' text-black'>{(calculateTotal() + (calculateTotal() > 0 ? 9.98 : 0.00)).toFixed(2)} $ </h1>
          </div>
          <hr className='w-full border-t border-gray-300' />
          <button className=' w-[100%] h-[35px] bg-green-400 text-black'
            onClick={() => {
              if (products.length > 0) {
                alert('Order Placed Successfully')
              } else {
                alert('Cart is  Empty')
              }
            }}>Check out</button>
        </div>
      </section>
    </div>
  );
}

export default Cart;
