import { useCallback, useContext, useEffect } from "react";
import ProductsContext from "./ProductsContext";

export default function useProduct(productName: string) {
    const { registerProduct, unregisterProduct, getProductByName } = useContext(ProductsContext);

    useEffect(() => () => unregisterProduct(productName), [productName, unregisterProduct]);

    const getProduct = useCallback(() => getProductByName(productName), [getProductByName, productName]);

    return { registerProduct, getProduct };
}