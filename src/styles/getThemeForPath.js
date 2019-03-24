import routeThemes from './routeThemes';

export default (pathname) => {
    console.log('passed pathname: ' + pathname)
    if (!pathname) {
        return routeThemes.default;
    }
    const re = /(.+)\/$/;
    const sanitizedPath = pathname.replace(re, '$1');

    console.log('sanitized path: ' + sanitizedPath)
    
    if (Object.prototype.hasOwnProperty.call(routeThemes, sanitizedPath)) {
        return routeThemes[sanitizedPath]
    }
}