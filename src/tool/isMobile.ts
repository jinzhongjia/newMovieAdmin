import { mobileWidth } from '@/tool/config'

const checkMobileMode = () => {
    return document.body.clientWidth <= mobileWidth
}

export { checkMobileMode }
