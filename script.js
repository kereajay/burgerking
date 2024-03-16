

const checkboxes = document.querySelectorAll('.myCheckbox');
const two = document.getElementById('two');
const order = document.getElementById('order').addEventListener('click', () => {
let orderid = Math.floor((Math.random() * 1000));
let burger=document.getElementById('Burger');
let pizza=document.getElementById('fries');
let drinks=document.getElementById('Drink');
if(burger.checked==false && pizza.checked==false && drinks.checked==false){
alert("Please select atleast one item to place the order")
}
//    console.log(orderid);
  
    checkboxes.forEach((val, index) => {
        let promise1 = new Promise((res, rej) => {
            setTimeout(() => {
                res({ index, val });
                //   res(val);
            }, 1000)
        })
        
        promise1.then(({ val, index }) => {
           
            let displayburger = "";
            let displayfries = "";
            let displaydrinks = "";
            

            if (index === 0 && val.checked) {
                displayburger += `
            <div id="twoa">
            <p style="font-size:large;color: orangered;">OrderId:-${orderid}</p>
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" alt="" height="400px" width="400px">
                </div>
                             `
                two.innerHTML = displayburger;

            }
            else if (index === 1 && val.checked) {
                displayfries += `
            <div id="twob">
            <p style="font-size:large;color: orangered;">OrderId:-${orderid}</p>
                <img src="https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" height="400px" width="400px">
                </div>
                             `
                two.innerHTML = displayfries;
            }
            else if (index === 2 && val.checked) {
                displaydrinks += `
            <div id="twoc">
            <p style="font-size:large;color: orangered;">OrderId:-${orderid}</p>
                <img src="https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" height="400px" width="400px">
                </div>
                             `
                two.innerHTML = displaydrinks;
            }
            else if(index === 0 && !val.checked && index === 1 && !val.checked ){
                alert("hello");
                 
            }

        })



    })
})

