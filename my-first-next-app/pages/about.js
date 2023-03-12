import Link from 'next/link'
import Layout from '../components/MyLayout'

const aboutStyle = {
  textAlign: 'center',
  backgroundColor: '#F9FAFB',
  padding: '30px',
  borderRadius: '15px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}

const headingStyle = {
  color: 'rgb(9, 90, 166)',
  fontSize: '32px',
  marginBottom: '20px'
}

const subHeadingStyle = {
  color: 'rgb(9, 90, 166)',
  fontSize: '24px',
  marginTop: '40px',
  marginBottom: '20px'
}

const paragraphStyle = {
  color: '#4C4C4C',
  fontSize: '18px',
  marginBottom: '40px'
}

export default () => (
  <Layout>
    <div style={aboutStyle}>
      <h1 style={headingStyle}>About Luthando Ngombane...</h1>
      <h2 style={subHeadingStyle}>Simple and Clean</h2>
      <hr/>
      <p style={paragraphStyle}>I believe in work that is simple and clean in appearance. To me the beauty of the end product is just as important as functionality.</p>
      <h2 style={subHeadingStyle}>Education</h2>
      <hr/>
      <p style={paragraphStyle}>I have completed App Brewery & Udemy - The Complete 2023 Web Development Bootcamp and I have completed 95% of HyperionDev - Fullstack Web Developer Bootcamp. 
        I am currently busy with :
        1. ALX - software engineering 
        2. IT Academy - Software Programming
        3. BYU-Pathway WorldWide : Bachelor in Applied Science (Technology)
          </p>
      <h2 style={subHeadingStyle}>Work experience</h2>
      <hr/>
      <p style={paragraphStyle}>I have never worked as a developer. I have only retail and banking experience.</p>
    </div>
    <style jsx>{`
      hr {
        border-top: 1px solid #ccc;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    `}</style>
  </Layout>
)
