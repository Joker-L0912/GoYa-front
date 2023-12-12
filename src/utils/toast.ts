import { Id, toast } from 'vue3-toastify';
import { type ToastContainerOptions } from 'vue3-toastify';
import { type UpdateOptions } from 'vue3-toastify'
class Toast {

    static success(msg: string, options?: ToastContainerOptions): Id {
        const id = toast.success(msg, options)
        return id
    }
    
    static error(msg: string, options?: ToastContainerOptions): Id {
        const id = toast.error(msg, options)
        return id
    }

    static warn(msg: string, options?: ToastContainerOptions): Id {
        const id = toast.warn(msg, options)
        return id
    }

    static info(msg: string, options?: ToastContainerOptions): Id {
        const id = toast.info(msg, options)
        return id
    }
    static loading(msg: string, options?: ToastContainerOptions): Id {
        const id = toast.loading(msg, options)
        return id
    }
    static update(id: Id, options?: UpdateOptions): void {
        if (options) {
            options.transition = 'flip'
            toast.update(id, options)
            return
        } else {
            toast.update(id, { transition: 'flip' })
        }
    }
    static remove(id: Id): void {
        toast.remove(id)
    }
}

export default Toast