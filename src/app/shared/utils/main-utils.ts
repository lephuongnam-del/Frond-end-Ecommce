
export class JSUTILS {
    public static commonHandleError(error:any, msg:any) {
        switch (error.status) {
            case 400:
                msg.error(error.error.msg);
                break;

            default:
                msg.error('unknow error');
                
                break;
        }
    }
}