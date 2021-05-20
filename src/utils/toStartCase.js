const toStartCase = (string) => {
    const withSpace = string.replace( /([A-Z])/g, " $1" );
    return withSpace.charAt(0).toUpperCase() + withSpace.slice(1);
}

export default toStartCase;