// Hero portrait in a gold arched frame. Source: public/couple.jpg
export default function CouplePortrait() {
  return (
    <div className="portrait">
      <svg className="sprig l" viewBox="0 0 60 60" aria-hidden="true">
        <ellipse cx="30" cy="48" rx="6" ry="12" transform="rotate(-35 30 48)" fill="#b9c6a0" />
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse key={a} cx="24" cy="16" rx="5" ry="8" transform={`rotate(${a} 24 24)`} fill="#f4cfd3" stroke="#c9a45c" strokeWidth=".6" />
        ))}
        <circle cx="24" cy="24" r="3" fill="#e3bf6c" />
      </svg>
      <svg className="sprig r" viewBox="0 0 60 60" aria-hidden="true">
        <ellipse cx="30" cy="48" rx="6" ry="12" transform="rotate(-35 30 48)" fill="#b9c6a0" />
        {[0, 72, 144, 216, 288].map((a) => (
          <ellipse key={a} cx="24" cy="16" rx="5" ry="8" transform={`rotate(${a} 24 24)`} fill="#f7e3b0" stroke="#c9a45c" strokeWidth=".6" />
        ))}
        <circle cx="24" cy="24" r="3" fill="#e3bf6c" />
      </svg>
      <div className="portrait-img">
        <img src="/couple.jpg" alt="Aarav and Siya" decoding="async" />
        <span aria-hidden="true" />
      </div>
    </div>
  )
}
