// انتظار تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function () {

    // اختيار زر المينيو (الهامبرغر)
    const menuToggle = document.querySelector(".menu-toggle");
  
    // اختيار قائمة الـ links
    const navMenu = document.querySelector("nav ul");
  
    // عند الضغط على زر المينيو
    menuToggle.addEventListener("click", function () {
  
      // تبديل إظهار وإخفاء القائمة
      navMenu.classList.toggle("show");
  
    });
  
  });
// انتظار تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {

    // زر الهامبرغر
    const menuToggle = document.querySelector(".menu-toggle");
  
    // قائمة الروابط
    const navMenu = document.querySelector("nav ul");
  
    // جميع الروابط داخل القائمة
    const navLinks = document.querySelectorAll("nav ul li a");
  
    // فتح / غلق المنيو
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  
    // إغلاق المنيو عند الضغط على أي رابط
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("show");
      });
    });
  
  });
    