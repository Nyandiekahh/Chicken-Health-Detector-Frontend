import React from 'react';
import styled from 'styled-components';

const ChickenGif = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
const AnimatedChicken = () => {
  return (
    <ChickenGif 
      src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjlyZ251NzE4Nmd0YWdmMHYwNHI5ZjkzbWp3OW1vMHkwNXpjeGcxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Fc6IlYD9nK5x5bVpPt/giphy.webp" 
      alt="Animated chicken in a circle"
    />
  );
};

export default AnimatedChicken;