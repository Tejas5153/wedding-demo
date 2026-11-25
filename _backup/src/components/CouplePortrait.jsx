// Hero portrait in a gold arched frame. Source: public/couple.jpg
export default function CouplePortrait() {
  return (
    <div className="portrait">
      <div className="portrait-img">
        <img src="/couple.jpg" alt="Nikhil and Harshada" decoding="async" />
        <span aria-hidden="true" />
      </div>
    </div>
  )
}
