 
function Kariuki(){
  let cars = ["Bmw", "Mazda", "Subaru", "Toyota", "Porshe", "Ford", "Fortuner","Jeep","Harrier","Lexus"];
  let uni = ["Karatina University","Maseno", "JKUT", "Egerton", "Moi", "UON", "KU", "MKU", "Kirinyaga", "Dedan Kimathi"]
  let tribes = ["Kalenjin", "Luhya", "Mijikenda","Luo", "Masai","Akamba", "Kikuyu","Ameru","Aembu","Pokot"];
 //return <p>Hello World!</p>
 return(
  <>
  <h3>Cars</h3>
    <ul>
      {cars.map((car)=>(<li>{car}</li>))}
    </ul>
    <h3>Universities</h3>
  <ul>
    {uni.map((unis) => (<li>{unis}</li>))}
  </ul>
  <h3>Tribes</h3>
  <ul>
    {tribes.map((tribe) => (<li>{tribe}</li>))}
  </ul>
  </>
 )
 
 //const name = "Kariuki"
 //return <p>My name is {name}</p>
  }

  export default Kariuki
