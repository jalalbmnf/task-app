import Select from "react-select";

import { selectStyle } from "assets/styles/select";
import { cardSchema } from "data/cardSchema";
import { FC } from "react";

interface IProps {
  handleChange: any;
  setValue: any;
  value: any;
}

const CardFilter: FC<IProps> = ({ setValue, value, handleChange }) => {
  const cardId = Array.from(cardSchema, ({ cardId }) => {
    return { label: cardId, value: cardId };
  });

  const cardAccount = Array.from(cardSchema, ({ cardAccount }) => {
    return {
      label: cardAccount,
      value: cardAccount,
    };
  });

  const currency = Array.from(cardSchema, ({ currency }) => {
    return {
      label: currency,
      value: currency,
    };
  });

  const status = [
    { label: "Active", value: true },
    { label: "Blocked", value: false },
  ];

  return (
    <div className="flex justify-between gap-x-2">
      <Select
        placeholder="Choose card ID"
        styles={selectStyle}
        onChange={handleChange}
        options={cardId}
        name="cardId"
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
      <Select
        placeholder="Choose card account"
        styles={selectStyle}
        isSearchable={false}
        options={cardAccount}
        onChange={handleChange}
        name="cardAccount"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
      <Select
        placeholder="Choose currency"
        isSearchable={false}
        styles={selectStyle}
        options={currency}
        onChange={handleChange}
        name="currency"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
      <Select
        placeholder="Choose status"
        isSearchable={false}
        styles={selectStyle}
        options={status}
        onChange={handleChange}
        name="status"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
};

export default CardFilter;
