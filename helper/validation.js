export const validation = (data) =>  {
    const error = {};

    if(!data.number) {
        error.number = "لطفا شماره همراه را وارد نماید"
    } else if(!/^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|9[0-4]|98)\d{7}$/gm.test(data.number)) {
        error.number = "فرمت وارد شده صحیح نمی‌باشد";
    }else {
        delete error.number;
    }
    return error;
    
}