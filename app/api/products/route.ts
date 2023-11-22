import prisma from "../../../prisma/client";
export async function GET(request: Request, context : any) {
    const products = await prisma.product.findMany();
    console.log(products);
    return new Response(JSON.stringify(products), {
      headers: { "content-type": "application/json" },
      status: 201,
    });
  }
  