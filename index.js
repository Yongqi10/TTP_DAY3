// forEach()
function myeach(arr,callback)
{
    for(let i = 0; i < arr.length; i++)
    {
        callback(arr[i]);

    }

}

function callback(num)
{
    console.log(num);
}

let arr = [1,2,3,4,5,6,7,8,9,10];
myeach(arr,callback);


//Map()
function map(map,callback2)
{
    let newarr = [];
    for(let i in map)
    {
        newarr.push(map[i]);
    }
    callback2(newarr);
}

function callback2(arr)
{
    console.log(arr);
}

let mymap = [ {name:'yongqi', age:23},
            {name: "jhon", age: 22},
            {name: 'joe', age: 21}];

map(mymap,callback2);

//filter()

function filter(arr,callback3)
{
    let newarr2 = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(callback3(arr[i]))
        {
            newarr2.push(arr[i]);
        }
        
    }
    return newarr2;
}
function callback3(word)
{
    return word.length > 3;

}

let myFilter = ['hello','world','nice','to','meet','you'];

console.log(filter(myFilter,callback3));


//Some()

function some(arr,callback4)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(callback4(arr[i]))
        {
            return true;
        }
    }
    return false;
}

function callback4(num)
{
    return num % 2 === 0;
}

let mysome = [1,2,3,4,5,6,7,8,9,10];

console.log(some(mysome,callback4));

//every()

function every(arr,callback5)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(callback5(arr[i]))
        {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

function callback5(num)
{
    return num < 40;
}
//let myevery = [1, 30, 39, 29, 10, 13];
let myevery = [1, 30, 39, 29, 10, 13, 42];

console.log(every(myevery,callback5));

//reduce()

function reduce(arr,callback6)
{
    let newnum = 0;
    let previous = 0;
    let current = 1;

    while(current < arr.length)
    {
        newnum += callback6(arr[current], previous);
        previous = current+1;
        current++;
    }
    return newnum;

}
function callback6(current, previous)
{
    return current + previous;
}

let myreduce = [1,2,3,4,5,6,7,8,9,10];
console.log(reduce(myreduce,callback6));


//includes()

function includes(arr,target)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i]===target)
        {
            return true;
        }
    }
    return false;
}

let myincludes = [1,2,3,4,5,6,7,8,9,10];
console.log(includes(arr,3)); 


//indexOf()

function indexof(arr,target)
{
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === target)
        {
            return i;
        }
    }

    return -1;
}


let myindexOf = [1,3,4,5,6,7,2,9];

 console.log(indexof(myindexOf,2));

//push()

function push(arr,item)
{
    arr[arr.length] = item;
    console.log(arr)
}


let mypush = ['j','o','e','q','s'];
push(mypush,'b');


//lastIndexOf()

function lastIndexOf(arr,target)
{
    for(let i = arr.length; i > 0;i--)
    {
        if(arr[i] === target)
        {
            return i;
        }
    }
    return -1;
}

let mylastIndexOf  = [1,1,34,5,6,7,2,1];
console.log(lastIndexOf(mylastIndexOf,1));

//Object.keys()

function getallKeys(obj)
{
    let arr = [];
    for(let i in obj)
    {
        arr.push(i);
    }
    return arr;
}

let obj1 = {name: "jhon", age: 22};
console.log(getallKeys(obj1));


//Object.values()
function getAllValues(obj)
{
    let arr = [];
    for(let i in obj)
    {
        arr.push(obj[i]);
    }
    return arr;
}
let obj2 = {name: "jhon", age: 22};
console.log(getAllValues(obj2));