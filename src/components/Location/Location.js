import axios from "axios";
//function that gets the location and returns it
var location = {
  longitude: "",
  latitude: ""
};
export const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geo Location not supported by browser");
  }
};
//function that retrieves the position
export const showPosition = position => {
  location = {
    longitude: position.coords.longitude,
    latitude: position.coords.latitude
  };
  fetchAddress();
  console.log(location);
};

//Making get request
export const fetchAddress = () => {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${
    location.latitude
  }&lon=${location.longitude}`;
  console.log(url);
  axios
    .get(url)
    .then(res => {
      console.log(res.data.display_name);
    })
    .catch(error => {
      console.log(error);
    });
};
