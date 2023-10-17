const toPersianNumerals = (number) => {
    const persianNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (match) => persianNumerals[match]);
  };

  export {toPersianNumerals}