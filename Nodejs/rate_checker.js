const doesRateMatch = (user_set_rate, forex_rate) => {
    //console.log('check ', user_set_rate, '  ', forex_rate)
    return parseFloat(user_set_rate) === parseFloat(forex_rate);
}

exports.doesRateMatch = doesRateMatch