import React, { useState } from "react";
import styled from "styled-components";

function Home() {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const n = input;
    // finding the nth fibonacci
    const z = fibonacci(n);
    const str = toString(z);
    setOutput(str);
  };

  // Converting array to another array

  const fibonacci = (n) => {
    var arr = [[0], [1]];
    for (var i = 2; i <= n; i++) {
      arr.push(add(arr[i - 1], arr[i - 2]));
    }
    return arr[n];
  };
  const convert = (arr, length) => {
    for (let i = 0; i < length; i++) {
      if (arr[i] === undefined) {
        arr[i] = 0;
      }
    }
    return arr;
  };

  const add = (arr1, arr2) => {
    if (arr1.length > arr2.length) {
      arr2 = convert(arr2, arr1.length);
    } else if (arr1.length < arr2.length) {
      arr1 = convert(arr1, arr2.length);
    }
    const sum = [];
    let transfer = 0;

    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] + arr2[i] + transfer < 10) {
        sum[i] = arr1[i] + arr2[i] + transfer;
        transfer = 0;
      } else {
        sum[i] = (arr1[i] + arr2[i] + transfer) % 10;
        transfer = 1;
      }
    }
    if (transfer) {
      sum.push(transfer);
    }
    return sum;
  };

  const toString = (arr) => {
    var str = "";
    for (let i = arr.length - 1; i >= 0; i--) {
      str = str + arr[i];
    }
    return str;
  };

  return (
    <Container>
      <h2>Fibonacci Calculator</h2>

      <form>
        <Number>
          <p>Enter a Number</p>
          <input type="number" onChange={(e) => setInput(e.target.value)} />
        </Number>
        <button onClick={(e) => submitHandler(e)}>Generate</button>
      </form>
      {output !== null ? (
        <Series>
          <h2>Results:</h2>
          <p>{output}</p>
        </Series>
      ) : (
        ""
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 150px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #dddd;
  box-shadow: 3px 3px 35px rgba(0, 0, 0, 0.5);
  h2 {
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
      cursor: pointer;
      border: none;
      padding: 5px;
      font-size: 20px;
      color: #ffff;
      background-color: #23a58f;
      border-radius: 3px;
      margin: 0 10px;
    }
  }
`;

const Number = styled.div`
  padding: 10px;
  input {
    width: 100%;
    height: 25px;
    margin: 10px 0;
  }
`;

const Series = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  padding: 10px;
  overflow: hidden;
  p {
    word-break: break-all;
  }
`;

export default Home;
