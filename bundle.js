(()=>{var e={72:e=>{e.exports=class{constructor(){this.items=[]}add(e){this.items.push(e)}getItemCount(){return this.items.length}getTotalBeforeTax(){let e=0;return this.items.forEach((t=>{e+=t.price})),e}getTotalWithTax(){let e=0;for(const t of this.items)e+=t.getPriceWithTax();return e}getTax(){return this.getTotalWithTax()-this.getTotalBeforeTax()}}},132:e=>{e.exports=class{constructor(e,t,n){this.name=e,this.price=t,this.taxable=n}getPriceWithTax(){return!0===this.taxable?1.1*this.price:this.price}}},842:()=>{}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{const e=n(72),t=n(132);let{formatCurrency:r,getCoins:i}=n(842);r=r||(e=>e);const a=[new t("Candy Bar",1,!0),new t("Bag of Chips",2,!0),new t("Can of Soda",3,!0),new t("Bottle of Milk",3,!1),new t("Box of Cherries",5,!1)];!function(){const t=document.getElementById("menu"),n=document.getElementById("selectedItems"),o=document.getElementById("subtotal"),s=document.getElementById("tax"),d=document.getElementById("total"),c=document.getElementById("cashInput"),l=document.getElementById("cashForm"),u=document.getElementById("changeDue"),m=document.getElementById("cashInserted"),h=document.getElementById("paymentInsufficientMessage"),x=document.getElementById("change"),g=x.querySelectorAll(".change-count"),T=document.getElementById("resetButton");a.forEach(((e,n)=>{t.insertAdjacentHTML("beforeend",`<li>${r(e.price)}${e.taxable?"*":""} - ${e.name}\n        <button data-index="${n}">Buy</button>\n      </li>`)}));let f=new e;function B(){n.innerHTML="";for(const e of f.items)selectedItems.insertAdjacentHTML("beforeend",`<tr>\n        <td>${e.name}</td>\n        <td>${r(e.price)}</td>\n        <td>${r(e.getPriceWithTax())}</td>\n      </tr>`);o.innerText=r(f.getTotalBeforeTax()),s.innerText=r(f.getTax()),d.innerText=r(f.getTotalWithTax())}t.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));isNaN(t)||(f.add(a[t]),B())})),l.addEventListener("submit",(e=>{e.preventDefault();const t=Number(c.value)||0,n=t-f.getTotalWithTax();if(m.innerText=r(t),u.innerText=r(n),n>=0){const e=i(Math.round(100*n));g[0].innerText=e.quarters,g[1].innerText=e.dimes,g[2].innerText=e.nickels,g[3].innerText=e.pennies,x.hidden=!1,h.hidden=!0}else x.hidden=!0,h.hidden=!1})),T.addEventListener("click",(()=>{f=new e,B(),c.value="",m.innerText="",u.innerText="",x.hidden=!0,h.hidden=!0}))}()})()})();