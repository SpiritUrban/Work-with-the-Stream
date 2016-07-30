
var fs  = require('fs');
var lib = require('./my_modules/lib.js');
var obj = require('./my_modules/obj.js');
var json = require('./my_modules/json.js');



// Всі методи "lib"
// lib.createMatrix(80000); // Створити тестовий файл (з числами від 0 до N )
// lib.streamRead();        // Потокове читання тестового файлу і вивід інформації 
// lib.streamWrite();       // Потооковий запис файлу

// lib.streamReadWrite();    // Потокові паралельні читання + запис



lib.First(' Hello! ');  // Тестовий
lib.Second('Hello!2');  // Тестовий

// console.log(obj);
// console.log(json);
// console.log(require('./my_modules/json'));