export function getUserName(state) {
    return state.profile.name
}

export function getNameVisible(state) {
    return state.profile.visible
}

export const selectAuth = (state) => state.profile.isAuth;