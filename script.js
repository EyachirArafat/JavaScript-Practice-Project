document.addEventListener('DOMContentLoaded', ()=>{
  function menuBar(id) {
    const menu = document.getElementById(id);
    menu.classList.toggle('hidden'); 
    menu.classList.toggle('show');
  }
  window.menuBar = menuBar;
  
  
  // JavaScript dashboard
  
  // const currentBalance = document.getElementById('currentBalance');
  // const addMoneyBtn = document.getElementById('addMoneyBtn');
  // const withdrawMoneyBtn = document.getElementById('withdrawMoneyBtn');
  
  
  let initialBalance = 0;
  
  function updateBalance(){
    currentBalance.textContent = `$${initialBalance.toFixed(2)}`;
  };

  const date = Date()
  let dateUpdate = date.toString().split(' ').slice(0, 5).join()


  // const date = new Date();
  // const dateUpdate = `${date.toDateString()}, ${date.toLocaleTimeString()}`;
  





  // Function to add a transaction
function addTransaction(type, amount) {
  // Transactions history
  const transParent = document.getElementById('transParent');
  
  // Assign color class based on type
  let colorClass = type === "Add" ? "text-green-500" : "text-red-500";
  let amountText = type === "Add" ? `+${amount}` : `-${amount}`;

  // Parent li
  let li = document.createElement("li");
  li.classList.add("border-b", "border-b-slate-200", "py-2", "pr-4", "min-w-[600px]");
  transParent.appendChild(li);

  // Main child div for li
  let div = document.createElement("div");
  div.classList.add("grid", "grid-cols-12", "min-w-full");
  li.appendChild(div);

  // Child div for main child div
  let div1 = document.createElement("div");
  div1.classList.add("col-span-5");
  div.appendChild(div1);

  // Child div for div1
  let div2 = document.createElement("div");
  div2.classList.add("flex", "gap-3");
  div1.appendChild(div2);

  // Child span for div2
  let span = document.createElement("span");
  span.classList.add("userInfo", "bg-[#1ee9bc]");
  span.innerHTML = "A";
  div2.appendChild(span);

  // Child div for div2
  let div3 = document.createElement("div");
  div2.appendChild(div3);

  // Child p for div3
  let p1 = document.createElement("p");
  p1.classList.add("font-semibold", "text-lg");
  p1.innerHTML = "Paypal";
  div3.appendChild(p1);

  // Another child p for div3
  let p2 = document.createElement("p");
  p2.classList.add("text-nowrap");
  p2.innerHTML = dateUpdate;
  div3.appendChild(p2);

  // Child div for main child div
  let div4 = document.createElement("div");
  div4.classList.add("col-span-4", "flex", "justify-end", "items-center");
  div.appendChild(div4);

  // Child div for div4
  let div5 = document.createElement("div");
  div5.classList.add("text-2xl", "flex", "justify-center", "items-center", "gap-2");
  div4.appendChild(div5);

  // Amount display (applying colorClass)
  let p3 = document.createElement("p");
  p3.classList.add(colorClass);
  p3.innerHTML = amountText;
  div5.appendChild(p3);

  // Currency display
  let p4 = document.createElement("p");
  p4.classList.add(colorClass);
  p4.innerHTML = "USD";
  div5.appendChild(p4);

  // Status display based on type
  let div6 = document.createElement("div");
  div6.classList.add("text-xl", "col-span-3", "flex", "justify-end", "items-center", colorClass);
  div6.innerHTML = type === "Add" ? "Completed" : "Pending";
  div.appendChild(div6);
}



// Event Listeners for "Add"
const currentBalance = document.getElementById('currentBalance');
const amountInputAdd = document.getElementById('amountInputAdd')
const backdrop = document.querySelector(".backdrop");

const addMoneyBtn = document.getElementById('addMoneyBtn');
const modal = document.querySelector(".modal");
const addMBtn = document.getElementById("addMBtn")
const addMoneyListItem = document.getElementById('addMoneyListItem');
const noTransactions = document.getElementById('noTransactions');

noTransactions.classList.remove("hidden");


function showAddMoneyModal(){
  modal.classList.remove("hidden");
  backdrop.classList.remove("hidden");
}

addMBtn.addEventListener("click", showAddMoneyModal);
addMoneyListItem.addEventListener("click", showAddMoneyModal);

backdrop.addEventListener('click', ()=>{
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
})


addMoneyBtn.addEventListener('click', (event)=>{
  event.preventDefault();
  const addAmountInput = parseFloat(amountInputAdd.value);

 

  if(!isNaN(addAmountInput) && addAmountInput > 0){
    initialBalance += addAmountInput;
    addTransaction("Add", addAmountInput);
    updateBalance();

    amountInputAdd.value = '';


    modal.classList.add('hidden');
    backdrop.classList.add('hidden');
    noTransactions.classList.add('hidden');
  }else if(isNaN(addAmountInput)){
    alert("Action cancelled or invalid input!")
  }else{
    alert("Amount must be greater than zero!")
  }
})



// Event Listeners for "Withdraw"
const amountInputWithdraw = document.getElementById('amountInputWithdraw');
const withdrawMBtn = document.getElementById('withdrawMBtn');
const modal1 =document.getElementById('modal1');
const withdrawMoneyListItem = document.getElementById('withdrawMoneyListItem');

function showAddMoneyModal1(){
  modal1.classList.remove("hidden");
  backdrop.classList.remove("hidden");
}

withdrawMBtn.addEventListener('click', showAddMoneyModal1);
withdrawMoneyListItem.addEventListener('click', showAddMoneyModal1);

backdrop.addEventListener('click', ()=>{
  modal1.classList.add('hidden');
  backdrop.classList.add('hidden');
})


const withdrawMoneyBtn = document.getElementById('withdrawMoneyBtn');

withdrawMoneyBtn.addEventListener('click', (event)=>{
  event.preventDefault();
  const withdrawAmountInput = parseFloat(amountInputWithdraw.value);

  if(!isNaN(withdrawAmountInput) && withdrawAmountInput > 0 && withdrawAmountInput <= initialBalance){
    initialBalance -= withdrawAmountInput;
    addTransaction("withdraw", withdrawAmountInput);
    updateBalance();

    amountInputWithdraw.value = '';

    modal1.classList.add('hidden');
    backdrop.classList.add('hidden');
    noTransactions.classList.add('hidden');
  }else if(isNaN(withdrawAmountInput)){
    alert("Invalid input!");
  }else if(withdrawAmountInput > initialBalance){
    alert("Insufficient funds!");
  }else{
    alert("Amount must be greater than zero!");
  }


})




  
 
  
  
  
  





  















  
  /*
  // Toggle notification panel
  notificationToggle.addEventListener('click', () => {
    notifications.classList.toggle('hidden');
  });
  
  // Toggle menu panel
  menuToggle.addEventListener('click', () => {
    menuBar.classList.toggle('hidden');
  });
  
  */
  
})