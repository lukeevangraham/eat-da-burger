# Eat-Da-Burger

## Overview

Deployed at: https://lgraham-eat-da-burger.herokuapp.com/


Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

In this app, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). I uses Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

### Using the app

![Add burger box](./readmeImages/addBurger.png?raw=true "add burger box")

* Whenever a user submits a burger's name, the app displays the burger on the left side of the page -- waiting to be devoured.

![Burger Home](./readmeImages/burgers.png?raw=true "Burger home")

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger moves to the right side of the page.

* The app stores every burger in a database, whether devoured or not.


