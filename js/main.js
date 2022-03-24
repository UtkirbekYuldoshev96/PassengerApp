let count = 0;
let total = 0;
// o'zgaruvchi yaratib olinadi
const counter = document.getElementById('count');
const incrimetn = document.getElementById('incriment');
const des = document.getElementById('decres');
const reset = document.getElementById('reset');
const save_btn = document.getElementById('save-btn');
const save_element = document.getElementById('save-element');
const total_amount = document.getElementById('total-amount');
// css klass chaqirib olindi
const firstNameClass = document.querySelector('.firstNameClass');
window.addEventListener('load', () => {
    counter.style.transition = "transform 0.7s linear";
    counter.style.opacity = 0.6;
    firstNameClass.style.transition = "transform 0.5s linear";
    firstNameClass.style.opacity = 0.6;
    save_element.style.transition = "transform 0.5s linear";
    save_element.style.opacity = 0.6;
    total_amount.style.transition = "transform 0.5s linear";
    total_amount.style.opacity = 0.6;
});

counter.addEventListener('mouseover', () => {
    counter.style.transition = "scale(1.2)";
    counter.style.opacity = 1;
});
counter.addEventListener('mouseout', () => {
    counter.style.transition = "scale(1)";
    counter.style.opacity = 0.6;
});
firstNameClass.addEventListener('mouseover', () => {
    counter.style.transition = "scale(1.2)";
    counter.style.opacity = 1;
});
firstNameClass.addEventListener('mouseout', () => {
    counter.style.transition = "scale(1)";
    counter.style.opacity = 0.6;
});
save_element.addEventListener('mouseover', () => {
    counter.style.transition = "scale(1.2)";
    counter.style.opacity = 1;
});
save_element.addEventListener('mouseout', () => {
    counter.style.transition = "scale(1)";
    counter.style.opacity = 0.6;
});
total_amount.addEventListener('mouseover', () => {
    counter.style.transition = "scale(1.2)";
    counter.style.opacity = 1;
});
total_amount.addEventListener('mouseout', () => {
    counter.style.transition = "scale(1)";
    counter.style.opacity = 0.6;
});
incrimetn.addEventListener('click', () => {
    count += 1;
    counter.innerHTML = count;
    colorChange();
});
des.addEventListener('click', () => {
    count -= 1;
    counter.innerHTML = count;
    colorChange();
});
reset.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
    save_element.innerHTML = `Previous entries: ${count}`;
    total = 0;
    total_amount.textContent = `We have ${total} passengers`;
    colorChange();
});

save_btn.addEventListener("click", () => {
    total += count;
    save_element.innerHTML = ` + ${count}`;
    count = 0;
    counter.innerHTML = count;
        if (total >= 0){
            total_amount.textContent = `We have ${total} passengers`;
        }else{
            total = 0;
            total_amount.textContent = `We have ${total} passengers`
        }
});

const colorChange = () => {
  if (count > 0){
      counter.style.color = "green";
      firstNameClass.innerHTML = "People entered:";
  }else if (count < 0){
      counter.style.color = "red";
      firstNameClass.innerHTML = "People entered:";
  }else {
      counter.style.color = "wheat";
      firstNameClass.innerHTML = "People entered:";
  }
};