"use client";
import Divider from "@/components/divider/divider";
import ProductGrid from "@/components/product/product_grid";
import { ProductInterface } from "@/interfaces/product_iterface";
import { CLientServices } from "@/services/user";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const images: ProductInterface[] = [
  {
    id: 1,
    name: 'Chicken',
    images: ['https://www.tariqhalalmeats.com/pub/media/catalog/product/cache/719b970b2b4bfe6c779a0fb32a212f38/p/h/photoroom_20231228_140318.png'],
    description: 'Mumtaz Lemon Pepper & Herb Wings (1kg)',
    price: 8.99,
    units: 1,
    category: 'Meat',
    tags: ['chicken', 'marinated']
  },
  {
    id: 2,
    name: 'Beef Steak',
    images: ['https://desime.co.uk/cdn/shop/files/unnamed-PhotoRoom.png-PhotoRoom_4.png?v=1703954571&width=390'],
    description: 'Premium Beef Steak (1kg)',
    price: 12.99,
    units: 1,
    category: 'Meat',
    tags: ['beef', 'steak']
  },
  {
    id: 3,
    name: 'Chicken Breast',
    images: ['https://desime.co.uk/cdn/shop/files/19573.jpg?v=1704035002'], 
    description: 'Organic Chicken Breast (1kg)',
    price: 9.99,
    units: 1,
    category: 'Meat',
    tags: ['chicken', 'breast']
  },
  {
    id: 4,
    name: 'Chicken Wings',
    images: ['https://desime.co.uk/cdn/shop/files/unnamed-PhotoRoom.png-PhotoRoom_64.png?v=1704472656&width=390'], 
    description: 'Spicy Chicken Wings (1kg)',
    price: 7.99,
    units: 1,
    category: 'Meat',
    tags: ['chicken', 'wings']
  },
  {
    id: 5,
    name: 'Apples',
    images: ['https://desime.co.uk/cdn/shop/files/Depositphotos_6636104_l-2015.jpg?v=1692703978&width=390'], 
    description: 'Fresh Organic Apples (1kg)',
    price: 3.99,
    units: 1,
    category: 'Fruits and Vegetables',
    tags: ['apples', 'organic']
  },
  {
    id: 6,
    name: 'Bananas',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_57f13e61-6d9e-4ed9-b124-5aa286bd7212.jpg?v=1681917460&width=390'], 
    description: 'Ripe Bananas (1kg)',
    price: 2.99,
    units: 1,
    category: 'Fruits and Vegetables',
    tags: ['bananas', 'ripe']
  },
  {
    id: 7,
    name: 'Carrots',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_81cf794a-abbe-4134-be71-bf09f338df7d.jpg?v=1681918155&width=390'], 
    description: 'Fresh Carrots (1kg)',
    price: 1.99,
    units: 1,
    category: 'Fruits and Vegetables',
    tags: ['carrots', 'fresh']
  },
  {
    id: 8,
    name: 'Broccoli',
    images: ['https://desime.co.uk/cdn/shop/products/brocalli_f7607886-053e-446c-8221-ca596c9e3bd0.jpg?v=1681917499&width=390'], 
    description: 'Organic Broccoli (1kg)',
    price: 3.49,
    units: 1,
    category: 'Fruits and Vegetables',
    tags: ['broccoli', 'organic']
  },
  {
    id: 9,
    name: 'Plain Naan Bread',
    images: ['https://desime.co.uk/cdn/shop/products/naan.jpg?v=1681919772&width=390'],
    description: 'Fresh Whole Wheat Bread (1 loaf)',
    price: 2.99,
    units: 1,
    category: 'Bakery',
    tags: ['bread', 'whole wheat']
  },
  {
    id: 10,
    name: 'Croissant',
    images: ['https://desime.co.uk/cdn/shop/products/crosiant_choc_c1a75deb-9392-4d29-b8fc-691ed0aad018.jpg?v=1681917437&width=390'],
    description: 'Butter Croissant (6 pieces)',
    price: 4.99,
    units: 1,
    category: 'Bakery',
    tags: ['croissant', 'butter']
  },
  {
    id: 11,
    name: 'Bagels',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_1f40367c-8ab1-4dfe-9866-7b54bcbf2ed7.jpg?v=1681917370&width=390'],
    description: 'Assorted Bagels (4 pieces)',
    price: 3.99,
    units: 1,
    category: 'Bakery',
    tags: ['bagels', 'assorted']
  },
  {
    id: 12,
    name: 'Muffins',
    images: ['https://desime.co.uk/cdn/shop/products/Baking_powder_14c9f67b-8eaf-43cf-9fc2-fb4c8a6aab3f.jpg?v=1681917495&width=390'],
    description: 'Blueberry Muffins (6 pieces)',
    price: 5.99,
    units: 1,
    category: 'Bakery',
    tags: ['muffins', 'blueberry']
  },
  {
    id: 13,
    name: 'Canned Beans',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_76611e9d-6c15-4bb2-aa8e-d019f1fdf878.jpg?v=1681919634&width=390'],
    description: 'Organic Canned Beans (400g)',
    price: 1.49,
    units: 1,
    category: 'Grocery',
    tags: ['beans', 'canned']
  },
  {
    id: 14,
    name: 'Olive Oil',
    images: ['https://desime.co.uk/cdn/shop/files/Heera-Olive-Pomace-Oil-Blend-1.jpg?v=1698103648&width=390'],
    description: 'Extra Virgin Olive Oil (500ml)',
    price: 6.99,
    units: 1,
    category: 'Grocery',
    tags: ['olive oil', 'extra virgin']
  },
  {
    id: 15,
    name: 'Tomato Sauce',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_29048dde-b226-4f64-bdbd-cf2ade6977de.jpg?v=1681919050&width=390'],
    description: 'Tomato Sauce (500ml)',
    price: 2.49,
    units: 1,
    category: 'Grocery',
    tags: ['tomato', 'sauce']
  },
  {
    id: 16,
    name: 'Noodles',
    images: ['https://desime.co.uk/cdn/shop/files/cd492bc36b0d75a10a1f3ac961ff0f62.jpg?v=1695293205&width=390'],
    description: 'Whole Wheat Pasta (500g)',
    price: 3.49,
    units: 1,
    category: 'Grocery',
    tags: ['noodles', 'whole wheat']
  },
  {
    id: 17,
    name: 'Milk',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_5b1bbbb5-05d4-405f-b3d6-8920c1025f74.jpg?v=1681919190&width=390'],
    description: 'Organic Whole Milk (1L)',
    price: 2.99,
    units: 1,
    category: 'Dairy and Frozen',
    tags: ['milk', 'organic']
  },
  {
    id: 18,
    name: 'Cheese',
    images: ['https://desime.co.uk/cdn/shop/files/10384011_10384011_1_1687766867000_1280x1280_1.jpg?v=1690799531&width=390'],
    description: 'Cheddar Cheese (200g)',
    price: 4.99,
    units: 1,
    category: 'Dairy and Frozen',
    tags: ['cheese', 'cheddar']
  },
  {
    id: 19,
    name: 'Ice Cream',
    images: ['https://desime.co.uk/cdn/shop/files/AhmedIceCreamSodaJelly70g.webp?v=1698104478&width=390'],
    description: 'Vanilla Ice Cream (500ml)',
    price: 5.99,
    units: 1,
    category: 'Dairy and Frozen',
    tags: ['ice cream', 'vanilla']
  },
  {
    id: 20,
    name: 'Yogurt',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_e9421160-cd48-43c1-acd9-a21788b8e962.jpg?v=1681918720&width=390'],
    description: 'Greek Yogurt (500g)',
    price: 3.99,
    units: 1,
    category: 'Dairy and Frozen',
    tags: ['yogurt', 'greek']
  },
  {
    id: 21,
    name: 'Rice',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_1868b062-6d3a-4503-9df7-5d3d546d8b49.jpg?v=1681919795&width=390'],
    description: 'Basmati Rice (1kg)',
    price: 6.49,
    units: 1,
    category: 'Flour and Rice',
    tags: ['rice', 'basmati']
  },
  {
    id: 22,
    name: 'Flour',
    images: ['https://desime.co.uk/cdn/shop/products/snapshotimagehandler_56202518_f14b9b13-37be-44f4-9a71-231e1be81634.jpg?v=1681918145&width=390'],
    description: 'All-Purpose Flour (1kg)',
    price: 2.49,
    units: 1,
    category: 'Flour and Rice',
    tags: ['flour', 'all-purpose']
  },
  {
    id: 23,
    name: 'Brown Rice',
    images: ['https://desime.co.uk/cdn/shop/products/amla_powder_4e9912a7-41b9-4f56-8265-dfdfc1e9df58.jpg?v=1681918942&width=390'],
    description: 'Organic Brown Rice (1kg)',
    price: 7.49,
    units: 1,
    category: 'Flour and Rice',
    tags: ['rice', 'brown']
  },
  {
    id: 24,
    name: 'Whole Wheat Flour',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-2_0f22435b-2153-4ffd-b688-6042782e7b94.jpg?v=1681918141&width=390'],
    description: 'Whole Wheat Flour (1kg)',
    price: 3.49,
    units: 1,
    category: 'Flour and Rice',
    tags: ['flour', 'whole wheat']
  },
  {
    id: 25,
    name: 'Black Pepper',
    images: ['https://desime.co.uk/cdn/shop/files/Heera-Black-Pepper-Whole-300g.jpg?v=1699442493&width=390'],
    description: 'Ground Black Pepper (100g)',
    price: 2.99,
    units: 1,
    category: 'Spices and Seasoning',
    tags: ['black pepper', 'ground']
  },
  {
    id: 26,
    name: 'Cumin',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-3_62bc3d6e-e48e-4d8b-b232-f2d7302088c0.jpg?v=1681919357&width=390'],
    description: 'Cumin Seeds (100g)',
    price: 1.99,
    units: 1,
    category: 'Spices and Seasoning',
    tags: ['cumin', 'seeds']
  },
  {
    id: 27,
    name: 'Turmeric',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_c4e79c77-c5f6-4f46-aae5-03271fd57c59.jpg?v=1681919814&width=390'],
    description: 'Ground Turmeric (100g)',
    price: 2.49,
    units: 1,
    category: 'Spices and Seasoning',
    tags: ['turmeric', 'ground']
  },
  {
    id: 28,
    name: 'Chili Powder',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-4_7b537b0b-3e62-45a0-b748-2ea7e506073b.jpg?v=1681918566&width=390'],
    description: 'Chili Powder (100g)',
    price: 2.99,
    units: 1,
    category: 'Spices and Seasoning',
    tags: ['chili', 'powder']
  },
  {
    id: 29,
    name: 'Shampoo',
    images: ['https://desime.co.uk/cdn/shop/products/Head_Shoulders-AppleFresh400ml_500x_bb87b162-9e6d-4379-ac6e-72e5ed5cc741.png?v=1681918429&width=390'],
    description: 'Herbal Shampoo (500ml)',
    price: 7.99,
    units: 1,
    category: 'Health and Beauty',
    tags: ['shampoo', 'herbal']
  },
  {
    id: 30,
    name: 'Conditioner',
    images: ['https://desime.co.uk/cdn/shop/files/61GBj-eTqsL._AC_SL1500.jpg?v=1694772806&width=390'],
    description: 'Herbal Conditioner (500ml)',
    price: 7.99,
    units: 1,
    category: 'Health and Beauty',
    tags: ['conditioner', 'herbal']
  },
  {
    id: 31,
    name: 'Face Wash',
    images: ['https://desime.co.uk/cdn/shop/products/jo.jpg?v=1681918798'],
    description: 'Organic Face Wash (200ml)',
    price: 5.99,
    units: 1,
    category: 'Health and Beauty',
    tags: ['face wash', 'organic']
  },
  {
    id: 32,
    name: 'Body Lotion',
    images: ['https://desime.co.uk/cdn/shop/products/BABY_LOTIONNNN.jpg?v=1681918796&width=390'],
    description: 'Moisturizing Body Lotion (250ml)',
    price: 6.99,
    units: 1,
    category: 'Health and Beauty',
    tags: ['body lotion', 'moisturizing']
  },
  {
    id: 33,
    name: 'BBQ Sauce',
    images: ['https://desime.co.uk/cdn/shop/files/61A6HOYDqzL.jpg?v=1716396555&width=390'],
    description: 'Spicy BBQ Sauce (500ml)',
    price: 3.99,
    units: 1,
    category: 'BBQ',
    tags: ['bbq', 'sauce']
  },
  {
    id: 34,
    name: 'Charcoal',
    images: ['https://desime.co.uk/cdn/shop/products/supagrill_charcoal.jpg?v=1681919716&width=390'],
    description: 'BBQ Charcoal (5kg)',
    price: 9.99,
    units: 1,
    category: 'BBQ',
    tags: ['charcoal', 'bbq']
  },
  {
    id: 35,
    name: 'Grill',
    images: ['https://desime.co.uk/cdn/shop/products/Untitled-1_35a38909-aafc-49d2-913d-012c38755303.jpg?v=1681918866&width=390'],
    description: 'Portable BBQ Grill',
    price: 29.99,
    units: 1,
    category: 'BBQ',
    tags: ['grill', 'portable']
  },
  {
    id: 36,
    name: 'Skewers',
    images: ['https://desime.co.uk/cdn/shop/files/bambooskweres.jpg?v=1690233808'], 
    description: 'Metal BBQ Skewers (10 pieces)',
    price: 5.99,
    units: 1,
    category: 'BBQ',
    tags: ['skewers', 'metal']
  }
];
const Product: React.FC = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (category) {
          const filteredProducts = images.filter(product => product.category.toLowerCase() === category.toLowerCase());
          setProducts(filteredProducts);
          // const productData = await CLientServices.getProductByCategory(
          //   category.toLowerCase()
          // );
          // setProducts(productData.data.products);
          // console.log(productData.data.products);
        } else {
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
    <div className="mt-36">
      <Divider content={category} />
      <ProductGrid products={products} isLoading={loading} />
    </div>
  );
};

