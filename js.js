function main(){
	t=document.getElementById('t');
	t.addEventListener('hover',do,false);
}
function do(){
	t.style.color="white";
}
window.addEventListener('load',main,false);