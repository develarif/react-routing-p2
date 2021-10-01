import React, { useEffect, useState } from 'react';
import './BlogSingle.css';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const BlogSingle = () => {
    const { postID } = useParams();
    const [singlePost, setSinglePost] = useState({});

    useEffect(() => {
        let postUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${postID}`;
        fetch(postUrl)
            .then((res) => res.json())
            .then((data) => setSinglePost(data.meals[0]));
    }, []);
    return (
        <article id='blog-single'>
            <BlogSingleHero postData={singlePost} />
        </article>
    );
};

const BlogSingleHero = (props) => {
    console.log(props.postData);
    const { strMeal, strInstructions, strMealThumb, strTags, strMeasure4 } =
        props.postData;
    return (
        <div className='bs-single'>
            <div className='bs-single-hero'>
                <Container>
                    <h1>{strMeal}</h1>
                </Container>
            </div>
            <div className='bs-content'>
                <Container>
                    <img src={strMealThumb} alt='' />
                    <p>{strInstructions}</p>
                    <div className='post-meta'>
                        <h5>
                            Tags: <span>{strTags}</span>
                        </h5>
                        <h5>
                            Measurment: <span>{strMeasure4}</span>
                        </h5>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default BlogSingle;
