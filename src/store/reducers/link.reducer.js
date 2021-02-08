let initialState = []

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LoadLinkSuccess':
            let success = [{
                type: 'link',
                link: action.payload.link,
                logoLink: action.payload.logoLink,
                name: action.payload.name
            }, ...state]
            localStorage.setItem('linkList', JSON.stringify(success))
            return success
        case 'LoadLinkFailed':
            let failed = [{
                type: 'link',
                link: action.payload.link,
                logoLink: './images/failedLogo.png',
                name: action.payload.name
            }, ...state]
            localStorage.setItem('linkList', JSON.stringify(failed))
            return failed
        case 'loadLinkInit': 
            return [...action.payload]
        default:
            return state
    }
}