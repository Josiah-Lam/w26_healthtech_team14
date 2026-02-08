import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function TopCarousel() {
    return (
        <section aria-label="Hero carousel">
            <Carousel interval={5000} pause="hover" fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/public/hero1.jpg"
                        alt="Programs overview"
                        style={{ maxHeight: 420, objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Community Programs</h3>
                        <p>Connecting participants with evidence-based activities.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/public/hero2.jpg"
                        alt="Research showcase"
                        style={{ maxHeight: 420, objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Active Research</h3>
                        <p>Discover our latest studies and publications.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/public/hero3.jpg"
                        alt="Volunteer stories"
                        style={{ maxHeight: 420, objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Volunteer Impact</h3>
                        <p>Join our volunteers and make a difference.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}
