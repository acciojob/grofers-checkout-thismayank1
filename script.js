const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const price=document.querySelectorAll(".price");
	let total=0;

	price.forEach((price)=>{
		total +=Number(price.textContent);
	})

		const newRow=document.createElement("tr");
		const totalBox=document.createElement("td");
	    const totalPriceBox=document.createElement("td");
	    totalPriceBox.textContent=`${total}`;
		totalBox.textContent=`Total Price`;
		newRow.appendChild(totalBox);
	    newRow.appendChild(totalPriceBox);

		document.querySelector("table").appendChild(newRow);

};

getSumBtn.addEventListener("click", getSum);

