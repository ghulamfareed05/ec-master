"use client";
import Divider from "@/components/divider/divider";
import ProductGrid from "@/components/product/product_grid";
import { ProductInterface } from "@/interfaces/product_iterface";
import { CLientServices } from "@/services/user";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import productsData from "@/utils/ProductsData_util";

const Product: React.FC = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (category) {
          const filteredProducts = productsData.filter(product => product.category.toLowerCase() === category.toLowerCase());
          setProducts(filteredProducts);
          // const productData = await CLientServices.getProductByCategory(
          //   category.toLowerCase()
          // );                                        //THIS CODE IS TEMORARILY COMMENTED BECAUSE WE ARE USING DUMMY ARRAY DATA
          // setProducts(productData.data.products);
          // console.log(productData.data.products);
        } else {
            setProducts(productsData);
          console.error("Category is null");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Update loading state regardless of success or failure
      }
    };

    fetchData(); // Always fetch data on component mount or when category changes
  }, [category]); // Include category in the dependency array

  return (
    
    <div>
      <div className="mt-36">
      <Divider content={category} />
      <ProductGrid products={products} isLoading={loading} />
    </div>
    </div>
  );
};

export default Product;
