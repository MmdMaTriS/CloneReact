/* Create New Element With "elementSaz"  
    **EXAMPLE** 
elementSaz("type",{
    style : { 
        color: "red",
    },
    className : "someClass",
    props: "key",
    childern: ["Hello Clone-React"],
});

OR

elementSaz("type",{
    style : { 
        color: "red",
    },
    className: "class",
    props: "key",
},
    "Hello Clone-React");
*/
const root = MyReact.elementSaz("h1",{},"Hello Clone-React");

/* 
    Attach to root Page with "MyReactDom.render(element, yourPageLocation)"
*/
MyReactDom.render(root , document.getElementById("root"));