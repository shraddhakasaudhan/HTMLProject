//for loop
/*for(let i=0 ; i< 5; i++ ){
    if(i%2 == 0)
    console.log(i);
    console.log("hi");
}*/
//while loop
/*let i=10;
while(i>0){
    console.log("hi");
    i--;
}*/

//do while loop

/*let j = 0;
do{
    console.log("hi");
    j++;
}
while(j<9);
*/
//For...In
//Object
let animal = {
    name : "Zebra",
    leg: 4
};

for(let key in animal){
    console.log(key,animal[key]);
}

//Arrays
let names=["Shraddha", "Saumya", "Shivam"];
for(let index in names){
    console.log(index, names[index]); //bracket notation
}
//For..of
for(let name of names){
    console.log(name);
}