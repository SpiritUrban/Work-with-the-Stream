var fs = require('fs');

/* 

fs.writeFileSync('test.txt', 'Привет'); // Запис-Перезапис 

// Асинхронний Запис-Перезпис
fs.writeFile("test.txt", "Привет!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Файл сохранен.");
    }
}); 



fs.appendFileSync('test.txt', ' Привет'); // Запис-ДОЗАПИС 

// Асинхронний Запис-ДОЗАПИС 
fs.appendFile("test.txt", " Привет!!!000/", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Файл сохранен.");
    }
});

// Читання
var text = fs.readFileSync('test.txt', 'utf8');
//console.log(text);

fs.readFile('test.txt', {encoding: 'utf8'}, function (err, data) {
    if (err) throw err;
    console.log(data);
});

*/

function createMatrix(quantity) {
	fs.writeFileSync('test.txt', ''); // Запис-Перезапис 

	for (var i=0; i < quantity; i++) {
		console.log(i);
		fs.appendFileSync('test.txt', ' ' + i); // Запис-ДОЗАПИС 
	}

	var text = fs.readFileSync('test.txt', 'utf8');
	console.log(text);
};

//createMatrix(80000);


function streamRead() {
	console.log('\n \n \n ------------------------------------- START -------------------------------------');

	var stream = fs.createReadStream('test.txt', {encoding: 'utf8'});
	var counter = 0;

	stream.on('readable', function() {
	    var buf;
	    while ((buf = stream.read()) !== null) {
	    	//console.log(' \n');
	        console.log(' Прочитано - ' + buf.length  + ' символів');
	        counter++;        
	    }
	});

	stream.once('end', function() {
	    console.log('\n Читання виконано успішно.');
	    console.log('\n Виконано за ' + counter + ' ітерацій ');
	    console.log('\n -------------------------------------  END  ------------------------------------- \n \n');
	});
	// Читає по 64 кілобайта
};

//streamRead();


function streamWrite() {

	var writer = fs.createWriteStream('test-2.txt', {flags: 'w'});

	writer.on('finish', function() {
	    console.error('Запись выполнена успешно.');
	});

	var i = 0;

	function write() {
	    do {

	        var ok = writer.write('Тест, #' + i + '!\n');

	        if (!ok) {
	            writer.once('drain', write);
	            break;
	        }

	        i++;

	    } while (i < 10 && ok);

	    if (i === 10) {
	        writer.end('===== Конец =====\n');
	    }
	}
	write();
};

// streamWrite();

function streamReadWrite() {
	//console.log(8);
};
streamReadWrite();