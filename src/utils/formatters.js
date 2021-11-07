const dateFormatter = (date) => {
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let newDate = new Date(date);
    let formattedDate = monthNames[newDate.getMonth()] + ' ' + newDate.getDate() + ', ' + newDate.getFullYear() + ', ' + newDate.getHours() + ':' + newDate.getMinutes();
    return formattedDate;
}

const amountFormatter = (amount) => {
    return parseFloat(amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

const returnTotal = (transactions, symbol) => {
    const total = transactions.reduce((acc, curr) => {
        if (curr.currency === symbol) {
            return parseFloat(acc) + parseFloat(curr.amount)
        } else {
            return acc
        }
    }, 0)
    return amountFormatter(total)
}

export {
    dateFormatter,
    amountFormatter,
    returnTotal
}
