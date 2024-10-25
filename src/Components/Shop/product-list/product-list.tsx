import './product-list.css'

function ProductList(props:any) {


    return (
      <>      
        
        <div className="product-card">
            <div className="card-box">
                <div className="card-img w-100 text-center">
                    <img src={props.image} alt="" />
                </div>
                <div className="card-details">
                    <h3 className='text-center'>{props.name}</h3>
                    <div className="d-flex justify-content-between">
                    <p style={{fontWeight:'bold',color:'rgb(255, 94, 0)'}}>${props.price}</p>
                    <p style={{color:'rgb(19, 116, 0)'}}>Available</p>
                    </div>
                    
                </div>
            </div>
        </div>
  
      </>
    )
  }
  
  export default ProductList;