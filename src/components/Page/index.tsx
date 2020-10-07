import React from 'react';
import { ProductWrapper, ProductSection } from '../Product';
import DefaultOverlayContent from '../DefaultOverlayContent';

import { Container } from './styles';

interface Product {
    productName: string;
    coverImg: string;
    description: string;
}

const products: Product[] = [
    {
        productName: 'Plant One',
        coverImg: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
        description: 'Order Online and receive next day'
    },
    {
        productName: 'Plant Two',
        coverImg: 'https://images.unsplash.com/photo-1543459176-4426b37223ba',
        description: 'Order Online and receive next day',
    },
    {
        productName: 'Plant Three',
        coverImg: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f',
        description: 'Order Online and receive next day',
    },
    {
        productName: 'Plant Four',
        coverImg: 'https://images.unsplash.com/photo-1455793067932-146d5b4a694f',
        description: 'Order Online and receive next day',
    },
    {
        productName: 'Only $5/mo on Monthly Signature',
        coverImg: 'https://images.unsplash.com/photo-1470755008296-2939845775eb',
        description: 'Cheapest plan in the country',
    }
];

const Page: React.FC = () => {
    const modelsRender = (): JSX.Element[] => {
        return products.map((product, index) => (
            <ProductSection
                key={index}
                productName={product.productName}
                coverImg={product.coverImg}
                overlayNode={
                    <DefaultOverlayContent
                        label={product.productName}
                        description={product.description}
                    />
                }
            />
        ));
    };

    return (
        <Container>
            <ProductWrapper>
                {
                    modelsRender()
                }
            </ProductWrapper>
        </Container>
    );
};

export default Page;
