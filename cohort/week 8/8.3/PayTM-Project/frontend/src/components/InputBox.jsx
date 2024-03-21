
import propTypes from 'prop-types'
export default function InputBox({ type, placeholder, label}) {
   
    return (
      <div>
        <div className='text-sm font-medium text-left py-2'>
            {label}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
    );
}

InputBox.propTypes = {
    type: propTypes.string,
    placeholder: propTypes.string,
    label: propTypes.string
}