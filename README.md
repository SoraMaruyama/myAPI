# Starter Kit for your first REST API in JavaScript.

    This codebase should serve for someone who wants to create his or her first RESTful API.
    If you want to build API without this repository, I recommend the following contents on YouTube!

- [How to build API](https://shiffman.net/a2z/node-api/)

  <a href="http://www.youtube.com/watch?feature=player_embedded&v=P-Upi9TMrBk
  " target="_blank"><img src="http://img.youtube.com/vi/P-Upi9TMrBk/0.jpg" 
  alt="IMAGE ALT TEXT HERE" width="540" height="380" border="10" /></a>

      If you want to try first with my code?
      Continue reading!

---

# Background

    I had given a 45min Tech Talk in Tokyo for "Build your API in 30 min".
    for those who has the basic knowledge of JavaScript but non-programmers.
    There I introduced a case study of building a Unofficial Sake Library.
    And this repository is meant to be the follow-up of my Talk.

---

# Contents of My Repository

    1. server.js >>
    contains all of the API related code.

    2. controller.js >>
    contains all of the callback functions used for APIs.

    3. sakes.json >>
    contains sample sake data you can play around.

---

# To Dos - Before you Start!!

1. Install the latest version of "Node.js".

   - [What is Node.js?](https://nodejs.org/en/about/)
   - [Install Now!](https://nodejs.org/en/)

2. Install package manager "Yarn".
   \*npm is also a popular choice.

   - [What is a Package Manager? What is Yarn?](https://www.youtube.com/watch?v=7n467QmiANM)
   - [Install Now!](https://yarnpkg.com/lang/en/docs/install)

3. Install Rest API testing tools such as Insomnia or Postman.

   - [Install Insomnia](https://insomnia.rest/)
   - [Install Postman](https://www.getpostman.com/)

4. Install a Code Editor.
   \*VS Code is recommended!

---

# How to fork and clone this Repository

    If you do not want to create code from scratch or if you want to do play around with sample code,
    please use this repository to explore!

1. Folk 'myAPI'
   [HowTo](https://help.github.com/articles/fork-a-repo/)

2. Clone your folked 'myAPI'
   [HowTo](https://help.github.com/articles/cloning-a-repository/)

---

# Procedure on Your PC - After cloning myAPI

    1. Let your package manager install modules you need for myAPI.


        ```
        yarn

        ```

    2. Start web server in myAPI.

        ```
        yarn start

        ```

    3. Send GET request with your Rest API testing tool.

        ```
        <GET method>
        URL:localhost:3000/api/sakes

        ```
        <GET method>
        URL:localhost:3000/api/sakes?name=seiriki

        ```
        <GET method>
        URL:localhost:3000/api/sakes?maker=中村酒造

        ```

    4. Send POST request with your Rest API testing tool.

        ```
        <POST method>
        URL:localhost:3000/api/sakes

        [sample JSON data to add]
                {
                "id": "1",
                "name_ja": "勢力",
                "name_en": "seiriki",
                "maker_ja": "MySakeMaker",
                "address": "Tokyo",
                "url": "http://www.myapi.com/"
                }


        ```
        <GET method>
        URL:localhost:3000/api/sakes/1

        ```

---

# Suggestions

    - Edit JSON file, server.js, controller.js to CREATE YOUR OWN API!
