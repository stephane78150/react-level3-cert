export type SmartDialogDesc = Readonly<{
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?:  React.ReactNode;    
    onClose: () => void;    
    isModal: boolean;
}>

export type DialogApi = {
    openDialog: (dialog: SmartDialogDesc) => void;
    closeDialog: () => void;
}
