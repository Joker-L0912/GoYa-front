import { userSnackbarStore } from '@/store/modules/snackbar'

const snackbarStore = userSnackbarStore()
const MessageUtil = {
    alert(data: ApiResponseData<any>) {
        if (data.code === '00000') {
            this.success(data.message)
        } else {
            this.error(data.message)
        }
    },
    success(message: string) {
        snackbarStore.openSnackbar({
            msg: message,
            color: '#2ECC71',
            icon: 'success',
        })
    },
    error(message: string) {
        snackbarStore.openSnackbar({
            msg: message,
            color: '#E74C3C',
            icon: 'error',
        })
    },
}

export default MessageUtil
