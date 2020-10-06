import { createBonusAPI } from '../api/api'

const SET_COMPANIES_ID = '/createBonus/SET_COMPANIES_ID'
const TOGGLE_IS_FETCHING = '/createBonus/TOGGLE_IS_FETCHING'
const TOGGLE_STATUS = '/createBonus/TOGGLE_STATUS'

const initialState = {
    companiesId: [],
    isFetching: false,
    statusCode: 0,
}

export const createBonusReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPANIES_ID:
            return {
                ...state,
                companiesId: [...action.companiesId],
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_STATUS:
            return {
                ...state,
                statusCode: action.statusCode,
            }
        default:
            return state
    }
}

const setCompaniesId = (companiesId) => ({ type: SET_COMPANIES_ID, companiesId })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
const setStatusCode = (statusCode) => ({ type: TOGGLE_STATUS, statusCode })

export const getCompaniesId = (userId) => async (dispatch) => {
    const response = await createBonusAPI.getCompaniesId(userId)

    if (response.data.statusCode === 200) {
        dispatch(setCompaniesId(response.data.data))
    }
}

export const createBonus = ({ title, amount, description, companyId }) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const response = await createBonusAPI.createBonus(title, amount, description, companyId)

    dispatch(toggleIsFetching(false))

    if (response.data.statusCode === 200) {
        dispatch(setStatusCode(200))
    } else {
        dispatch(setStatusCode(204))
    }
}

export const toggleStatus = () => (dispatch) => {
    dispatch(setStatusCode(0))
}
