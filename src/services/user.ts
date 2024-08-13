import { UserEndPoints } from "@/constants/end_points";
import { HttpClient } from "./httpclient";

export const CLientServices = {
    async getAllProducts() {
        return await HttpClient.getAllProducts(UserEndPoints.GET_PRODUCTS);
    },
    async getProductById(id: number) {
        return await HttpClient.getProductById(UserEndPoints.GET_PRODUCT_BY_ID(id));
    },
    async generateMenu(){
        return await HttpClient.generateMenu(UserEndPoints.GET_CATEGORIES_FOR_MENU);
    },
    async generateSubMenu(){
        return await HttpClient.generateSubMenu(UserEndPoints.GET_SUBCATEGORIES_FOR_MENU);
    },
    async login(data: any) {
        return await HttpClient.login(UserEndPoints.LOG_IN, data);
    },
    async signUp(data: any) {
        return await HttpClient.signup(UserEndPoints.SIGN_UP, data);
    },
    async logout() {
        return await HttpClient.Logout(UserEndPoints.LOG_OUT);
    },
    async getAllCategories() {
        return await HttpClient.getAllCategories(UserEndPoints.GET_ALL_CATEGORIES);
    },
    async getProductsByCategory(name: string) {
        return await HttpClient.getProductsByCategory(UserEndPoints.GET_PRODUCTS_BY_CATEGORY(name));
    },
    async getProductsBySubcategory(name: string) {
        return await HttpClient.getProductsBySubcategory(UserEndPoints.GET_PRODUCTS_BY_SUBCATEGORY(name));
    },
    async getProductsByType(name: string) {
        return await HttpClient.getProductsByType(UserEndPoints.GET_PRODUCTS_BY_TYPE(name));
    },
    async getProductsByVariant(name: string) {
        return await HttpClient.getProductsByVariant(UserEndPoints.GET_PRODUCTS_BY_VARIANT(name));
    },
};
