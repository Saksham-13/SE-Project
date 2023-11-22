"use client";
import Search from "./search";
import Sidebar from "./sideBar";
import ProductCard from "./productCard";
import { useState } from "react";
import { useEffect } from "react";
async function getProducts()  {
    const res = await fetch("http://localhost:3000/api/products",{ cache: 'no-store' });
    
    const products = await res.json();
    console.log(products)
    return products;

    
    }

export default  function Component() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts().then((products) => setProducts(products));
      }, []);
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const handlePriceSelect = (price:any) => {
        setSelectedPrice(price);
      }
    const handleCategorySelect = (category:any) => {
        setSelectedCategory(category);
      };
  return (
    <div className="flex flex-col min-h-screen">
    <div className="h-[73px]">
    <Search/>
    </div>
    
     
      <main className="flex flex-1">
        <div className="w-64">
        <Sidebar
        onPriceSelect={handlePriceSelect}
      onCategorySelect={handleCategorySelect}
      />

        </div>
     
        <div className="flex-1 grid gap-6 p-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          
          {
            products.map((product:any, index:number) => {
                return (
                    <ProductCard key={index} id={product.id} name={product.name} price={product.price*10} howOld={product.howOld} image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Raspberry_Pi_4_Model_B_-_Side.jpg/1200px-Raspberry_Pi_4_Model_B_-_Side.jpg" />
                );
            }
          )}
          
        </div>
      </main>
    </div>
  )
}


