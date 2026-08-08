const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const prices=document.querySelectorAll(".prices");
	let total=0;

	price.forEach((price)=>{
		total +=Number(price.textContent);

		const newRow=document.createElement("tr");
		const totalBox=document.createElement("td");
		totalBox.textContent=`Total Price:${total}`;
		newRow.appendChild(totalBox);

		document.querySelector("table").appendChild(newRow);
	})

	
  
};

getSumBtn.addEventListener("click", getSum);

