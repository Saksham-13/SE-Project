async function getProducts(search: any) {
    const res = await fetch("http://localhost:3000/api/products", { cache: 'no-store' });
  
    const products1 = await res.json();
    const filteredProducts = products1.filter((product: any) => {
      const productName = product.name.toLowerCase();
      const productDescription = product.description.toLowerCase();
      const searchTerm = search.toLowerCase();
      return productName.includes(searchTerm) || productDescription.includes(searchTerm);
    });
  
    return filteredProducts;
  }
import ProductCard from "@/app/home/productCard";
export default async function Product ({ params }: { params: { search: string } }){
    const products = await getProducts(params.search)
    return (
        <div>
            <div className=" flex flex-col items-center min-h-screen  hell">
            <div>
                <h1 className="text-4xl font-bold">Search Results for: {params.search}</h1>
            </div>
          <div className="flex-1 grid gap-6 p-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {products.length > 0 ? (
              products.map((product: any, index: number) => (
                <ProductCard
                  key={index}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  howOld={product.howOld}
                  image={product.images}
                  isSold={product.buyerId !== null}
                />
              ))
            ) : (
              <p>No items found for the search result.</p>
            )}
          </div>

            </div>
           
        </div>
      );

}