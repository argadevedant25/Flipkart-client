import React from 'react';
import { styled, Grid } from '@mui/material';
import { imageURL } from '../../constants/data'; 

const Wrapper = styled(Grid)`
    margin-top: 20px;
    justify-content: space-between;
`;
const Image = styled('img')(({ theme }) => ({
    marginTop: 10,
    width: '100%',
    dispaly: 'flex',
    justifyContent : 'space-between',
    [theme.breakpoints.down('md')] : 
    {
        objectFit: 'cover',
        height:120
    }
}));
const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
        <Wrapper lg={12} sm={12} md={12} xs={12} container>
        {
            imageURL.map(image => (
                <Grid item lg={4} md={4} sm={4} xs={12}>
                    <img src={image} alt="image1" style={{width:'100%'}}/>
                </Grid>
            ))

        }
        </Wrapper>
        <Image src={url} alt="covid" />
    </>
  )
}

export default MidSection;
