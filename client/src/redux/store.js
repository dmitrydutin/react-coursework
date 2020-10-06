import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import { themeReducer } from './themeReducer'
import { localeReducer } from './localeReducer'
import { authReducer } from './authReducer'
import { appReducer } from './appReducer'
import { adminReducer } from './adminReducer'
import { profileReducer } from './profileReducer'
import { companyReducer } from './companyReducer'
import { homeReducer } from './homeReducer'
import { createCompanyReducer } from './createCompanyReducer'
import { createBonusReducer } from './createBonusReducer'

const reducers = combineReducers({
    form: formReducer,
    theme: themeReducer,
    locale: localeReducer,
    auth: authReducer,
    app: appReducer,
    admin: adminReducer,
    profile: profileReducer,
    company: companyReducer,
    home: homeReducer,
    createCompany: createCompanyReducer,
    createBonus: createBonusReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
