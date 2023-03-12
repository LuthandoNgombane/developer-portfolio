import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const Layout = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className="layout-container">
      <Header />
      {props.children}
    </div>
    <style jsx>{`
      .layout-container {
        margin: 20px;
        padding: 20px;
        border: 2px solid #333;
        background-color: #282c34;
      }

      @media only screen and (max-width: 768px) {
        .layout-container {
          margin: 10px;
          padding: 10px;
          border: 1px solid #333;
        }
      }

      @media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
        .layout-container {
          margin: 15px;
          padding: 15px;
          border: 1.5px solid #333;
          margin-top: 50%;
          transform: translateY(-50%);
        }
      }

      @media only screen and (min-width: 1024px) {
        .layout-container {
          margin: 20px;
          padding: 20px;
          border: 2px solid #333;
        }
      }
    `}</style>
  </div>
)

export default Layout
