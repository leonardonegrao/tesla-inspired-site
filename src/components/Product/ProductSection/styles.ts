import styled from 'styled-components';

interface ContainerProps {
    readonly coverImg: string;
};

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100vh;

    background: ${props => `url(${props.coverImg}) no-repeat top center`};

    scroll-snap-align: start;
`;
