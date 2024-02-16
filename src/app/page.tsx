import { getProducts } from "@/services/products";
import { Suspense } from "react";
import { useForm } from "react-hook-form";

const Products = async () => {
  const products = await getProducts();

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
};

const Component = async () => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h2 className="mb-6 text-xl underline font-extrabold">Suspense API</h2>
      <Suspense fallback={<div>Loading Suspense...</div>}>
        <Products />
      </Suspense>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Component />
    </>
  );
}
