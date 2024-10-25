import Shop from "../Components/Shop/shop";


function ProductService() {

    const products = [
        {
          "id": 1,
          "name": "Ring",
          "price": "200",
          "condition":"New",
          "img":"../../../public/p1.png",
          "stock":20
        },
        {
          "id": 2,
          "name": "Watch",
          "price": "300",
          "condition":"New",
          "img":"../../../public/p2.png",
          "stock":12
        },
        {
          "id": 3,
          "name": "Teddy Bear",
          "price": "110",
          "condition":"New",
          "img":"../../../public/p3.png",
          "stock":20
        },
        {
          "id": 1,
          "name": "Ring",
          "price": "200",
          "condition":"New",
          "img":"../../../public/p1.png",
          "stock":20
        },
        {
          "id": 2,
          "name": "Watch",
          "price": "300",
          "condition":"New",
          "img":"../../../public/p2.png",
          "stock":12
        },
        {
          "id": 3,
          "name": "Teddy Bear",
          "price": "110",
          "condition":"New",
          "img":"../../../public/p3.png",
          "stock":20
        }
      ]
      const name = "Lakshitha";

  return (
    <>
        <Shop productList={[products]}/>
   
    </>
  )
}

export default ProductService;