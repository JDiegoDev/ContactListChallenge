const dateDaysAgo = time => {
    const todayDate = new Date();
    const date = new Date(time * 1000);
    const difference = todayDate.getTime() - date.getTime();
    const dateDiff = Math.ceil(difference / (1000 * 3600 * 24));

    return dateDiff;
};

const fullDay = time => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    return `${date} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
};

export { dateDaysAgo, fullDay };