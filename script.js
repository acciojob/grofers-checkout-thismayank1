const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here

	const prices=document.querySelectorAll(".price");
	let total=0;

	prices.forEach((prices)=>{
		total +=Number(prices.textContent);
	})

		const newRow=document.createElement("tr");
		const totalBox=document.createElement("td");
	    const totalPriceBox=document.createElement("td");
	    totalPriceBox.textContent=`${total}`;
		totalBox.textContent=`Total Prices`;
		newRow.appendChild(totalBox);
	    newRow.appendChild(totalPriceBox);

		document.querySelector("table").appendChild(newRow);

};

getSumBtn.addEventListener("click", getSum);

