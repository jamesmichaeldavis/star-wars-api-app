import React from "react";
import styled from "styled-components";
import Theme from "../styles/Theme";

const CharacterWrap = styled.div`
  color: white;
  font-size: ${Theme.FONT_SIZE_TEXT_SM};
  text-align: left;
  text-transform: capitalize;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  h2 {
    color: #ffc500;
    font-weight: bold;
  }
`;

const Table = styled.table`
  width: 100%;
  background: #32363e;
  padding: 30px;
  border-radius: 30px;

  td {
    width: 50%;
  }
`;

const Character = ({ person }: any) => {
  return (
    <CharacterWrap>
      <Table>
        <thead>
          <tr>
            <th colSpan={2}>
              <h2>{person?.name}</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gender</td>
            <td>{person?.gender}</td>
          </tr>
          <tr>
            <td>Birth Year</td>
            <td>{person?.birth_year}</td>
          </tr>
          <tr>
            <td>Height</td>
            <td>{person?.height}</td>
          </tr>
          <tr>
            <td>Mass</td>
            <td>{person?.mass}</td>
          </tr>
          <tr>
            <td>Hair Colour</td>
            <td>{person?.hair_color}</td>
          </tr>
        </tbody>
      </Table>
    </CharacterWrap>
  );
};

export default Character;
