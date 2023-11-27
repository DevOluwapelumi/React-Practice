
const Button = ({ title, color, onClick }) => {
  return (
    <div>

<button
      className={`${color} p-5 rounded-md shadow-md rounded-md text-white`}
      onClick={onClick}>
      {title}
    </button>
    </div>
  )
}

export default Button;