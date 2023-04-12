import { styled } from '@stitches/react';

const LinkButton = styled('button', {
  backgroundColor: '#100e18',
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
  color: 'white',
  borderRadius: '8px',
  border: 'none',
  fontSize: '16px',
  padding: '10px 16px',
  margin: '4px',
  transition: 'all 0.2s ease-in-out',
  display: 'block',
  '&:hover': {
    backgroundColor: '#7c66dc',
  },
  fontFamily: 'Courier New',
});

export default LinkButton;