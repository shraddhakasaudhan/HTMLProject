let bread1 = prompt("Which bread would you like to have :- ");
let veggies1 = prompt("What are your favorite veggies");
let sauce1 = prompt("Which sauce would you like to have :- ");

function makeSandwitch(bread, veggies, sauce){
    let sandwitch = bread + " bread " + veggies + " " + sauce + " sandwitch is ready";
    return sandwitch;
}

let vegSanwitch = makeSandwitch(bread1, veggies1, sauce1);
console.log(vegSanwitch);