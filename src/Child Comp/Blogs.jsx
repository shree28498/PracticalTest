import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../Stylesheets/Blogs.css'

const Blogs = () => {

    const [BlogData, setBlogData] = useState([])

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'http://3.7.81.243:3253/api/blog/',
            headers: {}
        };

        axios(config)
            .then(function (response) {
                // console.log(JSON.stringify(response.data));
                setBlogData(response.data.data.slice(0, 3))
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    // console.log(BlogData)

    return (
        <div className='BlogsComp' id='Blogs'>
            <h1>Blogs</h1>
            <div className="Blogs-cards">
                {
                    BlogData.map((blogs) => {
                        return (
                            <div className="blg-card" key={blogs.id}>
                                <div className="blg-card-img">
                                    <img src={blogs.image_url} alt="" />
                                </div>
                                <h4>Acoount Management Tips</h4>
                                <p>{blogs.createdAt.slice(0, 10)} by <span className='author-name'>{blogs.writer_name}</span></p>
                                <p>
                                    {blogs.short_description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blogs
