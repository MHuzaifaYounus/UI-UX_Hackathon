# Restaurant Website

## Overview
This is a modern restaurant website built using **Next.js**. It includes multiple pages and features designed to enhance the user experience, including menu browsing, chef introductions, shopping cart functionality, and user authentication.

---

## Project Structure

Here is the directory structure of the project:

```
├── .next            # Next.js build output directory
├── app              # Main application folder containing pages and components
│   ├── about        # About page to display restaurant information
│   ├── blog         # Blog page for articles and news
│   ├── cart         # Cart page for managing shopping cart
│   ├── checkout     # Checkout page for payment processing
│   ├── chefs        # Chefs page showcasing restaurant chefs
│   ├── faqs         # FAQs page with frequently asked questions
│   ├── fonts        # Font files used throughout the site
│   ├── menu         # Menu page displaying restaurant items
│   ├── shop         # Shop page for purchasing products
│   ├── signin       # Sign-in page for user login
│   ├── signup       # Sign-up page for user registration
│   ├── studio       # CMS Studio page for managing content (Sanity CMS)
│   ├── wishlist     # Wishlist page for saving favorite items
├── favicon.ico      # Website favicon
├── global.ts        # Global TypeScript definitions and configurations
├── globals.css      # Global CSS styles for the project
├── layout.tsx       # Layout component defining the structure of all pages
├── not-found.tsx    # Custom 404 page
├── page.tsx         # Main entry point for the homepage
```

---

## Key Features

### User-Facing Pages:
- **Home Page:** Highlights restaurant features and promotions.
- **Menu Page:** Displays food and drink options with details.
- **Chefs Page:** Introduces chefs with bios and photos.
- **Shop Page:** Allows users to buy restaurant-related products.
- **Cart & Checkout Pages:** Enables item purchase and payment process.
- **Blog Page:** Provides restaurant news and updates.
- **FAQs Page:** Answers common customer queries.

### Wishlist:
- Allows users to save favorite menu items for later.

### CMS Integration:
- Sanity CMS is used for dynamic content management.

---

## Technologies Used

- **Next.js:** Framework for server-side rendering and static site generation.
- **TypeScript:** For type-safe code.
- **CSS Modules/Global CSS:** Styling the application.
- **Sanity CMS:** Content management system for dynamic pages.

---

## How to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/MHuzaifaYounus/UI-UX_Hackathon.git

   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

4. **Build for Production:**
   ```bash
   npm run build
   npm start
   ```

---

## Contributions
Contributions are welcome! Feel free to fork this repository and submit pull requests with improvements or bug fixes.

---

