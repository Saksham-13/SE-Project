async function getProducts()  {
    const res = await fetch("http://localhost:3000/api/products",{ cache: 'no-store' });
    
    const products = await res.json();
    
    return products;
    
    }
export default async function Home() {
    // const products = await getProducts();
    return (
        <></>
    )

}