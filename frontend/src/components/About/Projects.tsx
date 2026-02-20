import * as Icons from "../Icons/ProjectIcons"
import { GithubIcon } from '../Icons/SocialIcons'
import * as DCIcons from "../Icons/DataCloudIcons"


{/** @todo: fix icons **/ }
const PartBlockWithIcon: React.FC<{ name: string }> = ({ name, }) => (
  <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
    <div className='grid grid-cols-2 col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                    justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                    shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10'>
      <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>{name}</h3>
      <div className='border-none border-green-900 bg-stone-800'>
        <Icons.PythonIcon size_min={16} size_standard={32}></Icons.PythonIcon>
      </div>
    </div>
  </div>
);


{/** @todo: fix whole **/ }
function Projects() {
  return (
    <section id='sect_x_projects' className='px-4 mb-12 sm:p-0 sm:px-4 md:px-8'> {/** @todo: padding/margin size**/}
      <h2 className='pb-6 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
        <span className="text-green-700" id="colored-text">Pro</span>
        jektek
      </h2>
      <div className='grid grid-cols-8 sm:grid-cols-1'>

        <div className='grid col-span-6 sm:col-start-1 col-start-2 gap-4 sm:gap-2 md:gap-4 lg:gap-6 sm:auto-cols-fr sm:grid-flow-col'>
          {/** @todo: **/}
          <div className='flex flex-col space-y-2 p-2 pb-4 rounded-xl border-2 sm:border-none border-green-900 sm:bg-stone-800 shadow-xl shadow-black/30 sm:p-6 md:p-4 lg:p-4' id="colored-border">

            <div className='grid grid-cols-6'>
              <div className='grid col-start-2 col-span-4 justify-center'>
                <h3 className='text-md text-center mb-2 font-extrabold tracking-tight text-stone-200 sm:text-lg'>Adatgyűjtés</h3>
              </div>

              <div className='grid mt-0 sm:mr-0 col-start-6 self-start place-self-end border-none border-green-900'>
                <GithubIcon size_min={24} size_standard={24} link="https://github.com/CsabaAndi/data-collecting"></GithubIcon>
              </div>
            </div>

            {/** @todo: whole block shenanigans */}
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
              <div className='grid grid-cols-2 col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                  justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                  shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10'>
                <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Python</h3>
                <div className='border-none border-green-900 bg-stone-800'>
                  <Icons.PythonIcon size_min={16} size_standard={32}></Icons.PythonIcon>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
              <div className='grid grid-cols-2 col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                  justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                  shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10 mb-2'>
                <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Playwright</h3>
                <div className='border-none border-green-900 bg-stone-800'>
                  <Icons.PlayWrightIcon size_min={16} size_standard={32}></Icons.PlayWrightIcon>
                </div>
              </div>
            </div>

            <div className="grid h-full justify-center content-end overflow-hidden border-none border-green-900 bg-none rounded-xl">
              <div className='row-span-5 text-md text-left tracking-tight text-stone-200 sm:text-lg sm:px-2 sm:py-4 '> {/** @todo: word break: break-all for now **/}
                <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 px-2 sm:text-lg' >Adatgyűjtés szakdolgozathoz</h3>
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-2 p-2 pb-4 rounded-xl border-2 sm:border-none border-green-900 sm:bg-stone-800 shadow-xl shadow-black/30 sm:p-6 md:p-4 lg:p-4' id="colored-border">

            <div className='grid grid-cols-6'>
              <div className='grid col-start-2 col-span-4 justify-center'>
                <h3 className='text-md text-center mb-2 font-extrabold tracking-tight text-stone-200 sm:text-lg'>Portfólió weboldal</h3>
              </div>

              <div className='grid col-start-6 self-start place-self-end border-none border-green-900'>
                <GithubIcon size_min={24} size_standard={24} link="https://github.com/CsabaAndi/csabaandi.github.io"></GithubIcon>`
              </div>
            </div>


            {/** @todo: whole block shenanigans */}
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
              <div className='grid grid-cols-2 col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                  justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                  shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10'>
                <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>React</h3>
                <div className='border-none border-green-900 bg-stone-800'>
                  <Icons.ReactIcon size_min={16} size_standard={32}></Icons.ReactIcon>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
              <div className='grid grid-cols-2 col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                  justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                  shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10'>
                <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Tailwindcss</h3>
                <div className='border-none border-green-900 bg-stone-800'>
                  <Icons.TailwindIcon size_min={16} size_standard={32}></Icons.TailwindIcon>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
              <div className='grid grid-cols-2 col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                  justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                  shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10 mb-2'>
                <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Docker</h3>
                <div className='border-none border-green-900 bg-stone-800'>
                  <Icons.DockerIcon size_min={16} size_standard={32}></Icons.DockerIcon>
                </div>
              </div>
            </div>

            <div className="grid h-full justify-center content-end overflow-hidden border-none border-green-900 bg-none rounded-xl">
              <div className='row-span-5 text-md text-left tracking-tight text-stone-200 sm:text-lg sm:px-2 sm:py-4'> {/** @todo: word break: break-all for now **/}
                <h3 className='text-md break-normal text-center font-extrabold tracking-tight text-stone-200 px-2 sm:text-lg' >Reszponzív portfólió weboldal</h3>
              </div>
            </div>
          </div>

          <div className='flex flex-col space-y-2 p-2 pb-4 rounded-xl border-2 sm:border-none border-green-900 sm:bg-stone-800 shadow-xl shadow-black/30 sm:p-6 md:p-4 lg:p-4' id="colored-border">

            <div className='grid grid-cols-6'>
              <div className='grid col-start-2 col-span-4 justify-center'>
                <h3 className='text-md text-center mb-2 font-extrabold tracking-tight text-stone-200 sm:text-lg'>Kriptovaluta árfolyam figyelő alkalmazás</h3>
              </div>

              <div className='grid mt-0 sm:mr-0 col-start-6 self-start place-self-end border-none border-green-900'>
                <GithubIcon size_min={24} size_standard={24} link="https://github.com/CsabaAndi/Webkert_2024"></GithubIcon>
              </div>
            </div>

            {/** @todo: whole block shenanigans */}
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
              <div className='grid grid-cols-2 col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                  justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                  shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10'>
                <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Angular</h3>
                <div className='border-none border-green-900 bg-stone-800'>
                  <Icons.AngularIcon size_min={16} size_standard={32}></Icons.AngularIcon>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10'>
              <div className='grid grid-cols-2 col-span-2 col-start-2 sm:col-start-1 sm:col-span-6 md:col-start-1 md:col-span-8 lg:col-start-2 lg:col-span-8 
                                  justify-items-start items-center rounded-xl border-none border-green-900 bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                                  shadow-xl shadow-black/30 sm:p-6 gap-10  sm:gap-10 mb-2'>
                <h3 className='text-xs text-center font-extrabold tracking-tight text-stone-200 lg:text-md border-none border-green-900 bg-stone-800'>Firebase</h3>
                <div className='border-none border-green-900 bg-stone-800'>
                  <DCIcons.FirebaseIcon size_min={16} size_standard={32}></DCIcons.FirebaseIcon>
                </div>
              </div>
            </div>

            <div className="grid h-full justify-center content-end overflow-hidden border-none border-green-900 bg-none rounded-xl">
              <div className='row-span-5 text-md text-left tracking-tight text-stone-200 sm:text-lg sm:px-2 sm:py-4 '> {/** @todo: word break: break-all for now **/}
                <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 px-2 sm:text-lg' >Webfeljlesztési keretrendszerek projektmunka</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects