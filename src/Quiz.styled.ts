import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 40px auto;
  padding: 2rem;
  border: 10px solid #4f947b;
  border-radius: 8px;
  background-color: white;
`;

export const Wrapper = styled.div`
  width: 600px;
`;

export const QuestionHeader = styled.h2`
  margin: 0;
  text-align: left;
  font-size: 1.5rem;
  color: #4f947b;
`;

export const QuestionText = styled.h3`
  font-size: 1.2rem;
  font-weight: normal;
  color: black;
  text-align: left;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const AnswersList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
  width: 100%;
`;

export const AnswerItem = styled.li<{ correct?: boolean; selected?: boolean }>`
  background-color: ${({ correct, selected }) =>
    selected ? (correct ? 'green' : 'red') : 'lightgrey'};
  border: 1px solid
    ${({ correct, selected }) =>
      selected ? (correct ? '#c3e6cb' : '#f5c6cb') : '#ddd'};
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? '' : '#f1f1f1')};
  }
`;

export const Results = styled.div`
  text-align: center;
`;

export const ResultsHeader = styled.h2`
  margin: 0;
  text-align: left;
  font-size: 1.5rem;
  color: #4f947b;
`;

export const ResultsText = styled.h3`
  font-size: 1.2rem;
  font-weight: normal;
  color: black;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const RestartButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4f947b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: green;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const NextButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #4f947b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 0.5rem;

  &:hover {
    background-color: #218838;
  }

  &:disabled {
    background-color: #8ddec7;
    cursor: not-allowed;
  }
`;

export const IndicatorsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 0.3rem;
`;

export const Indicator = styled.div<{ correct: boolean | null }>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
  background-color: ${({ correct }) =>
    correct === null ? 'lightgrey' : correct ? 'green' : 'red'};
  color: ${({ correct }) => (correct === null ? 'transparent' : 'white')};
  border: 1px solid
    ${({ correct }) =>
      correct === null ? '#ccc' : correct ? '#c3e6cb' : '#f5c6cb'};
`;
