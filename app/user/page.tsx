"use client";
import { useEffect, useState } from "react";
import ProductCard from "../home/productCard";
import SkeletonCard from "../home/skeletonCard";
export default function User() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const user = storedUser && JSON.parse(storedUser);
    const userId = user[0].id;
    fetch("http://localhost:3000/api/products/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-5xl pl-6 font-bold">Listed Products:</h2>
      <div className="flex-1 grid gap-6 p-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
  {products.sold && isLoaded ? (
    products.sold.map((product: any, index: number) => {
      return (
        <ProductCard
          key={index}
          id={product.id}
          name={product.name}
          price={product.price}
          howOld={product.howOld}
          image={product.images}
          isSold={product.buyerId !== null} // Add the isSold prop
        />
      );
    })
  ) : (
    [1, 2, 3, 4].map((n) => <SkeletonCard key={n} />)
  )}
</div>

      <h2 className="text-5xl pl-6 font-bold">Bought Products:</h2>
      <div className="flex-1 grid gap-6 p-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          
          {
            products.bought && isLoaded?
            products.bought.map((product:any, index:number) => {
                return (
                    <ProductCard key={index} id={product.id} name={product.name} price={product.price} howOld={product.howOld} image={product.images} />
                );
            }
          )
          :
          [1,2,3,4].map((n) => <SkeletonCard key={n} />)
}
        </div>
    </div>
  );
}