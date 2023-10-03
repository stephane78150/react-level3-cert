import React from "react";
import { styled } from 'styled-components';
import { SmartDialogDesc } from "../types";
import classNames from 'classnames'




const StyledDiv = styled.div<{$isModal: boolean}>`
    position: ${props => props.$isModal ? 'block' : 'absolute'};
    top: 35%;    
    left: ${props => props.$isModal ? 'auto' : '50%'};
    margin-left: ${props => props.$isModal ? 'auto' : '-15em'};
    margin-right: ${props => props.$isModal ? 'auto' : 'inherit'};
    width: 30em;
`;

export const DialogCard: React.FC<SmartDialogDesc> = ({header, footer, body, onClose, isModal}) => {
 return (<StyledDiv className={classNames("card ", {'border-danger': isModal, 'border-primary': !isModal})} $isModal={isModal}>
    <div className="card-header d-flex justify-content-stretch">
        <div className="flex-grow-1">{header}</div>                
        <button type="button" className="btn mr-3" onClick={onClose}>X</button>                
    </div>
    <div className="card-body">{body}</div>
    <div className="card-footer">{footer}</div>
    </StyledDiv>);
}