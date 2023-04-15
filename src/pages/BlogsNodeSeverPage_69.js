import { useState, useEffect } from 'react';

import axios from 'axios';
//import blogsData from '../data/blogData2_69';

// let api_url = `http://localhost:5000/api/card2_69`;

let api_url = `https://one112-sever-card-demo-69.onrender.com/api/card2_69`;

const BlogsNodeSeverPage_69 = () => {
  const [name, setName] = useState('Tao, Shao-Yu');
  const [id, setId] = useState(' 210410469');

  const [data, setData] = useState([]);
  // console.log('blog data', data);
  const fetchBlogDataFromNodeSever = async () => {
    try {
      const results = await axios.get(api_url);
      console.log('result', results);
      setData(results.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogDataFromNodeSever();
  }, []);

  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Fetch Blogs From Node Sever --
            {name}
            {id}
          </h2>
        </div>
        <div className='blogs-center2'>
          {data.map((item) => {
            const { id, img, remote_img, category, title, desc } = item;
            return (
              <article key={id} className='blog'>
                <img src={img} alt={title} className={'img blog-img'} />
                <div className='blog-content'>
                  <span>
                    {category} <i className='fa-solid fa-mug-saucer'></i>
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href='#'>read more</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default BlogsNodeSeverPage_69;
