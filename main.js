let jsonData;
let jsonDay;
let jsonAmount;

document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      let container = document.getElementById("container");
      container.innerHTML = generateHtml(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function findMaxAmount(data) {
  let maxAmount = data[0].amount;
  for (let i = 1; i < data.length; i++) {
    if (data[i].amount > maxAmount) {
      maxAmount = data[i].amount;
    }
  }
  return maxAmount;
}

const generateHtml = (data) => {
  let maxAmount = findMaxAmount(data);
  let htmlContent = "";
  data.forEach((item) => {
    const backgroundColor =
      item.amount === maxAmount ? "bg-cyan" : "bg-softRed";

    htmlContent += `
      <div class='flex flex-col justify-end gap-4 max-sm:gap-2 items-center group'>
      

      <div style="height: ${
        item.amount * 3
      }px" class='w-12 max-md:w-8 max-sm:w-9 ${backgroundColor} rounded-md b hover:opacity-80 flex justify-center transition-all duration-300 cursor-pointer relative '> 
      
      <span class="p-1 max-sm:text-xs opacity-0 absolute group-hover:opacity-100 transition-all duration-500 rounded-md text-paleOrange bg-darkBrown  
      -top-11 max-sm:-top-8
    
      
      ">$${item.amount}</span>
    
    </div>

      <span>${item.day}</span>
      </div>
    `;
  });
  return htmlContent;
};
