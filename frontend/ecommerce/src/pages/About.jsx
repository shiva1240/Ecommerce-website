import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="../../public/about.jpg"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>About Us</h1>
          <p className="text-justify mt-2">
          Welcome to CartCrave, your one-stop destination for all things shopping! At CartCrave, we bring you a seamless and enjoyable shopping experience with a diverse range of products to meet your every need. Our mission is to provide top-quality items at unbeatable prices, with exceptional customer service. Join us on this exciting journey and indulge in the convenience and joy of online shopping with CartCrave. Your satisfaction is our priority!


          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
