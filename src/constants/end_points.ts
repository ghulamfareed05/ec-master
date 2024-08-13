export const UserEndPoints = {
    GET_PRODUCTS: "/product",
    GET_PRODUCT_BY_ID:(id:number) => `/product/getProductById/${id}`,
    LOG_IN:"/auth/login",
    SIGN_UP:"/auth/signup",
    GET_ALL_CATEGORIES:"/category/",
    LOG_OUT:"/auth/logout",
    GET_CATEGORIES_FOR_MENU: '/categories/getCategoriesForMenu',
    GET_SUBCATEGORIES_FOR_MENU: '/subcategories/getSubcategoriesForMenu',
    GET_PRODUCTS_BY_VARIANT: (variant: string) => `/product/getProductsByVariant?variant=${variant}`,
    GET_PRODUCTS_BY_TYPE: (type: string) => `/product/getProductsByType?type=${type}`,
    GET_PRODUCTS_BY_SUBCATEGORY: (subcategory: string) => `/product/getProductsBySubcategory?subcategory=${subcategory}`,
    GET_PRODUCTS_BY_CATEGORY: (category: string) => `/product/getProductsByCategory?category=${category}`,
};