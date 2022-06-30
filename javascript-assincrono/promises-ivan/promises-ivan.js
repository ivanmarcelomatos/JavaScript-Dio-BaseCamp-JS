// link videoaula relacionada na DIO - JavaScript Assíncrono
// https://web.dio.me/course/javascript-assincrono/learning/cb0f4799-9865-496a-a94a-7236ff842f6b?back=/track/impulso-javascript-evolution&tab=undefined&moduleId=undefined



const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

//console.log(myPromise); //retornou erro dizendo que windows não foi definido


const resolved = await myPromisse
        .then((result) => result + ' passando pelo then');
        .then((result) => result + ' e agora acabou!');
        catch((err) => console.log(err.message));

return resolved;

