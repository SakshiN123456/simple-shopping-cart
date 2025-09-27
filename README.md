# QuickCart — Simple Responsive Shopping Cart Application

📄 1. Project Title

   QuickCart — Simple Responsive Shopping Cart Application

💡Project Description :

   QuickCart is a minimal e-commerce web app where users can browse products, add items to their cart, update quantities, and simulate checkout.

   It is built using:

   🌐 Angular (Frontend): for building a dynamic and responsive UI.

   🖥️ Spring Boot (Backend): for exposing REST API endpoints and handling business logic.

   This project was built as part of the ASE Challenge to demonstrate practical skills in full-stack web development, clean architecture, and user-centered design.

✨Features

  🛍️ Display a hardcoded list of products with images, names, prices, and IDs.

  ➕ Add products to cart and adjust quantities.

  💾 Cart state managed on the client side with persistence via localStorage.

  📤 Checkout sends the order to backend, which logs the order and returns success.

  📱 Responsive UI for desktop and mobile devices.

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

 


