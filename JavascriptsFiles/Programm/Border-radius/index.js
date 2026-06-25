let left = document.getElementById("left");
let right = document.getElementById("right");
let bottomLeft = document.getElementById("bottom-l");
let bottomRight = document.getElementById("bottom-r");
let container = document.getElementById("borderr");
let l1 = document.getElementById("l1");

function updateRadius() {
    container.style.borderTopLeftRadius = `${left.value}px`;
    container.style.borderTopRightRadius = `${right.value}px`;
    container.style.borderBottomLeftRadius = `${bottomLeft.value}px`;
    container.style.borderBottomRightRadius = `${bottomRight.value}px`;
      
    l1.textContent = `.container{
    border-left:${left.value}px;
    border-right:${right.value}px;
    border-bottom-left:${bottomLeft.value}px;
    border-bottom-right:${bottomRight.value}px;
    }`;
 
}

left.addEventListener("input", updateRadius);
right.addEventListener("input", updateRadius);
bottomLeft.addEventListener("input", updateRadius);
bottomRight.addEventListener("input", updateRadius);




