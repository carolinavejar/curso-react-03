import PropTypes from 'prop-types'


export const CounterApp = ( { 
    value
} )=> { 

    return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>
        
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
    </>);
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
