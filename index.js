const fs = require('fs');

//Create JSON
fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', (err) => {
    if (err) console.log(err);
    console.log("JSON başarı ile oluşturuldu.");
});

//Read JSON
fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
});

// Append File
fs.appendFile('employees.json' , '{"name": "Employee 2 Name", "salary": 3000}', 'utf8' ,(err) => {
    if (err) console.log(err);
    console.log("Yeni veri eklendi!");
});

// Delete JSON
fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
    console.log("Dosya başarı ile kaldırıldı.");
});