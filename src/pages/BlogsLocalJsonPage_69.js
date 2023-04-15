import { useState } from 'react';
import items from '../data/blogData2_69';

import blogsData from '../data/blogData2_69';

const BlogsLocalJsonPage_69 = () => {
  const [name, setName] = useState('Tao, Shao-Yu');
  const [id, setId] = useState(' 210410469');

  const [data, setData] = useState(blogsData);
  console.log('blog data', data);
  return (
    <>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Fetch Blogs From Local Json Data --
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

export default BlogsLocalJsonPage_69;
