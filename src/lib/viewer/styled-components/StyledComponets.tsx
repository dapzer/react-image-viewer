import styled from 'styled-components';

export const ImageBody = styled.div`
    &:hover{
        cursor: pointer;
    }
`;

export const ViewerFrame = styled.div`
    position: fixed;
    z-index: 1000;
    padding-top: 10px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        padding: 0px 20px;
    }

    span{
        cursor: pointer;
        position: absolute;
        z-index: 1001;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        margin: 20px;
        width: 40px;
        height: 40px;
        background-color: #000;
        border-radius: 50%;
        animation-name: zoom;
        animation-duration: 0.5s;
    }

    img{
        all: unset;
        width: 100%;
        max-width: 1250px;
        height: 100%;
        max-height: 90vh;
        animation-name: zoom;
        animation-duration: 0.5s;
    }

    @keyframes zoom {
        from {transform:scale(0)} 
        to {transform:scale(1)}
    }
`;