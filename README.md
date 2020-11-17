# All Caps Project

Let's go ALL_CAPS!

1.  Instructions on how to download and run our project: <<< DEPLOYMENT GOES HERE >>> https://allcapsdeploy.herokuapp.com/

2.  Blurb:
    "Look at your keyboard right now. Is it boring? That's what we thought! Just like the rest of your tech gear, keyboards should be as attractive as your desk, computer screen, sound system or mouse pad. Artisan keycaps exist to help your keyboard stand out!

How about setting up an escape key that looks like a stack of pancakes? Or maybe a Baby Yoda? We also have fidget spinner keycaps if you prefer."

Our dummy e-commerce website allows tech gear enthusiasts to browse inspiring categories of creative and unique artisan keycaps, create their own account or just checkout as a visitor to order some of the most original handmade pieces to customize their mechanical keyboards".

---

3.  Collect notes for our project:

* Our DB schema design:
  https://docs.google.com/drawings/d/1Q78viUyYT_CzlYURlRG44fljZI_RhhIqurCBTatceSc/edit

* Team goals:

1.  Communication and planning
    • Design mockups and system architecting
    • Agile methodologies and iterative design
    • Daily standup and problem solving
    • Task assignment and issue tracking

2.  Collaborative development
    • Longer-term and larger-scale
    • Pair programming
    • Code reviews
    • Merge conflict resolution

* Tooling and Mastery

1.  Dev Ops
    • Deployment on Heroku
    • Travis CI (Continuous Integration / Testing)

2.  Project Management
    • GitHub Features
    • Advanced Git
    • Project Management
    • Project Boards (GitHub Projects)
    • Travis CI (Continuous Integration / Testing)

    3)Full-stack Applications
    • Node, Express, Sequelize, React, Redux practice & synthesis
    • React-Reveal, Bootstrap, Styled.components, Faker, FA Icons (we chose to add these ourselves)
    • Schema design
    • Testing patterns
    • Visual design
    • Security

---

------REQUIREMENTS TIER 1 (OUR PRIORITY GOAL)------
As a customer/visitor, I want to be able to:

* [x] access a deployed version of the website so I can browse and purchase products.
* [x] view all available products so I can pick from a variety.
* [x] view a single product so I can see more details.
* [x] add a product to my cart so I can collect my desired products in one place.
* [x] edit my cart if I change my mind:
* [x] change the quantity of a product in my cart.
* [x] remove a product in my cart.
* [x] No one else should be able to edit my cart except me.(specific to visitor user)
* [ ] "checkout" the items in my cart so I can purchase my desired goods. (button added, almost there!)
* [x] create an account so I can have a logged-in experience.

As a logged-in customer, I want to be able to:

* [x] have a persistent cart so I can revisit and pick up where I left off:
* [ ] Logged-in-user across multiple devices: I'm logged in on my mobile device and add some items to my cart. When I open the browser on my laptop and log in, I want to see those items in my cart.
* [ ] No one else should be able to edit my cart except me. NOT SURE YET (may be true for logged in user)

As an administrator, I want to be able to:

* [x] have validated data to ensure reliability.
* [x] have full rights to make backend requests to add, edit, and remove products.
* [ ] view user information. (almost there!)

As an engineer, I want to:

* [x] have a well-seeded database so that I am able to simulate a number of different scenarios for the user stories below.
* [x] user data to be secure so that no one can unrightfully manipulate information. (for the most part YES)

------REQUIREMENTS TIER 2 - E-COMMERCE ESSENTIALS------
As a customer/visitor, I want to be able to:

* [x] see all products that belong to a certain category.
* [x] explore an aesthetically pleasing website so I can easily navigate around and enjoy the experience (UI/UX).
* [x] have a persistent cart so I can revisit and pick up where I left off. There are two more experiences to consider here. Explore your favorite websites to see what the intended behavior is for the following:
* [x] Guest-only: I don't want to create an account, but I want my cart to persist between browser refreshes (Look into front-end storage for this one)
* [ ] Guest-to-logged-in-user: Initially, I'm not logged in, and I add items to my cart. When I eventually log in, I want to see those same
      items I added when I was logged in still in my cart, in addition to the items I may have had in my cart from a previous logged in session.

As a logged-in customer, I want to be able to:

* [ ] see my order history so I can remember my previously purchased items and their prices at the time of purchase.
* [ ] view and edit my user profile so I can update my information when necessary.
* [ ] log in through third-party authentication so I can avoid creating an account specific to the website.

As an administrator, I want to be able to:

* [ ] allow customers to have a variety of payment method options in order to increase checkout conversion.
* [ ] edit products and manage users through a dashboard so I can easily make changes and assessments as necessary.

As an engineer, I want:

* [ ] continuous integration and delivery (deployment) of the codebase so that there are lower rates of release failure.

------REQUIREMENTS TIER 3. EXTRA FEATURES & FLAIR------
As an administrator, I want to be able to:
[ ] ensure accurate product inventory so that we can be sure only available products are sold.
[ ] offer customers discounts through promo codes so that we can incentivize purchases.

As a customer, I want to be able to:
Receive Notification
[ ] receive an email confirmation when placing an order so that I can easily reference it when needed without visiting my account.
[ ] be notified when certain events occur so that I am informed of my actions.
Have A Seamless Experience
[ ] navigate the website successfully regardless of whether or not I am handicapped so that my experience isn't hampered.
[ ] view a display to know when content is loading or there is an error so that I can manage my expectations.
Have A User-Friendly Experience
[ ] filter through all products.
[ ] browse through all products in a digestible way so that I am not overwhelmed with an endless list of products.
[ ] view featured products so that I can get inspiration.
[ ] add products to a wishlist so that I can differentiate products I would like to purchase now (cart) versus products I might be
[ ] interested in purchasing in the future (wishlist).

------REQUIREMENTS TIER 4: S TIER------
As a customer, I want to be able to:
[ ]post products to my social media accounts so that I can share with my friends/followers.
[ ] receive recommended products so that I can have a customized user experience and get inspiration.
[ ] feel like the website experience is customized for my native language.

As an administrator, I want to be able to:
[ ]visualize relevant KPIs (key performance indicators) in the admin dashboard so that I can make educated business
decisions.

As a CEO/CTO, I want:
[ ]the website to allow for multi tenancy so that we can potentially white label the application and allow users to create
"shops."

---

4.  Document big design decisions we made and why:

A) Logo design: Kade suggested a website to build a draft of a first logo, I played with it and they integrated it on the nav bar. After that, Kade made the color and style of the nav bar match the logo, which we all liked and approved very quickly.

B) Colors: After having the main color for the nav bar and the logo, Virginie followed the same style for the footer (shades of Grey and Purple) and Yanna ended up doing the same for the products page and the cart.

C) Animations: Yanna started playing with React Reveal, showed the team an example of what she liked for the allproducts page: we all agreed and approved.

Conclusion and Overall design implementation: the entire creative process was extremely collaborative. We each came up with a suggestion while working on the first components and the process couldn't be easier and smoother across the team. We seemed to agree on everyone's suggestion and the overall design ended up being put together in a genuine, meaningful and respectful way.
Communication was key: We kept each other updated regularly on Slack and over Zoom while removing each others' blockers. We were efficient at assigning tasks, and tracking issues.
