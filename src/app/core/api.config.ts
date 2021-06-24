
export const API = {
    PRODUCT:{
        GET_ALL:"api/products",
        GET_ONE:(productId:number) =>`api/products/${productId}`,
        GET_FROM_CATAGORY:(catName:string) =>`api/products/categoty/${catName}`
    },
    ORDER:{
        GET_ALL:"api/orders",
        GET_ONE:(id:number) => `api/orders/${id}`,
        ADD:"api/orders/new"
    }
}
