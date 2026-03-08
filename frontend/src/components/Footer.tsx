import { GithubIcon, LinkedinIcon } from "./Icons/SocialIcons"

function Footer() {
  return (
    <footer className='flex flex-col w-full items-center justify-between gap-y-2 bg-stone-800 py-2 sm:p-4 sm:flex-row'>
      <p className='text-sm font-semibold text-stone-300'>© 2026 Andi Csaba</p>
      <div className='flex gap-x-2 sm:gap-x-4 text-stone-200'>
        <GithubIcon size_min={20} size_standard={20} link="https://github.com/CsabaAndi" />
        <LinkedinIcon size_min={20} size_standard={20} />
      </div>
    </footer>
  )
}

export default Footer