const getAppModes = async () => {
    return await fetch('https://demo1030918.mockable.io/')
        .then(res => res.json())
        .catch(error => console.log(error));
};

export default getAppModes;