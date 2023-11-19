import fetch from "node-fetch";

const jsonTypicode = " https://api.thecatapi.com/v1/images/search?limit=10";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);
