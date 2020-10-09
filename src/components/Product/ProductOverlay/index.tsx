import { useTransform } from 'framer-motion';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { ProductModel } from '../ProductsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface Props {
    model: ProductModel;
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ProductOverlay: React.FC<Props> = ({ model, children }) => {
    const getSectionDimensions = useCallback(() => {
        return {
            offsetTop: model.sectionRef.current?.offsetTop ?? 0,
            offsetHeight: model.sectionRef.current?.offsetHeight ?? 0,
        } as SectionDimensions;
    }, [model.sectionRef])

    const [dimensions, setDimensions] = useState<SectionDimensions>(getSectionDimensions());

    useLayoutEffect(() => {
        function onResize() {
            const sectionDimensions = getSectionDimensions();
            window.requestAnimationFrame(() => setDimensions(sectionDimensions));
        }

        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, [getSectionDimensions]);

    const { scrollY } = useWrapperScroll();

    const sectionScrollProgress = useTransform(
        scrollY,
        y => (y - dimensions.offsetTop) / dimensions.offsetHeight
    );

    const opacity = useTransform(sectionScrollProgress, [-0.42, -0.05, 0.05, 0.42], [0, 1, 1, 0]);

    const pointerEvents = useTransform(opacity, value => value > 0 ? 'auto' : 'none');

    return (
        <Container style={{ opacity, pointerEvents }} >
            { children }
        </Container>
    );
};

export default ProductOverlay;
