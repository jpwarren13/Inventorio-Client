import styled from 'styled-components';
import image from '../images/joshua-rodriguez-422768-unsplash-min.jpg';

const TopLeft = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  background-position: center;
  background-size: cover;
  background-image: url('${image}');
  background-attachment: fixed;
  background-repeat: no-repeat;
  filter: blur(1px);
  -webkit-filter: blur(1px);
`;

export default TopLeft;
