
export const Login = ()=> {
    
    let nombre = "peputo"
    
    const saludar = () =>{
        console.log("Hola como estas?")
    }

    
    return <div>
        <h1>Hola Gato</h1>
        <h2>Mi nombre es {nombre}</h2>
        <button onClick={saludar} >Saludar</button>
    </div>
    

}