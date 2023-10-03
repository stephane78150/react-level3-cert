import React, { useCallback } from "react";
import { useDialogApi } from "./smart-dialog";
import styled from "styled-components";


const LoremIpsum = "Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit Lorem ipsum lorem ipsum dolore sit ";

const StyledImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    border: solid 1px black
`;

export const Demo: React.FC = () => {    
    const {openDialog, closeDialog} = useDialogApi();    
    const openMyModal = useCallback(() => {
        openDialog({
            isModal: true, 
            onClose: () => alert('Closing modal dialog'), 
            header: <h5>This is a <em>modal</em> dialog</h5>, 
            footer: <small>probably some buttons here</small>, 
            body: <p>{LoremIpsum}</p>  
        })
    }, [openDialog]);
    const openMyModeless = useCallback(() => {
        openDialog({
            isModal: false, 
            onClose: () => alert('Closing modeless dialog'), 
            header: <h5>This is a <em>modeless</em> dialog</h5>, 
            footer: <small>in a real app, we would put some buttons here like 'Yes', 'Cancel'</small>, 
            body: <StyledImg src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Route66_sign.jpg" alt="Some content here"/>
        })
    }, [openDialog]);

    return (
    <>
        <div className="row mb-3">
            <div className="col-4">
                <button type="button" className="btn btn-lg btn-secondary" onClick={closeDialog}>Try to close dialog</button>
            </div>
        </div>        
        <div className="row">
            <div className="col-4">
                <button type="button" className="btn btn-primary" onClick={openMyModal}>Open modal dialog</button>
            </div>
            <div className="col-4">
                <button type="button" className="btn btn-primary" onClick={openMyModeless}>Open modeless dialog</button>
            </div>
        </div>
    </>);
}