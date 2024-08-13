"use client";
import Divider from "@/components/divider/divider";
import ProductGrid from "@/components/product/product_grid";
import { ProductInterface } from "@/interfaces/products_interface";
import { CLientServices } from "@/services/user";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Product: React.FC = () => {
  const params = useSearchParams();
  const subcategory = params.get("subcategory");
  const type = params.get("type");
  const variant = params.get("variant");
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [decodeText, setdecodeText] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (subcategory) {
          // const filteredProducts = productsData.filter(product => product.category.toLowerCase() === category.toLowerCase());
          // setProducts(filteredProducts);  //IF USING DUMMY DATA

          // const productData = await CLientServices.getProductByCategory(
          //   category.toLowerCase()
          // );                                        //THIS CODE IS TEMORARILY COMMENTED BECAUSE WE ARE USING DUMMY ARRAY DATA
          // setProducts(productData.data.products);
          // console.log(productData.data.products);
          const response =await CLientServices.getProductsBySubcategory(subcategory.toLowerCase());
          setProducts(response.data);
          setdecodeText(decodeURIComponent(subcategory));
        } 
        else if(type){
          const response =await CLientServices.getProductsByType(type.toLowerCase());
          setProducts(response.data);
          setdecodeText(decodeURIComponent(type));
        }
        else if(variant){
          const response =await CLientServices.getProductsByVariant(variant.toLowerCase());
          setProducts(response.data);
          setdecodeText(decodeURIComponent(variant));
        }
        else {
          const response = await CLientServices.getProductsByCategory("butchers");
          setProducts(response.data);
          console.error("Category is null");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Update loading state regardless of success or failure
      }
    };

    fetchData(); // Always fetch data on component mount or when category changes
  }, [subcategory,type,variant]); // Include category in the dependency array

  return (
    
    <div>
      <div className="mt-36">
      <Divider content={decodeText} />
      <ProductGrid products={products} isLoading={loading} />
    </div>
    </div>
  );
};

export default Product;
