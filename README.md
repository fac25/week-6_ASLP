# Planty

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

##Setup

Make sure you have Git and Node (v18) installed.

Clone this repo and cd into the directory

Run `npm install` to install all the dependencies

Run `npm run` dev to start the server.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This uses the nodemon library to auto-restart the server when you save changes.

we used vite to setup the project

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## User Stories

- [x] As an plant lover, I want to see an overview of the plants available
- [ ] As a plant-enthusiast, I want to be able to select plants and put them into my shopping cart
- [ ] As a picky user I want to pick different pot colours for my plants

## Acceptance criteria 

- [x] Server-rendered with Next.js
- [x] Homepage with product listings
- [x] Individual product pages, 
- [ ] containing quantity/colour/variant pickers
- [x] Data stored in a SQLite database

## Roles

Lisa: Scrum Facilitator
Abby: QA
Suraj: UX/UI
Paz: Dev-ops

## Daily Logs

**Tuesday**

(Before Lunch)

- Assigned Roles
- Came up with the idea for the project, Plants ecommerce-Shopping chart
- Created the repository and basic structures
- Created Issues

(After Lunch)

- Finished User Stories/Issues
- Decided the page components we want
- Defined workflow
- Installed Dependencies
- Created file structure
- Added Product Images
- Struggled with implementing Database (SQLite) into Next.js

(Goals For Wednesday)

- 1 Group work on database issue (Randomizer - Lisa/Abby)
- 1 Group work on home page/components (Paz-Suraj)

**Wednesday**

(Before Lunch)

Goals: Try to finish goals by lunch time - Database / HomePage

- Database
- Home page

(After Lunch)

Goals: Finalize the home page (Paz, Lisa) | Products Routes (Abby, Suraj)

- Routes but missing products
- Finalize home but missing add to cart function

(Goals For Thursday)

- Dynamic data fetch to product page
- Add cart function

**Thursday**

(Before Lunch)

Goals: Dynamic data fetch to product page ( Fixed by Paz )
Create another routes for id
STRETCH Add cart function

- We tried to make shopping cart function work, with trying 3 different options and researches/attempts with (cookies, global state & local storage)
- Product Page Finalised

(After Lunch)

- View Product from home page
- Add to cart function 3rd attempt … (Our Nemesis...🥲)

**Friday**

(Before Lunch)

Goals: Add to cart function using global state | Add quantity on products in product page

[Presentation](…)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

