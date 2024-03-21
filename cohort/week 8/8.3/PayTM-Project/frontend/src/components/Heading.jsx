import propTypes from 'prop-types';
export function Heading({lable}){
    return (
        <div className="font-bold text-4xl pt-6">
            {lable}
        </div>
    )
}

Heading.propTypes = {
    lable: propTypes.string
}