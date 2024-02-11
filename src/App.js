import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://randomuser.me/api/?page=1&results=1&seed=abc"
      );

      if (!response.ok) {
        alert("failed");
      }

      const newData = await response.json();

      setData(newData?.results[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log();
  return (
    <div className="flex justify-center align-middle bg-[#90408988] h-screen self-center">
      {data ? (
        <div className=" flex justify-center align-middle self-center text-white bg-[#5a818888] shadow-md bg-clip-border rounded-xl h-72 w-1/2">
          <div className="flex flex-col justify-center mx-2">
            <div className="relative mx-4 mt-4  border-2 p-0 border-black flex  self-center align-middle justify-center overflow-hidden text-gray-700  shadow-lg bg-clip-border rounded-xl ">
              <img
                className="bg-cover rounded-xl m-0 p-0 w-full h-full"
                src={data.picture?.large}
                alt="profile-picture"
              />
              <p className="m-1"></p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div class="p-2 text-center  flex justify-center">
              {" "}
              Name:
              <h4 class="block mb-2 mx-2 font-sans text-1xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {data?.name?.first}
              </h4>
              <h4 class="block mb-2 font-sans text-1xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {data?.name?.last}
              </h4>
            </div>
            <div class="p-2 text-center  flex justify-center">
              {" "}
              Phone Number:
              <h4 class="block mb-2 mx-2 font-sans text-1xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {data?.phone}
              </h4>
            </div>
            <div class="p-2 text-center  flex justify-center">
              {" "}
              Gender:
              <h4 class="block mb-2 mx-2 font-sans text-1xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                {data?.gender}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h2>Loading</h2>
        </>
      )}
    </div>
  );
}

export default App;
