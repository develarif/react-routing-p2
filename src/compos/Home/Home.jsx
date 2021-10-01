import React from 'react';
import './Home.css';
import { Carousel, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDesktop, faVideo } from '@fortawesome/free-solid-svg-icons';
import Avatar from '../../imgs/avatar.jpg';

const Home = () => {
    return (
        <div id='home-page'>
            <Hero />
            <Service />
            <TeamMember />
        </div>
    );
};

const Hero = () => {
    return (
        <section className='hero'>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                            src='https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg'
                            alt='First Slide'
                            className='d-block w-100'
                        />
                        <Carousel.Caption>
                            <h2>Welcome to here</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ex eum laboriosam id sapiente
                                ullam quam molestias adipisci aperiam hic odio.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Second Carousel Item */}
                    <Carousel.Item>
                        <img
                            src='https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg'
                            alt='Second Slide'
                            className='d-block w-100'
                        />
                        <Carousel.Caption>
                            <h2>We make beautiful websites</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorum deserunt quam minus
                                reprehenderit repellat consequuntur velit ex
                                eveniet exercitationem vel!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* Third Carousel Item */}
                    <Carousel.Item>
                        <img
                            src='https://cdn.pixabay.com/photo/2014/09/23/08/57/ball-457334_960_720.jpg'
                            alt='Third Slide'
                            className='d-block w-100'
                        />
                        <Carousel.Caption>
                            <h2>We are working world wide</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Explicabo consequuntur odit
                                soluta. Maiores aut recusandae eligendi vel.
                                Velit, quae ab!
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
};

const Service = () => {
    return (
        <section className='service-area'>
            <Container>
                <h2 className='service-heading'>Services</h2>
                <div className='services'>
                    <div className='service-item'>
                        <FontAwesomeIcon icon={faDesktop}></FontAwesomeIcon>
                        <h4>Web Design</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit, totam. Rerum quo totam corporis,
                            obcaecati quasi eveniet modi magnam reprehenderit,
                            atque dolor ab dolorem recusandae!
                        </p>
                    </div>
                    <div className='service-item'>
                        <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                        <h4>Web Development</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit, totam. Rerum quo totam corporis,
                            obcaecati quasi eveniet modi magnam reprehenderit,
                            atque dolor ab dolorem recusandae!
                        </p>
                    </div>
                    <div className='service-item'>
                        <FontAwesomeIcon icon={faVideo}></FontAwesomeIcon>
                        <h4>Videography</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odit, totam. Rerum quo totam corporis,
                            obcaecati quasi eveniet modi magnam reprehenderit,
                            atque dolor ab dolorem recusandae!
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

const TeamMember = () => {
    return (
        <section className='team-member'>
            <Container>
                <h2 className='member-heading'>Team Member</h2>
                <div className='team-members'>
                    <div className='member'>
                        <div className='avatar'>
                            <img src={Avatar} alt='' />
                        </div>
                        <div className='info'>
                            <h4>Alex baker</h4>
                            <span>Director & Manager</span>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='avatar'>
                            <img src={Avatar} alt='' />
                        </div>
                        <div className='info'>
                            <h4>Fajle Rabbi</h4>
                            <span>Web Developer</span>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='avatar'>
                            <img src={Avatar} alt='' />
                        </div>
                        <div className='info'>
                            <h4>SM Arif</h4>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Home;
