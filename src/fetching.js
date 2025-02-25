export function fetchData() {
    return Promise.all([
        fetch('https://picsum.photos/1920/1080')
        .then(response => response.blob())
        .then(blob => URL.createObjectURL(blob)),
        fetch('https://api.api-ninjas.com/v1/quotes', {
            headers: {
                'X-api-Key': 'nFXz1/O7QOM2YRSBVwC3Sg==zMRtdzWc6TVictVY'
            }
        }).then(response => response.json())
    ]).then(data => ({imgUrl: data[0], quoteData: data[1]}));
}