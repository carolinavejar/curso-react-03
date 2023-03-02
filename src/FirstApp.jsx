import PropTypes from 'prop-types'


export const FirstApp = ( { 
    title, 
    subTitle,
    nameUser
} )=> { 

    return (
    <>
        <h1>Primera aplicación</h1>
        <h2> { title } </h2>
        <h3> { subTitle} </h3>
        <h3> { nameUser } </h3>
        
        {/* <code>{ JSON.stringify(newMessage) }</code> */}
    </>);
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: "Sin título",
    subTitle: "Sin subtítulo",
    nameUser: "Carito"
}