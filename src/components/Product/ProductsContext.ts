import React, { ReactNode } from 'react';

export interface ProductModel {
    productName: string;
    overlayNode: ReactNode;
    sectionRef: React.RefObject<HTMLElement>;
}

interface ProductsContext {
    wrapperRef: React.RefObject<HTMLElement>;
    registeredProducts: ProductModel[];
    registerProduct: (product: ProductModel) => void;
    unregisterProduct: (productName: string) => void;
    getProductByName: (productName: string) => ProductModel | null;
}

export default React.createContext<ProductsContext>({} as ProductsContext);