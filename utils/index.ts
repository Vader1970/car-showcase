// Define a function to fetch car data from the API
export async function fetchhCars() {
  // Define the headers required for the API request
  const headers = {
    "X-RapidAPI-Key": "3d0d9ff444msh386fc1b7bf3d382p130112jsn74f9de1b67c2",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Fetch car data from the API
  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", { headers });

  // Parse the response as JSON
  const result = await response.json();

  // Return the parsed data
  return result;
}

// Define a function to calculate the rental rate of a car
export const calculateCarRent = (city_mpg: number, year: number) => {
  // Define base rental price per day in dollars
  const basePricePerDay = 50;
  // Define additional rate per mile driven
  const mileageFactor = 0.1;
  // Define additional rate per year of vehicle age
  const ageFactor = 0.05;

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  // Return the calculated rental rate
  return rentalRatePerDay.toFixed(0);
};
