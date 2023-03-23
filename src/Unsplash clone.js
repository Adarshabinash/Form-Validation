import React, { useState } from "react";

const Unsplashclone = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]); //This is an array because the response we get is an array

  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=yxIImwbXjonGpKSEF4gLazl7CfushqJwQcI1QU4fILw&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => setResult(data.results));
  };

  return (
    <div>
      <div className="container">
        <span>Search</span>
        <input
          type="text"
          placeholder="search image"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={fetchImages}>Search</button>
      </div>
      <div className="gallery">
        {result.map((item) => {
          return (
            <img className="items" key={item.id} src={item.urls.regular} />
          );
        })}
      </div>
    </div>
  );
};

export default Unsplashclone;

//Summary of the above code-
/**
 * First we create a general functional component and make a span for search bar and create an input space and a button named search(covention).
 * We also need to import useState to handle the changing value of the input.
 * Then we have to go to the unsplash api and have to create a new application where we will get a key(which we will use to fetch) and we have a client_id. We will also need that.
 * We then have to create a function which will fetch the api and that will give us a promise.Resolve the promise into a json and then use the data.
 * We have created another useState with initially an array because our response will be an array in the json.
 * To display the images, we have to use the map method and there we have to attach our data in the img tag with its src as our result array's urls.regular
 * That's it and it will work like butter.
 * Search MONKEY..You won't be dissapointed ;)
 */
