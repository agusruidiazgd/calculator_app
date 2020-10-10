import React,{useState} from 'react';
import { render } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import {handleButtonPress} from '../Helpers/Helpers';

describe('Tests para la funcion handleButton', () => {
    beforeEach(() => {
        const [data, setData] = useState(0);
        const [memory, setMemory] = useState(null); 
        const [operator, setOperator] = useState(null);
    })
    it('Deberia retornar 2', () => {
      expect(handleButtonPress("+", "1", setData, "1", setMemory, null, setOperator)).toBe("2")
    })
})

