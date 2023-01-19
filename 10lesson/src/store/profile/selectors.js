export function getUserName(state) {
    return state.profile.name
}

export function getNameVisible(state) {
    return state.profile.visible
}

export function getAuth(state) {
    return state.profile.isAuth
}