function promiseExecutor(resolve, reject){
    setTimeout (() => {
        console.log('melakukan sesuatu sebelum promise selesai.')

        const number = Math.random();
        if (number > 0.5){
            resolve('you dit it');

        }
        else {
            reject('sorry, something wrong!');
        }
    }, 2000);
} 

export function doSomething (){
    return new Promise(promiseExecutor);
}