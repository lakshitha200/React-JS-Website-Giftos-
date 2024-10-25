import { Link } from "react-router-dom";
import ProductList from "./product-list/product-list";

import './shop.css';

function Shop(props:any) {
    console.log(props)
    const products = [
      {
        "id": 1,
        "name": "Ring",
        "price": 200,
        "condition":"Latest",
        "img":"../../../public/p1.png",
        "stock":20
      },
      {
        "id": 2,
        "name": "Watch",
        "price": 300,
        "condition":"New",
        "img":"../../../public/p2.png",
        "stock":12
      },
      {
        "id": 3,
        "name": "Teddy Bear",
        "price": 110,
        "condition":"Latest",
        "img":"../../../public/p3.png",
        "stock":20
      },
      {
        "id": 4,
        "name": "Flower Bouquet",
        "price": 45,
        "condition":"Latest",
        "img":"../../../public/p4.png",
        "stock":20
      },
      {
        "id": 5,
        "name": "Teddy Bear",
        "price": 100,
        "condition":"New",
        "img":"../../../public/p5.png",
        "stock":22
      },
      {
        "id": 6,
        "name": "Flower Bouquet",
        "price": 110,
        "condition":"New",
        "img":"../../../public/p6.png",
        "stock":20
      },
      {
        "id": 7,
        "name": "Watch",
        "price": 400,
        "condition":"Latest",
        "img":"../../../public/p7.png",
        "stock":10
      },
      {
        "id": 8,
        "name": "Ring",
        "price": 450,
        "condition":"New",
        "img":"../../../public/p8.png",
        "stock":24
      }

      
    ]
    let latestProducts = products.filter(p=>p.condition=="Latest")
    console.log(latestProducts)

    return (
      <>      
        <section className="shop_section">
          <div className="container">
              <h2 className="mt-3 mb-3"> {props.title || "ALL Products"} </h2>
              <div className="product-list">
                {  !props.showLatest &&
                  products.map((product: any)=>{
                  return (
                    <ProductList
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      condition={product.condition}
                      image={product.img}
                      stock={product.stock}
                    ></ProductList>
                  );
                })}

                { props.showLatest &&
                  latestProducts.map((product: any)=>{
                  return (
                    <ProductList
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      condition={product.condition}
                      image={product.img}
                      stock={product.stock}
                    ></ProductList>
                  );
                })}
              </div>

             { props.showLatest &&
              <div className="btn-box text-center">
              <span className="product-btn ">
                <Link to="/shop" className="nav-link">View All Products</Link>
              </span>
            </div>
             }
            
          </div>
        </section>
  
      </>
    )
  }
  
  export default Shop;