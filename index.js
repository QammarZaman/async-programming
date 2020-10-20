console.log("Before Prepare food");

function frenchToast(data) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else {
                reject("Value not acceptable");
            }

        },10);
    });
    return promise;
}
function Andapratha() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Anda Pratha Bnao");
            resolve("Anda Pratha Ban geya hai khaa lo thanda ho jai ga");
        },20);    
    });
    return promise;
}
function kheer() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(()=>{
            console.log("Prepare Kheer");
            resolve("Kheer is Ready");
        },30);    
    });
    return promise;
}
async function makingFood() {
    try {
        let frenTost = await frenchToast();
    console.log("Frent Toast",frenTost);
    let Anda = await Andapratha();
    console.log("Anda Pratha",Anda);
    let myKheer = await kheer();
    console.log("Kheer is",myKheer);
    }
    catch (error) {
        console.log("Error in catch = ", error);
    }
}
makingFood();
console.log("After Finishing food");