//requires YYYY-MM-DD string as input
export function FormatDate(dateStr, monthFormat='numeric', dayFormat='numeric', yearFormat='numeric', includeMonth=true, includeDay=true, includeYear=true) {
    if (!dateStr) {
        console.error('Invalid date string provided to FormatStartDate');
        return;
    }
    
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    const options = {};
    
    if (includeYear) {
        options.year = yearFormat;
    }
    if (includeMonth) {
        options.month = monthFormat;
    }
    if (includeDay) {
        options.day = dayFormat;
    }
    
    return date.toLocaleDateString('en-US', options);
}