

function CheckDate(dateFrom, dateTo, reservedFrom, reservedTo) {

    try {
        if (reservedFrom && reservedTo) {
            if (dateFrom > reservedFrom.getTime() && dateFrom < reservedTo.getTime()) {
                return false;
            } else if (dateTo > reservedFrom.getTime() && dateTo < reservedTo.getTime()) {
                return false;
            } else if (dateFrom > reservedFrom.getTime() && dateTo < reservedTo.getTime()) {
                return false;
            }
        } else if (reservedFrom) {
            if (reservedFrom.getTime() < dateTo) {
                return false;
            }
        } else if (reservedTo) {
            if (reservedTo.getTime() > dateFrom) {
                return false;
            }
        } else {
            return true;
        }
    } catch {
        console.error('Date error: ', dateFrom, dateTo, reservedFrom, reservedTo)
    }
}


export default CheckDate;