import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading('loading...')
        setData(null);
        setError(null);

        fetch(url)
            .then((res) => {
                setLoading(false);
                return res.json();
            })
            .then((data) => {
                //console.log(data);
                setData(data);
            })
            .catch(err => {
                console.error(err);
                setLoading(false)
                setError('An error occurred. Awkward..')
        });
    }, [url])

    return {data, loading, error}
}

export default useFetch;