import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
 
class MyCarousel extends Component {


    render() {
        const { onRouteChange, loadCard, camItems } = this.props;
        console.log(this.props.camItems)
        return (
            <Carousel
                centerMode
                showThumbs={false}
                centerSlidePercentage={20}>
                {
                    camItems.map((user, i) => {
                        return ( 
                            <Card 
                                key={i}
                                id={camItems[i].id}
                                name={camItems[i].name} 
                                price={camItems[i].price}
                                type={camItems[i].type}
                                rating={camItems[i].rating}
                                numratings={camItems[i].numofratings}
                                onRouteChange={onRouteChange}
                                loadCard={loadCard}
                                style={{zIndex: '1'}}/>
                        );
                    })
                }
            </Carousel>
        );
    }
}

export default MyCarousel
 
// Don't forget to include the css in your page
 
// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 
// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>