
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
  
const btn = document.getElementById("btn-1");
console.log(btn);
btn.addEventListener('click' , () => {
        fn()
    })
let bg ;
function sum() {
    let ais = 10;
    console.log("ais outside a function" ,ais);
    let bis = 15;
    function nsum(){
        return ais+bis;
    }
    return nsum;
}
sum();
const sum1 = sum();
// console.log(`ais is ${ais}`)
console.log(`sum is ${sum1()}`);
const fn = () => {
        const one = document.getElementById('one');
        const p = document.createElement('p');
        p.innerText = "Hello";
        one.appendChild(p);
        // const myName = prompt("Please enter your name.");
        // localStorage.setItem("name", myName);
        // one.textContent = `Mozilla is cool, ${myName}`;
    
}
console.log(b);
for (let index = 1; index <= 3; index++) {
    setTimeout(function () {
        console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
}
{
    var b = 23;
    var e=34;
}
console.log(b);
console.log(e);