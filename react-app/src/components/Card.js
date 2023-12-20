const Card = ({ product }) => {
    return (
        <div className='product-card'>
        {product.id} : {product.name}, {product.price}원
      </div>
    );
  }
  
  export default Card;
  