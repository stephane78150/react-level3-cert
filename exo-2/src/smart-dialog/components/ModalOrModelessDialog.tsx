import { FC, useState } from "react"
import { DialogCard } from "./DialogCard";
import styled from "styled-components";
import { SmartDialogDesc } from "../types";

const Background = styled.div`   
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;  
`;


export const ModalOrModelessDialog: FC<SmartDialogDesc> = ({ isModal, ...otherProps }) => {
    const [isOpened] = useState(true);    

    if (!isOpened) {
        return null;
    }

    if (!isModal) {
        return (<DialogCard {...otherProps} isModal={false}/>);
    }

    return (
        <Background>
            <DialogCard {...otherProps} isModal={true} />
        </Background> 
    );
}

    