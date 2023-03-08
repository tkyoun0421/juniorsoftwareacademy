const header = document.querySelector('#header');

fetch('./src/common/header.html')
.then(res => res.text())
.then(data => header.innerHTML = data);