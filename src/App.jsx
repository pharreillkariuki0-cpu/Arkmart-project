 
function Kariuki(){
  let cars = ["Bmw", "Mazda", "Subaru", "Toyota", "Porshe"];
 //return <p>Hello World!</p>
 return(
  <>
    <ul>
      {cars.map((car) => (<li>{car}</li>) )}
    </ul>
  </>
 )
 
 //const name = "Kariuki"
 //return <p>My name is {name}</p>
  }

  export default Kariuki
