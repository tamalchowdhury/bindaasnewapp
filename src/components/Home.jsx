import React from 'react';
import { Link } from 'react-router-dom';
import Welcome from './Welcome'

function Home() {
  return (
    <>
      <Welcome />
      <p>This is my official website. I stream old school PC games.</p>
      <h3>News</h3>
      <ul>
        <li>I am currently streaming GTA Vice City every Saturday.</li>
        <li>My FB page just crossed 10K followers, thanks!</li>
      </ul>
      <p>
        <u>
          I am updating this site with more features, so please be sure to check
          back again soon!
        </u>
      </p>
      <h3>Connect With Me</h3>
      <p>
        <a
          href='https://www.youtube.com/channel/UCo5RvWYDD6dnliwDwczjBbg'
          target='_blank'>
          YouTube
        </a>{' '}
        |{' '}
        <a href='https://fb.gg/bindaastomal' target='_blank'>
          Facebook
        </a>{' '}
        |{' '}
        <a href='https://www.instagram.com/bindaastomal' target='_blank'>
          Instagram
        </a>{' '}
        |{' '}
        <a href='https://twitter.com/bindaastomal' target='_blank'>
          Twitter
        </a>{' '}
        |{' '}
        <a href='https://tiktok.com/@bindaastomal' target='_blank'>
          TikTok
        </a>
      </p>
    </>
  );
}

export default Home;
