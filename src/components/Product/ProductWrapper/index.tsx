import React, { useCallback, useRef, useState, useContext } from 'react';
import ProductsContext, { ProductModel } from '../ProductsContext';

import ProductOverlay from '../ProductOverlay'
import { Container, OverlaysRoot } from './styles';

const ProductWrapper: React.FC = ({ children }) => {

    const wrapperRef = useRef<HTMLDivElement>(null);

    const [registeredProducts, setRegisteredProducts] = useState<ProductModel[]>([]);

    const registerProduct = useCallback((product: ProductModel) => {
        setRegisteredProducts(state => [...state, product]);
    }, []);

    const unregisterProduct = useCallback((productName: string) => {
        setRegisteredProducts(state => state.filter(registered => registered.productName === productName));
    }, []);

    const getProductByName = useCallback((productName: string) => {
        const product = registeredProducts.find((registered) => registered.productName === productName) || null;
        return product;
    }, [registeredProducts]);

    return (
        <ProductsContext.Provider value={{
            wrapperRef,
            registeredProducts,
            registerProduct,
            unregisterProduct,
            getProductByName,
        }}>
            <Container ref={wrapperRef}>
                <OverlaysRoot>
                    {
                        registeredProducts.map(item => (
                            <ProductOverlay key={item.productName} model={item}>
                                { item.overlayNode }
                            </ProductOverlay>
                        ))
                    }
                </OverlaysRoot>
                
                { children }
            </Container>
        </ProductsContext.Provider>
    );
};

export default ProductWrapper;
