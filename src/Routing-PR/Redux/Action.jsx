export const filter = (value) => {
    return {
        type: 'filter',
        payload: value
    }
}

export const sortTeam = (order) => {
    return {
        type: 'sortTeam',
        payload: order
    };
};

export const filterByFees = (feeType) => {
    return {
        type: 'filterByFees',
        payload: feeType
    };
};