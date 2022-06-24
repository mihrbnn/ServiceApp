import React from "react";

const TypeEightParser = ({ item, value, onChange,error }) => {
  return (
      <div className="form-check px-4">
        <div class="mb-3 my-4">
          <textarea 
            onChange={(event) => onChange(item.id, event.target.value)}
            value={value}
            className={`form-control ${error && 'border-danger'}`}
            placeholder="Aklına gelen başka önemli detay var mı?"
          ></textarea>
        </div>
      </div>
  );
};

export default TypeEightParser;
