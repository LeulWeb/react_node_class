import Card from "./components/Card"
import Navbar from "./components/Navbar"
import { productList } from "./data/productList"
import Child from "./components/Child"
import Counter from "./components/Counter"

// ./assets/tv.jpg

function App() {
  return (
    <main>
      {/* <Navbar/> */}
      <Navbar brand="MyMarket"  ></Navbar>

      <Child>
        <div>
          <p>20% off</p>
        </div>
      </Child>

      <section className="w-10/12 mx-auto grid sm:grid-cols-2 gap-2 md:grid-cols-3">
        {
          productList.map((item, index) => {

            return <Card key={index} product={item} />

          })
        }
      </section>

      <Counter />
    </main>

  )
}

export default App


// JS arrow function 
/*
  function add(a,b){
    return a+b
  }

  let add = (a,b)=>{
    //.. MORE LOGIC
    return a+b
  }

  let add = (a,b)=> a+b

  let yDouble = (y)=>2*y
  let yDouble = y=>2*y



*/