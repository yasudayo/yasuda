const stage = document.createElement('stage');
document.body.appendChild(stage);
const hajibutton = document.getElementById('haji');
const title = document.getElementById('text');
const sabu = document.getElementById('text1');
const credit = document.getElementById('credit');
credit.innerText = "音楽:アオサキ様　\n 絵:平山様";
function start () {
    hajibutton.style.display = "none";
    title.style.display = "none";
    sabu.style.display = "none";
    credit.style.display = "none";
    kaisi()
}
