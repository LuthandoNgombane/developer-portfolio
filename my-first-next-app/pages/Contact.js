import Link from 'next/link'
import Layout from '../components/MyLayout'

const Contact = () => (
  <Layout>
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form action="mailto:luthandongombane@gmail.com" method="post" encType="text/plain">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-control" required/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" className="form-control" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
    <style jsx>{`
      .contact-container {
        margin: 20px;
        padding: 20px;
        border: 1px solid #DDD;
        border-radius: 10px;
        background-color: #f5f5f5;
      }
      h2 {
        text-align: center;
      }
      label {
        display: block;
        margin-bottom: 5px;
      }
      input[type="text"],
      input[type="email"],
      textarea {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin-bottom: 15px;
      }
      textarea {
        height: 150px;
        resize: vertical;
      }
      .btn-primary {
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background-color 0.3s ease;
      }
      .btn-primary:hover {
        background-color: #0069d9;
      }
    `}</style>
  </Layout>
)

export default Contact
