// заварачиваем в Array.from так document.querySelectorAll возвращает не массив
// возврат последнего элемента.slice(-1)[0]
//. click() осуществляет клик - клик осуществляем каждые 10 секунд
// , 10 * 1000
//setInterval(() => Array.from(document.querySelectorAll('.product.enable')).slice(-1)[0].click(), 10 * 1000);
//setInterval(() => Array.from(document.querySelectorAll('.crate.upgrade.enable')).slice(-1)[0].click(), 10 * 1000);
//setInterval(() => document.querySelector('#bigCookie'));
setInterval(() => {
    Game.cookies = Infinity;
    const crate = Array.from(document.querySelectorAll('.crate.upgrade.enabled')).slice(-1)[0];
    if (crate)  crate.click();
    
    const prouct = Array.from(document.querySelectorAll('.product.enabled')).slice(-1)[0];
    if (prouct) prouct.click();
    
    document.querySelector('#bigCookie').click();
});
