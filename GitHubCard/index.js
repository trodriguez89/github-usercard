/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get("https://api.github.com/users/trodriguez89")
.then(response => {
  console.log(response);
  allCards.appendChild(createCard(response.data));
  
})
.catch(error => {
  console.log("Oops, something went wrong!", error);
})
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["lyndsiWilliams", "ArianaShackelford", "squashgray", "bseverino", "phil-mac", "leachcoding"];

followersArray.forEach(function(item){
  axios.get(`https://api.github.com/users/${item}`)
  .then(response => {
    allCards.appendChild(createCard(response.data))
  })
  .catch(error => {
    console.log("Oops, something went wrong!", error);
  })
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const allCards = document.querySelector(".cards");


function createCard(array) {

  const newCard = document.createElement("div");
  const newImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const titleh3 = document.createElement("h3");
  const userName = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const userUrl = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  newCard.classList.add("card");
  cardInfo.classList.add("card-info");
  titleh3.classList.add("name");
  userName.classList.add("username");

  newCard.appendChild(newImg);
  newCard.appendChild(cardInfo);
  cardInfo.appendChild(titleh3);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(userUrl);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  
  newImg.src = array.avatar_url;
  titleh3.textContent = array.name;
  userName.textContent = array.login;
  location.textContent = `Location: ${array.location}`;
  profile.textContent = "Profile: ";
  userUrl.textContent = array.html_url;
  userUrl.href = array.html_url;
  followers.textContent = `Followers: ${array.followers}`;
  following.textContent = `Following: ${array.following}`;
  bio.textContent = `Bio: ${array.bio}`;

  profile.appendChild(userUrl);
  return newCard;
}



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
