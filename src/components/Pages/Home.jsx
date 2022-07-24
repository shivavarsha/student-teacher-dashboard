import React from 'react'
// import Sidebar from '../Sidebar'
// import Navbar from '../Navbar'
// import logo from '../../assets/TechCademy-logos.jpeg'
// import homeImage from '../../assets/homeImage.jpg'
import Footer from '../Footer';


const Home = ({ inactive, toggleoff }) => {
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >

        <div className="container">
          <div className="heading d-flex my-2">
            <h1 style={{ fontFamily: 'Arvo' }}>Welcome to Software Giant</h1>
            <img
              src={"https://mir-s3-cdn-cf.behance.net/projects/404/306ff078838287.Y3JvcCwyMzAxLDE4MDAsMTQ4LDA.jpg"}
              style={{ width: '50px', height: '50px', marginLeft: '10px' }} alt=""
            />
          </div>
          <div className="container col-xs-6 col-sm-10 col-md-12 col-lg-12">
            <p>
            “Find out what you like doing best, and get someone to pay you for doing it.” —Katharine Whitehorn
              <br />
              Looking to create a career in tech or just enhance your tech
              skills? You're at the right place. Nam repellat cupiditate rerum
              quaerat, illum sed ut voluptas nostrum dolor adipisci distinctio.
              Vero qui accusantium, eligendi officia, tenetur, veritatis quaerat
              aut quo molestias iste esse sint doloremque voluptatum explicabo
              dolorem. Tempora nisi velit consequatur voluptatem quae!
            </p>
            <img src={"https://cdn.dribbble.com/users/1235346/screenshots/3252385/job.gif"} id="homeImage" alt=""/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home