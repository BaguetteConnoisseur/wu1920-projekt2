document.querySelector('.menu-button').addEventListener('click', function () {
    document.querySelector('.main-menu').classList.toggle('active');
});

document.querySelector('.menu-button2').addEventListener('click', function () {
    document.querySelector('.main-menu2').classList.toggle('active');
});

document.querySelector('.menu-button3').addEventListener('click', function () {
    document.querySelector('.main-menu3').classList.toggle('active');
});

document.querySelector('.menu-button4').addEventListener('click', function () {
    document.querySelector('.main-menu4').classList.toggle('active');
});

document.querySelector('.menu-button5').addEventListener('click', function () {
    document.querySelector('.main-menu5').classList.toggle('active');
});













function toggleClass(element, className) {
    var classString = element.className, nameIndex = classString.indexOf(className);
    if (nameIndex == -1) {
        classString += ' ' + className;
    } else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
    }
    element.className = classString;
}