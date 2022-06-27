import React from "react";
import { Title } from './Section.styled';
import { PropTypes } from 'prop-types';

const Section = ({ title }) => {
   return (
    <>
    <Section>
    <Title>{title}</Title>
    </Section>
    </>
   )
}

export default Section


Section.prototype = {
    title: PropTypes.string,

    }
