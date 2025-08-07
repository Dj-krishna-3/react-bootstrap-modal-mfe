import React, { useState } from "react";
import TodoApp from "./TodoApp";

export interface FullDetailsProps {
  callBack: (id: number) => string;
}

const FullDetails = ({ callBack }: FullDetailsProps) => {
  return (
    <div>
      <h1>
        {callBack(123)}
      </h1>
      <TodoApp />
    </div>
  );
};

export default FullDetails;
