import styled from "@emotion/styled";

export const Title = styled.h2`
color: black;
font-size: 24px;
font-weight: 700;
line-height: 2;
letter-spacing: 0.06em;
text-align: center;
margin-bottom: 30px;
`;

export const BtnWraper = styled.div`
display: flex;
margin-bottom: 30px;
`;

export const Btn = styled.button`
padding: 10px 32px;
color: black;
background-color: #ffffffff;
font-weight: 700;
font-size: 16px;
line-height: 1.88;
letter-spacing: 0.06em;
border: none;
border-radius: 4px;
border: 1px solid rgba(238, 238, 238, 1);
box-shadow: 0px 4px 4px $button-shadow;
min-width: 150px;
max-height: 50 px;



&:not(:last-child) {
    margin-right: 20px;
`;

export const Text = styled.p`
color: black;
font-size: 18px;
font-weight: 500;
line-height: 2;
letter-spacing: 0.06em;
`;


export const Value = styled.span`
color: black;
font-size: 18px;
font-weight: 500;
line-height: 2;
letter-spacing: 0.06em;
`;


