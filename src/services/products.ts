import { resolve } from "path";

export type Product = {
  id: number;
  name: string;
  description: string;
};

export async function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Product 1",
          description: "Description 1",
        },

        {
          id: 2,
          name: "Product 2",
          description: "Description 2",
        },
        {
          id: 3,
          name: "Product 3",
          description: "Description 3",
        },
      ]);
    }, 3000);
  });
}
