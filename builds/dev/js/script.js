'use strict';

(function (global) {
   /* globals to this clode block - all fns private except for defaultPhone */
   var sel = document.querySelector('.selection');
   var black = document.getElementById('pone');
   var silver = document.getElementById('ptwo');
   var gold = document.getElementById('pthree');
   var burger =document.getElementById('burgerking');
   var screenWidth;

   //this code block opens/closes navigation on a click event
   var button = document.querySelector('.navbar-header');

   button.addEventListener('click', function (e) {
      e.preventDefault();
      var top = document.querySelector('.navbar.navbar-inverse.navbar-fixed-top');
      //targets burger everytime
      if (e.target.id == "burgerking" || e.target.className == "icon-bar") {
         if (top.classList.contains('isopened')) {
            top.classList.remove('isopened');
         } else {
            top.classList.add('isopened');
         }
      } //burgerking 
   }, false); //btn evt-listener

   //phones handler
   sel.addEventListener('click', function (e) {
      if (e.target.className == "circle circle-black") {
         console.log('circle-black');
         black.classList.remove('pone');
         silver.classList.add('ptwo');
         gold.classList.add('pthree');
      } else if (e.target.className == "circle circle-silver") {
         console.log('circle-silver');
         silver.classList.remove('ptwo');
         black.classList.add('pone');
         gold.classList.add('pthree');
      } else if (e.target.className == "circle circle-gold") {
         console.log('circle-gold');
         gold.classList.remove('pthree');
         black.classList.add('pone');
         silver.classList.add('ptwo');
      }
   }, false); //sel evt listener 


   global.defaultPhone = function() {
      //sets default phone
      black.className = "";
   } //defaultPhone
   
   

})(window); //self-ex fn





//sets a phone as a default at page load
window.addEventListener('DOMContentLoaded', defaultPhone, false);
