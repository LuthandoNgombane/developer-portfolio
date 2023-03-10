import Link from 'next/link'
import Layout from '../components/MyLayout'

//using the index page as the projects page in order to wow the user when I have great work
//this will make it unconventional to my competitors
export default () => (
  <Layout>
    <h1>Always hard at work!</h1>
    <div className="image-container">
      <img src="/static/images/luthando.jpg"/>
    </div>
    <div className="project-container">
      <h2>Projects</h2>
      <p>Please see some of my work in the GitHub and Netlify links below:</p>
      <ul>
        <li><a href="https://stupendous-kleicha-6090c9.netlify.app/">Deployed Banking Application</a></li>
        <li><a href="https://github.com/LuthandoNgombane/Hangman-Game">GitHub Hangman Game</a></li>
      </ul>
    </div>
    <style jsx>{`
      h1 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
        background: linear-gradient(45deg, #0070f3, #00c7ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Roboto Slab', serif;
        border-radius:
      }
      .image-container {
        max-height: 300px;
        overflow: hidden;
        margin-bottom: 1.5rem;
      }
      img {
        max-width: 100%;
        width: auto;
        height: auto;
        border-top-right-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
      }
      .project-container {
        margin-top: 3rem;
        background: linear-gradient(45deg, #0070f3, #00c7ff);
        padding: 2rem;
        border-radius: 0.5rem;
      }
      h2 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        color: #fff;
      }
      p {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
        color: #fff;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        margin-bottom: 0.5rem;
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 1.25rem;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </Layout>
)
