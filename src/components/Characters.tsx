import React, { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Theme from "../styles/Theme";

import Character from "./Character";

const Form = styled.form`
  margin: 0 auto;
  max-width: 30em;

  textarea {
    margin: 0 0 20px 0;
    padding: 0;
    height: 3rem;
    width: 100%;

    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;

    color: white;
    font-size: ${Theme.FONT_SIZE_TEXT_DEFAULT};

    resize: none;
    outline: none;
    transition: all 0.3s;

    &:focus {
      border-bottom: 1px solid ${Theme.COLOUR_BRAND_YELLOW};
      box-shadow: 0 1px 0 0 ${Theme.COLOUR_BRAND_YELLOW};
    }
  }
`;

const fetchHeros = async (key: string, name: string) => {
  const res = await fetch(`https://swapi.dev/api/people?search=${name}`);
  return res.json();
};

const Characters = () => {
  const [name, setName] = useState("");

  const { data, status, isLoading, error } = useQuery(
    ["people", name],
    fetchHeros
  );

  const onNameChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
  };

  return (
    <Form>
      <textarea
        rows={1}
        cols={1}
        placeholder="Search your character"
        value={name}
        onChange={onNameChange}
      />

      {isLoading && (
        <div style={{ color: "white" }}>Loading Star Wars characters</div>
      )}
      {error && (
        <div style={{ color: "white" }}>Error loading Star Wars characters</div>
      )}

      {status === "success" && (
        <div>
          {data?.results.map((person: any, i: number) => (
            <Character key={i} person={person} />
          ))}
        </div>
      )}
    </Form>
  );
};

export default Characters;
