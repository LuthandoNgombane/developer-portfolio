import Link from 'next/link'

const Header = () => (
  <div className="header-container">
    <Link href="/">
      <p className="nav-link">Home</p>
    </Link>
    <Link href="/about">
      <p className="nav-link">About</p>
    </Link>
    <Link href="/Contact">
      <p className="nav-link">Contact me</p>
    </Link>
    <style jsx>{`
      .header-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #282c34;
        padding: 1rem;
      }
      .nav-link {
        margin-right: 2rem;
        font-size: 1.5rem;
        color: white;
        cursor: pointer;
      }
      .nav-link:last-child {
        margin-right: 0;
      }
    `}</style>
  </div>
)

export default Header