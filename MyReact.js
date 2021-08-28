function elementSaz(type, props, ...childerns){
    const element = document.createElement(type);

    let {childern, className, style, ...attributes} = props;
    if(style){
        Object.entries(style).forEach(([key,value]) => {
            element.style[key] = value;
        })
    }

    Object.entries(attributes).forEach(([key,value]) => {
        element.setAttribute(key, value);
    })
    
    if (className) {
        element.className = className;
    }

    if(childerns.length) childern = childerns;
    
    childern.forEach((node)=>{
        element.append(node)
    });

    return element;
}

const MyReact = { 
    elementSaz,
};
window.MyReact = MyReact;



