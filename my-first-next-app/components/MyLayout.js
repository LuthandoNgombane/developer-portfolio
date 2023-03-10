//import relevant resources
import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '2px solid #333',
  }
  
  const Layout = (props) => (
	<div>
	  <Head>
		<link
		  rel="stylesheet"
		  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
		  crossOrigin="anonymous"
		/>
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
	  `}</style>
	</div>
  )
  
  export default Layout
  