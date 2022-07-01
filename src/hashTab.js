import './main.css'

function HashTab() {
    // 
  return (
<div class="max-w-5xl pt-10 pl-10 pr-10">
    <div class="container mx-auto bg-slate-300">
      <div class="pt-4 pb-4 pl-4 pr-4 grid  grid-cols-2 gap-1">
        <div class="pt-4 pb-4 pl-4 pr-4 text-4xl mx-auto font-bold col-span-2">
          Hashing Algorithm(SHA 256)<br /><br />
        </div>

        <div class="mx-auto align-middle pr-20 border-r-4"> 
          <div class="font-bold ">Select Type</div><br />
          <div class="flex ">
            <div>
              <div>
                <input
                  class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault1"
                >
                  Text
                </label>
              </div><br />
              <div>
                <input
                  class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexRadioDefault2"
                >
                  File
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="">
        <input
                  type="file"
                  class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="Input"
                />
                <div class="pt-4 pb-4 pl-4 pr-4 font-bold"> Output </div>
                <input
                  type="email"
                  class="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="floatingInput"
                  placeholder="Output (Hex)"
                />
        </div>
      </div>
    </div>
    </div>
  )
}

export default HashTab
