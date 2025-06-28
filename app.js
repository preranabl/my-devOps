const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (_req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>DevOps Flare</title>
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        background: #f9f9f9;
      }
      header {
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 40px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .logo {
        font-size: 24px;
        font-weight: bold;
        color: #0f5ea7;
      }
      .logo span {
        color: #3db2ff;
      }
      nav a {
        margin: 0 15px;
        text-decoration: none;
        color: #333;
        font-weight: 500;
      }
      nav a.active {
        color: #2196f3;
      }
      .btn-started {
        background: #2196f3;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: 600;
        text-decoration: none;
      }

      .hero {
        text-align: center;
        padding: 60px 20px;
      }
      .hero h1 {
        font-size: 36px;
        color: #0f5ea7;
        margin-bottom: 20px;
      }

      .form-container {
        max-width: 500px;
        background: white;
        margin: 0 auto;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }

      input, button {
        width: 100%;
        padding: 12px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 5px;
      }

      button {
        background: #2196f3;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border: none;
        cursor: pointer;
      }

      button:hover {
        background: #1976d2;
      }
    </style>
  </head>
  <body>

    <header>
      <div class="logo">Dev<span>Ops</span> Flare</div>
      <nav>
        <a href="#" class="active">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Expertise</a>
        <a href="#">Technology</a>
        <a href="#">Contact</a>
      </nav>
      <a href="#" class="btn-started">Get Started</a>
    </header>

    <section class="hero">
      <h1>Welcome to DevOps Flare</h1>
    </section>

    <section class="form-container">
      <form method="POST" action="/login">
        <input name="name" placeholder="Full name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <input name="address" placeholder="Address" />
        <input name="contact" type="tel" placeholder="Contact number" />
        <button type="submit">Login</button>
      </form>
    </section>

  </body>
  </html>
  `);
});

app.post("/login", (req, res) => {
  console.log("Login form data:", req.body);
  res.send(`<h2>Thank you, ${req.body.name}. Your form has been submitted.</h2>`);
});

app.listen(PORT, () =>
  console.log(`DevOps Flare app running on http://localhost:${PORT}`)
);
