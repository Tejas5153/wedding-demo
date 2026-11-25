// Thin gold line icons for the event cards.
const paths = {
  ring: (
    <>
      <circle cx="12" cy="15" r="6" />
      <path d="M9 6.5 12 3l3 3.5-3 2.5z" />
    </>
  ),
  haldi: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse key={a} cx="12" cy="6" rx="2.2" ry="3.6" transform={`rotate(${a} 12 12)`} />
      ))}
    </>
  ),
  music: (
    <>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </>
  ),
  diya: (
    <>
      <path d="M3 13h18c0 4-3.5 7-9 7s-9-3-9-7z" />
      <path d="M12 12c-2.5-2-2.5-5 0-8 2.5 3 2.5 6 0 8z" />
    </>
  ),
  glass: (
    <>
      <path d="M7 3h10l-1 7a4 4 0 0 1-8 0z" />
      <path d="M12 14v7M8 21h8" />
    </>
  ),
}

export default function EventIcon({ name }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9c7a34" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
