import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin-bottom: 3rem;
  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    text-align: center;
    list-style: none;
    align-items: center;
  }
  li {
    transform: rotate(-2deg);
    order: 1;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/">LOGO</Link>
        </li>
        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>
        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
