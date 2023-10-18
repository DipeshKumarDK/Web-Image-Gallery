export const changeCurrSearch = (_curr) => {
    return{
        type:"CURR",
        curr:_curr
    }
}

export const changeMode = (_mode) => {
    return{
        type:"MODE",
        mode:_mode
    }
}
