import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="../../public/priv.jpg"
            alt="contactus"
            style={{ width: "60%" }}
          />
        </div>
        <div className="col-md-4">
          <h1>Privacy Policy</h1>
          <p>At CartCrave, we value your privacy. We collect personal information such as your name, address, and contact details to process orders and improve our services. We use cookies to enhance your experience. We do not share your information with third parties, except as necessary to provide our services or comply with legal obligations. Your data is protected with robust security measures. For any questions or concerns, please contact us at support@cartcrave.com. By using our site, you agree to our privacy practices.</p>
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
