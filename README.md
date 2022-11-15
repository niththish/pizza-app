# pizza-app
A full stack pizza store application
1) [stack details](https://github.com/niththish/pizza-store-app/blob/main/README.md#stack-detail)
2) [backend requirements](https://github.com/niththish/pizza-store-app/blob/main/README.md#requirements-in-backend-folder)
3) [api endpoints](https://github.com/niththish/pizza-store-app/blob/main/README.md#api-endpoints)
4) [app design](https://github.com/niththish/pizza-store-app/blob/main/README.md#app-design)
***

## stack detail
#### backend - `nodejs / expressjs`
#### database - `mongodb`
#### frontend - `angular`
***

## Requirements in backend folder
- create `.env` file containing the following values:- `DATABASEURL`, `JWT_SECRET`, `JWT_EXPIRY`, `BASE_URL`\
  BASE_URL = "your server address"\
  eg:- localhost:5000

- `npm install` - to download all dependencies the application requires

- `node index` - to start the server
***

## API ENDPOINTS

### for users
| method  | url           | functionality           |
| ------- | ------------- | ----------------------- |
| `POST`  | /user/signup  | register new user       |
| `POST`  | /user/login   | login and get jwt token |
| `POST`  | /user/        | modify user details     |

### for user cart and orders
| method  | url             | functionality                             |
| ------- | --------------- | ---------------------------------------   |
| `GET`   | /user/cart      | get users cart item                       |
| `POST`  | /user/cart      | add pizza item to user cart               |
|`DELETE` | /user/cart/item | remove a particular item from the cart    |
|`DELETE` | /user/cart      | removes all item from the users cart      |
|`POST`   | /orders         | move a users cart item to orders          |
|`GET`    | /orders         | get all the orders user made              |
|`GET`    | /orders         | get all the orders the app recieved(admin)|

### for pizza items
| method  | url                               | functionality                             |
| ------- | --------------------------------- | ---------------------------------------   |
| `GET`   | /pizzas                           | get all pizza items                       |
| `GET`   | /pizzas/:type                     | get all pizza items of particular category|
| `GET`   | /pizzas/search?price=199&type=veg | get all pizza items for the search query  |
| `POST`  | /pizzas/                          | add a new pizza item (admin)              |
| `PATCH` | /pizzas/:id                       | update a pizza item (admin)               |
| `DELETE`| /pizzas/:id                       | delete a particular pizza item (admin)    |
***

## APP DESIGN
<img src="https://github.com/niththish/Designs/blob/main/pizza%20app/app%20design.png?raw=true" width="75%" />

***
