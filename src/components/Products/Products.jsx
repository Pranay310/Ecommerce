import React, { useEffect, useState } from 'react';
import './products.css';
import Navbar from '../Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, storeProducts } from '../../redux/slices/cartSlice';
import Footer from '../Footer/Footer';

const Products = () => {
  const filteredProducts = useSelector(state => state.filteredProducts);
  const dispatch = useDispatch();
  const url = 'https://dummyjson.com/products';
  const [btnBgColors, setBtnBgColors] = useState(Array(filteredProducts.length).fill(false));

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result.products);

        const readMore = result.products.map((e) => ({ ...e, isExpand: false }))
        console.log(readMore)
        dispatch(storeProducts(readMore));
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));

  };
  const handleBtn = (idx) => {
    const updatedColors = [...btnBgColors];
    updatedColors[idx] = !updatedColors[idx];
    setBtnBgColors(updatedColors);
  };

  const readMoreTrue = (productId) => {

    dispatch(storeProducts(filteredProducts.map((e) => {


      if (e.id == productId) {
        return { ...e, isExpand: true }
      }
      return e;
    })))



  }


  return (
    <>
      <Navbar />
      <article className='h-[20vh] w-[95vw] mx-[2.5vw] flex items-center'>
        <h1 className='text-start text-7xl'>All Products</h1>
      </article>
      <div id='products-main-div' className=' h-[850vh] w-[98vw] mx-[1vw]'>
        <article className='flex items-center'>
          <section className='w-[100vw] flex flex-wrap justify-evenly items-center'>
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <div key={idx} className='w-[32vw] flex flex-wrap justify-center items-center m-1 p-5'>
                  <div className='h-[330px] w-[300px] bg-slate-200 mb-2 rounded-3xl'>
                    <img src={product.images[0]} alt={product.title} className='w-[100%] h-[300px] object-contain' />
                  </div>
                  <div className='h-[200px] w-[300px] flex flex-col justify-center items-start gap-2'>
                    <h1 className='text-start text-lg font-semibold'>{product.title}</h1>
                    <p className=' text-gray-400'>
                      {product.isExpand ? product.description : `${product.description.slice(0, 100)} ...`}

                      {!product.isExpand && (
                        <span onClick={() => {
                          readMoreTrue(product.id)
                        }} style={{ cursor: "pointer" }}> Read More</span>

                      )}
                    </p>


                    <h1 className='text-start'>{product.price.toFixed(2)} $</h1>
                    <button
                      id='addBtn'
                      onClick={() => {
                        handleAddToCart(product);
                        handleBtn(idx);
                      }}
                      className={`h-[30px] w-[150px] text-black rounded-2xl ${btnBgColors[idx] ? 'bg-green-500' : 'bg-slate-300'}`}
                    >
                     {btnBgColors[idx] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className='h-[50vh] w-[100vw] flex justify-center items-center'>
                <span className="loader"></span>
              </div>
            )}
          </section>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default Products;
