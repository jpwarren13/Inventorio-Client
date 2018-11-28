import styled from 'styled-components';
import image from './images/jakub-kapusnak-296881-unsplash.jpg';

const BottomRight = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  background-position: center;
  background-size: cover;
  background-image: url('${image}');
`;

export default BottomRight;
