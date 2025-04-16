import React, { useState } from 'react';
import { CHECKBOXDATA } from './CHECKBOXDATA';

type CheckboxItem = {
  id: string;
  name: string;
  checked: boolean;
  children?: CheckboxItem[];
};

// Recursive function to update checkbox state
const updateCheckedStatus = (
  data: CheckboxItem[],
  id: string | null,
  checked: boolean
): CheckboxItem[] => {
  return data.map(item => {
    if (item.id === id) {
      return {
        ...item,
        checked,
        children: item.children ? updateCheckedStatus(item.children, null, checked) : [],
      };
    }

    return {
      ...item,
      children: item.children ? updateCheckedStatus(item.children, id, checked) : [],
    };
  });
};

const renderCheckBox = (
  data: CheckboxItem[],
  handleCheck: (id: string, checked: boolean) => void
): JSX.Element => {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            id={item.id}
            checked={item.checked}
            onChange={e => handleCheck(item.id, e.target.checked)}
          />
          <label htmlFor={item.id}>{item.name}</label>
          {item.children && item.children.length > 0 && (
            <div style={{ paddingLeft: '20px' }}>
              {renderCheckBox(item.children, handleCheck)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const NestedCheckBox: React.FC = () => {
  const [checkBoxData, setCheckBoxData] = useState<CheckboxItem[]>(CHECKBOXDATA);

  const handleCheck = (id: string, checked: boolean) => {
    const updatedData = updateCheckedStatus(checkBoxData, id, checked);
    setCheckBoxData(updatedData);
  };

  return <div>{renderCheckBox(checkBoxData, handleCheck)}</div>;
};

export default NestedCheckBox;
