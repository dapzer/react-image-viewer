import React, { FC, ReactNode } from 'react'
import { CloseIcon } from './styled-components/Icon'
import { ImageBody, ViewerFrame } from './styled-components/StyledComponets'
import { useViewer } from "./useViewer"

interface ImageViewerProps{
  children: ReactNode;
}

export const ImageViewer: FC<ImageViewerProps> = (props) => {

    const { dontClose, closeViewer, show, showViewer } = useViewer()

    return (
        <>
            {
                (
                    <ImageBody onClick={showViewer}>
                        {props.children}
                    </ImageBody>
                )
            }

            {
                show && (
                    <ViewerFrame onClick={closeViewer}>
                        <span onClick={closeViewer}><CloseIcon /></span>
                        <div onClick={dontClose}>
                            {props.children}
                        </div>
                    </ViewerFrame>
                )
            }
        </>
    )
}