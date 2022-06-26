import { data } from "../Components/Pages/data";

function numberWithCommas(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (parts.length >= 2) {
    parts[1] = `${parts[1]}00`.substring(0, 2);
  }
  return parts.join(".");
}

function getMealsDonated() {
  for (let i = data.length - 1; i > -1; i--) {
    const curMealsDonated = data[i].mealsDonated;
    if (curMealsDonated !== undefined) {
      return numberWithCommas(curMealsDonated);
    }
  }
  return 0;
}

export { numberWithCommas, getMealsDonated };
