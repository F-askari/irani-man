export default function Logo({ light = false, small = false }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${light ? 'text-white' : 'text-teal'}`}>
      <span className={`font-nastaliq font-bold ${small ? 'text-xl' : 'text-2xl md:text-[27px]'}`}>
        مردِ ایرانی
      </span>
      <span className="w-1.5 h-1.5 rotate-45 bg-gold mt-2" aria-hidden="true" />
    </span>
  )
}
