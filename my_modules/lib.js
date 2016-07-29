var fs    = require('fs');

// ***********************************************************************************************************
// Створити файл з числами від 0 до quantity
// ***********************************************************************************************************
function createMatrix(quantity) {
	fs.writeFileSync('test.txt', ''); // Перезапис 

	for (var i=0; i < quantity; i++) {
		console.log(i);
		fs.appendFileSync('test.txt', ' ' + i); // ДОЗАПИС 
	}

	var text = fs.readFileSync('test.txt', 'utf8');
	console.log(text);
};

// ***********************************************************************************************************
// Потокове читання файлу і вивід данних про нього
// ***********************************************************************************************************
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

// ***********************************************************************************************************
// Потоковий запис файлу
// ***********************************************************************************************************
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


// ***********************************************************************************************************
// Одночасне/паралельне потокове читання з 1-го файду і запис в 2-й файл
// ***********************************************************************************************************
function streamReadWrite() {
	console.log(8);
};




// ***********************************************************************************************************
function First(data) {
	this.data = data;
	console.log('Data  First - ' + data);
};
// ***********************************************************************************************************
function Second(data) {
	this.data = data;
	console.log('Data Second - ' + data);
};


// ***********************************************************************************************************
exports.createMatrix  = createMatrix;
exports.streamRead    = streamRead;
exports.streamWrite   = streamWrite;
exports.streamReadWrite = streamReadWrite;

exports.First  = First;
exports.Second = Second;



