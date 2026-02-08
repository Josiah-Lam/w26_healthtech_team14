import React from 'react';
import SkipLink from './SkipLink';
import Header from './Header';
import TopCarousel from './TopCarousel';
import SearchBar from './SearchBar';
import Breadcrumbs from './Breadcrumbs';
import ProgramCards from './ProgramCards';
import CTAButtons from './CTAButtons';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

export default function Landing() {
    return (
        <div>
            <SkipLink />
            <Header />
            <main id="main-content">
                <TopCarousel />
                <Container className="mt-4">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h1>Welcome to CCCARE</h1>
                        <div style={{ minWidth: 240 }}>
                            <SearchBar />
                        </div>
                    </div>
                    <Breadcrumbs />
                    <section>
                        <p>
                            CCCARE connects participants, volunteers, and researchers to improve community health. Explore our
                            programs, join a study, or volunteer.
                        </p>
                    </section>
                    <ProgramCards />
                    <hr />
                    <section aria-labelledby="featured-heading" className="my-3">
                        <h2 id="featured-heading">Featured Research</h2>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <img src="/public/feature.jpg" alt="Featured study" className="img-fluid rounded" />
                            </div>
                            <div className="col-md-6">
                                <h3>Activity & Aging Study</h3>
                                <p>Learn how our study measures activity intervention outcomes in older adults.</p>
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                    </section>
                    <CTAButtons />
                </Container>
            </main>
            <Footer />
        </div>
    );
}
