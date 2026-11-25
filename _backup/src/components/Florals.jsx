// Reusable SVG decorations: lotus, corner flourish, divider.

export function Lotus({ className = '', size = 80 }) {
  const petal = (rot, fill, op = 1) => (
    <path
      d="M50 80 C30 60 30 30 50 10 C70 30 70 60 50 80Z"
      fill={fill}
      opacity={op}
      stroke="#c9a45c"
      strokeWidth="1"
      transform={`rotate(${rot} 50 80)`}
    />
  )
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      {petal(-70, '#f4cfd3', 0.8)}
      {petal(70, '#f4cfd3', 0.8)}
      {petal(-38, '#efb8c0', 0.9)}
      {petal(38, '#efb8c0', 0.9)}
      {petal(0, '#f7d9dc')}
      <circle cx="50" cy="82" r="4" fill="#c9a45c" />
    </svg>
  )
}

export function Corner({ className = '' }) {
  return (
    <svg className={`corner ${className}`} viewBox="0 0 160 160" aria-hidden="true">
      <g fill="none" stroke="#c9a45c" strokeWidth="1.2" strokeLinecap="round">
        <path d="M6 154 C6 70 70 6 154 6" />
        <path d="M18 154 C18 82 82 18 154 18" opacity=".5" />
        <path d="M30 60 C45 60 55 50 55 35 C40 35 30 45 30 60Z" fill="#f4cfd3" />
        <path d="M60 30 C75 30 85 20 85 6 C70 6 60 16 60 30Z" fill="#f7e3b0" />
        <path d="M14 100 C28 100 38 90 38 76 C24 76 14 86 14 100Z" fill="#f7e3b0" />
      </g>
      <circle cx="42" cy="42" r="6" fill="#efb8c0" stroke="#c9a45c" />
      <circle cx="42" cy="42" r="2" fill="#c9a45c" />
      <circle cx="80" cy="14" r="3.5" fill="#efb8c0" stroke="#c9a45c" />
      <circle cx="14" cy="80" r="3.5" fill="#efb8c0" stroke="#c9a45c" />
    </svg>
  )
}

export function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span />
      <svg width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 2 L18 14 L14 26 L10 14Z M2 14 L14 10 L26 14 L14 18Z" fill="#c9a45c" opacity=".85" />
      </svg>
      <span />
    </div>
  )
}

function Blossom({ x, y, s = 1, rot = 0, fill = '#f4cfd3' }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="0" cy="-7" rx="4.6" ry="7.5" fill={fill} stroke="#c9a45c" strokeWidth=".6" transform={`rotate(${a})`} />
      ))}
      <circle r="2.6" fill="#e3bf6c" />
    </g>
  )
}

function Leaf({ x, y, rot, s = 1 }) {
  return <ellipse cx={x} cy={y} rx="3.2" ry="9" transform={`rotate(${rot} ${x} ${y}) scale(${s})`} style={{ transformOrigin: `${x}px ${y}px` }} fill="#b9c6a0" stroke="#c9a45c" strokeWidth=".5" opacity=".9" />
}

// Gold double-line arch with a flower garland; children render inside (couple slot).
export function FloralArch({ children }) {
  const cx = 150
  const cy = 150
  const r = 128
  const items = []
  for (let i = 0; i <= 10; i++) {
    const a = Math.PI + (i / 10) * Math.PI
    const x = cx + r * Math.cos(a)
    const y = cy + r * Math.sin(a)
    const deg = (a * 180) / Math.PI + 90
    items.push(
      <Leaf key={`l${i}`} x={x + 7 * Math.cos(a)} y={y + 7 * Math.sin(a)} rot={deg + (i % 2 ? 30 : -30)} />,
      <Blossom key={`b${i}`} x={x} y={y} rot={i * 25} s={i % 3 === 0 ? 1.25 : 0.9} fill={i % 3 === 1 ? '#f7e3b0' : i % 2 ? '#efb8c0' : '#f4cfd3'} />,
    )
  }
  for (let j = 0; j < 4; j++) {
    const y = 175 + j * 38
    items.push(
      <Blossom key={`sl${j}`} x={22} y={y} rot={j * 40} s={0.75} fill={j % 2 ? '#f7e3b0' : '#f4cfd3'} />,
      <Blossom key={`sr${j}`} x={278} y={y} rot={j * 55} s={0.75} fill={j % 2 ? '#f4cfd3' : '#f7e3b0'} />,
      <Leaf key={`ll${j}`} x={14} y={y + 16} rot={-20} s={0.8} />,
      <Leaf key={`lr${j}`} x={286} y={y + 16} rot={20} s={0.8} />,
    )
  }
  return (
    <div className="arch">
      <svg className="arch-svg" viewBox="0 0 300 360" aria-hidden="true">
        <defs>
          <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff9ee" />
            <stop offset="1" stopColor="#f9e4e6" />
          </linearGradient>
        </defs>
        <path d="M30 360 V150 A120 120 0 0 1 270 150 V360Z" fill="url(#archFill)" />
        <path d="M14 360 V150 A136 136 0 0 1 286 150 V360" fill="none" stroke="#c9a45c" strokeWidth="1.6" />
        <path d="M30 360 V150 A120 120 0 0 1 270 150 V360" fill="none" stroke="#c9a45c" strokeWidth=".8" opacity=".7" />
        <g className="sway">{items}</g>
      </svg>
      <div className="arch-inner">{children}</div>
    </div>
  )
}

export function FallingPetals({ count = 7 }) {
  return (
    <div className="petals" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <i
          key={i}
          style={{
            left: `${(i * 83) % 100}%`,
            animationDelay: `${(i * 1.7) % 12}s`,
            animationDuration: `${12 + (i % 5) * 2}s`,
          }}
        />
      ))}
    </div>
  )
}
