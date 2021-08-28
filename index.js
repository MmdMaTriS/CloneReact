/* Create New Element With "elementSaz"  
    **EXAMPLE** 
elementSaz("type",{
    style : { 
        color: "red",
        className: "class",
        childern: ["Hello World"]
    }
     "Hello World"
})

OR

elementSaz("type",{
    style : { 
        color: "red",
        className: "class",
    }
     "Hello World"
})
*/
const root = MyReact.elementSaz("h1",{},"Hello CloneOfReact");

/* 
    Attach to root Page with "MyReactDom.render(element, yourPageLocation)"
*/
MyReactDom.render(root , document.getElementById("root"));