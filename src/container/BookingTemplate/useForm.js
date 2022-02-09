import { useState } from "react";
const initialFValues = {
  theater: "",
  address: "",
  datetime: "",
  hours: "",
  theaternumber: "",
};

export function useForm() {
  const [selectedValues, setSelectedValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const changeTheater = (name, value) => {
    switch (name) {
      case "theater":
        setSelectedValues({
          theater: value,
          address: "",
          datetime: "",
          hours: "",
          theaternumber: "",
        });
        break;
      case "address": {
        setSelectedValues({
          ...selectedValues,
          address: value,
          datetime: "",
          hours: "",
          theaternumber: "",
        });
        break;
      }
      case "datetime": {
        setSelectedValues({
          ...selectedValues,
          datetime: value,
          hours: "",
          theaternumber: "",
        });
        break;
      }
      case "hours": {
        setSelectedValues({
          ...selectedValues,
          hours: value,
          theaternumber: "",
        });
        break;
      }
      default:
        setSelectedValues({
          ...selectedValues,
          theaternumber: value,
        });
        break;
    }
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    changeTheater(name, value);
  };

  const resetForm = () => {
    setSelectedValues(initialFValues);
    setErrors({});
  };

  return {
    selectedValues,
    errors,
    handleSelectChange,
    resetForm,
  };
}
