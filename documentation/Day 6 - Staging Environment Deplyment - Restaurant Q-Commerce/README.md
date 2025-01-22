# Restaurant Website

This is a fully functional restaurant website, designed to provide users with an interactive and seamless browsing experience. It includes features like product listing, search and filters, cart functionality, and responsive design. The website was tested for performance, functionality, and cross-browser compatibility to ensure optimal user experience.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Deployment Steps](#deployment-steps)
3. [Test Cases](#test-cases)
4. [Performance Testing](#performance-testing)
5. [Recommendations](#recommendations)

## Project Overview

This project is designed for a restaurant's online presence, featuring a responsive product display, search, and filter options. Users can browse the menu, add items to their cart, and make orders. The website supports multiple devices and browsers, with optimizations made for performance and accessibility.

## Deployment Steps

1. **Choose Hosting Platform:**
   - Deployed on **Vercel** for quick and easy hosting.
   
2. **Connect Repository:**
   - GitHub repository connected to Vercel for continuous deployment.

3. **Configure Environment Variables:**
   - Environment variables such as `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `API_KEY` were configured in the `.env` file and securely uploaded to Vercel.

4. **Deploy to Staging:**
   - Deployed the website to the staging environment on Vercel.
   - Validated deployment by ensuring that the build process completed without errors.

## Test Cases

### Functional Testing

| Test Case ID | Test Case Description                                  | Steps | Expected Result                                  | Actual Result                                    | Status  |
|--------------|---------------------------------------------------------|-------|--------------------------------------------------|--------------------------------------------------|---------|
| TC001        | Ensure products are displayed correctly on the homepage | 1. Navigate to homepage<br>2. Check product display<br>3. Verify product count | All products displayed with correct details | All products displayed correctly | Passed |
| TC002        | Validate filters and search functionality              | 1. Enter search keyword<br>2. Apply filters<br>3. Verify result match | Filters and search work accurately | Filters and search provided accurate results | Passed |
| TC003        | Test add, update, and remove operations in the cart     | 1. Add product<br>2. Update quantity<br>3. Remove product | Cart operations work as expected | Cart operations worked without issues | Passed |
| TC004        | Verify product detail pages load correctly              | 1. Click product<br>2. Verify detail page | Product details match database | Product details loaded accurately | Passed |
| TC005        | Test Item Component Rendering with Cypress              | 1. Generate test component<br>2. Test in Cypress | Cypress should show green tick | Initially showed error, fixed later | Passed |
| TC006        | Test Product Grid Rendering with Cypress                | 1. Generate product grid spec<br>2. Test in Cypress | Cypress should show green tick | Initially showed error | Error |
| TC007        | Fetch products from Sanity CMS API                      | 1. Fetch products<br>2. Validate data | Product data fetched correctly | Data successfully retrieved | Passed |
| TC008        | Error Handling for API Requests                        | 1. Implement try-catch<br>2. Show error on UI | Error message shown on UI | Error message displayed | Passed |
| TC009        | Initial loading time test                               | 1. Load website<br>2. Note loading time | Loading time < 2 seconds | 1.8-2 seconds | Passed |
| TC010        | Check website on different browsers                     | 1. Test on different browsers | Website renders as expected | Website rendered correctly | Passed |
| TC011        | Check website on different devices                      | 1. Test on various devices<br>2. Use BrowserStack | Website renders as expected | Website rendered as expected | Passed |
| TC012        | Input Validation Testing                                | 1. Test address form<br>2. Check for field validation | Validations for email, password, required fields | Validations working as expected | Passed |

## Performance Testing

### Lighthouse Results:
- **Loading Time:** 17 ms
- **Scripting:** 206 ms
- **Rendering:** 176 ms
- **Painting:** 10 ms
- **System:** 191 ms
- **Idle:** 878 ms
- **Total:** 1479 ms

The website performed excellently with a total loading time of less than 2 seconds. Performance was tested across various devices and browsers with no major issues, except for a minor mobile design fix.

### Key Performance Improvements:
- Optimized images by compressing large files to improve load times.
- Resolved minor mobile design issues for better responsiveness.

## Recommendations

- Improve **user interactions** by ensuring all buttons and links are fully functional and responsive.
- Consider **implementing caching strategies**, **code splitting**, and further **image optimization** for even better performance as the site grows.

---