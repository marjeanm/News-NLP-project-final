var Client =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "checkForName", function() { return /* reexport */ checkForName; });
__webpack_require__.d(__webpack_exports__, "handleSubmit", function() { return /* reexport */ handleSubmit; });

// CONCATENATED MODULE: ./src/client/js/nameChecker.js
function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}



// CONCATENATED MODULE: ./src/client/js/formHandler.js
const postData = async (url = "",data = {})=> {
    console.log('Post data function running',data);
    const response  = await fetch (url, {
        method: 'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data)
    });

    try{
        const newData = await response.json();
        console.log(newData)
        return newData
        
    }catch(error){
        console.log('error',error)
   }
};

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    
    let formText = document.getElementById('name').value
   //Client.checkForName(formText)
 // form validation
 let validate = document.forms["myForm"]["input"].value;
        let myRegexe = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/i;
        let result = myRegexe.test(validate)
        if (result === true) {
            document.getElementById('name').style.border ="thick solid green";
         
        
       
            
   postData('http://localhost:8081/api', {txt: formText})   
   .then(function(res){
       document.getElementById('results').innerHTML = res.agreement
       document.getElementById('confidence').innerHTML = res.confidence
       document.getElementById('irony').innerHTML = res.irony
      
     
       console.log(res.agreement)
       console.log(res.confidence)
       console.log(res.irony)
      
    })
} else {
alert("please enter valid URL");
}
}



    
   // console.log("::: Form Submitted :::")


   
   
      

   






// CONCATENATED MODULE: ./src/client/styles/resets.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/client/styles/base.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/client/styles/footer.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/client/styles/form.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/client/styles/header.scss
// extracted by mini-css-extract-plugin

// CONCATENATED MODULE: ./src/client/index.js









console.log(checkForName);


console.log("CHANGE!!");



/***/ })
/******/ ]);