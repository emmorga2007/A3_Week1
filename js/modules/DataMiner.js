async function fetchData(datasource) {
    let resource = await fetch(datasource).then(response => {
        // !== is a bang operator means "does not equal"
        if (response.status !==200){
            throw new Error(`Didn't work, Error ${response.status}`);
            //${response.status} will put in the error code, ex 404.  
        }
        return response;
        //this kills the fetching, tells client there was an error
    })
    

     // if we get success, then we can retunr back our resource after we parse it into plain js
    let dataset = await resource.json();

    return dataset;
}

export { fetchData };
