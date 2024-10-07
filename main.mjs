import { makeCoffee, sendCoffe } from './coffe.mjs';

const order = 'Coffee Ekpreso';
console.log(`Saya memesan ${order} di warkop`);

makeCoffee(order,(makeCoffeeError, makeCoffeeData)=>{
   if(makeCoffeeError){
      console.error(makeCoffeeError);
      return;
   }
sendCoffe(makeCoffeeData,(sendCoffeError, sendCoffeData)=>{
   if(sendCoffeError){
      console.error(sendCoffeError);
      return;
   }
   console.log(`Pramusaji memberikan ${sendCoffeData} pesanan.`);
   console.log(`Saya mendapatkan ${sendCoffeData} dan menghabiskannya.`);
   });
});
