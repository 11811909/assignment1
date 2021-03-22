import react from 'react'
// function Greet(){
//     return <h1>hello madam</h1>
// }

export const Greet = props => {
    console.log(props)
    return <h2>Hello Welcome {props.name}!!!</h2>
}

// export default Greet