# iO Academipsum RESTful API

<details>
<summary>Run the API locally</summary>

<p></p>
<p>
Clone this repo into your docker `html` folder:

```bash
git clone git@github.com:iO-Academy/2022-jan-ipsum-be.git
```

Once cloned, first install the database stored in the project root.
Create a MongoDB database named `io-academipsum`, then create a new collection called `ipsum` and import the `words.json` file.

To run the application locally:
```bash
npm i
```
```angular2html
node start.js
```

**Do not close this terminal tab, it is a running process.**

The API will now be accessible at `http://localhost:3002/`.

That's it! Now install the [front end](https://github.com/iO-Academy/2022-jan-ipsum-fe) and have fun.
</p>
</details>

## API documentation

This API only supports GET requests.

### Return

* **URL**

  /ipsum

* **Method:**

  `GET`

* **URL Params**

  **Required:**

  There are no required URL Params, this URL will return a single paragraph if no params are passed.

  **Optional:**

  `paragraphs=[integer]` - The number of randomly generated paragraphs to return.

  **Example:**

  `/ipsum?paragraphs=4`

* **Success Response:**

    * **Content:** <br />

  ```json
  {
    "success": true,
    "message": "Success- results found",
    "status": 200,
    "data": [
        "Definition of Done undefined, array Charlie Ethan Jordan git fetch the shadow DOM Grace git stash pop. Jordan Agile Aardvarks Foxy Ferrets Charlie Product Owner OhMyZsh Hyper Lynx Norbert Fried Egg Jellyfish MongoDB. Boolean React komodo dragon on a skateboard (not blind) git checkout Valkyrie SWGOL undefined Sophie Dr Jean Grey. Response Dino Finder Chi-Ca-Go Dung Beetles Hello World! response Hello World! T-Shaped Profiles motivational poem playing with Lego. Ethan hard refresh Raurie Royal Penguins Batman do the thing mkdir mouse komodo dragon on a skateboard (not blind) rubber ducking Sprint Review. Dr Jean Grey LAMP Grace Dr Jean Grey Geckos The Agile Manifesto, Barry Chi-Ca-Go Larry. Gitignore conditional rendering nodes motivational poem trial by paper Fighting Mongooses request terminal Raurie repo. "
    ]
  }
  ```

* **Error Response:**

    * **Content:** <br />

    ```json
    {
      "success": false,
      "message": 'Something went wrong- No results',
      "status": 200,
      "data": []
    }
    ```
