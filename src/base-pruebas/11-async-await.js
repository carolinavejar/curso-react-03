export const getImagen = async() => {

    try {

        const apiKey = 'yoBdwcXQMuQ2QLV02Rg9uQcnv1a3WKGT';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

    } catch (error) {
        console.error(error);
        return 'No se encontró la imagen'
    }     
}


