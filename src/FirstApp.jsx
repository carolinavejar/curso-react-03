const newMessage = {
    message: "Hola mundo",
    title: "Caro"
};

// NO PUEDE MANDARSE DIRECMANTE UN OBJETO, HAY QUE PASARLO A STRING


const fnTest =  ()=> { 
    return "Carito desde una Fn"
}

export const FirstApp = ()=> { 
    return (
    <>
        <h1>Primera aplicación</h1>
        <h2> { fnTest() } </h2>
        
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>Vejar</p>
    </>);
};

