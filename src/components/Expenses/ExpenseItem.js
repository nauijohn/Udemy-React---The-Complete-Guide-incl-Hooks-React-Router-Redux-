import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

export default function ExpenseItem(props) {
  const { date, amount, title } = props;
  const [currentTitle, setTitle] = useState(title);
  const clickHandler = () => setTitle('Updated!');
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{currentTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
