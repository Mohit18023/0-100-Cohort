import propTypes from 'prop-types';
export default function SubHeading({lable}) {
  return (
    <div className="text-md text-slate-500 pt-1 px-4 pb-4">
      {lable}
    </div>
  )
}

SubHeading.propTypes = {
  lable: propTypes.string
}