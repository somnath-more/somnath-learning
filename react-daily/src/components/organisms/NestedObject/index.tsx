import { useState } from 'react';
import { USERDATA, UserInformation } from './USERDATA';

const NestedObject = () => {
  const [data, setData] = useState(USERDATA);
  const [isChangingCountry, setIsChangingCountry] = useState(false);
  const [countryName, setCountryName] = useState('');
  const [currentIndex, setIndex] = useState<number | null>(null);

  const updateCountry = (index: number) => {
    const updatedData = [...data]; // Create a shallow copy of the data array
    updatedData[index] = {
      ...updatedData[index],
      address: {
        ...updatedData[index].address,
        country: countryName, // Update the country name for the specific index
      },
    };
    setData(updatedData); // Update the state with the modified data
    setIsChangingCountry(false); // Close the input field
    setCountryName(''); // Reset the country name input
    setIndex(null); // Reset the current index
    //  JUST WANT An  EXPLANTION ABOUTHOW IT WILL EXECUTE LINE BY LINE
    
  };

  return (
    <div className="nested-object">
      <h1>Nested Object</h1>
      <table style={{ width: '100%' }} className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              user:UserInformation,
              index: number
            ) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.address.state}</td>
                {/* Country */}
                <td
                  onClick={() => {
                    setIsChangingCountry(true);
                    setIndex(index);
                    setCountryName(user.address.country); // Set initial value
                  }}
                >
                  {isChangingCountry && currentIndex === index ? (
                    <input
                      type="text"
                      value={countryName}
                      onChange={(e) => setCountryName(e.target.value)}
                      onBlur={() => updateCountry(index)}
                      autoFocus
                    />
                  ) : (
                    user.address.country
                  )}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default NestedObject;
