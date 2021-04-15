const LocationSearchFunction = async (searchLocation) => {
  const response = await fetch("/location", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(searchLocation),
  });
  const processedResponse = await response.json();
  return processedResponse;
};

export default LocationSearchFunction;
