const mapCallHistoryData = data => {
    const newData = [];

    data.forEach(element => {
        if (!newData.length) {
            newData.push({...element, calledArr: [element.called]});
        } else {
            const foundIndex = newData.findIndex(x => x.phoneNumber === element.phoneNumber);

            if (newData.find(x => x.phoneNumber === element.phoneNumber)) {
                newData[foundIndex].calledArr = [...newData[foundIndex].calledArr, element.called];
                
            } else {
                newData.push({...element, calledArr: [element.called]});
            }
        }
    });

    return newData;
};

export default mapCallHistoryData;