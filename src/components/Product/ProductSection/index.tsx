import React, { useEffect, useRef } from 'react';
import useProduct from '../useProduct';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    productName: string;
    overlayNode: React.ReactNode;
    coverImg: string;
}

const ProductSection: React.FC<Props> = ({ productName, overlayNode, children, ...props }) => {
    const { registerProduct } = useProduct(productName);
    
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) {
            registerProduct({
                productName,
                overlayNode,
                sectionRef,
            });
        }
    }, [overlayNode, productName, registerProduct]);

    return (
        <Container ref={sectionRef} {...props}>
            { children }
        </Container>
    );
};

export default ProductSection;
