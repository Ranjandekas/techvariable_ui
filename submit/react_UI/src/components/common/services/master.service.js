


export const masterService = {
    getList
};



function getList(){
    const requestOptions = {
        method: 'GET'
    }; 
    return fetch(`http://localhost:9000/task`, requestOptions).then(handleResponse);
}




function handleResponse(response) {
    return response.text().then(text => {
        try{
            var data = text && JSON.parse(text);
        }
        catch{
            var textdata = text;
            var data = {};
            data.statusMessage = textdata;
        }
        if (!response.ok) {
            if (response.status === 401) {
                
            }
            const error = (data && data.statusMessage)  || (data && data.notification) || (data && data.message) || (data && data.details) || response.statusText;
            return Promise.reject(error);
        }
        else if(response.status === 204){
            return Promise.reject('NO RECORDS FOUND!!');
        }

        return data;
    });
}