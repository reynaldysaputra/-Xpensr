import React from "react";
import AddForm from "../../components/add-form";
import TopFold from "../../components/top-fold/top-fold";
import "./add-expense.css";

const AddExpense: React.FC = () => {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
};

export default AddExpense;