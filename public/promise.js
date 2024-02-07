
// const status = false;

// console.log('Task 1');

// const promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(status){
//         resolve('Task 2');
//         }else{
//             reject('Failed')
//         }
       
//     }, 2000)

// })

// promise
// .then((value)=>{
//     console.log(value)
// })
// .catch((err)=>{
//     console.log(err)
// })

// console.log('Task 3')


const paymentSuccess = false;
const marks = 90;

function enroll(){
    console.log('Course enrollment is in progress...');

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(paymentSuccess){
                resolve()
            }else{
                reject('Payment failed');
            }
        }, 2000)
    })
    return promise
}

function progress(){
    console.log('Course in progress...')
   const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(marks>=80){
          resolve()
        }else{
            reject('You could not get enough marks to get the certificate')
        }
      }, 3000)
   })

   return promise
}

function getCertificate(){
    console.log('Preparing your certificate...');
    const promise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Congrats! You got the certificate')
        }, 1000)
    })
    return promise;
}

enroll()
      .then(progress)
      .then(getCertificate)
      .then((val)=>{
        console.log(val)
      })
      .catch((err)=>{
        console.log(err)
      })