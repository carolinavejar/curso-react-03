import PropTypes from 'prop-types'


export const FirstApp = ( { title, subTitle } )=> { 

    if (!title)
    return (
    <>
        <h1>Primera aplicación</h1>
        <h2> { title } </h2>
        <h3> { subTitle + 1 } </h3>
        
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
        <p>Vejar</p>
    </>);
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}