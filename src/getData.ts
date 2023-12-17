export const getImages= async () => {
        const response = await fetch(`https://template-nodejs-dev-nzct.3.us-1.fl0.io/list`);
        const data = await response.json();
        return data;
}