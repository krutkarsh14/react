import React from "react";

const Home = () => {
  return (
    <>
    <div className="homePage">
      <h1>Welcome to Our Website 👋</h1>
      <p>
        Ye ek sample Home page hai jisme hum dummy content add kar rahe hain.<br/>
        Tum yahan apni website ka main introduction, features, ya banner laga sakte ho!
      </p>

      <div className="cardBox">
        <div className="card">
          <h3>⚡ Fast Service</h3>
          <p>Humari service ekdum fast aur reliable hai.</p>
        </div>
        <div className="card">
          <h3>🔒 Secure Platform</h3>
          <p>Yahan tumhara data 100% safe rehta hai.</p>
        </div>
        <div className="card">
          <h3>🚀 Easy to Use</h3>
          <p>UI simple hai aur koi bhi use kar sakta hai.</p>
        </div>
      </div>
    </div>

    <style>{`
      .homePage {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 90vh;
        text-align: center;
        font-family: 'Poppins', sans-serif;
       
      }

      .homePage h1 {
        font-size: 32px;
        margin-bottom: 10px;
      }

      .homePage p {
        font-size: 18px;
        max-width: 600px;
        line-height: 1.6;
        margin-bottom: 25px;
      }

      .cardBox {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
      }

      .card {
        padding: 15px;
        width: 180px;
        border-radius: 12px;
        box-shadow: 2px 2px 12px rgba(0,0,0,0.1);
        background: white;
        transition: 0.3s ease;
      }

      .card:hover {
        transform: translateY(-5px);
      }

      .card h3 {
        font-size: 18px;
        margin-bottom: 6px;
      }

      .card p {
        font-size: 14px;
      }
    `}</style>
    </>
  );
};

export default Home;
