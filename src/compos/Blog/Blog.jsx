import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then((res) => res.json())
            .then((data) => setPost(data.meals));
    }, []);

    return (
        <div id='blog-page'>
            <BlogHero />
            <Container>
                <div className='blog-posts'>
                    {post.map((meal) => (
                        <BlogPost meal={meal} key={meal.idMeal}></BlogPost>
                    ))}
                </div>
            </Container>
        </div>
    );
};

const BlogHero = () => {
    return (
        <div className='blog-hero'>
            <Container>
                <h1>Our Blogs</h1>
            </Container>
        </div>
    );
};

const BlogPost = (props) => {
    const {
        idMeal,
        strMealThumb,
        strMeal,
        strInstructions,
        strMeasure4,
        strTags,
    } = props.meal;
    return (
        <article className='blog'>
            <div className='blog-thumb'>
                <img src={strMealThumb} alt='' />
            </div>
            <div className='blog-post'>
                <h2>{strMeal}</h2>
                <p className='desc'>{strInstructions.slice(0, 300)}</p>
                <p>
                    Measurment: <small>{strMeasure4}</small>
                </p>
                <p>
                    Tags: <small>{strTags}</small>
                </p>
                <Link to={`blogsingle/${idMeal}`}>Read More</Link>
            </div>
        </article>
    );
};

export default Blog;
