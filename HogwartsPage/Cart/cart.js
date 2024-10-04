const cartDiv = document.getElementById('cartDiv');
let cart = [];

const EL = (options) => {
    const el = document.createElement(options.element)
    console.log(el);
    for (const i in options) {
        if(i !== 'element' && i !== 'children') 
            el[i] = options[i]
    }
    if(options.children){
        if(Array.isArray(options.children)){
            options.children.forEach(element => {
                el.append(element)
            });
        }
        else el.append(options.children)
    }
    return el;
}


let theItem = localStorage.getItem('gameThatAdded');
const parseItem = JSON.parse(theItem);

const total = () =>{
    cart.forEach(item =>{
        let sum;
        sum += item.price;
        return sum
    })
}

const removeItem = () =>{
    localStorage.clear();
}

const pageMaker = () => {
    if(parseItem){
        cart.push(parseItem);
        if(cart.length > 0){
            console.log(cart)
            cart.forEach((i)=> {
                const cartStuff = () =>{
                    const basket = EL({
                        element: 'div',
                        className: 'main-content',
                        children: [
                            EL({
                                element: 'img',
                                src: parseItem.image ,
                                className:'item-image',
                            }),
                            EL({
                                element:'div',
                                className:'d-flex flex-column flex-start ps-2',
                                children: [
                                    EL({
                                        element: 'h1',
                                        innerText: parseItem.name,
                                        className: 'make-it-black'
                                    }),
                                    EL({ 
                                        element: 'h3',
                                        innerText: parseItem.price + '$',
                                        className: 'pt-3 make-it-black'
                                    }),
                                    EL({ 
                                        element: 'h5',
                                        innerText: 'PS5',
                                        className: 'pt-3 make-it-blue'
                                    })
                                ]
                            }),
                            EL({
                                element:'div',
                                innerText: '' ,
                            }),
                            EL({
                                element:'button',
                                // onclick:removeItem(),
                                className:'remove-btn',
                                innerText:'-'
                            })
                        ]
                    })
                    return basket;
                }
                const App = () => {
                    return cartStuff()
                }
                cartDiv.appendChild(App());            
            })
            
        }
        
    }
    else{
        const stuff = () =>{
            const basketEmpty = EL({
                element: 'div',
                className:'crash d-flex',
                children:[
                    EL({
                        element: 'img',
                        className: 'crash-him-self main-imagie',
                        id: 'anchor',
                        src: '../Crash Images/editedCrash.png'
                    }),
                    EL({
                        element: 'img',
                        className: 'crash-left-eye eye',
                        src: '../Crash Images/crash left eye.png',
                        id: 'eye'
                    })
                    ,
                    EL({
                        element: 'img',
                        className: 'crash-right-eye eye',
                        src: '../Crash Images/crash right eye.png'
                        ,id: 'eye'
                    }),
                    EL({
                        element: 'h1',
                        innerText:'Empty!',
                        className: 'bubble-txt pb-3 mb-5'
                    }),
                ]
            })
            return basketEmpty;
        }
        const App = () => {
            return stuff()
        }
        cartDiv.appendChild(App());            
    }
   
    
}
pageMaker();


const anchor = document.getElementById('anchor')
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width/2;
const anchorY = rekt.top + rekt.height/2;

document.addEventListener('mousemove', (e)=>{
    const mouseX = e.clientX;
    const mouseY = e.clientY;


    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    console.log(angleDeg);
    const eyes = document.querySelectorAll('.eye')
    eyes.forEach( e =>{
        e.style.transform = `rotate(${90 + angleDeg}deg)`;
    })
})

function angle(cx, cy, ex, ey){
    const dy = ey-cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
}