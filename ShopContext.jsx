import { createContext, useEffect, useState } from "react";
// import axios from "axios";
import axios from '../Utils/axios';

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const value = {
    product,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch
  };
  const getProducts = () => {
    axios.get("/products")
      .then(res => {
        // console.log(res.data);
        setProduct(res.data);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
}


export { ShopContextProvider };
export default ShopContext;