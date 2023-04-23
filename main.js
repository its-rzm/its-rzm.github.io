
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav);

const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

function validateLogin(){
    let pass = document.getElementById('psw').value.trim();
    let email = document.getElementById('email').value.trim();
    if(pass == "" || email == "") {
        document.getElementById("message").innerHTML = "*Kolom wajib diisi";
        return false;
    }
    if (pass.length < 8 || pass.length > 10) {
        document.getElementById("message").innerHTML = "*Password harus minimal 8 dan maksimal 10";
        return false;
    }
    if (pass.search(/[a-z]/) <= -1 || pass.search(/[A-Z]/) <= -1 || pass.search(/[0-9]/) <= -1) {
        document.getElementById("message").innerHTML = "*Password memerlukan kombinasi huruf besar, kecil, dan angka";
        return false;
    }
}

const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

