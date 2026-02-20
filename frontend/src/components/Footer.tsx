import { EmailIcon, GithubIcon, LinkedinIcon } from "./Icons/SocialIcons"


// border border-stone-900 base
// border border-sky-600 testing
// border-t dunno

function Footer() {
  return (
    <footer className='flex flex-col w-full items-center justify-between gap-y-2 bg-stone-800 py-2 sm:p-4 sm:flex-row'>
      <p id="footer_p_copyright" className='text-sm font-semibold text-stone-300'>© 2024 Andi Csaba</p>
      <div id="footer_icons" className='flex gap-x-2 sm:gap-x-4 text-stone-200'>
        <GithubIcon size_min={20} size_standard={20} link="https://github.com/CsabaAndi"></GithubIcon>
        <LinkedinIcon size_min={20} size_standard={20}></LinkedinIcon>
        {/** @todo: better implementation pls **/}
      </div>
    </footer>
  )
}

export default Footer
