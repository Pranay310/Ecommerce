import React from 'react';
import './navbar.css';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { searchedProducts } from '../../redux/slices/cartSlice';

const Navbar = () => {
    const product = useSelector(state => state.products)
    const dispatch = useDispatch();
    const nav = useNavigate();

    const searchProduct = (e) => {
        dispatch(searchedProducts(e.target.value));
    };

    return (
        <nav className='bg-black'>
            <div className='h-[10vh] w-[98vw] mx-[1vw] mt-3 flex justify-between items-center border border-solid border-white rounded-2xl'>
                <div className='w-[25%] flex justify-center items-center gap-20'>
                    <h1 className='text-xl tracking-wider'>@NexGenGlam</h1>
                </div>

                <div id='menu' className='w-[33%] flex justify-evenly items-center'>
                    <h1 onClick={() => nav('/')}>Home</h1>
                    <h1 onClick={() => nav('/products')}>Products</h1>
                    {product.length > 0 ? (<div className=' w-[70px] flex justify-between items-center'>
                        <h1 onClick={() => nav('/cart')} className=' w-[50px]'>Cart</h1>
                        <div className=' text-center font-bold text-xs mr-2 bg-red-500 rounded-[50%] h-[18px] w-[22px] flex justify-center items-center'>{product.length > 0 ? product.length : ('')}</div>
                    </div>) : (
                        <h1 onClick={() => nav('/cart')} className=' w-[50px]'>Cart</h1>
                    )}
                </div>

                <div className='w-[30%]'>
                    <input
                        type="text"
                        placeholder='Search products here'
                        onChange={searchProduct}
                        className='bg-black text-gray-300 border border-solid border-white rounded-2xl'
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
