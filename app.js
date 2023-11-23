const pricingCard = document.getElementById("subscription");
const toggler = document.querySelector("#flexSwitchCheck");
let isToggled = false;
let billingType = "monthly";

toggler.addEventListener("click", () => {
  isToggled = !isToggled;
  billingType = isToggled ? "annually" : "monthly";

  displayPricePlan(billingType);
});

function displayPricing(obj) {
  return `
    <div class="pricing-card grid p-10 gap-5 rounded-md w-80 drop-shadow-xl">
        <h2>${obj.plan}</h2>
        <h1 class="text-7xl">${obj.planAmount}</h1>
        <ul class="grid gap-5 divide-y divide-slate-200">
            <li class=" border-t-2 p-3">${obj.planStorage}</li>
            <li class="p-3">${obj.planUsers}</li>
            <li class=" border-b-3 p-3">${obj.planLimit}</li>
        </ul>
        <div class="${
          obj.plan.toLowerCase() === "professional"
            ? "bg-white pricing-btn p-3 rounded"
            : "pricing-btn p-3 rounded"
        }">LEARN MORE</div>
    </div>
    `;
}

function displayPricePlan(type) {
  pricingCard.innerHTML = pricingDetails[type]
    .map((item) => displayPricing(item))
    .join("");
}
displayPricePlan(billingType);
