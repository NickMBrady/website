import 'react';
import styled from 'styled-components';

export const BubbleDiv = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Allow elements to wrap like text */
  row-gap: 0px; /* Adjust the spacing between rows */
  padding: 20px 0; /* Adjust padding to remove vertical space */

  @media (max-width: 1000px) {
    padding-bottom: 15px;
  }
  @media (max-width: 800px) {
    padding: 5px 0;
    gap: 5px;
  }
`;

export const KeywordBubble = styled.span`
  background-color: #5d708330;
  color: #a2a2a2;
  padding: 10px 30px; /* Adjust padding to remove vertical space */
  border-radius: 50px;
  font-size: 12px;
  white-space: nowrap; /* Prevent text from wrapping */
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 2;
  align-self: flex-start; /* Prevent flex item from stretching */
  margin-top: 10px; /* Add margin to separate bubbles */

  @media (max-width: 1000px) {
    line-height: 1;
  }
  @media (max-width: 800px) {
    line-height: 1;
  }
`;

export const GithubBubble = styled.span`
  background-color: #5d708330;
  color: #dfdfdf;
  padding: 10px 30px; /* Adjust padding to remove vertical space */
  border-radius: 50px;
  font-size: 12px;
  white-space: nowrap; /* Prevent text from wrapping */
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 2;
  align-self: flex-start; /* Prevent flex item from stretching */
  margin-top: 10px; /* Add margin to separate bubbles */
  outline: 2px solid white; /* Add white outline */
  cursor: pointer;
  @media (max-width: 1000px) {
    line-height: 1;
  }
  @media (max-width: 800px) {
    line-height: 1;
  }
`;