# HTTP Basics Long Practice

In this practice, you will document the request and response components for
RESTful endpoints of an e-commerce web site.

## Set up

Clone the practice from the [starter].

To set up the server that you will test endpoints on, `cd` inside of the
**server** folder and run `npm install` inside of the **server** folder. **Do
not to look at the contents of the server folder until you finish this
exercise.**

To start the server, run `npm start` inside of the **server** folder. This will
allow you to make requests to [http://localhost:5000] using any client (browser
and Postman).

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `npm start`). To restart a stopped server, run `npm start`
again.

> Note: Make sure to stop the server in the practice/exercise if there is one.
> Leaving a server running may prevent servers in other practices/exercises
> from starting properly.

## Resources

Below is a list of all the resources for this e-commerce site.

- user:
  - username: unique identifier
- category:
  - tag: unique identifier
  - name
- product:
  - productId: unique identifier
  - name
  - description
  - price
  - categories: an array of category tags that the product is under
- review: a review for a single product
  - reviewId: unique identifier
  - comment
  - starRating
  - productId: of the product that the review is for

## Documentation

Below is a list of operations on the e-commerce server that you can perform.
For each operation, document what the components of the request should be and
what you should expect from the response. Document all of the important components
of the request and the response. You can use a Google doc, VSCode for editing
a text/markdown file, or whatever text editor you want for creating the
RESTful routes documentation for this e-commerce site.

Here's how to approach creating the documentation for the e-commerce server
operations:

1. Make a prediction based off of your knowledge of HTTP request and response
   components and RESTful routes to determine what the request and response
   components of the given operation should be.
2. Formulate the request using Postman and submit the request to see what the
   response is. The e-commerce site is located at [http://localhost:5000].
3. If the request or response is not what you predicted it to be, then update
   your documentation.

If you don't see the response you want, or if you see an error status code, then
the components of the request are wrong. Try playing around with the request
components to get closer to the response you expect.

If you get stuck, make sure to ask for help!

The request and response components to ask for the home page of the site is
filled out for you as an example.

### Ask for the Home Page

Request components:

- Method: GET
- URL: /
- Headers: none
- Body: none

Response components:

- Status Code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page with navigation links to other pages

To test this in Postman, create a request in Postman using the information
above and send it.

1. The method of the request in Postman should be GET.
2. The root URL path in Postman should be [http://localhost:5000].
3. The headers and body should be cleared in Postman.
4. Send the request.
5. Read the response and verify the components of the response.

> If the request body is sent with the request in Postman, the response from
> the server does not change. Do you understand why the response did not change
> with the addition of a body in the request?

![Postman Screenshot]

### Ask for a page that doesn't exist

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Ask for the products list page

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Ask for the product detail page

Here's an example product on the server:

| detail      | value                                                      |
| ----------- | ---------------------------------------------------------- |
| productId   | 1                                                          |
| name        | "Facial Cleansing Brush"                                   |
| description | "Reaches deep pores to cleanse oil, dirt, and blackheads." |
| price       | 23.99                                                      |
| categories  | "beauty", "electronics"                                    |

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Ask for the create new product page

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Submit a new product

Remember, for a traditional HTML web server, whenever a successful `POST`
request is sent to the server, the server should respond with a redirection to
a page.

After successful submission, user should be looking at the product detail page.

Here are the categories on the server:

| tag         | name           |
| ----------- | -------------- |
| grocery     | Grocery        |
| electronics | Electronics    |
| beauty      | Beauty         |
| toys-games  | Toys and Games |
| health      | Health         |
| furniture   | Furniture      |
| clothing    | Clothing       |

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Ask for the edit product page

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Submit an edit for an existing product

After successful submission, user should be looking at the product detail page.

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Submit a delete for an existing product

After successful submission, user should be looking at the products list page.

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Submit a new review for a product

After successful submission, user should be looking at the product detail page.

Here's an example review on the server:

| detail     | value                  |
| ---------- | ---------------------- |
| reviewId   | 1                      |
| comment    | "I love this product!" |
| starRating | 5                      |
| productId  | 1                      |

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Ask for the edit product review page

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Submit an edit for an existing review

After successful submission, user should be looking at the product detail page.

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Submit a delete for an existing review

After successful submission, user should be looking at the product detail page.

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Ask for all the products in a particular category by tag of the category

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

### Ask for the best-selling product

Look for clues in the HTML pages from the prior responses for what the route
should be.

Request components:

- Method:
- URL:
- Headers:
- Body:

Response components:

- Status code:
- Headers:
- Body:

[http://localhost:5000]: http://localhost:5000
[starter]: https://github.com/appacademy/practice-for-week-08-http-basics-long-practice
[Postman Screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-08/assets/postman_visual_Basic_HTTP.png
