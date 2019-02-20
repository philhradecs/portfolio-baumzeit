import routeThemes from './routeThemes';

export default (pathname) => {
    if (!pathname) {
        return routeThemes.default;
    }
    const re = /.+\/$/;
    const sanitizedPath = pathname.replace(re, '');
    
    if (Object.prototype.hasOwnProperty.call(routeThemes, sanitizedPath)) {
        return routeThemes[sanitizedPath]
    }
    
    return undefined;
}