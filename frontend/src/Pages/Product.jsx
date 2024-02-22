import React, { useContext } from 'react'
import {ShopContext} from '../Components/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescripcionBox } from '../Components/DescripcionBox/DescripcionBox';
import RelateProducts from '../Components/RelatedProducts/RelateProducts';

const Product = () => { 
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div> 
    <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <DescripcionBox/>
    <RelateProducts/>
    </div>
  )
}

export default Product