export default Product;

// const dummyProducts: ProductInterface[] = [
//   {
//     id: 1,
//     name: "Product 1",
//     images: [
//       "https://images.pexels.com/photos/1314041/pexels-photo-1314041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     ],
//     description: "This is a dummy product",
//     price: 29.99,
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     images: [
//       "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg",
//     ],
//     price: 39.99,
//     description: "This is a dummy product",
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     id: 3,
//     name: "Product 2",
//     images: [
//       "https://images.pexels.com/photos/618775/pexels-photo-618775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     ],
//     price: 39.99,
//     description: "This is a dummy product",
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     id: 4,
//     name: "Product 2",
//     images: [
//       "https://images.pexels.com/photos/3688/food-dinner-lunch-chicken.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     ],
//     price: 39.99,
//     description: "This is a dummy product",
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     id: 5,
//     name: "Product 2",
//     images: [
//       "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     ],
//     price: 39.99,
//     description: "This is a dummy product",
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     id: 6,
//     name: "Tuna Fish",
//     images: [
//       "https://images.pexels.com/photos/14062112/pexels-photo-14062112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     ],
//     description: "This is a dummy product",
//     price: 39.99,
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     id: 7,
//     name: "Fish Stakes",
//     images: [
//       "https://images.pexels.com/photos/7451973/pexels-photo-7451973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     ],
//     price: 41.99,
//     description: "This is a dummy product",
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     id: 8,
//     name: "Fish Fillets",
//     images: [
//       "https://images.pexels.com/photos/14062111/pexels-photo-14062111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     ],
//     price: 39.99,
//     description: "This is a dummy product",
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     id: 9,
//     name: "Meat Mince",
//     images: [
//       "https://pratapchicken.com/wp-content/uploads/2020/10/49420775-C0CC-43FD-9353-EE6EB96B2581.jpeg",
//     ],
//     price: 39.99,
//     description: "This is a dummy product",
//     units: 1,
//     category: "category",
//     tags: ["tag1", "tag2"],
//   },

//   // Add more dummy products as needed
// ];
