import React from 'react'

const initialState = {
    team: [
        { id: '3023', name: 'Omprakash Jat', course: 'Full Stack Developer', contact: '9913138325', fees: 'Paid' },
        { id: '3245', name: 'Sajjan Kumavat', course: 'Flutter', contact: '7990069889', fees: 'Paid' },
        { id: '3011', name: 'Vikas Borse', course: 'Full Stack Developer', contact: '7567252434', fees: 'Pending' },
        { id: '2692', name: 'Jay Nandarbarwala', course: 'Front-End Developer', contact: '8866406360', fees: 'Paid' },
        { id: '2994', name: 'Kashyap Chauhan', course: 'Full Stack Developer', contact: '6356730885', fees: 'Paid' },
        { id: '2787', name: 'Nilay', course: 'Animation', contact: '6359012188', fees: 'Paid' },
        { id: '2956', name: 'Priyanshu Mishra', course: 'Full Stack Developer', contact: '6386058989', fees: 'Pending' },
    ],
    filteredTeam: [],
    sortOrder: 'asc'
};

const reducer = (state = initialState, action) => {
    if (action.type === 'filter') {
        return {
            ...state, filteredTeam: state.team.filter(item => item.name.toLocaleLowerCase().includes(action.payload.toLowerCase()))
        }
    }
    if (action.type === 'sortTeam') {
        const sortedTeam = [...state.filteredTeam].sort((a, b) => {
            if (action.payload === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        return {
            ...state, filteredTeam: sortedTeam, sortOrder: action.payload
        };
    }
    if (action.type === 'filterByFees') {
        // const feeType = action.payload;
        // const Team = state.team.some((item) => {
        //     if (feeType === 'All') {
        //         return true;
        //     } else {
        //         let x;
        //         if (item.fees === feeType) {
        //             x = item
        //         }
        //         console.log(x)
        //         // return item.fees === feeType;
        //     }
        // });
        let x = state.team.filter((item) => {
            return action.payload === 'All' ? true : action.payload === item.fees;
        })
        return {
            ...state, filteredTeam: x
        }

    }
    return state;
}

export default reducer
