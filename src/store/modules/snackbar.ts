import { defineStore } from 'pinia';

interface snackStore{
    msg: string,
    color: string,
    icon: string,
    visible?: boolean,
    showClose?: boolean,
    timeout?: number,
}

export const userSnackbarStore = defineStore('userSnackbarStore', {
    state: (): snackStore => ({
        msg: '',
        color: '',
        icon: '',
        visible: false,
        showClose: true,
        timeout: 2000,
    }),
    actions: {
        OPEN_SNACKBAR(options: snackStore) {
            this.msg = options.msg
            this.color = options.color
            this.icon = options.icon
            this.visible = true
        },
        CLOSE_SNACKBAR() {
            this.visible = false
        },
        setShowClose(isShow: boolean) {
            this.showClose = isShow
        },
        setTimeout(timeout: number) {
            this.timeout = timeout
        },
        openSnackbar(options: snackStore) {
            const timeout = this.timeout
            this.OPEN_SNACKBAR({
                msg: options.msg,
                color: options.color,
                icon: options.icon,
            })
            setTimeout(() => {
                this.CLOSE_SNACKBAR()
            }, timeout)
          },
    },
})
