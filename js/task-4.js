function getShippingCost(country) {
    let messeage;
switch (country) {
case "China":
    messeage = `Shipping to ${country} will cost 100 credits`;
    break;
case "Chile":
    messeage = `Shipping to ${country} will cost 250 credits`;
    break;
case "Australia":
    messeage = `Shipping to ${country} will cost 170 credits`;
    break;
case "Jamaica":
    messeage = `Shipping to ${country} will cost 120 credits`;
    break;
default:
     messeage = `Sorry, there is no delivery to your country`;
}
 return messeage;
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"