import React from 'react';
import Layout from '@/components/Layout';
import axios from 'axios';
import Image from 'next/image';
import styles from "@/styles/pageno.module.css";

export const getStaticPaths = async () => {
  const res = await axios.get(`https://fakestoreapi.com/products`);
  const response = await res.data;

  const paths = response.map((items) => {
    return {
      params: {
        pageNo : items.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  // console.log(111, res);
  const response = await res.data;
  // console.log(response,"kiikj");

  return{
    props: {
      response,
    }
  }

}

const pageNo = ( {response} ) => {

  const { image, title, description, price,rating,category } = response;
  return (
    <>
      <Layout>
        <div>
        <h2 className={styles.heading}>{title}</h2>
        <div className={styles.main}>
          <div className={styles.main_pic}>
            <Image src={image} height={550} width={470} alt='items'/>
          </div>
          <div className={styles.main_detail}>
            <h3 className={styles.category}>{category}</h3>
            <p>Rating: <strong>{rating.rate}</strong> out of {rating.count} reviews</p>
            <hr/>
            {/* <h1>$ {price}</h1> */}
            <div className={styles.main_price}>
            <p className={styles.price}>$ {price}</p>
            <p className={styles.price_discount}>${Math.floor(price - (price*10)/100)}</p>
            </div>
            <span>You Saved Approx: <strong> ${Math.round(price - Math.floor(price - (price*10)/100)) }</strong></span>
            <hr/>
            <p><strong>About this item:</strong>
            <br/>{description}</p>
            <hr/>
            <button className={styles.main_button}>Add to cart</button>
          </div>
          <div className={styles.main_3}></div>
        </div>
          
        </div>
      {/* <h1>Helllo!</h1> */}
      </Layout>
    </>
  )
}

export default pageNo;

