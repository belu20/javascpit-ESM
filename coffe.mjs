export function makeCoffee(name, callback) {
    const estimationTime = 5000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu. pramuji sedang membuat kopi dalam ${inSecond} detik`);

    setTimeout(() => {
        const number = Math.random();
        if (number > 0.3){
            isSuccess = true;
        }

        if(!isSuccess){
            callback(new Error('Gagal membuat kopi .'), null);
            return;
        }
        console.log('pramuji selesai membuat kopi');
        
        callback(null, name);

    }, estimationTime);
}

export function sendCoffe (name, callback){
    const estimationTime = 2000;
    let isSuccess = false;

    
    console.log('pramuji sedang mengantarkan kopi dalam detik');

    setTimeout(()=>{
        const number = Math.random();
        if (number > 0.3){
            isSuccess = true;
        }
        if (!isSuccess){
            callback(new Error('gagal mengantarkan kopi.'));
            return;
        }
        console.log('pramuji sudah sampai di meja.');

        callback(null, name);
    }, estimationTime);
}

