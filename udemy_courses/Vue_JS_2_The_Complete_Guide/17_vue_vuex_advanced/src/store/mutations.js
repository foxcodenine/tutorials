const updateRedValue = (state, amount) => {
    state.redValue = amount;
}

const updateBlueValue = (state, amount) => {
    state.blueValue = amount;
}

export default {
    updateBlueValue, 
    updateRedValue
}