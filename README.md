# QuickCart — Simple Responsive Shopping Cart Application

📄 1. Project Title

   QuickCart — Simple Responsive Shopping Cart Application

💡Project Description :

QuickCart is a complete full-stack web application that simulates a simple online shopping experience. Users can browse products, add items to a cart, modify quantities, and proceed to a simulated checkout.

This project demonstrates full-stack development skills using Angular for the frontend and Spring Boot for the backend, with a clean separation of concerns, responsive design, and efficient client-side state management.

It’s built with minimal dependencies and no external database, making it lightweight and ideal for learning or showcasing the core logic behind online shopping platforms.

   It is built using:

      🌐 Angular (Frontend): for building a dynamic and responsive UI.

      🖥️ Spring Boot (Backend): for exposing REST API endpoints and handling business logic.


✨Features

  🛍️ Display a hardcoded list of products with images, names, prices, and IDs.

  ➕ Add products to cart and adjust quantities.

  💾 Cart state managed on the client side with persistence via localStorage.

  📤 Checkout sends the order to backend, which logs the order and returns success.

  📱 Responsive UI for desktop and mobile devices.
  
🔹 Frontend (Angular)

Product Catalog UI: Displays a list of products in a grid layout (image, name, price, etc.).

Add to Cart: Each product can be added to the cart using a button.

Cart Management:

Users can increase/decrease item quantities.

Remove items from the cart.

View subtotal and total amount in real-time.

Cart Persistence:

     Cart data is stored in localStorage to preserve items across browser reloads.

Checkout:

     A checkout button sends the order to the backend API.

Responsive Design:

UI adapts to different screen sizes using media queries and flexbox/grid.

🔹 Backend (Spring Boot)

        GET /api/products:

 Returns a list of hardcoded product objects in JSON.

 Each product has an id, name, price, and imageUrl.

        POST /api/checkout:

Accepts a list of products with their quantity.

Logs the order details to the server console.

Responds with a success message (e.g., “Order received!”).

🛠️  Technology Stack

      Frontend: Angular, TypeScript, HTML5, CSS3

       Backend: Spring Boot, Java

       Tools: Maven, Node.js, npm, Angular CLI, Git

⚙️Setup & Run Instructions

  Backend

      install spring boot tool suite and then create simple spring starter project. Then give the name to project and add dependency

      Once create project at then Crate packeges such as controller and entity and then create cals productentity, product controller and cartitementity 

      Starts backend server at http://localhost:8080.

  Frontend

      cd frontend

      npm install

       ng serve

🚀  Usage

 🌐 Open http://localhost:4200 in your browser.

 🛒 Browse products and add items to the cart.

 🔄 View and update cart contents.

 ✅ Click Checkout to send the order to the backend.

 Backend tests
 
      cd backend
  
     ./mvnw test

Frontend tests

    cd project-name

    ng serve project-name

📝 Folder Structure

     /backend  — Spring Boot API source  

     /frontend — Angular app source 

📝  Assumptions & Design Decisions

  📦 Product list is hardcoded in the backend — no database for simplicity.

  🔄 Cart state maintained in Angular service and saved to localStorage.

  🖥️ Backend logs checkout orders; no real payment processing.

  🎨 Focus on clean, modular code and responsive UI design.

  ⚙️ Used Angular services and components for scalable state management.

 


