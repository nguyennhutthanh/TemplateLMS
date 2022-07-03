export const getParsedDate = (strDate) => {
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    // alert(date);
    var dd = date.getDate();
    var mm = date.getMonth() + 1;

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date = dd + "-" + mm + "-" + yyyy;
    return date.toString();
}

export const formatNumber = (number) => {
    var numString = number.toString()
    var result = ''
    while (numString.length > 3) {
        var chunk = numString.substr(-3)
        numString = numString.substr(0, numString.length - 3)
        result = ',' + chunk + result
    }

    if (numString.length > 0) {
        result = numString + result
    }

    return result
}