import React from "react";

const UrlForm = ({ index, data, onChange }) => {
  return (
    <div className="url-form">
      <input
        type="text"
        placeholder="Enter original URL"
        value={data.longUrl}
        onChange={(e) => onChange(index, "longUrl", e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Validity (minutes, optional)"
        value={data.validity}
        onChange={(e) => onChange(index, "validity", e.target.value)}
      />
      <input
        type="text"
        placeholder="Preferred shortcode (optional)"
        value={data.shortcode}
        onChange={(e) => onChange(index, "shortcode", e.target.value)}
      />
    </div>
  );
};

export default UrlForm;
