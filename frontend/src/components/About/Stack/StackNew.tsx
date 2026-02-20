import * as Icons from "../../Icons/ProjectIcons"
import * as HardWareIcons from "../../Icons/HardwareIcon"
import * as DCIcons from "../../Icons/DataCloudIcons"


const StackBackFront: React.FC<{ name: string}> = ({ name}) => (
    <div className='p-2'>
    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{name}</h3> {/* Python Java JavaScript / TypeScript */}
    <div className='mt-4 grid grid-rows-1 justify-center border-none'>
        <div className='flex flex-wrap gap-4 md:gap-8 lg:gap-9
                        rounded-xl border-none  bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                        shadow-xl shadow-black/30'>

            <div className='border-none  bg-stone-800'>
                <Icons.PythonIcon size_min={16} size_standard={32}></Icons.PythonIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.JavaScriptIcon size_min={16} size_standard={32}></Icons.JavaScriptIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.TypeScriptIcon size_min={16} size_standard={32}></Icons.TypeScriptIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.JavaIcon size_min={16} size_standard={32}></Icons.JavaIcon>
            </div>

            <div className='border-none  bg-stone-800'>
                <Icons.ReactIcon size_min={16} size_standard={32}></Icons.ReactIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.TailwindIcon size_min={16} size_standard={32}></Icons.TailwindIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.AngularIcon size_min={16} size_standard={32}></Icons.AngularIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <Icons.NodeJsIcon size_min={16} size_standard={32}></Icons.NodeJsIcon>
            </div>
            
        </div>
    </div>
</div>
)


const StackDataCloud: React.FC<{ name: string}> = ({ name}) => (
    <div className='p-2'>
    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{name}</h3> {/* Python Java JavaScript / TypeScript */}
    <div className='mt-4 grid grid-rows-1 justify-center border-none'>
        <div className='flex flex-wrap gap-4 md:gap-8 lg:gap-9
                        rounded-xl border-none  bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                        shadow-xl shadow-black/30'>

            <div className='border-none  bg-stone-800'>
                <DCIcons.PostgreSQLIcon size_min={16} size_standard={32}></DCIcons.PostgreSQLIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <DCIcons.SQLIcon size_min={16} size_standard={32}></DCIcons.SQLIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <DCIcons.FirebaseIcon size_min={16} size_standard={32}></DCIcons.FirebaseIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <DCIcons.AWSIcon size_min={16} size_standard={32}></DCIcons.AWSIcon>
            </div>
            
        </div>
    </div>
</div>
)


const StackPrivacy: React.FC<{ name: string}> = ({ name}) => (
    <div className='p-2'>
    <h3 className='text-md text-center font-extrabold tracking-tight text-stone-200 sm:text-lg'>{name}</h3> {/* Python Java JavaScript / TypeScript */}
    <div className='mt-4 grid grid-rows-1 justify-center border-none'>
        <div className='flex flex-wrap gap-4 md:gap-8 lg:gap-9
                        rounded-xl border-none  bg-stone-800 bg-stone-800 px-1 py-2 sm:px-2 sm:py-4 
                        shadow-xl shadow-black/30'>

            <div className='border-none  bg-stone-800'>
                <HardWareIcons.LinuxIcon size_min={16} size_standard={32}></HardWareIcons.LinuxIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <HardWareIcons.WinIcon size_min={16} size_standard={32}></HardWareIcons.WinIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <HardWareIcons.AndroidIcon size_min={16} size_standard={32}></HardWareIcons.AndroidIcon>
            </div>
            <div className='border-none  bg-stone-800'>
                <HardWareIcons.TwoFactor size_min={16} size_standard={32}></HardWareIcons.TwoFactor>
            </div>
            {/** @todo: */}
            
        </div>
    </div>
</div>
)


function StackNew() {
    return (
        <section id='sect_3_stacknew' className='px-4 mb-0 sm:p-0 sm:px-4 md:px-8'> {/** @todo: padding/margin size**/}
            <h2 className='mb-0 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className='text-green-700' id="colored-text">Szak</span>
                mai ismeretek
            </h2>

            <div className='grid'>
                <div className='space-y-2 rounded-xl border-none px-2 py-4 sm:p-6'> {/** @todo: padding size**/}
                    <StackBackFront name="Backend & Frontend"></StackBackFront>
                    <StackDataCloud name="Database & Cloud"></StackDataCloud>
                    <StackPrivacy name="Operating systems & Privacy"></StackPrivacy>
                </div>
            </div>
        </section>
    )
}
    
    
export default StackNew