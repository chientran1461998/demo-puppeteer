module.exports = {
    sleep: function(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    getTodaysDateShort: function() {
        let date = new Date();
        let shortDay = date.toLocaleString('en-au', { day: '2-digit', timeZone: 'Australia/Sydney' }),
            shortMonth = date.toLocaleString('en-au', { month: 'short', timeZone: 'Australia/Sydney' }),
            shortYear = date.toLocaleString('en-au', { year: 'numeric', timeZone: 'Australia/Sydney' });
        return [shortDay, shortMonth, shortYear]
    },
    getTodaysDateShortString: function() {
        let date = new Date();
        let shortDay = date.toLocaleString('en-au', { day: '2-digit', timeZone: 'Australia/Sydney' }),
            shortMonth = date.toLocaleString('en-au', { month: 'short', timeZone: 'Australia/Sydney' }),
            shortYear = date.toLocaleString('en-au', { year: 'numeric', timeZone: 'Australia/Sydney' });
        return (shortDay + " " + shortMonth + " " + shortYear);
    },
    getTodaysDateShortNumeric: function() {
        let date = new Date();
        let shortDay = date.toLocaleString('en-au', { day: 'numeric', timeZone: 'Australia/Sydney' }),
            shortMonth = date.toLocaleString('en-au', { month: 'numeric', timeZone: 'Australia/Sydney' }),
            shortYear = date.toLocaleString('en-au', { year: 'numeric', timeZone: 'Australia/Sydney' });
        return [shortDay, shortMonth, shortYear]
    },
    getTodaysDateLongNumeric: function() {
        let date = new Date();
        let numericDay = date.toLocaleString('en-au', { day: 'numeric', timeZone: 'Australia/Sydney' }),
            longMonth = date.toLocaleString('en-au', { month: 'long', timeZone: 'Australia/Sydney' }),
            numericYear = date.toLocaleString('en-au', { year: 'numeric', timeZone: 'Australia/Sydney' });
        return [numericDay, longMonth, numericYear]
    },
}