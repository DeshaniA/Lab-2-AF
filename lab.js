function getValue(){
    let value =0;
    return new Promise(resolve => {
        value = 10;
        setTimeout(() => {
            resolve(value)
        },2000);
    });
}


getvalue.then(function (value) {
    console.log(value)
});

async function print(){
    let v = await getValue();
    console.log(v);
    console.log("see it's asyncronous");
}

print();
console.log("it skipped");
