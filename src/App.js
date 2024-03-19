import { useState } from "react"
import axios from "axios"

export default function App() {
  const [street, setStreet] = useState("")
  const [streetNumber, setStreetNumber] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [zipCode, setZipCode] = useState("")


  const fetchWeather = e =>{

  }

  const handleSubmit = e =>{
    e.preventDefault()

    axios.get(`https://melchior.moja.it:8085/map-api/convert-address?street=Via%20Bartolomeo%20Nogara&number=69&city=Rome&province=Rome&zip_code=00119`, {
      headers: {
        'Content-Type': 'application/json'

      }
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err))


    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // const requestOptions = {
    //   method: "GET",
    //   headers: myHeaders
    // };

    // fetch(`https://melchior.moja.it:8085/map-api/convert-address?street=${street}&number=${streetNumber}&city=${city}&province=${province}&zip_code=${zipCode}`, requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
  }



  return (
    <div className="w-[50%] mx-auto pt-7">
     <h1 className="text-center text-3xl font-semibold">Weather App</h1>
     <div className="py-7">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div>
            <input
              type="text"
              placeholder="Street"
              className="input basis-full"
              onChange={e=>setStreet(e.target.value)}
            />
          </div>
          <div className="flex gap-5">
            <input
              type="number"
              placeholder="Street Number"
              className="input"
              onChange={e=>setStreetNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="input"
              onChange={e=>setCity(e.target.value)}
            />
          </div>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Province"
              className="input"
              onChange={e=>setProvince(e.target.value)}
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="input"
              onChange={e=>setZipCode(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-5">
             <button className="w-72 bg-teal-500 text-white py-2">Submit</button>
          </div>
        </form>
     </div>
    </div>
  );
}
