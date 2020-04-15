/*
1 - Describe what JSON format is
2 - Delete the data types not permitted in JSON
3 - Replace placholder-text with the corresponding data type, properly formatted as JSON

const myJsonObj = {
    myString: [some string],
    myNumer: [some number],
    myNull: [null],
    myBoolean: [false],
    myUndefined: [undefined],
    myArray: [some array],
    myFunction: [some function],
    myObject: [some object]
}

1 - JSON: Javascript Object Notation
  - Light-weight format for transferring data
  JSON is used because:
    1 - It is easy for humans to understand
    2 - It is easy for computers to parse & generate
*/

const myJsonObj = {
    "myString": "test",
    "myNumer": 123,
    "myNull": null,
    "myBoolean": false,    
    "myArray": [0,1,2], 
    "myObject": {
        "name": "moises",
        "age": 37
    }
}