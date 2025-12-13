import Users from './users.jsx'
function App() {
  let cars = ['BMW','Subaru','porshe','Toyota','Isuzu','Mazda']
  let uni = ['KARU','Masinde Muliro','Egerton','Moi Uni','JKUAT','DKUT']
  let tribes = ['Luo','Agikuyu','Ameru','Kalenjin','Masai','Mijikenda','Akamba']

  return(
    <>
    <h3>Cars</h3>
    <ul>
      {cars.map((car) => (<li>{car}</li>))}
    </ul>
    <h3>Universities</h3>
    </>
  )
}

export default Users