import { ProductInterface } from "@/interfaces/product_iterface";

const productsData: ProductInterface[] = [
  // Fresh Meats
  {
    id: 1,
    name: 'Fresh Chicken Breast',
    images: ['https://png.pngtree.com/png-vector/20240421/ourmid/pngtree-vector-art-of-three-raw-chicken-breasts-on-a-plate-accompanied-png-image_12303628.png'],
    description: 'Fresh Chicken Breast (1kg)',
    price: 10.99,
    units: 1,
    category: 'Fresh Meats',
    tags: ['fresh', 'chicken', 'breast']
  },
  {
    id: 2,
    name: 'Fresh Beef Steak',
    images: ['https://media.istockphoto.com/id/503817114/photo/fresh-raw-beef-steak-with-spices.jpg?s=612x612&w=0&k=20&c=S7BJUgIvDYs4i04XeftPuYNUlPPtNKu_EJZIXLkv17Q='],
    description: 'Fresh Beef Steak (1kg)',
    price: 14.99,
    units: 1,
    category: 'Fresh Meats',
    tags: ['fresh', 'beef', 'steak']
  },
  {
    id: 3,
    name: 'Fresh Lamb Chops',
    images: ['https://beta-api.farmersfreshmeat.com/public/storage/images/menu-images/1663787448Lamb-Chops-1.png'],
    description: 'Fresh Lamb Chops (1kg)',
    price: 18.99,
    units: 1,
    category: 'Fresh Meats',
    tags: ['fresh', 'lamb', 'chops']
  },
  {
    id: 4,
    name: 'Fresh Lamb Shanks  ',
    images: ['https://zonefresh.com.au/wp-content/uploads/lamb-shanks.png'],
    description: 'Fresh Lamb Shanks (1kg)',
    price: 12.99,
    units: 1,
    category: 'Fresh Meats',
    tags: ['fresh', 'lamb', 'shanks']
  },
  {
    id: 5,
    name: 'Fresh Turkey Breast',
    images: ['https://jmbutcher.mt/wp-content/uploads/2020/05/Turkey-Breast.jpg'],
    description: 'Fresh Turkey Breast (1kg)',
    price: 11.99,
    units: 1,
    category: 'Fresh Meats',
    tags: ['fresh', 'turkey', 'breast']
  },


  {
    id: 6,
    name: 'Marinated Chicken Wings',
    images: ['https://hips.hearstapps.com/hmg-prod/images/chicken-wing-marinade-horizontal-1548437489.png?crop=0.668xw:1.00xh;0.173xw,0&resize=1200:*'],
    description: 'Marinated Chicken Wings (1kg)',
    price: 9.99,
    units: 1,
    category: 'Marinated Meats',
    tags: ['marinated', 'chicken', 'wings']
  },
  {
    id: 7,
    name: 'Marinated Beef Skewers',
    images: ['https://www.mygreekdish.com/wp-content/uploads/2021/02/Marinated-Greek-Beef-Souvlaki-Skewers-Beef-Kabobs-ready-to-grill-scaled.jpeg'],
    description: 'Marinated Beef Skewers (1kg)',
    price: 13.99,
    units: 1,
    category: 'Marinated Meats',
    tags: ['marinated', 'beef', 'skewers']
  },
  {
    id: 8,
    name: 'Marinated Lamb Ribs',
    images: ['https://sweetcaramelsunday.com/wp-content/uploads/Marinated-Lamb-Ribs-300.jpg'],
    description: 'Marinated Lamb Ribs (1kg)',
    price: 17.99,
    units: 1,
    category: 'Marinated Meats',
    tags: ['marinated', 'lamb', 'ribs']
  },
  {
    id: 9,
    name: 'Marinated Chicken Leg Piece',
    images: ['https://savaskitchen.com/wp-content/uploads/2022/10/marinated-baked-chicken-drumsticks.jpg'],
    description: 'Marinated Chicken Legs (1kg)',
    price: 11.99,
    units: 1,
    category: 'Marinated Meats',
    tags: ['marinated', 'chicken', 'leg piece']
  },
  {
    id: 10,
    name: 'Marinated Turkey Legs',
    images: ['https://nkechiajaeroh.com/wp-content/uploads/2022/10/Marinated-Turkey-Legs-main-photo-1.jpg'],
    description: 'Marinated Turkey Legs (1kg)',
    price: 10.99,
    units: 1,
    category: 'Marinated Meats',
    tags: ['marinated', 'turkey', 'legs']
  },

  
  {
    id: 11,
    name: 'Cold Roast Lamb',
    images: ['https://www.olivado.com/wp-content/uploads/2021/03/cold-slices-of-roast-lamb-with-coriander-jalapeno-yoghurt-2000x2000.jpg'],
    description: 'Cold Slices of Roast Lamb (1kg)',
    price: 8.99,
    units: 1,
    category: 'Cold Meat',
    tags: ['cold', 'lamb', 'slices']
  },
  {
    id: 12,
    name: 'Cold Turkey Slices',
    images: ['https://mortadellahead.com/wp-content/uploads/2022/08/turkey-meat.webp'],
    description: 'Cold Turkey Slices (1kg)',
    price: 9.99,
    units: 1,
    category: 'Cold Meat',
    tags: ['cold', 'turkey', 'slices']
  },
  {
    id: 13,
    name: 'Cold Beef Pastrami',
    images: ['https://www.allrecipes.com/thmb/gPU0506SZQa2rECUCt-IHSMQ0b8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pastrami-on-rye-876eeb2c2a894bdbb9858232bd3ff1bb.jpg'],
    description: 'Cold Beef Pastrami (1kg)',
    price: 12.99,
    units: 1,
    category: 'Cold Meat',
    tags: ['cold', 'beef', 'pastrami']
  },
  {
    id: 14,
    name: 'Cold Chicken Breast Slices',
    images: ['https://nourishedbynic.com/wp-content/uploads/2023/10/baked-thin-chicken-breast.jpg'],
    description: 'Cold Chicken Breast Slices (1kg)',
    price: 10.99,
    units: 1,
    category: 'Cold Meat',
    tags: ['cold', 'chicken', 'breast']
  },
  {
    id: 15,
    name: 'Cold Roast Beef',
    images: ['https://static.onecms.io/wp-content/uploads/sites/19/2013/07/23/cold-roasted-tenderloin-beef-horseradish-oh-x.jpg'],
    description: 'Cold Roast Beef (1kg)',
    price: 14.99,
    units: 1,
    category: 'Cold Meat',
    tags: ['cold', 'roast', 'beef']
  },


  {
    id: 16,
    name: 'Frozen Chicken Nuggets',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocnWgGW31yBADdHZKqXTGqTg9bm4az8NTcw&s'],
    description: 'Frozen Chicken Nuggets (1kg)',
    price: 6.99,
    units: 1,
    category: 'Frozen',
    tags: ['frozen', 'chicken', 'nuggets']
  },
  {
    id: 17,
    name: 'Frozen Beef Patties',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFzoYYn-WIkJZXcmeQ6Bp3pMi1EVvh1sUdXg&s'],
    description: 'Frozen Beef Patties (1kg)',
    price: 8.99,
    units: 1,
    category: 'Frozen',
    tags: ['frozen', 'beef', 'patties']
  },
  {
    id: 18,
    name: 'Frozen Lamb Kebabs',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tdFIY4ltt7-pFvbqtRKhmKNInvryoXrzsQ&s'],
    description: 'Frozen Lamb Kebabs (1kg)',
    price: 10.99,
    units: 1,
    category: 'Frozen',
    tags: ['frozen', 'lamb', 'kebabs']
  },
  {
    id: 19,
    name: 'Frozen Beef Meat',
    images: ['https://img.tradeford.com/pimages/l/2/460412.jpg'],
    description: 'Frozen Beef Meat (1kg)',
    price: 7.99,
    units: 1,
    category: 'Frozen',
    tags: ['frozen', 'beef', 'meat']
  },
  {
    id: 20,
    name: 'Frozen Turkey Burgers',
    images: ['https://diestelturkey.com/wp-content/uploads/2019/04/2253143-Burger-box-NEW.jpg'],
    description: 'Frozen Turkey Burgers (1kg)',
    price: 9.99,
    units: 1,
    category: 'Frozen',
    tags: ['frozen', 'turkey', 'burgers']
  },

  {
    id: 21,
    name: 'Halal Beef Steak',
    images: ['https://ohmydish.com/wp-content/uploads/2015/12/Kangaroo-steak.jpg'],
    description: 'Halal Beef Steak (1kg)',
    price: 24.99,
    units: 1,
    category: 'Exotic',
    tags: ['exotic', 'halal', 'beef', 'steak']
  },
  {
    id: 22,
    name: 'Halal Chicken Fillet',
    images: ['https://www.keziefoods.co.uk/wp-content/uploads/2021/01/Ostrich-Fillets-Raw.jpg'],
    description: 'Halal Chicken Fillet (1kg)',
    price: 29.99,
    units: 1,
    category: 'Exotic',
    tags: ['exotic', 'halal', 'chicken', 'fillet']
  },
  {
    id: 23,
    name: 'Lamb Shoulder',
    images: ['https://ux2cms.imgix.net/images/Smoked-Lamb-Shoulder-2.jpg?auto=compress,format&w=750'],
    description: 'Halal Lamb Shoulder (1kg)',
    price: 34.99,
    units: 1,
    category: 'Exotic',
    tags: ['exotic', 'halal', 'lamb', 'shoulder']
  },
  {
    id: 24,
    name: 'Buffalo Steak',
    images: ['https://images.getrecipekit.com/20230602142727-cooked-20and-20sliced-20buffalo-20ny-20strip-20steaks-20.png?width=650&quality=90&'],
    description: 'Buffalo Steak (1kg)',
    price: 27.99,
    units: 1,
    category: 'Exotic',
    tags: ['exotic', 'buffalo', 'steak']
  },
  {
    id: 25,
    name: 'Halal Beef Sausage',
    images: ['https://www.luvele.com/cdn/shop/articles/beef_sausages_04_1024x.png?v=1595380503'],
    description: 'Halal Beef Sausage (1kg)',
    price: 19.99,
    units: 1,
    category: 'Exotic',
    tags: ['exotic', 'halal', 'beef', 'sausage']
  },
  {
    id: 26,
    name: 'Chicken Curry',
    images: ['https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg'],
    description: 'Ready Meal: Chicken Curry (500g)',
    price: 6.99,
    units: 1,
    category: 'Ready Meals',
    tags: ['ready', 'meal', 'chicken', 'curry']
  },
  {
    id: 27,
    name: 'Beef Lasagna',
    images: ['https://i0.wp.com/recipesbycarina.com/wp-content/uploads/2018/06/Beef-Lasagne.jpg?fit=4932%2C3288&ssl=1'],
    description: 'Ready Meal: Beef Lasagna (500g)',
    price: 7.99,
    units: 1,
    category: 'Ready Meals',
    tags: ['ready', 'meal', 'beef', 'lasagna']
  },
  {
    id: 28,
    name: 'Lamb Stew',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOwLYJqBDBeqJcGvc_fnZXdR5yCDx8lSKCw&s'],
    description: 'Ready Meal: Lamb Stew (500g)',
    price: 8.99,
    units: 1,
    category: 'Ready Meals',
    tags: ['ready', 'meal', 'lamb', 'stew']
  },
  {
    id: 29,
    name: 'Chicken Schnitzel',
    images: ['https://www.jessicagavin.com/wp-content/uploads/2022/08/chicken-schnitzel-21-1200.jpg'],
    description: 'Ready Meal: Halal Chicken Schnitzel (500g)',
    price: 7.49,
    units: 1,
    category: 'Ready Meals',
    tags: ['ready', 'meal', 'halal', 'chicken', 'schnitzel']
  },
  {
    id: 30,
    name: 'Turkey Meatloaf',
    images: ['https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/17/0/FNK_Best-Turkey-Meatloaf_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568735467631.jpeg'],
    description: 'Ready Meal: Turkey Meatloaf (500g)',
    price: 6.49,
    units: 1,
    category: 'Ready Meals',
    tags: ['ready', 'meal', 'turkey', 'meatloaf']
  }
];

export default productsData;
